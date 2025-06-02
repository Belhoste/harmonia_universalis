import {
  HuDatabaseService
} from "./chunk-W7ZT52FJ.js";
import {
  ProsopoDatabaseService
} from "./chunk-MJPOL5VZ.js";
import {
  SelectedLangService
} from "./chunk-NSTNSDCO.js";
import {
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardModule,
  MatCardTitle,
  RouterLink,
  RouterModule,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-5J6FDBCJ.js";

// src/app/home/home.component.ts
var HomeComponent = class _HomeComponent {
  constructor() {
    this.huDatabase = inject(HuDatabaseService);
    this.lang = inject(SelectedLangService);
    this.prosopoDatabase = inject(ProsopoDatabaseService);
    this.myLang = "%20.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22" + this.lang.selectedLang + "%22%2C%22en%22.%20%7D%0A%7D%0A";
  }
  ngOnInit() {
    const sparqlhuDatabaseUrl = this.huDatabase.sparqlBuilding(this.myLang);
    const sparqlApihuDatabaseUrl = this.huDatabase.newSparqlAdress(sparqlhuDatabaseUrl);
    this.huDatabase.loadBiblioData(sparqlApihuDatabaseUrl);
    const sparqlprosopoDatabaseUrl = this.prosopoDatabase.sparqlBuilding(this.myLang);
    const sparqlApiprosopoDatabaseUrl = this.prosopoDatabase.newSparqlAdress(sparqlprosopoDatabaseUrl);
    this.prosopoDatabase.loadProsopoData(sparqlApiprosopoDatabaseUrl);
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 38, vars: 0, consts: [[1, "home-container"], [1, "home-header"], [1, "home-title"], [1, "home-subtitle"], [1, "home-cards"], [1, "home-card", "mat-elevation-z4"], ["mat-raised-button", "", "color", "primary", "routerLink", "/prosopography"], ["mat-raised-button", "", "color", "primary", "routerLink", "/harmonia_universalis"], ["mat-raised-button", "", "color", "primary", "routerLink", "/search"], [1, "home-image-card"], [1, "mat-elevation-z2"], ["src", "assets/magnetisme.jpg", "alt", "Animal magnetism illustration", 1, "home-image", "desktop-image"], ["src", "assets/magnetisme_mobile.jpg", "alt", "Animal magnetism mobile", 1, "home-image", "mobile-image"], [1, "image-caption"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275text(3, "Harmonia Universalis");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3);
        \u0275\u0275text(5, "a database on animal magnetism");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "mat-card", 5)(8, "mat-card-title");
        \u0275\u0275text(9, "Base prosopographique");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "mat-card-content");
        \u0275\u0275text(11, " Acc\xE9dez \xE0 la base de donn\xE9es des personnes li\xE9es au magn\xE9tisme animal. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "mat-card-actions")(13, "button", 6);
        \u0275\u0275text(14, " Prosopographie ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "mat-card", 5)(16, "mat-card-title");
        \u0275\u0275text(17, "Base bibliographique");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "mat-card-content");
        \u0275\u0275text(19, " Consultez la bibliographie Harmonia Universalis. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "mat-card-actions")(21, "button", 7);
        \u0275\u0275text(22, " Bibliographie ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "mat-card", 5)(24, "mat-card-title");
        \u0275\u0275text(25, "Recherche globale");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "mat-card-content");
        \u0275\u0275text(27, " Effectuez une recherche sur l\u2019ensemble de la base FactGrid. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "mat-card-actions")(29, "button", 8);
        \u0275\u0275text(30, " Recherche ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(31, "div", 9)(32, "mat-card", 10);
        \u0275\u0275element(33, "img", 11)(34, "img", 12);
        \u0275\u0275elementStart(35, "mat-card-content")(36, "div", 13);
        \u0275\u0275text(37, " Illustration sur le magn\xE9tisme animal (source\xA0: domaine public) ");
        \u0275\u0275elementEnd()()()()();
      }
    }, dependencies: [MatCardModule, MatCard, MatCardActions, MatCardContent, MatCardTitle, MatButtonModule, MatButton, RouterModule, RouterLink], styles: ['@charset "UTF-8";\n\n\n\n.home-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 2em;\n}\n.home-cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2em;\n  justify-content: center;\n  margin-bottom: 2em;\n}\n.home-card[_ngcontent-%COMP%] {\n  width: 320px;\n  min-height: 180px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background: #fff;\n  border: 0.5px solid #222;\n  box-shadow: none;\n}\nmat-card-title[_ngcontent-%COMP%] {\n  margin-left: 1em;\n}\n.home-image-card[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.home-image-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  width: calc(960px + 4em);\n  max-width: 100%;\n}\n.home-image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  display: block;\n  margin: 0 auto;\n}\n.image-caption[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.95em;\n  color: #666;\n  margin-top: 0.5em;\n}\n.desktop-image[_ngcontent-%COMP%] {\n  display: block;\n}\n.mobile-image[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 900px) {\n  .home-title[_ngcontent-%COMP%] {\n    font-size: 2em;\n    line-height: 1.2;\n    word-break: break-word;\n    margin-bottom: 0.2em;\n    padding: 0 0.2em;\n  }\n  .home-subtitle[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n    line-height: 1.3;\n  }\n  .home-cards[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .home-card[_ngcontent-%COMP%] {\n    width: 95vw;\n    min-width: 0;\n    margin-bottom: 1em;\n  }\n  .home-image-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n    width: 95vw;\n    min-width: 0;\n  }\n  .desktop-image[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .mobile-image[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    height: auto;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\home\\home.component.ts", lineNumber: 17 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=home.component-BXA77KE7.js.map
