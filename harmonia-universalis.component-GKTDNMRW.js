import {
  HuDatabaseService
} from "./chunk-W7ZT52FJ.js";
import {
  MatPaginator,
  MatPaginatorModule,
  MatSort,
  MatSortHeader,
  MatSortModule
} from "./chunk-MG4ZWL7I.js";
import {
  ArrayToCsvService
} from "./chunk-A4ERJPBO.js";
import {
  MatSlideToggleModule
} from "./chunk-QVIPM7L4.js";
import "./chunk-EFAE4RR5.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatTooltip,
  MatTooltipModule
} from "./chunk-QBUGECFB.js";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
  MatTableModule
} from "./chunk-NHAB6UM4.js";
import {
  FormsModule,
  MatFormField,
  MatFormFieldModule,
  MatIcon,
  MatIconModule,
  MatInput,
  MatInputModule,
  ReactiveFormsModule
} from "./chunk-UUJL27AT.js";
import {
  SelectedLangService
} from "./chunk-NSTNSDCO.js";
import {
  BehaviorSubject,
  CommonModule,
  LiveAnnouncer,
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardContent,
  MatCardModule,
  MatIconButton,
  NgForOf,
  NgIf,
  RouterLink,
  RouterModule,
  combineLatest,
  inject,
  map,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtrustConstantResourceUrl,
  ɵɵviewQuery
} from "./chunk-5J6FDBCJ.js";

// src/app/harmonia-universalis/harmonia-universalis.component.ts
var _c0 = ["paginator"];
var _c1 = () => [""];
var _c2 = () => ["/prosopography"];
var _c3 = () => ["/search"];
var _c4 = () => [];
function HarmoniaUniversalisComponent_div_23_button_1_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r3.sort == null ? null : ctx_r3.sort.direction) === "asc" ? "arrow_upward" : "arrow_downward", " ");
  }
}
function HarmoniaUniversalisComponent_div_23_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function HarmoniaUniversalisComponent_div_23_button_1_Template_button_click_0_listener() {
      const col_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setSort(col_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275template(2, HarmoniaUniversalisComponent_div_23_button_1_mat_icon_2_Template, 2, 1, "mat-icon", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("color", (ctx_r3.sort == null ? null : ctx_r3.sort.active) === col_r3 ? "primary" : void 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getHeaderLabel(col_r3), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r3.sort == null ? null : ctx_r3.sort.active) === col_r3);
  }
}
function HarmoniaUniversalisComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, HarmoniaUniversalisComponent_div_23_button_1_Template, 3, 3, "button", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.displayedColumns);
  }
}
function HarmoniaUniversalisComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 13);
  }
}
function HarmoniaUniversalisComponent_Conditional_25_For_3_th_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getHeaderLabel(column_r6), " ");
  }
}
function HarmoniaUniversalisComponent_Conditional_25_For_3_td_2_Case_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const element_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", element_r7.author.label, " ");
  }
}
function HarmoniaUniversalisComponent_Conditional_25_For_3_td_2_Case_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1, "[Inconnu]");
    \u0275\u0275elementEnd();
  }
}
function HarmoniaUniversalisComponent_Conditional_25_For_3_td_2_Case_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 31)(1, "mat-icon", 32);
    \u0275\u0275text(2, "open_in_new");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("routerLink", "/item/" + element_r7.author.id);
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
  }
}
function HarmoniaUniversalisComponent_Conditional_25_For_3_td_2_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, HarmoniaUniversalisComponent_Conditional_25_For_3_td_2_Case_1_Conditional_0_Template, 1, 1)(1, HarmoniaUniversalisComponent_Conditional_25_For_3_td_2_Case_1_Conditional_1_Template, 2, 0, "span", 30)(2, HarmoniaUniversalisComponent_Conditional_25_For_3_td_2_Case_1_Conditional_2_Template, 3, 2, "button", 31);
  }
  if (rf & 2) {
    const element_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(element_r7.author ? 0 : 1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((element_r7.author == null ? null : element_r7.author.id) ? 2 : -1);
  }
}
function HarmoniaUniversalisComponent_Conditional_25_For_3_td_2_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r7.title.label);
  }
}
function HarmoniaUniversalisComponent_Conditional_25_For_3_td_2_Case_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const element_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", element_r7.location.label, " ");
  }
}
function HarmoniaUniversalisComponent_Conditional_25_For_3_td_2_Case_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1, "[Inconnu]");
    \u0275\u0275elementEnd();
  }
}
function HarmoniaUniversalisComponent_Conditional_25_For_3_td_2_Case_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 33)(1, "mat-icon", 32);
    \u0275\u0275text(2, "open_in_new");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("routerLink", "/item/" + element_r7.location.id);
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
  }
}
function HarmoniaUniversalisComponent_Conditional_25_For_3_td_2_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, HarmoniaUniversalisComponent_Conditional_25_For_3_td_2_Case_3_Conditional_0_Template, 1, 1)(1, HarmoniaUniversalisComponent_Conditional_25_For_3_td_2_Case_3_Conditional_1_Template, 2, 0, "span", 30)(2, HarmoniaUniversalisComponent_Conditional_25_For_3_td_2_Case_3_Conditional_2_Template, 3, 2, "button", 33);
  }
  if (rf & 2) {
    const element_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(element_r7.location ? 0 : 1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((element_r7.location == null ? null : element_r7.location.id) ? 2 : -1);
  }
}
function HarmoniaUniversalisComponent_Conditional_25_For_3_td_2_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r7.date.value);
  }
}
function HarmoniaUniversalisComponent_Conditional_25_For_3_td_2_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r7 = \u0275\u0275nextContext().$implicit;
    const column_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r7[column_r6]);
  }
}
function HarmoniaUniversalisComponent_Conditional_25_For_3_td_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 29);
    \u0275\u0275template(1, HarmoniaUniversalisComponent_Conditional_25_For_3_td_2_Case_1_Template, 3, 2)(2, HarmoniaUniversalisComponent_Conditional_25_For_3_td_2_Case_2_Template, 2, 1, "span")(3, HarmoniaUniversalisComponent_Conditional_25_For_3_td_2_Case_3_Template, 3, 2)(4, HarmoniaUniversalisComponent_Conditional_25_For_3_td_2_Case_4_Template, 2, 1, "span")(5, HarmoniaUniversalisComponent_Conditional_25_For_3_td_2_Case_5_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_16_0;
    const column_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-label", ctx_r3.getHeaderLabel(column_r6));
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_16_0 = column_r6) === "author" ? 1 : tmp_16_0 === "title" ? 2 : tmp_16_0 === "location" ? 3 : tmp_16_0 === "date" ? 4 : 5);
  }
}
function HarmoniaUniversalisComponent_Conditional_25_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0, 22);
    \u0275\u0275template(1, HarmoniaUniversalisComponent_Conditional_25_For_3_th_1_Template, 2, 1, "th", 26)(2, HarmoniaUniversalisComponent_Conditional_25_For_3_td_2_Template, 6, 2, "td", 27);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const column_r6 = ctx.$implicit;
    \u0275\u0275property("matColumnDef", column_r6);
  }
}
function HarmoniaUniversalisComponent_Conditional_25_tr_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 34);
  }
}
function HarmoniaUniversalisComponent_Conditional_25_tr_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 35);
  }
}
function HarmoniaUniversalisComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "table", 21);
    \u0275\u0275repeaterCreate(2, HarmoniaUniversalisComponent_Conditional_25_For_3_Template, 3, 1, "ng-container", 22, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275template(4, HarmoniaUniversalisComponent_Conditional_25_tr_4_Template, 1, 0, "tr", 23)(5, HarmoniaUniversalisComponent_Conditional_25_tr_5_Template, 1, 0, "tr", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-paginator", 25, 1);
    \u0275\u0275listener("page", function HarmoniaUniversalisComponent_Conditional_25_Template_mat_paginator_page_6_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.handlePageEvent($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r3.dataSource);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.displayedColumns);
    \u0275\u0275advance(2);
    \u0275\u0275property("matHeaderRowDef", ctx_r3.displayedColumns)("matHeaderRowDefSticky", true);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r3.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("length", ctx_r3.length)("pageSize", ctx_r3.pageSize)("disabled", ctx_r3.disabled)("showFirstLastButtons", ctx_r3.showFirstLastButtons)("pageSizeOptions", ctx_r3.showPageSizeOptions ? ctx_r3.pageSizeOptions : \u0275\u0275pureFunction0(11, _c4))("hidePageSize", ctx_r3.hidePageSize)("pageIndex", ctx_r3.pageIndex);
  }
}
var columnMapping = {
  author: (data) => data.author?.label,
  title: (data) => data.title?.label,
  location: (data) => data.location?.label,
  date: (data) => data.date?.value
};
var HarmoniaUniversalisComponent = class _HarmoniaUniversalisComponent {
  constructor() {
    this.database = inject(HuDatabaseService);
    this._liveAnnouncer = inject(LiveAnnouncer);
    this.csv = inject(ArrayToCsvService);
    this.lang = inject(SelectedLangService);
    this.displayedColumns = ["author", "title", "location", "date"];
    this.dataSource = new MatTableDataSource();
    this.isMobile = window.innerWidth <= 600;
    this.biblioHU = "Bibliography Harmonia Universalis";
    this.authorHeader = "Author";
    this.titleHeader = "Title";
    this.locationHeader = "Location";
    this.dateHeader = "Date";
    this.behavior$ = new BehaviorSubject("");
    this.length = 50;
    this.pageSize = 25;
    this.pageIndex = 0;
    this.pageSizeOptions = [10, 25, 50, 100, 500, 1e3];
    this.hidePageSize = false;
    this.showPageSizeOptions = true;
    this.showFirstLastButtons = true;
    this.disabled = false;
    this.isSpinner = true;
    this.myLang = "%20.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22" + this.lang.selectedLang + "%22%2C%22en%22.%20%7D%0A%7D%0A";
  }
  getHeaderLabel(column) {
    switch (column) {
      case "author":
        return this.authorHeader;
      case "title":
        return this.titleHeader;
      case "location":
        return this.locationHeader;
      case "date":
        return this.dateHeader;
      default:
        return column;
    }
  }
  ngOnInit() {
    this.isSpinner = true;
    console.log("Spinner ON");
    window.addEventListener("resize", () => {
      this.isMobile = window.innerWidth <= 600;
    });
    this.dataSource.sortingDataAccessor = (data, sortHeaderId) => columnMapping[sortHeaderId] ? columnMapping[sortHeaderId](data) || "" : data[sortHeaderId] || "";
    this.dataSource.sortData = (data, sort) => {
      const active = sort.active;
      const direction = sort.direction;
      if (!active || direction === "") {
        return data;
      }
      return data.slice().sort((a, b) => {
        const valueA = this.dataSource.sortingDataAccessor(a, active);
        const valueB = this.dataSource.sortingDataAccessor(b, active);
        const comparison = valueA.localeCompare(valueB, "fr", { sensitivity: "base" });
        return direction === "asc" ? comparison : -comparison;
      });
    };
    this.biblioHU = this.lang.biblioHU(this.biblioHU);
    this.authorHeader = this.lang.authorHeader(this.authorHeader);
    this.titleHeader = this.lang.titleHeader(this.titleHeader);
    this.locationHeader = this.lang.locationHeader(this.locationHeader);
    this.dateHeader = this.lang.dateHeader(this.dateHeader);
    let u = this.database.sparqlBuilding(this.myLang);
    let sparqlApiUrl = this.database.newSparqlAdress(u);
    this.database.initBiblioData(sparqlApiUrl);
    let dataService$ = this.database.getBiblioData();
    this.dataSource$ = combineLatest([this.behavior$, dataService$]).pipe(map((res) => {
      this.dataSource.filter = res[0];
      this.dataSource.data = res[1];
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      return this.dataSource;
    }));
    this.dataSource$.subscribe((res) => {
      console.log("Spinner OFF");
      this.isSpinner = false;
    });
  }
  onClick(query) {
    let u = query;
    u = this.database.databaseToDownload(query);
    let v = this.csv.arrayToCsv(u);
    this.csv.downloadBlob(v, "biblio_harmonia_universalis", "text/csv;charset=utf-8;");
  }
  applyFilter(event) {
    const filterValue = event.target.value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
    this.dataSource.filteredData;
    this.filtered = this.dataSource.filteredData[0].author.label;
  }
  handlePageEvent(e) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }
  setPageSizeOptions(setPageSizeOptionsInput) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(",").map((str) => +str);
    }
  }
  setSort(column) {
    if (this.sort.active === column) {
      this.sort.direction = this.sort.direction === "asc" ? "desc" : "asc";
    } else {
      this.sort.active = column;
      this.sort.direction = "asc";
    }
    this.sort.sortChange.emit({ active: this.sort.active, direction: this.sort.direction });
  }
  static {
    this.\u0275fac = function HarmoniaUniversalisComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HarmoniaUniversalisComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HarmoniaUniversalisComponent, selectors: [["app-harmonia-universalis"]], viewQuery: function HarmoniaUniversalisComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatSort, 5);
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 33, vars: 11, consts: [["content", ""], ["paginator", ""], ["href", \u0275\u0275trustConstantResourceUrl`https://fonts.googleapis.com/icon?family=Material+Icons`, "rel", "stylesheet"], [1, "cardBackground"], [1, "hu-header"], [1, "hu-title"], [1, "search-center"], [3, "routerLink"], ["appearance", "outlined", 1, "mat-elevation-z12"], [1, "labelTitlePadding"], ["appearance", "outline"], ["matInput", "", "placeholder", "Search", 3, "keyup"], ["class", "mobile-sort-buttons", 4, "ngIf"], ["mode", "indeterminate", "color", "primary", "diameter", "50", 2, "margin", "2rem auto", "display", "block"], [1, "mat-elevation-z8", "container"], ["mat-icon-button", "", "color", "primary", 1, "internalLink", 3, "click"], ["color", "primary", 3, "inline"], [1, "mobile-sort-buttons"], ["mat-button", "", "class", "sort-btn", 3, "color", "click", 4, "ngFor", "ngForOf"], ["mat-button", "", 1, "sort-btn", 3, "click", "color"], [4, "ngIf"], ["mat-table", "", "matSort", "", "matSortActive", "title", "matSortDirection", "asc", 1, "mat-table", 3, "dataSource"], [3, "matColumnDef"], ["mat-header-row", "", "class", "mat-header-row", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", "class", "responsive-row", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page", 1, "demo-paginator", 3, "page", "length", "pageSize", "disabled", "showFirstLastButtons", "pageSizeOptions", "hidePageSize", "pageIndex"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "responsive-cell", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "responsive-cell"], [1, "text-muted"], ["mat-icon-button", "", "matTooltip", "Voir l'auteur dans la base de donn\xE9es", 1, "compact-icon-btn", 3, "routerLink"], ["color", "primary", 1, "small-icon", 3, "inline"], ["mat-icon-button", "", "matTooltip", "Voir le lieu dans la base de donn\xE9es", 1, "compact-icon-btn", 3, "routerLink"], ["mat-header-row", "", 1, "mat-header-row"], ["mat-row", "", 1, "responsive-row"]], template: function HarmoniaUniversalisComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "head");
        \u0275\u0275element(1, "link", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "body")(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 6)(8, "a", 7);
        \u0275\u0275text(9, "Accueil");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "span");
        \u0275\u0275text(11, "\xA0|\xA0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "a", 7);
        \u0275\u0275text(13, "Prosopography");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "span");
        \u0275\u0275text(15, "\xA0|\xA0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "a", 7);
        \u0275\u0275text(17, "FactGrid");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(18, "mat-card", 8)(19, "mat-card-content", 3)(20, "div", 9)(21, "mat-form-field", 10)(22, "input", 11);
        \u0275\u0275listener("keyup", function HarmoniaUniversalisComponent_Template_input_keyup_22_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.applyFilter($event));
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(23, HarmoniaUniversalisComponent_div_23_Template, 2, 1, "div", 12)(24, HarmoniaUniversalisComponent_Conditional_24_Template, 1, 0, "mat-progress-spinner", 13)(25, HarmoniaUniversalisComponent_Conditional_25_Template, 8, 12, "div", 14);
        \u0275\u0275elementStart(26, "div")(27, "span")(28, "button", 15, 0);
        \u0275\u0275listener("click", function HarmoniaUniversalisComponent_Template_button_click_28_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onClick(ctx.dataSource.filteredData));
        });
        \u0275\u0275elementStart(30, "mat-icon", 16);
        \u0275\u0275text(31, "download");
        \u0275\u0275elementEnd()();
        \u0275\u0275text(32, " \xA0\xA0\xA0\xA0\xA0\xA0 ");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", ctx.biblioHU, " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(8, _c1));
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(9, _c2));
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c3));
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.isMobile);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isSpinner ? 24 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.isSpinner ? 25 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("inline", true);
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      MatTableModule,
      MatTable,
      MatHeaderCellDef,
      MatHeaderRowDef,
      MatColumnDef,
      MatCellDef,
      MatRowDef,
      MatHeaderCell,
      MatCell,
      MatHeaderRow,
      MatRow,
      MatSortModule,
      MatSort,
      MatSortHeader,
      MatIconModule,
      MatIcon,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatCardModule,
      MatCard,
      MatCardContent,
      RouterModule,
      RouterLink,
      MatPaginatorModule,
      MatPaginator,
      MatInputModule,
      MatInput,
      MatFormField,
      MatFormFieldModule,
      FormsModule,
      ReactiveFormsModule,
      MatSlideToggleModule,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatTooltipModule,
      MatTooltip
    ], styles: ['\n\n.mat-elevation-z8.container[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n}\n.mat-table[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\nth.mat-header-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  padding: 12px 8px;\n  font-size: 1em;\n  vertical-align: middle;\n}\n.mat-sort-header-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.mat-sort-header-arrow[_ngcontent-%COMP%], \n.mat-sort-header-indicator[_ngcontent-%COMP%] {\n  color: #1976d2;\n  transition: color 0.2s;\n}\n@media (max-width: 600px) {\n  .mat-table[_ngcontent-%COMP%] {\n    font-size: 0.95em;\n  }\n  th.mat-header-cell[_ngcontent-%COMP%] {\n    white-space: nowrap;\n    padding: 8px 4px;\n    font-size: 1em;\n    vertical-align: middle;\n  }\n  .mat-sort-header-container[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n  }\n  .mat-sort-header-arrow[_ngcontent-%COMP%], \n   .mat-sort-header-indicator[_ngcontent-%COMP%] {\n    opacity: 1 !important;\n    color: #1976d2 !important;\n    font-size: 1.2em;\n    margin-left: 2px;\n  }\n  .mat-header-row[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .responsive-cell[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    padding: 0 16px;\n    margin: 16px 0;\n    border: 0 none;\n    position: relative;\n    padding-left: 110px;\n  }\n  .responsive-cell[_ngcontent-%COMP%]::before {\n    content: attr(data-label) ": ";\n    position: absolute;\n    left: 16px;\n    top: 0;\n    font-weight: bold;\n    color: #666;\n    white-space: nowrap;\n  }\n  .responsive-row[_ngcontent-%COMP%] {\n    display: block;\n    overflow: hidden;\n    height: auto;\n    position: relative;\n    box-shadow:\n      0 2px 1px -1px rgba(0, 0, 0, 0.2),\n      0 1px 1px 0 rgba(0, 0, 0, 0.14),\n      0 1px 3px 0 rgba(0, 0, 0, 0.12);\n    border-radius: 3px;\n    margin-bottom: 24px;\n  }\n  .responsive-row[_ngcontent-%COMP%]    + .responsive-row[_ngcontent-%COMP%] {\n    margin-top: 24px;\n  }\n  mat-paginator[_ngcontent-%COMP%] {\n    margin-top: 24px;\n  }\n  .mobile-sort-buttons[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: nowrap;\n    gap: 2px;\n    justify-content: center;\n    margin-bottom: 12px;\n  }\n  .sort-btn[_ngcontent-%COMP%] {\n    min-width: unset;\n    padding: 2px 6px;\n    font-size: 0.95em;\n    line-height: 1.2;\n    border: none;\n    box-shadow: none;\n    background: transparent;\n  }\n  .sort-btn[_ngcontent-%COMP%]:focus {\n    outline: none;\n  }\n  .sort-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    margin-left: 2px;\n    font-size: 1em;\n  }\n}\n/*# sourceMappingURL=harmonia-universalis.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HarmoniaUniversalisComponent, { className: "HarmoniaUniversalisComponent", filePath: "src\\app\\harmonia-universalis\\harmonia-universalis.component.ts", lineNumber: 65 });
})();
export {
  HarmoniaUniversalisComponent
};
//# sourceMappingURL=harmonia-universalis.component-GKTDNMRW.js.map
