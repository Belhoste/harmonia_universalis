// src/app/services/prosopo-database.service.ts
import { Injectable, inject } from '@angular/core';
import { RequestService } from '../services/request.service';
import { map, tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { SelectedLangService } from '../selected-lang.service';

export interface Prosopo {
  person: { id: string; label: string; descriptio: string } | undefined;
  name: { id: string; label: string } | undefined;
  society: { id: string; label: string } | undefined;
}

@Injectable({ providedIn: 'root' })
export class ProsopoDatabaseService {

 private request = inject(RequestService);
 private lang = inject(SelectedLangService);

  private prosopoData$ = new BehaviorSubject<any>(null);

  myLang: string = "%20.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22" + this.lang.selectedLang + "%22%2C%22en%22.%20%7D%0A%7D%0A";

  //  this.request.getQidsList('haswbstatement:P131=Q99677+haswbstatement:P2=Q7');

  sparqlBuilding(myLang: string): string {
    let u = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%20%3Fname%20%3FnameLabel%20%3Fsociety%20%3FsocietyLabel%20%20" +
      "WHERE%20%7B%20%3Fitem%20wdt%3AP131%20wd%3AQ99677%3B%20wdt%3AP2%20wd%3AQ7%3B%20wdt%3AP247%20%3Fname%20%20%20OPTIONAL%20%7B%20%3Fitem%20wdt%3AP91%20%3Fsociety%20.%20%3Fsociety%20wdt%3AP2%20wd%3AQ164221%20%7D" + myLang;
     console.log(u);
    return u;
  }

  listFromSparql(res: any): Prosopo[] {
    if (res?.results?.bindings) {
      const simplified = res.results.bindings.map(binding => ({
        person: binding.item
          ? {
            id: binding.item.value.replace("https://database.factgrid.de/entity/", ""),
            label: binding.itemLabel?.value ?? "",
            description: binding.itemDescription?.value ?? ""
          }
          : undefined,
        name: binding.item
          ? {
            id: binding.name.value.replace("https://database.factgrid.de/entity/", ""),
            label: binding.nameLabel?.value ?? ""
          }
          : undefined,
        society: binding.society
          ? {
            id: binding.society.value.replace("https://database.factgrid.de/entity/", ""),
            label: binding.societyLabel?.value ?? ""
          }
          : undefined
      }));
      res.results.bindings = [];
      // Fusionne les doublons ici
      return this.mergeDuplicatesByPersonId(simplified, '; ');
    }
    return [];
  }


  mergeDuplicatesByPersonId(list: Prosopo[], separator: string = '; '): Prosopo[] {
    const map = new Map<string, Prosopo>();

    for (const item of list) {
      const id = item.person?.id;
      if (!id) continue;

      if (!map.has(id)) {
        // Clone l'objet pour éviter de modifier l'original
        map.set(id, {
          ...item,
          name: item.name ? { ...item.name } : undefined
        });
      } else {
        const existing = map.get(id)!;
        // Fusion des name.id
        if (item.name?.id) {
          if (existing.name?.id) {
            existing.name.id += separator + item.name.id;
          } else {
            existing.name = { ...item.name };
          }
        }
        // Fusion des name.label
        if (item.name?.label) {
          if (existing.name?.label) {
            existing.name.label += separator + item.name.label;
          } else {
            if (!existing.name) existing.name = { id: '', label: '' };
            existing.name.label = item.name.label;
          }
        }
      }
    }

    return Array.from(map.values());
  }


  // Cette méthode retourne  l'observable
  databaseToDisplay(sparql: string): Observable<any> {
    return this.request.getList(sparql).pipe(
      map(res => this.listFromSparql(res))
    );
  }

  // Cette méthode gère le cache : elle souscrit et alimente le BehaviorSubject
  loadProsopoData(sparql: string): void {
    this.databaseToDisplay(sparql).subscribe({
      next: data => {
        this.prosopoData$.next(data);
        console.log('Cache mis à jour prosopoData$', this.prosopoData$.getValue());
      },
      error: err => console.error('Erreur lors du chargement des données', err)
    });
  }




  // Observable pour accéder à la donnée en cache
  getProsopoData(): Observable<any> {
    return this.prosopoData$.asObservable();
  }

  newSparqlAdress(address: string): string {
    const newPrefix = "https://database.factgrid.de/sparql?query=";
    let oldPrefix = "https://database.factgrid.de/query/#";
    if (address.includes('embed.html')) { oldPrefix = "https://database.factgrid.de/query/embed.html#"; }
    if (address !== undefined) address = address.replace(oldPrefix, newPrefix);
    return address;
  }

  databaseToDownload(data: any[]): any[][] {
    let dataToDownload: any[][] = [["person.label", "person.id", "person.description", "name.label", "name.id", "society.label", "society.id"]];
    for (let i = 0; i < data.length; i++) {
      dataToDownload[i + 1] = [
        data[i].person.label, data[i].person.id, data[i].person.description,
        data[i].name.label, data[i].name.id,
        data[i].society.label, data[i].society.id,
      ];
    }
    return dataToDownload;
  }

  // proopo-database.service.ts

  initProsopoData(sparql: string): void {
    if (!this.prosopoData$.getValue() || this.prosopoData$.getValue().length === 0) {
      this.loadProsopoData(sparql);
    }
  }


}


