import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  catchError,
  expand,
  forkJoin,
  inject,
  map,
  of,
  reduce,
  ɵɵdefineInjectable
} from "./chunk-5J6FDBCJ.js";

// node_modules/file-saver-es/src/FileSaver.js
var _global = typeof window === "object" && window.window === window ? window : typeof self === "object" && self.self === self ? self : typeof global === "object" && global.global === global ? global : void 0;
function bom(blob, opts) {
  if (typeof opts === "undefined") opts = {
    autoBom: false
  };
  else if (typeof opts !== "object") {
    console.warn("Deprecated: Expected third argument to be a object");
    opts = {
      autoBom: !opts
    };
  }
  if (opts.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
    return new Blob([String.fromCharCode(65279), blob], {
      type: blob.type
    });
  }
  return blob;
}
function download(url, name, opts) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.responseType = "blob";
  xhr.onload = function() {
    saveAs(xhr.response, name, opts);
  };
  xhr.onerror = function() {
    console.error("could not download file");
  };
  xhr.send();
}
function corsEnabled(url) {
  var xhr = new XMLHttpRequest();
  xhr.open("HEAD", url, false);
  try {
    xhr.send();
  } catch (e) {
  }
  return xhr.status >= 200 && xhr.status <= 299;
}
function click(node) {
  try {
    node.dispatchEvent(new MouseEvent("click"));
  } catch (e) {
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
    node.dispatchEvent(evt);
  }
}
var isMacOSWebView = _global.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent);
var saveAs = _global.saveAs || // probably in some web worker
(typeof window !== "object" || window !== _global ? function saveAs2() {
} : "download" in HTMLAnchorElement.prototype && !isMacOSWebView ? function saveAs3(blob, name, opts) {
  var URL = _global.URL || _global.webkitURL;
  var a = document.createElement("a");
  name = name || blob.name || "download";
  a.download = name;
  a.rel = "noopener";
  if (typeof blob === "string") {
    a.href = blob;
    if (a.origin !== location.origin) {
      corsEnabled(a.href) ? download(blob, name, opts) : click(a, a.target = "_blank");
    } else {
      click(a);
    }
  } else {
    a.href = URL.createObjectURL(blob);
    setTimeout(function() {
      URL.revokeObjectURL(a.href);
    }, 4e4);
    setTimeout(function() {
      click(a);
    }, 0);
  }
} : "msSaveOrOpenBlob" in navigator ? function saveAs4(blob, name, opts) {
  name = name || blob.name || "download";
  if (typeof blob === "string") {
    if (corsEnabled(blob)) {
      download(blob, name, opts);
    } else {
      var a = document.createElement("a");
      a.href = blob;
      a.target = "_blank";
      setTimeout(function() {
        click(a);
      });
    }
  } else {
    navigator.msSaveOrOpenBlob(bom(blob, opts), name);
  }
} : function saveAs5(blob, name, opts, popup) {
  popup = popup || open("", "_blank");
  if (popup) {
    popup.document.title = popup.document.body.innerText = "downloading...";
  }
  if (typeof blob === "string") return download(blob, name, opts);
  var force = blob.type === "application/octet-stream";
  var isSafari = /constructor/i.test(_global.HTMLElement) || _global.safari;
  var isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((isChromeIOS || force && isSafari || isMacOSWebView) && typeof FileReader !== "undefined") {
    var reader = new FileReader();
    reader.onloadend = function() {
      var url2 = reader.result;
      url2 = isChromeIOS ? url2 : url2.replace(/^data:[^;]*;/, "data:attachment/file;");
      if (popup) popup.location.href = url2;
      else location = url2;
      popup = null;
    };
    reader.readAsDataURL(blob);
  } else {
    var URL = _global.URL || _global.webkitURL;
    var url = URL.createObjectURL(blob);
    if (popup) popup.location = url;
    else location.href = url;
    popup = null;
    setTimeout(function() {
      URL.revokeObjectURL(url);
    }, 4e4);
  }
});
_global.saveAs = saveAs.saveAs = saveAs;

// src/app/services/request.service.ts
var RequestService = class _RequestService {
  constructor() {
    this.http = inject(HttpClient);
    this.baseSearchURL = "https://database.factgrid.de//w/api.php?action=wbsearchentities&search=";
    this.baseGetURL = "https://database.factgrid.de//w/api.php?action=wbgetentities&ids=";
    this.searchUrlSuffix = "&language=en&uselang=fr&limit=50&format=json&origin=*";
    this.getUrlSuffix = "&format=json&origin=*";
  }
  /**
   * Récupère les propriétés via un tableau de listes (max 8).
   */
  requestProperties(propertiesLists) {
    const lists = [...propertiesLists];
    while (lists.length < 8)
      lists.push(void 0);
    const requests = lists.map((list) => list ? this.http.get(this.baseGetURL + list + this.getUrlSuffix).pipe(catchError(() => of(void 0))) : of(void 0));
    return forkJoin(requests);
  }
  /**
   * Récupère les items via un tableau de listes (max 8).
   */
  requestItems(itemsLists) {
    const lists = [...itemsLists];
    while (lists.length < 8)
      lists.push(void 0);
    const requests = lists.map((list) => list ? this.http.get(this.baseGetURL + list + this.getUrlSuffix).pipe(catchError(() => of(void 0))) : of(void 0));
    return forkJoin(requests);
  }
  searchItem(label, lang) {
    const params = new HttpParams().set("action", "wbsearchentities").set("search", label).set("language", lang).set("uselang", lang).set("limit", "50").set("format", "json").set("origin", "*");
    return this.http.get("https://database.factgrid.de//w/api.php", { params });
  }
  searchProperty(label, lang) {
    const params = new HttpParams().set("action", "wbsearchentities").set("type", "property").set("search", label).set("language", lang).set("uselang", lang).set("limit", "50").set("format", "json").set("origin", "*");
    return this.http.get("https://database.factgrid.de//w/api.php", { params });
  }
  getAsk(re) {
    return this.http.get(re).pipe(catchError(() => of(false)));
  }
  getItem(re) {
    return this.http.get(re).pipe(catchError(() => of(void 0)));
  }
  getList(sparql) {
    if (sparql !== void 0) {
      const params = new HttpParams().set("format", "json");
      return this.http.get(sparql, { params }).pipe(catchError(() => of([])));
    }
    return of([]);
  }
  downLoadList(sparql) {
    if (sparql !== void 0) {
      const headers = new HttpHeaders().set("Accept", "text/csv");
      const params = new HttpParams();
      this.http.get(sparql, { headers, responseType: "arraybuffer", params }).subscribe((response) => this.downLoadFile(response));
    }
  }
  getTranscript(id) {
    const params = new HttpParams().set("page", id).set("format", "json").set("prop", "text").set("formatversion", "2").set("origin", "*");
    return this.http.get("https://database.factgrid.de//w/api.php?action=parse", { params });
  }
  getItemTalkPageHtml(itemId) {
    const pageTitle = `Item_talk:${itemId}`;
    const params = new HttpParams().set("action", "query").set("format", "json").set("prop", "revisions").set("titles", pageTitle).set("rvprop", "content").set("origin", "*");
    const url = "https://database.factgrid.de/w/api.php";
    return this.http.get(url, { params }).pipe(catchError(() => of(void 0)));
  }
  getStat() {
    const params = new HttpParams().set("format", "json").set("meta", "siteinfo").set("siprop", "statistics").set("origin", "*");
    return this.http.get("https://database.factgrid.de//w/api.php?action=query", { params });
  }
  newSparqlAddress(address) {
    const newPrefix = "https://database.factgrid.de/sparql?query=";
    const oldPrefix = "https://database.factgrid.de/query/#";
    return address.replace(oldPrefix, newPrefix);
  }
  downLoadFile(data) {
    const blob = new Blob([data], { type: "text/csv" });
    saveAs(blob, "list.csv");
  }
  getExpandedUrl(url) {
    if (url !== void 0) {
      const headers = new HttpHeaders().set("Accept", "text/csv");
      const params = new HttpParams();
      this.http.get(url, { headers, responseType: "arraybuffer", params }).subscribe((response) => this.downLoadFile(response));
    }
  }
  getProjectList(re) {
    return this.http.get(re).pipe(catchError(() => of(false)));
  }
  getBackList(item, lang) {
    item = "Item:" + item;
    const prefix = `https://database.factgrid.de/w/api.php?`;
    const params1 = new HttpParams().set("action", "query").set("format", "json").set("prop", "entityterms").set("generator", "backlinks").set("formatversion", "2").set("wbetterms", "label").set("gbllimit", "500").set("gblnamespace", "120").set("uselang", lang).set("gbltitle", item).set("origin", "*");
    const params2 = params1.set("uselang", "en");
    const u1 = this.http.get(prefix, { params: params1 }).pipe(catchError(() => of(void 0)));
    const u2 = this.http.get(prefix, { params: params2 }).pipe(catchError(() => of(void 0)));
    return forkJoin([u1, u2]);
  }
  getQidsList(search) {
    const baseParams = new HttpParams().set("action", "query").set("list", "search").set("srsearch", search).set("format", "json").set("srlimit", "5000").set("origin", "*");
    const fetch = (sroffset) => {
      let params = baseParams;
      if (sroffset !== void 0) {
        params = params.set("sroffset", sroffset.toString());
      }
      return this.http.get("https://database.factgrid.de/w/api.php", { params });
    };
    return fetch().pipe(expand((response) => {
      if (response.continue && response.continue.sroffset !== void 0) {
        return fetch(response.continue.sroffset);
      }
      return of();
    }), map((response) => response.query?.search.map((item) => item.title) ?? []), reduce((acc, value) => acc.concat(value), []));
  }
  static {
    this.\u0275fac = function RequestService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RequestService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RequestService, factory: _RequestService.\u0275fac, providedIn: "root" });
  }
};

// src/app/selected-lang.service.ts
var SelectedLangService = class _SelectedLangService {
  constructor() {
    this.selectedLang = localStorage["selectedLang"] === void 0 ? "en" : localStorage["selectedLang"];
  }
  formerVisitsTitle(u) {
    if (this.selectedLang === "de") {
      u = "Sie haben besucht:";
    }
    ;
    if (this.selectedLang === "fr") {
      u = "vous avez visit\xE9 :";
    }
    ;
    if (this.selectedLang === "es") {
      u = "has visitado :";
    }
    ;
    if (this.selectedLang === "it") {
      u = "hai visitato :";
    }
    ;
    return u;
  }
  subtitle(u) {
    if (this.selectedLang === "de") {
      u = "eine Databank f\xFCr Historiker*innen";
    }
    if (this.selectedLang === "fr") {
      u = "une base de donn\xE9es pour historien.nes";
    }
    if (this.selectedLang === "es") {
      u = "una base de datos para historiadores";
    }
    if (this.selectedLang === "it") {
      u = "un database per gli storici";
    }
    return u;
  }
  advanced_search(u) {
    if (this.selectedLang === "de") {
      u = "erweiterte Suche";
    }
    if (this.selectedLang === "fr") {
      u = "recherche avanc\xE9e";
    }
    if (this.selectedLang === "es") {
      u = "b\xFAsqueda avanzada";
    }
    if (this.selectedLang === "it") {
      u = "ricerca avanzata";
    }
    return u;
  }
  projects(u) {
    if (this.selectedLang === "de") {
      u = "Forschungsprojekten";
    }
    if (this.selectedLang === "fr") {
      u = "projets de recherche";
    }
    if (this.selectedLang === "es") {
      u = "proyectos de investigaci\xF3n";
    }
    if (this.selectedLang === "it") {
      u = "progetti di ricerca";
    }
    return u;
  }
  fields(u) {
    if (this.selectedLang === "de") {
      u = "Forschungsfelder";
    }
    if (this.selectedLang === "fr") {
      u = "domaines de recherche";
    }
    if (this.selectedLang === "es") {
      u = "campos de investigaci\xF3n";
    }
    if (this.selectedLang === "it") {
      u = "aree di ricerca";
    }
    return u;
  }
  biblioHU(u) {
    if (this.selectedLang === "de") {
      u = "Bibliografie Harmonia Universalis";
    }
    if (this.selectedLang === "fr") {
      u = "Bibliographie Harmonia Universalis";
    }
    if (this.selectedLang === "es") {
      u = "Bibliograf\xEDa Harmonia Universalis";
    }
    if (this.selectedLang === "it") {
      u = "Bibliografia Harmonia Universalis";
    }
    return u;
  }
  authorHeader(u) {
    if (this.selectedLang === "de") {
      u = "Autor";
    }
    ;
    if (this.selectedLang === "fr") {
      u = "Auteur";
    }
    ;
    if (this.selectedLang === "es") {
      u = "Autor";
    }
    ;
    if (this.selectedLang === "hu") {
      u = "Szerz\u0151";
    }
    ;
    if (this.selectedLang === "it") {
      u = "Autore";
    }
    ;
    return u;
  }
  titleHeader(u) {
    if (this.selectedLang === "de") {
      u = "Titel";
    }
    ;
    if (this.selectedLang === "fr") {
      u = "Titre";
    }
    ;
    if (this.selectedLang === "es") {
      u = "T\xEDtulo";
    }
    ;
    if (this.selectedLang === "hu") {
      u = "C\xEDm";
    }
    ;
    if (this.selectedLang === "it") {
      u = "Titolo";
    }
    ;
    return u;
  }
  locationHeader(u) {
    if (this.selectedLang === "de") {
      u = "Ort";
    }
    ;
    if (this.selectedLang === "fr") {
      u = "Lieu";
    }
    ;
    if (this.selectedLang === "es") {
      u = "Lugar";
    }
    ;
    if (this.selectedLang === "hu") {
      u = "K\xF6zz\xE9t\xE9tel helye";
    }
    ;
    if (this.selectedLang === "it") {
      u = "Luogo";
    }
    ;
    return u;
  }
  dateHeader(u) {
    if (this.selectedLang === "de") {
      u = "Datum";
    }
    ;
    if (this.selectedLang === "fr") {
      u = "Date";
    }
    ;
    if (this.selectedLang === "es") {
      u = "Fecha";
    }
    ;
    if (this.selectedLang === "hu") {
      u = "D\xE1tuma";
    }
    ;
    if (this.selectedLang === "it") {
      u = "Data";
    }
    ;
    return u;
  }
  newSearch(u) {
    if (this.selectedLang === "de") {
      u = "neue Suche";
    }
    ;
    if (this.selectedLang === "fr") {
      u = "nouvelle recherche";
    }
    ;
    if (this.selectedLang === "es") {
      u = "nueva b\xFAsqueda";
    }
    ;
    if (this.selectedLang === "hu") {
      u = "\xFAj keres\xE9s";
    }
    ;
    if (this.selectedLang === "it") {
      u = "nuova ricerca";
    }
    ;
    return u;
  }
  linkedPagesTitle(u) {
    if (this.selectedLang === "de") {
      u = "verlinkte Seiten";
    }
    ;
    if (this.selectedLang === "fr") {
      u = "pages li\xE9es";
    }
    ;
    if (this.selectedLang === "es") {
      u = "p\xE1ginas enlazadas";
    }
    ;
    if (this.selectedLang === "hu") {
      u = "kapcsol\xF3d\xF3 oldalak";
    }
    ;
    if (this.selectedLang === "it") {
      u = "pagine collegate";
    }
    ;
    return u;
  }
  mainPage(u) {
    if (this.selectedLang === "de") {
      u = "HauptSeite";
    }
    ;
    if (this.selectedLang === "fr") {
      u = "page principale";
    }
    ;
    if (this.selectedLang === "es") {
      u = "p\xE1gina principal";
    }
    ;
    if (this.selectedLang === "hu") {
      u = "f\u0151oldal";
    }
    ;
    if (this.selectedLang === "it") {
      u = "pagina principale";
    }
    ;
    return u;
  }
  factGridQuery(u) {
    if (this.selectedLang === "de") {
      u = "FactGrid Abfrage";
    }
    ;
    if (this.selectedLang === "fr") {
      u = "Requ\xEAte FactGrid";
    }
    ;
    if (this.selectedLang === "es") {
      u = "Consulta FactGrid";
    }
    ;
    if (this.selectedLang === "hu") {
      u = "FactGrid lek\xE9rdez\xE9s";
    }
    ;
    if (this.selectedLang === "it") {
      u = "Interrogazione FactGrid";
    }
    ;
    return u;
  }
  externalLinksTitle(u) {
    if (this.selectedLang === "de") {
      u = "Externe Links";
    }
    ;
    if (this.selectedLang === "fr") {
      u = "Liens externes";
    }
    ;
    if (this.selectedLang === "es") {
      u = "Enlaces externos";
    }
    ;
    if (this.selectedLang === "hu") {
      u = "K\xFCls\u0151 hivatkoz\xE1sok";
    }
    ;
    if (this.selectedLang === "it") {
      u = "Collegamenti esterni";
    }
    ;
    return u;
  }
  clickToDisplay(u) {
    if (this.selectedLang === "de") {
      u = "Klicken Sie zum Anzeigen";
    }
    ;
    if (this.selectedLang === "fr") {
      u = "cliquez pour afficher";
    }
    ;
    if (this.selectedLang === "es") {
      u = "haga clic para mostrar";
    }
    ;
    if (this.selectedLang === "hu") {
      u = "kattintson a megtekint\xE9shezr";
    }
    ;
    if (this.selectedLang === "it") {
      u = "fare clic per visualizzare";
    }
    ;
    return u;
  }
  clickToDownload(u) {
    if (this.selectedLang === "de") {
      u = "Klicken Sie zum Download";
    }
    ;
    if (this.selectedLang === "fr") {
      u = "cliquez pour t\xE9l\xE9charger";
    }
    ;
    if (this.selectedLang === "es") {
      u = "haga clic para descargarlo";
    }
    ;
    if (this.selectedLang === "hu") {
      u = "kattintson a let\xF6lt\xE9shez";
    }
    ;
    if (this.selectedLang === "it") {
      u = "fare clic per scaricare";
    }
    ;
    return u;
  }
  stemma(u) {
    if (this.selectedLang === "de") {
      u = "Stemma_aufw\xE4rts";
    }
    ;
    if (this.selectedLang === "fr") {
      u = "Pr\xE9c\xE9dent_dans_le_stemma";
    }
    ;
    if (this.selectedLang === "es") {
      u = "Precedente_en_el_stemma";
    }
    ;
    if (this.selectedLang === "hu") {
      u = "Preceding_in_stemma";
    }
    ;
    if (this.selectedLang === "it") {
      u = "Precedente_in_stemma";
    }
    ;
    return u;
  }
  activity(u) {
    if (this.selectedLang === "en") {
      u = "Activity";
    }
    ;
    if (this.selectedLang === "de") {
      u = "Aktivit\xE4t";
    }
    ;
    if (this.selectedLang === "fr") {
      u = "Activit\xE9";
    }
    ;
    if (this.selectedLang === "es") {
      u = "Actividad";
    }
    ;
    if (this.selectedLang === "it") {
      u = "Attivit\xE0";
    }
    ;
    if (this.selectedLang === "hu") {
      u = "Aktivit\xE1ssal";
    }
    ;
    return u;
  }
  instancesListTitle(u) {
    if (this.selectedLang === "de") {
      u = "Instanzen (Limit: 200):";
    }
    ;
    if (this.selectedLang === "fr") {
      u = "Instances (limite: 200):";
    }
    ;
    if (this.selectedLang === "es") {
      u = "Entidades (limite: 200):";
    }
    ;
    if (this.selectedLang === "it") {
      u = "Entit\xE0 (limite: 200):";
    }
    ;
    if (this.selectedLang === "hu") {
      u = "Entit\xE1sok (korl\xE1t: 200):";
    }
    ;
    return u;
  }
  instancesListTitle_50(u) {
    if (this.selectedLang === "de") {
      u = "Instanzen (Limit: 50):";
    }
    ;
    if (this.selectedLang === "fr") {
      u = "Instances (limite: 50):";
    }
    ;
    if (this.selectedLang === "es") {
      u = "Entidades (limite: 50):";
    }
    ;
    if (this.selectedLang === "it") {
      u = "Entit\xE0 (limite: 50):";
    }
    ;
    if (this.selectedLang === "hu") {
      u = "Entit\xE1sok (korl\xE1t: 50):";
    }
    ;
    return u;
  }
  subclassesListTitle(u) {
    if (this.selectedLang === "de") {
      u = "Unterklassen:";
    }
    ;
    if (this.selectedLang === "fr") {
      u = "Sous-classes:";
    }
    ;
    if (this.selectedLang === "es") {
      u = "Subclases:";
    }
    ;
    if (this.selectedLang === "hu") {
      u = "Aloszt\xE1lyok:";
    }
    ;
    if (this.selectedLang === "it") {
      u = "Sottoclassi:";
    }
    ;
    return u;
  }
  classesListTitle(u) {
    if (this.selectedLang === "de") {
      u = "SuperKlassen:";
    }
    ;
    if (this.selectedLang === "fr") {
      u = "Superclasses:";
    }
    ;
    if (this.selectedLang === "es") {
      u = "Superclases:";
    }
    ;
    if (this.selectedLang === "it") {
      u = "Superclassi:";
    }
    ;
    if (this.selectedLang === "hu") {
      u = "Szuperoszt\xE1lyok:";
    }
    ;
    return u;
  }
  natureOfListTitle(u) {
    if (this.selectedLang === "de") {
      u = "Instanz von ";
    }
    ;
    if (this.selectedLang === "fr") {
      u = "Instance de ";
    }
    ;
    if (this.selectedLang === "es") {
      u = "Instancia de ";
    }
    ;
    if (this.selectedLang === "it") {
      u = "Istanza de ";
    }
    ;
    if (this.selectedLang === "hu") {
      u = "P\xE9ld\xE1nya a ";
    }
    ;
    return u;
  }
  subInfoTitle(u) {
    if (this.selectedLang === "de") {
      u = "Q-Item Information";
    }
    ;
    if (this.selectedLang === "fr") {
      u = "Information sur l'\xE9l\xE9ment";
    }
    ;
    if (this.selectedLang === "es") {
      u = "Informaci\xF3n sobre el elemento";
    }
    ;
    if (this.selectedLang === "it") {
      u = "Informazioni sull'elemento";
    }
    ;
    if (this.selectedLang === "hu") {
      u = "Az elemre vonatkoz\xF3 inform\xE1ci\xF3k";
    }
    ;
    return u;
  }
  prefix1(u) {
    if (this.selectedLang === "de") {
      u = "Klassenhierarchie: abh\xE4ngige Klasse von ";
    }
    ;
    if (this.selectedLang === "fr") {
      u = "hi\xE9rarchie des classes: classe d\xE9pendante de ";
    }
    ;
    if (this.selectedLang === "es") {
      u = "jerarqu\xEDa de clases: clase dependiente de ";
    }
    ;
    if (this.selectedLang === "it") {
      u = "gerarchia delle classe: classe dipendente da ";
    }
    ;
    if (this.selectedLang === "hu") {
      u = "oszt\xE1lyhierarchia: oszt\xE1ly f\xFCgg\u0151 ";
    }
    ;
    return u;
  }
  prefix2(u) {
    if (this.selectedLang === "de") {
      u = "Klassenhierarchie: Klasse mit";
    }
    ;
    if (this.selectedLang === "fr") {
      u = "hi\xE9rarchie des classes: classe dot\xE9e de ";
    }
    ;
    if (this.selectedLang === "es") {
      u = "jerarqu\xEDa de clases: clase con ";
    }
    ;
    if (this.selectedLang === "it") {
      u = "gerarchia delle classe: classe con ";
    }
    ;
    if (this.selectedLang === "hu") {
      u = "oszt\xE1lyhierarchia: oszt\xE1ly a ";
    }
    ;
    return u;
  }
  suffix1(u) {
    if (this.selectedLang === "de") {
      u = "Klassen:";
    }
    ;
    if (this.selectedLang === "fr") {
      u = "classes:";
    }
    ;
    if (this.selectedLang === "es") {
      u = "clases:";
    }
    ;
    if (this.selectedLang === "it") {
      u = "classi:";
    }
    ;
    if (this.selectedLang === "hu") {
      u = "oszt\xE1lyok:";
    }
    ;
    return u;
  }
  buildingTitle(u) {
    if (this.selectedLang === "de") {
      u = "Geb\xE4ude und Denkm\xE4ler:";
    }
    ;
    if (this.selectedLang === "fr") {
      u = "Edifices et monuments:";
    }
    ;
    if (this.selectedLang === "es") {
      u = "Edificios y monumentos:";
    }
    ;
    if (this.selectedLang === "it") {
      u = "Edifici e monumenti:";
    }
    ;
    if (this.selectedLang === "hu") {
      u = "\xC9p\xFCletek \xE9s eml\xE9km\u0171:";
    }
    ;
    return u;
  }
  familyNameTitle(u) {
    if (this.selectedLang === "de") {
      u = "Mit diesem Familiennamen:";
    }
    ;
    if (this.selectedLang === "fr") {
      u = "Portant ce nom de famille:";
    }
    ;
    if (this.selectedLang === "es") {
      u = "Llevando este apellido:";
    }
    ;
    if (this.selectedLang === "it") {
      u = "Portando questo cognome:";
    }
    ;
    if (this.selectedLang === "hu") {
      u = "Ezt a vezet\xE9knevet viselve:";
    }
    ;
    return u;
  }
  contextTitle(u) {
    if (this.selectedLang === "de") {
      u = "In diesem Kontext anwesend:";
    }
    ;
    if (this.selectedLang === "fr") {
      u = "Pr\xE9sents dans ce contexte:";
    }
    ;
    if (this.selectedLang === "es") {
      u = "Presentes en este contexto:";
    }
    ;
    if (this.selectedLang === "it") {
      u = "Presente in questo contesto:";
    }
    ;
    if (this.selectedLang === "hu") {
      u = "Ebben az \xF6sszef\xFCgg\xE9sben jelen van:";
    }
    ;
    return u;
  }
  organisationTitle(u) {
    if (this.selectedLang === "de") {
      u = "Mitglieder:";
    }
    ;
    if (this.selectedLang === "fr") {
      u = "Membres:";
    }
    ;
    if (this.selectedLang === "es") {
      u = "Membres:";
    }
    ;
    if (this.selectedLang === "it") {
      u = "Membri:";
    }
    ;
    if (this.selectedLang === "hu") {
      u = "Tagok:";
    }
    ;
    return u;
  }
  activityTitle(u) {
    if (this.selectedLang === "de") {
      u = "Mit dieser Aktivit\xE4t:";
    }
    ;
    if (this.selectedLang === "fr") {
      u = "Ayant cette activit\xE9:";
    }
    ;
    if (this.selectedLang === "es") {
      u = "Con esta actividad:";
    }
    ;
    if (this.selectedLang === "it") {
      u = "Con questa attivit\xE0:";
    }
    ;
    if (this.selectedLang === "hu") {
      u = "Ezzel az aktivit\xE1ssal:";
    }
    ;
    return u;
  }
  addressTitle(u) {
    if (this.selectedLang === "de") {
      u = "An dieser Adresse wohnhaft:";
    }
    ;
    if (this.selectedLang === "fr") {
      u = "Domicili\xE9.e.s \xE0 cette adresse:";
    }
    ;
    if (this.selectedLang === "es") {
      u = "Residente en esta direcci\xF3n:";
    }
    ;
    if (this.selectedLang === "it") {
      u = "Residente a questo indirizzo:";
    }
    ;
    if (this.selectedLang === "hu") {
      u = "Ezen a c\xEDmen lak\xF3 szem\xE9lyd:";
    }
    ;
    return u;
  }
  workTitle(u) {
    if (this.selectedLang === "de") {
      u = "Werke";
    }
    ;
    if (this.selectedLang === "fr") {
      u = "\u0152uvres";
    }
    ;
    if (this.selectedLang === "es") {
      u = "Obras";
    }
    ;
    if (this.selectedLang === "it") {
      u = "Opere";
    }
    ;
    if (this.selectedLang === "hu") {
      u = "M\xFCvek";
    }
    ;
    return u;
  }
  pupilTitle(u) {
    if (this.selectedLang === "de") {
      u = "Sch\xFCler/innen";
    }
    ;
    if (this.selectedLang === "fr") {
      u = "\xC9l\xE8ves et disciples";
    }
    ;
    if (this.selectedLang === "es") {
      u = "Alumnos y disc\xEDpulos";
    }
    ;
    if (this.selectedLang === "it") {
      u = "Studenti e discepoli";
    }
    ;
    if (this.selectedLang === "hu") {
      u = "M\xFCvek";
    }
    ;
    return u;
  }
  patientsTitle(u) {
    if (this.selectedLang === "de") {
      u = "Patienten/innen";
    }
    ;
    if (this.selectedLang === "fr") {
      u = "Patient.e.s";
    }
    ;
    if (this.selectedLang === "es") {
      u = "Pacientes";
    }
    ;
    if (this.selectedLang === "it") {
      u = "Pazienti";
    }
    ;
    if (this.selectedLang === "hu") {
      u = "P\xE1ciensek";
    }
    ;
    return u;
  }
  listTitle(u) {
    if (this.selectedLang === "de") {
      u = "Liste";
    }
    ;
    if (this.selectedLang === "fr") {
      u = "Liste";
    }
    ;
    if (this.selectedLang === "es") {
      u = "Lista";
    }
    ;
    if (this.selectedLang === "it") {
      u = "Lista";
    }
    ;
    if (this.selectedLang === "hu") {
      u = "Lista";
    }
    ;
    return u;
  }
  setTitle(u) {
    if (this.selectedLang === "de") {
      u = "Erhalten:";
    }
    ;
    if (this.selectedLang === "fr") {
      u = "Inclus :";
    }
    ;
    if (this.selectedLang === "es") {
      u = "Incluye:";
    }
    ;
    if (this.selectedLang === "it") {
      u = "Include:";
    }
    ;
    if (this.selectedLang === "hu") {
      u = "Tartalmazza:";
    }
    ;
    return u;
  }
  currentAddress(u) {
    if (this.selectedLang === "de") {
      u = "Aktuelle Adresse:";
    }
    ;
    if (this.selectedLang === "fr") {
      u = "Adresse actuelle :";
    }
    ;
    if (this.selectedLang === "es") {
      u = "Direcci\xF3n actual:";
    }
    ;
    if (this.selectedLang === "it") {
      u = "Indirizzo attuale:";
    }
    ;
    if (this.selectedLang === "hu") {
      u = "Jelenlegi c\xEDm:";
    }
    ;
    return u;
  }
  static {
    this.\u0275fac = function SelectedLangService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SelectedLangService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SelectedLangService, factory: _SelectedLangService.\u0275fac, providedIn: "root" });
  }
};

export {
  RequestService,
  SelectedLangService
};
//# sourceMappingURL=chunk-NSTNSDCO.js.map
