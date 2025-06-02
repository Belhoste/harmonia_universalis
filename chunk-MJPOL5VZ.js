import {
  RequestService,
  SelectedLangService
} from "./chunk-NSTNSDCO.js";
import {
  BehaviorSubject,
  __spreadProps,
  __spreadValues,
  inject,
  map,
  ɵɵdefineInjectable
} from "./chunk-5J6FDBCJ.js";

// src/app/prosopography/prosopo-database.service.ts
var ProsopoDatabaseService = class _ProsopoDatabaseService {
  constructor() {
    this.request = inject(RequestService);
    this.lang = inject(SelectedLangService);
    this.prosopoData$ = new BehaviorSubject(null);
    this.myLang = "%20.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22" + this.lang.selectedLang + "%22%2C%22en%22.%20%7D%0A%7D%0A";
  }
  //  this.request.getQidsList('haswbstatement:P131=Q99677+haswbstatement:P2=Q7');
  sparqlBuilding(myLang) {
    let u = "https://database.factgrid.de/query/#SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FitemDescription%20%20%3Fname%20%3FnameLabel%20%3Fsociety%20%3FsocietyLabel%20%20WHERE%20%7B%20%3Fitem%20wdt%3AP131%20wd%3AQ99677%3B%20wdt%3AP2%20wd%3AQ7%3B%20wdt%3AP247%20%3Fname%20%20%20OPTIONAL%20%7B%20%3Fitem%20wdt%3AP91%20%3Fsociety%20.%20%3Fsociety%20wdt%3AP2%20wd%3AQ164221%20%7D" + myLang;
    console.log(u);
    return u;
  }
  listFromSparql(res) {
    if (res?.results?.bindings) {
      const simplified = res.results.bindings.map((binding) => ({
        person: binding.item ? {
          id: binding.item.value.replace("https://database.factgrid.de/entity/", ""),
          label: binding.itemLabel?.value ?? "",
          description: binding.itemDescription?.value ?? ""
        } : void 0,
        name: binding.item ? {
          id: binding.name.value.replace("https://database.factgrid.de/entity/", ""),
          label: binding.nameLabel?.value ?? ""
        } : void 0,
        society: binding.society ? {
          id: binding.society.value.replace("https://database.factgrid.de/entity/", ""),
          label: binding.societyLabel?.value ?? ""
        } : void 0
      }));
      res.results.bindings = [];
      return this.mergeDuplicatesByPersonId(simplified, "; ");
    }
    return [];
  }
  mergeDuplicatesByPersonId(list, separator = "; ") {
    const map2 = /* @__PURE__ */ new Map();
    for (const item of list) {
      const id = item.person?.id;
      if (!id)
        continue;
      if (!map2.has(id)) {
        map2.set(id, __spreadProps(__spreadValues({}, item), {
          name: item.name ? __spreadValues({}, item.name) : void 0
        }));
      } else {
        const existing = map2.get(id);
        if (item.name?.id) {
          if (existing.name?.id) {
            existing.name.id += separator + item.name.id;
          } else {
            existing.name = __spreadValues({}, item.name);
          }
        }
        if (item.name?.label) {
          if (existing.name?.label) {
            existing.name.label += separator + item.name.label;
          } else {
            if (!existing.name)
              existing.name = { id: "", label: "" };
            existing.name.label = item.name.label;
          }
        }
      }
    }
    return Array.from(map2.values());
  }
  // Cette méthode retourne  l'observable
  databaseToDisplay(sparql) {
    return this.request.getList(sparql).pipe(map((res) => this.listFromSparql(res)));
  }
  // Cette méthode gère le cache : elle souscrit et alimente le BehaviorSubject
  loadProsopoData(sparql) {
    this.databaseToDisplay(sparql).subscribe({
      next: (data) => {
        this.prosopoData$.next(data);
        console.log("Cache mis \xE0 jour prosopoData$", this.prosopoData$.getValue());
      },
      error: (err) => console.error("Erreur lors du chargement des donn\xE9es", err)
    });
  }
  // Observable pour accéder à la donnée en cache
  getProsopoData() {
    return this.prosopoData$.asObservable();
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
    let dataToDownload = [["person.label", "person.id", "person.description", "name.label", "name.id", "society.label", "society.id"]];
    for (let i = 0; i < data.length; i++) {
      dataToDownload[i + 1] = [
        data[i].person.label,
        data[i].person.id,
        data[i].person.description,
        data[i].name.label,
        data[i].name.id,
        data[i].society.label,
        data[i].society.id
      ];
    }
    return dataToDownload;
  }
  // proopo-database.service.ts
  initProsopoData(sparql) {
    if (!this.prosopoData$.getValue() || this.prosopoData$.getValue().length === 0) {
      this.loadProsopoData(sparql);
    }
  }
  static {
    this.\u0275fac = function ProsopoDatabaseService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProsopoDatabaseService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProsopoDatabaseService, factory: _ProsopoDatabaseService.\u0275fac, providedIn: "root" });
  }
};

export {
  ProsopoDatabaseService
};
//# sourceMappingURL=chunk-MJPOL5VZ.js.map
