import {
  RequestService,
  SelectedLangService
} from "./chunk-NSTNSDCO.js";
import {
  BehaviorSubject,
  inject,
  map,
  ɵɵdefineInjectable
} from "./chunk-5J6FDBCJ.js";

// src/app/harmonia-universalis/services/hu-database.service.ts
var HuDatabaseService = class _HuDatabaseService {
  constructor() {
    this.request = inject(RequestService);
    this.lang = inject(SelectedLangService);
    this.biblioData$ = new BehaviorSubject(null);
    this.myLang = "%20.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22" + this.lang.selectedLang + "%22%2C%22en%22.%20%7D%0A%7D%0A";
  }
  sparqlBuilding(myLang) {
    let u = "https://database.factgrid.de/query/#%23biblio%0ASELECT%20DISTINCT%20%3Ftitle%20%3FtitleLabel%20%3Fauthor%20%3FauthorLabel%20%3Fdate%20%3Flocation%20%3FlocationLabel%20%3Fcountry%20%3FcountryLabel%0AWHERE%20%0A%7B%20VALUES%20%3Fc%20%7B%20wd%3AQ21925%20wd%3AQ11317%20%7D%0A%20%20%3Ftitle%20wdt%3AP2%20wd%3AQ20%3B%0A%20%20%20%20%20%20%20%20wdt%3AP243%20wd%3AQ172203%3B%0A%20%20%20%20%20%20%20%20wdt%3AP21%20%3Fauthor%3B%0A%20%20%20%20%20%20%20%20wdt%3AP222%20%3Fdate%3B%0A%20%20%20%20%20%20%20%20wdt%3AP241%20%3Flocation%20.%0A%20%20%3Fcountry%20%5Ewdt%3AP297%20%3Flocation%3B%0A%20%20%20%20%20%20%20%20%20%20wdt%3AP2%20%20%20%3Fc%20%20" + myLang;
    return u;
  }
  /* listFromSparql(res: any): any[] {
     if (res !== undefined && res.results !== undefined) {
       for (let i = 0; i < res.results.bindings.length; i++) {
         res.results.bindings[i]["author"].id = res.results.bindings[i]["author"].value.replace(
           "https://database.factgrid.de/entity/", "");
         res.results.bindings[i]["author"].label = res.results.bindings[i]["authorLabel"].value;
         res.results.bindings[i]["title"].id = res.results.bindings[i]["title"].value.replace(
           "https://database.factgrid.de/entity/", "");
         res.results.bindings[i]["title"].label = res.results.bindings[i]["titleLabel"].value;
         res.results.bindings[i]["location"].id = res.results.bindings[i]["location"].value.replace(
           "https://database.factgrid.de/entity/", "");
         res.results.bindings[i]["location"].label = res.results.bindings[i]["locationLabel"].value;
         res.results.bindings[i]["country"].id = res.results.bindings[i]["country"].value.replace(
           "https://database.factgrid.de/entity/", "");
         res.results.bindings[i]["country"].label = res.results.bindings[i]["countryLabel"].value;
         res.results.bindings[i]["date"].value = res.results.bindings[i]["date"].value.slice(0, 4);
       }
       return res.results.bindings;
     }
     return [];
   }
   */
  listFromSparql(res) {
    if (res?.results?.bindings) {
      const simplified = res.results.bindings.map((binding) => ({
        author: binding.author ? {
          id: binding.author.value.replace("https://database.factgrid.de/entity/", ""),
          label: binding.authorLabel?.value ?? ""
        } : void 0,
        title: binding.title ? {
          id: binding.title.value.replace("https://database.factgrid.de/entity/", ""),
          label: binding.titleLabel?.value ?? ""
        } : void 0,
        location: binding.location ? {
          id: binding.location.value.replace("https://database.factgrid.de/entity/", ""),
          label: binding.locationLabel?.value ?? ""
        } : void 0,
        country: binding.country ? {
          id: binding.country.value.replace("https://database.factgrid.de/entity/", ""),
          label: binding.countryLabel?.value ?? ""
        } : void 0,
        date: binding.date?.value ? { value: binding.date.value.slice(0, 4) } : { value: "" }
      }));
      res.results.bindings = [];
      return simplified;
    }
    return [];
  }
  // Cette méthode retourne l'observable
  databaseToDisplay(sparql) {
    return this.request.getList(sparql).pipe(map((res) => this.listFromSparql(res)));
  }
  // Cette méthode gère le cache : elle souscrit et alimente le BehaviorSubject
  loadBiblioData(sparql) {
    this.databaseToDisplay(sparql).subscribe({
      next: (data) => this.biblioData$.next(data),
      error: (err) => console.error("Erreur lors du chargement des donn\xE9es", err)
    });
  }
  // Observable pour accéder à la donnée en cache
  getBiblioData() {
    return this.biblioData$.asObservable();
  }
  newSparqlAdress(address) {
    const newPrefix = "https://database.factgrid.de/sparql?query=";
    let oldPrefix = "https://database.factgrid.de/query/#";
    if (address.includes("embed.html")) {
      oldPrefix = "https://database.factgrid.de/query/embed.html#";
    }
    if (address !== void 0)
      address = address.replace(oldPrefix, newPrefix);
    return address;
  }
  databaseToDownload(data) {
    let dataToDownload = [["author", "author.id", "title", "title.id", "location", "location.id", "country", "country.id", "date"]];
    for (let i = 0; i < data.length; i++) {
      dataToDownload[i + 1] = [
        data[i].author.label,
        data[i].author.id,
        data[i].title.label,
        data[i].title.id,
        data[i].location.label,
        data[i].location.id,
        data[i].country.label,
        data[i].country.id,
        data[i].date.value
      ];
    }
    return dataToDownload;
  }
  // hu-database.service.ts
  initBiblioData(sparql) {
    if (!this.biblioData$.getValue() || this.biblioData$.getValue().length === 0) {
      this.loadBiblioData(sparql);
    }
  }
  static {
    this.\u0275fac = function HuDatabaseService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HuDatabaseService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HuDatabaseService, factory: _HuDatabaseService.\u0275fac, providedIn: "root" });
  }
};

export {
  HuDatabaseService
};
//# sourceMappingURL=chunk-W7ZT52FJ.js.map
