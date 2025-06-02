import {
  SetLanguageService
} from "./chunk-JNFAGNZG.js";
import {
  MatTableModule
} from "./chunk-NHAB6UM4.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  FormsModule,
  MatFormField,
  MatFormFieldModule,
  MatHint,
  MatIcon,
  MatIconModule,
  MatInput,
  MatInputModule,
  NgControlStatus,
  ReactiveFormsModule
} from "./chunk-UUJL27AT.js";
import {
  RequestService,
  SelectedLangService
} from "./chunk-NSTNSDCO.js";
import {
  AsyncPipe,
  BehaviorSubject,
  ChangeDetectorRef,
  CommonModule,
  MatButtonModule,
  MatCard,
  MatCardContent,
  MatCardModule,
  Observable,
  RouterLink,
  RouterModule,
  debounceTime,
  filter,
  inject,
  map,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtrustConstantResourceUrl
} from "./chunk-5J6FDBCJ.js";

// src/app/search/search.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/item", a0];
var _c1 = () => [""];
var _c2 = () => ["/prosopography"];
var _c3 = () => ["/harmonia_universalis"];
var _c4 = () => ["./advanced_search"];
function SearchComponent_Conditional_18_For_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(", ", item_r1.description, "");
  }
}
function SearchComponent_Conditional_18_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-icon-button", 12)(4, "mat-icon", 13);
    \u0275\u0275text(5, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(6, "\xA0\xA0\xA0 ");
    \u0275\u0275template(7, SearchComponent_Conditional_18_For_3_Conditional_7_Template, 2, 1, "span");
    \u0275\u0275element(8, "hr");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r1.label, "\xA0");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c0, item_r1.id));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(item_r1.description ? 7 : -1);
  }
}
function SearchComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10);
    \u0275\u0275repeaterCreate(2, SearchComponent_Conditional_18_For_3_Template, 9, 6, "div", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.items);
  }
}
function SearchComponent_Conditional_19_For_31_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "mat-icon-button", 12)(3, "mat-icon", 22);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, "\xA0\xA0\xA0\xA0\xA0 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const selectedItem_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", selectedItem_r3.label, "\xA0 ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c0, selectedItem_r3.value.id));
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
  }
}
function SearchComponent_Conditional_19_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275template(1, SearchComponent_Conditional_19_For_31_Conditional_1_Template, 6, 5, "span", 21);
    \u0275\u0275element(2, "br");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const selectedItem_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(selectedItem_r3 ? 1 : -1);
  }
}
function SearchComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 8)(2, "a", 14);
    \u0275\u0275text(3, "Accueil");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "\xA0\xA0|\xA0\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 14);
    \u0275\u0275text(7, "Prosopographie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "\xA0\xA0|\xA0\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 14);
    \u0275\u0275text(11, "Bibliographie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "\xA0\xA0|\xA0\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "a", 14);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "\xA0\xA0|\xA0\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "a", 15);
    \u0275\u0275text(19, " Sparql query ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21, "\xA0\xA0|\xA0\xA0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 16)(23, "mat-card", 17)(24, "div", 18);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 19);
    \u0275\u0275element(27, "hr");
    \u0275\u0275elementStart(28, "mat-card-content")(29, "div");
    \u0275\u0275repeaterCreate(30, SearchComponent_Conditional_19_For_31_Template, 3, 1, "div", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c1));
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c2));
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(8, _c3));
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(9, _c4));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.advanced_search);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.formerVisitsTitle);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.selectedItemsList);
  }
}
var SearchComponent = class _SearchComponent {
  constructor() {
    this.changeDetector = inject(ChangeDetectorRef);
    this.request = inject(RequestService);
    this.setLanguage = inject(SetLanguageService);
    this.lang = inject(SelectedLangService);
    this.title = "harmoniaUniversalis";
    this.subtitle = "a database on animal magnetism";
    this.advanced_search = "advanced search";
    this.projects = "research projects";
    this.fields = "fields of reserach";
    this.searchInput = new FormControl();
    this.isDisplay = false;
    this.data$ = new Observable();
    this.searchQuery$ = new BehaviorSubject("");
    this.items = [];
    this.baseGetURL = "https://database.factgrid.de//w/api.php?action=wbgetentities&ids=";
    this.getUrlSuffix = "&format=json&origin=*";
    this.formerVisitsTitle = "you have visited:";
    this.selectedItemsList = JSON.parse(localStorage.getItem("selectedItems"));
  }
  //  this.request.getStat();
  ngOnInit() {
    this.subtitle = this.lang.subtitle(this.subtitle);
    this.advanced_search = this.lang.advanced_search(this.advanced_search);
    this.projects = this.lang.projects(this.projects);
    this.fields = this.lang.fields(this.fields);
    this.formerVisitsTitle = this.lang.formerVisitsTitle(this.formerVisitsTitle);
    this.selectedItemsList = this.selectedItemsList.filter(function(el) {
      return el !== null;
    });
    this.pages = this.request.getStat().pipe(map((res) => Object.values(res)[1].statistics.pages));
    console.log(this.selectedItemsList);
    this.labels = this.searchInput.valueChanges.pipe(
      debounceTime(400),
      switchMap((label) => this.request.searchItem(label, this.lang.selectedLang)),
      map((res) => this.createList(res)),
      map((res) => res == "https://database.factgrid.de//w/api.php?action=wbgetentities&ids=&format=json&origin=*" ? "https://database.factgrid.de//w/api.php?action=wbgetentities&ids=Q220375&format=json&origin=*" : res),
      debounceTime(200),
      switchMap((url) => this.request.getItem(url)),
      //  takeWhile (res => res !== undefined),
      filter((res) => res !== void 0),
      filter((res) => res.entities !== void 0 && res.entities !== null),
      // filter (res => res.entities !== null),
      map((res) => Object.values(res.entities))
    ).subscribe((re) => {
      this.items = this.setLanguage.item(re, this.lang.selectedLang);
      this.isDisplay = true;
      if (this.items[0].id == "Q220375") {
        this.isDisplay = false;
      }
      ;
      this.changeDetector.detectChanges();
    });
  }
  createList(re) {
    let list = "";
    let url = "";
    let arr = re.search;
    if (arr === void 0) {
      arr = [];
    } else {
      arr = arr;
    }
    ;
    for (let i = 0; i < arr.length; i++) {
      list = list + "|" + arr[i].id;
    }
    ;
    list = list.slice(1);
    url = this.baseGetURL + list + this.getUrlSuffix;
    return url;
  }
  addParis(re) {
    re = "Paris, " + re;
  }
  ngOnDestroy() {
    this.labels.unsubscribe();
  }
  static {
    this.\u0275fac = function SearchComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SearchComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchComponent, selectors: [["app-search"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 20, vars: 7, consts: [["href", \u0275\u0275trustConstantResourceUrl`https://fonts.googleapis.com/icon?family=Material+Icons`, "rel", "stylesheet"], [1, "cardBackground"], [1, "HUTitle"], [1, "subTitle"], ["appearance", "outlined", 1, "mat-elevation-z12"], [1, "search-center2"], ["matInput", "", "placeholder", "Ex. Goethe", "value", "Goethe", 3, "formControl"], ["align", "end"], [1, "search-center"], [1, "searchListSize"], [1, "details"], [1, "search-label"], [1, "internalLink", 3, "routerLink"], ["color", "primary", 3, "inline"], [3, "routerLink"], ["href", "https://database.factgrid.de/query/#%23model%0A%0ASELECT%20%3Fitem%20%3Fviewer%20%3FitemLabel%20%20WHERE%20%7B%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22%5BAUTO_LANGUAGE%5D%2Cen%22.%20%7D%0A%20%20%3Fitem%20wdt%3AP2%20wd%3AQ7%3B%0A%20%20%20%20%20%20%20%20wdt%3AP247%20wd%3AQ24708.%0A%20%20BIND%28STRAFTER%28STR%28%3Fitem%29%2C%20STR%28wd%3A%29%29%20AS%20%3FitemId%29%0A%20%20BIND%28IRI%28CONCAT%28%22https%3A%2F%2Fdatabase.factgrid.de%2Fviewer%2Fitem%2F%22%2C%20%3FitemId%29%29%20AS%20%3Fviewer%29%0A%7D%0A"], [1, "search-itemSelected"], ["appearance", "outlined", 1, "search-itemSelected-mat-card"], [1, "selectedListTitle2"], [1, "selectedItemSize"], [1, "labelTitlePadding"], [1, "selectedItemText"], [1, "whiteButton", 3, "inline"]], template: function SearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "head");
        \u0275\u0275element(1, "link", 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "body")(3, "div", 1)(4, "div", 2);
        \u0275\u0275text(5, "FactGrid");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 3);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "mat-card", 4)(9, "mat-card-content")(10, "div")(11, "div", 5)(12, "mat-form-field");
        \u0275\u0275element(13, "input", 6);
        \u0275\u0275elementStart(14, "mat-hint", 7);
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "async");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(17, "div", 8);
        \u0275\u0275template(18, SearchComponent_Conditional_18_Template, 4, 0, "div", 9)(19, SearchComponent_Conditional_19_Template, 32, 10, "div");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.subtitle);
        \u0275\u0275advance(6);
        \u0275\u0275property("formControl", ctx.searchInput);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(16, 5, ctx.pages), " items");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.isDisplay == true ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isDisplay == false ? 19 : -1);
      }
    }, dependencies: [
      CommonModule,
      AsyncPipe,
      RouterModule,
      RouterLink,
      ReactiveFormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      FormControlDirective,
      FormsModule,
      MatInputModule,
      MatInput,
      MatFormField,
      MatHint,
      MatFormFieldModule,
      MatTableModule,
      MatIconModule,
      MatIcon,
      MatButtonModule,
      MatCardModule,
      MatCard,
      MatCardContent
    ], styles: ["\n\n.search-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.HU-div[_ngcontent-%COMP%] {\n  height: 150px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.HUTitle-div[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  color: #AD1457;\n  font-weight: 600;\n  font-size: 60px;\n}\n.search-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.search-itemSelected[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n.selectedItemSize[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=search.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchComponent, { className: "SearchComponent", filePath: "src\\app\\search\\search.component.ts", lineNumber: 44 });
})();
export {
  SearchComponent
};
//# sourceMappingURL=search.component-ZYULKHYE.js.map
