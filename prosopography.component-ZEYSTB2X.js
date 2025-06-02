import {
  ProsopoDatabaseService
} from "./chunk-MJPOL5VZ.js";
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
  MatSelect,
  MatSelectModule
} from "./chunk-EFAE4RR5.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
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
  MatFormField,
  MatIcon,
  MatIconModule,
  MatInput,
  MatInputModule
} from "./chunk-UUJL27AT.js";
import {
  SelectedLangService
} from "./chunk-NSTNSDCO.js";
import {
  BehaviorSubject,
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardContent,
  MatCardModule,
  MatIconButton,
  MatOption,
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
  ɵɵviewQuery
} from "./chunk-5J6FDBCJ.js";

// src/app/prosopography/prosopography.component.ts
var _c0 = () => [""];
var _c1 = () => ["/harmonia_universalis"];
var _c2 = () => ["/search"];
var _c3 = () => [];
function ProsopographyComponent_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const soc_r2 = ctx.$implicit;
    \u0275\u0275property("value", soc_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(soc_r2);
  }
}
function ProsopographyComponent_Conditional_33_For_2_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r4.sort == null ? null : ctx_r4.sort.direction) === "asc" ? "arrow_upward" : "arrow_downward", " ");
  }
}
function ProsopographyComponent_Conditional_33_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function ProsopographyComponent_Conditional_33_For_2_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const col_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.setSort(col_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275template(2, ProsopographyComponent_Conditional_33_For_2_Conditional_0_Conditional_2_Template, 2, 1, "mat-icon");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275property("color", (ctx_r4.sort == null ? null : ctx_r4.sort.active) === col_r4 ? "primary" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.getHeaderLabel(col_r4), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r4.sort == null ? null : ctx_r4.sort.active) === col_r4 ? 2 : -1);
  }
}
function ProsopographyComponent_Conditional_33_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProsopographyComponent_Conditional_33_For_2_Conditional_0_Template, 3, 3, "button", 22);
  }
  if (rf & 2) {
    const col_r4 = ctx.$implicit;
    \u0275\u0275conditional(col_r4 === "label" ? 0 : -1);
  }
}
function ProsopographyComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275repeaterCreate(1, ProsopographyComponent_Conditional_33_For_2_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r4.displayedColumns);
  }
}
function ProsopographyComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 18);
  }
}
function ProsopographyComponent_Conditional_35_For_3_th_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.getHeaderLabel(column_r7), " ");
  }
}
function ProsopographyComponent_Conditional_35_For_3_td_2_Case_1_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 35)(1, "mat-icon", 36);
    \u0275\u0275text(2, "open_in_new");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r8 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275property("routerLink", "/item/" + element_r8.person.id);
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
  }
}
function ProsopographyComponent_Conditional_35_For_3_td_2_Case_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ProsopographyComponent_Conditional_35_For_3_td_2_Case_1_Conditional_0_Conditional_3_Template, 3, 2, "button", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r8.person.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(element_r8.person.id ? 3 : -1);
  }
}
function ProsopographyComponent_Conditional_35_For_3_td_2_Case_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, "[Inconnu]");
    \u0275\u0275elementEnd();
  }
}
function ProsopographyComponent_Conditional_35_For_3_td_2_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProsopographyComponent_Conditional_35_For_3_td_2_Case_1_Conditional_0_Template, 4, 2, "span", 33)(1, ProsopographyComponent_Conditional_35_For_3_td_2_Case_1_Conditional_1_Template, 2, 0, "span", 34);
  }
  if (rf & 2) {
    const element_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(element_r8.person ? 0 : 1);
  }
}
function ProsopographyComponent_Conditional_35_For_3_td_2_Case_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const element_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", element_r8.person.description, " ");
  }
}
function ProsopographyComponent_Conditional_35_For_3_td_2_Case_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, "[Aucune]");
    \u0275\u0275elementEnd();
  }
}
function ProsopographyComponent_Conditional_35_For_3_td_2_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProsopographyComponent_Conditional_35_For_3_td_2_Case_2_Conditional_0_Template, 1, 1)(1, ProsopographyComponent_Conditional_35_For_3_td_2_Case_2_Conditional_1_Template, 2, 0, "span", 34);
  }
  if (rf & 2) {
    const element_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(element_r8.person ? 0 : 1);
  }
}
function ProsopographyComponent_Conditional_35_For_3_td_2_Case_3_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 37)(1, "mat-icon", 36);
    \u0275\u0275text(2, "open_in_new");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r8 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275property("routerLink", "/item/" + element_r8.society.id);
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
  }
}
function ProsopographyComponent_Conditional_35_For_3_td_2_Case_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, ProsopographyComponent_Conditional_35_For_3_td_2_Case_3_Conditional_0_Conditional_2_Template, 3, 2, "button", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r8.society.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(element_r8.society.id ? 2 : -1);
  }
}
function ProsopographyComponent_Conditional_35_For_3_td_2_Case_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, "[Aucune]");
    \u0275\u0275elementEnd();
  }
}
function ProsopographyComponent_Conditional_35_For_3_td_2_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProsopographyComponent_Conditional_35_For_3_td_2_Case_3_Conditional_0_Template, 3, 2, "span")(1, ProsopographyComponent_Conditional_35_For_3_td_2_Case_3_Conditional_1_Template, 2, 0, "span", 34);
  }
  if (rf & 2) {
    const element_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(element_r8.society ? 0 : 1);
  }
}
function ProsopographyComponent_Conditional_35_For_3_td_2_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r8 = \u0275\u0275nextContext().$implicit;
    const column_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r8[column_r7]);
  }
}
function ProsopographyComponent_Conditional_35_For_3_td_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
    \u0275\u0275template(1, ProsopographyComponent_Conditional_35_For_3_td_2_Case_1_Template, 2, 1)(2, ProsopographyComponent_Conditional_35_For_3_td_2_Case_2_Template, 2, 1)(3, ProsopographyComponent_Conditional_35_For_3_td_2_Case_3_Template, 2, 1)(4, ProsopographyComponent_Conditional_35_For_3_td_2_Case_4_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_16_0;
    const column_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-label", ctx_r4.getHeaderLabel(column_r7));
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_16_0 = column_r7) === "label" ? 1 : tmp_16_0 === "description" ? 2 : tmp_16_0 === "society" ? 3 : 4);
  }
}
function ProsopographyComponent_Conditional_35_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0, 25);
    \u0275\u0275template(1, ProsopographyComponent_Conditional_35_For_3_th_1_Template, 2, 1, "th", 29)(2, ProsopographyComponent_Conditional_35_For_3_td_2_Template, 5, 2, "td", 30);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const column_r7 = ctx.$implicit;
    \u0275\u0275property("matColumnDef", column_r7);
  }
}
function ProsopographyComponent_Conditional_35_tr_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 38);
  }
}
function ProsopographyComponent_Conditional_35_tr_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 39);
  }
}
function ProsopographyComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "table", 24);
    \u0275\u0275repeaterCreate(2, ProsopographyComponent_Conditional_35_For_3_Template, 3, 1, "ng-container", 25, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275template(4, ProsopographyComponent_Conditional_35_tr_4_Template, 1, 0, "tr", 26)(5, ProsopographyComponent_Conditional_35_tr_5_Template, 1, 0, "tr", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-paginator", 28, 1);
    \u0275\u0275listener("page", function ProsopographyComponent_Conditional_35_Template_mat_paginator_page_6_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.handlePageEvent($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r4.dataSource);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r4.displayedColumns);
    \u0275\u0275advance(2);
    \u0275\u0275property("matHeaderRowDef", ctx_r4.displayedColumns)("matHeaderRowDefSticky", true);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r4.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("length", ctx_r4.length)("pageSize", ctx_r4.pageSize)("disabled", ctx_r4.disabled)("showFirstLastButtons", ctx_r4.showFirstLastButtons)("pageSizeOptions", ctx_r4.showPageSizeOptions ? ctx_r4.pageSizeOptions : \u0275\u0275pureFunction0(11, _c3))("hidePageSize", ctx_r4.hidePageSize)("pageIndex", ctx_r4.pageIndex);
  }
}
var columnMapping = {
  label: (data) => data.person?.label,
  description: (data) => data.person?.description,
  society: (data) => data.society?.label,
  name: (data) => data.name?.label
  // si besoin
};
var ProsopographyComponent = class _ProsopographyComponent {
  constructor() {
    this.database = inject(ProsopoDatabaseService);
    this.lang = inject(SelectedLangService);
    this.csv = inject(ArrayToCsvService);
    this.prosopography = "Prosopography Harmonia Universalis";
    this.displayedColumns = ["label", "description"];
    this.dataSource = new MatTableDataSource();
    this.behavior$ = new BehaviorSubject("");
    this.length = 50;
    this.pageSize = 25;
    this.pageIndex = 0;
    this.pageSizeOptions = [10, 25, 50, 100, 500, 1e3];
    this.hidePageSize = false;
    this.showPageSizeOptions = true;
    this.showFirstLastButtons = true;
    this.disabled = false;
    this.generalFilter = "";
    this.nameFilter = "";
    this.societyFilter = "";
    this.isMobile = window.innerWidth <= 600;
    this.societyOptions = [];
    this.selectedSociety = "";
    this.isSpinner = true;
    this.myLang = "%20.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22" + this.lang.selectedLang + "%22%2C%22en%22.%20%7D%0A%7D%0A";
  }
  getHeaderLabel(column) {
    switch (column) {
      case "label":
        return "Nom";
      case "description":
        return "Description";
      case "society":
        return "Soci\xE9t\xE9";
      default:
        return column;
    }
  }
  ngOnInit() {
    window.addEventListener("resize", () => {
      this.isMobile = window.innerWidth <= 600;
    });
    this.dataSource.filterPredicate = (data, filter) => {
      const parsed = JSON.parse(filter);
      const general = parsed.general;
      const name = parsed.name;
      const society = parsed.society;
      const generalMatch = (data.person?.label?.toLowerCase().includes(general) ?? false) || (data.person?.description?.toLowerCase().includes(general) ?? false);
      const nameMatch = data.name?.label ? data.name.label.toLowerCase().includes(name) : false;
      const societyMatch = !society || data.society?.label === society;
      return generalMatch && (name === "" || nameMatch) && societyMatch;
    };
    this.dataSource.sortingDataAccessor = (data, sortHeaderId) => columnMapping[sortHeaderId] ? columnMapping[sortHeaderId](data) || "" : typeof data[sortHeaderId] === "string" ? data[sortHeaderId] : "";
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
    let u = this.database.sparqlBuilding(this.myLang);
    let sparqlApiUrl = this.database.newSparqlAdress(u);
    this.database.initProsopoData(sparqlApiUrl);
    let dataService$ = this.database.getProsopoData();
    this.dataSource$ = combineLatest([this.behavior$, dataService$]).pipe(map((res) => {
      this.dataSource.filter = res[0];
      this.dataSource.data = res[1];
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource.data);
      return this.dataSource;
    }));
    this.dataSource$.subscribe((res) => {
      this.isSpinner = false;
      this.societyOptions = Array.from(new Set(this.dataSource.data.map((item) => item.society?.label).filter((label) => !!label)));
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  onClick(query) {
    let u = query;
    u = this.database.databaseToDownload(query);
    let v = this.csv.arrayToCsv(u);
    this.csv.downloadBlob(v, "_prosopo_harmonia_universalis", "text/csv;charset=utf-8;");
  }
  applyGeneralFilter(event) {
    this.generalFilter = event.target.value.trim().toLowerCase();
    this.applyCombinedFilter();
  }
  applyNameFilter(event) {
    this.nameFilter = event.target.value.trim().toLowerCase();
    this.applyCombinedFilter();
  }
  applyCombinedFilter() {
    this.dataSource.filter = JSON.stringify({
      general: this.generalFilter,
      name: this.nameFilter,
      society: this.societyFilter
    });
  }
  applySocietyFilter(value) {
    this.societyFilter = value;
    this.applyCombinedFilter();
  }
  handlePageEvent(e) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
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
    this.\u0275fac = function ProsopographyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProsopographyComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProsopographyComponent, selectors: [["phy"]], viewQuery: function ProsopographyComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatSort, 5);
        \u0275\u0275viewQuery(MatPaginator, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 43, vars: 12, consts: [["content", ""], ["paginator", ""], [1, "cardBackground"], [1, "prosopo-header"], [1, "prosopo-title"], [1, "search-center"], [3, "routerLink"], ["appearance", "outlined", 1, "mat-elevation-z12"], [1, "labelTitlePadding", "filter-bar"], [1, "filter-left"], ["appearance", "outline"], ["matInput", "", "placeholder", "Recherchez", 3, "keyup"], [1, "filter-right"], ["matInput", "", "placeholder", "Filtrez par nom", 3, "keyup"], ["placeholder", "Filtrez par soci\xE9t\xE9", 3, "selectionChange"], ["value", ""], [1, "styling-option", 3, "value"], [1, "mobile-sort-buttons"], ["mode", "indeterminate", "color", "primary", "diameter", "50", 2, "margin", "2rem auto", "display", "block"], [1, "mat-elevation-z8", "container"], ["mat-icon-button", "", "color", "primary", 1, "internalLink", 3, "click"], ["color", "primary", 3, "inline"], ["mat-button", "", 1, "sort-btn", 3, "color"], ["mat-button", "", 1, "sort-btn", 3, "click", "color"], ["mat-table", "", "matSort", "", "matSortActive", "label", "matSortDirection", "asc", 1, "mat-table", 3, "dataSource"], [3, "matColumnDef"], ["mat-header-row", "", "class", "mat-header-row", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", "class", "responsive-row", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page", 1, "demo-paginator", 3, "page", "length", "pageSize", "disabled", "showFirstLastButtons", "pageSizeOptions", "hidePageSize", "pageIndex"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "responsive-cell", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "responsive-cell"], [1, "label-with-icon"], [1, "text-muted"], ["mat-icon-button", "", "matTooltip", "Voir la personne dans la base de donn\xE9es", 1, "compact-icon-btn", 3, "routerLink"], ["color", "primary", 1, "small-icon", 3, "inline"], ["mat-icon-button", "", "matTooltip", "Voir la soci\xE9t\xE9 dans la base de donn\xE9es", 1, "compact-icon-btn", 3, "routerLink"], ["mat-header-row", "", 1, "mat-header-row"], ["mat-row", "", 1, "responsive-row"]], template: function ProsopographyComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "body")(1, "div", 2)(2, "div", 3)(3, "div", 4);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 5)(6, "a", 6);
        \u0275\u0275text(7, "Accueil");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "span");
        \u0275\u0275text(9, "\xA0|\xA0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "a", 6);
        \u0275\u0275text(11, "Bibliography");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "span");
        \u0275\u0275text(13, "\xA0|\xA0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "a", 6);
        \u0275\u0275text(15, "FactGrid");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(16, "mat-card", 7)(17, "mat-card-content", 2)(18, "div", 8)(19, "div", 9)(20, "mat-form-field", 10)(21, "input", 11);
        \u0275\u0275listener("keyup", function ProsopographyComponent_Template_input_keyup_21_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.applyGeneralFilter($event));
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "div", 12)(23, "mat-form-field", 10)(24, "input", 13);
        \u0275\u0275listener("keyup", function ProsopographyComponent_Template_input_keyup_24_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.applyNameFilter($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "mat-form-field", 10)(26, "mat-select", 14);
        \u0275\u0275listener("selectionChange", function ProsopographyComponent_Template_mat_select_selectionChange_26_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.applySocietyFilter($event.value));
        });
        \u0275\u0275elementStart(27, "mat-option", 15);
        \u0275\u0275text(28, "Aucun filtre de Soci\xE9t\xE9");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(29, ProsopographyComponent_For_30_Template, 2, 2, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "div");
        \u0275\u0275text(32);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(33, ProsopographyComponent_Conditional_33_Template, 3, 0, "div", 17)(34, ProsopographyComponent_Conditional_34_Template, 1, 0, "mat-progress-spinner", 18)(35, ProsopographyComponent_Conditional_35_Template, 8, 12, "div", 19);
        \u0275\u0275elementStart(36, "div")(37, "span")(38, "button", 20, 0);
        \u0275\u0275listener("click", function ProsopographyComponent_Template_button_click_38_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onClick(ctx.dataSource.filteredData));
        });
        \u0275\u0275elementStart(40, "mat-icon", 21);
        \u0275\u0275text(41, "download");
        \u0275\u0275elementEnd()();
        \u0275\u0275text(42, " \xA0\xA0\xA0\xA0\xA0\xA0 ");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.prosopography, " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(9, _c0));
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c1));
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(11, _c2));
        \u0275\u0275advance(15);
        \u0275\u0275repeater(ctx.societyOptions);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.dataSource.filteredData.length, " items ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isMobile ? 33 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isSpinner ? 34 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.isSpinner ? 35 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("inline", true);
      }
    }, dependencies: [MatCardModule, MatCard, MatCardContent, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatSelectModule, MatFormField, MatSelect, MatOption, MatSortModule, MatSort, MatSortHeader, MatProgressSpinnerModule, MatProgressSpinner, MatPaginatorModule, MatPaginator, MatInputModule, MatInput, RouterModule, RouterLink], styles: ['\n\n.mat-elevation-z8.container[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 16px;\n  border-radius: 4px;\n  padding: 12px 16px;\n  margin-bottom: 16px;\n  font-family:\n    "Oxygen",\n    Arial,\n    Helvetica,\n    sans-serif;\n}\n.filter-left[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-width: 220px;\n}\n.filter-right[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  justify-content: flex-end;\n  flex: 1 1 auto;\n}\n.filter-bar[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  min-width: 180px;\n  margin-bottom: 0;\n}\n.filter-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.filter-bar[_ngcontent-%COMP%]   .mat-select-value[_ngcontent-%COMP%] {\n  color: #222 !important;\n  font-family:\n    "Oxygen",\n    Arial,\n    Helvetica,\n    sans-serif;\n}\n.filter-bar[_ngcontent-%COMP%]   .mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%] {\n  color: #bdbdbd;\n  border-color: #bdbdbd;\n}\n.filter-bar[_ngcontent-%COMP%]   .mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%] {\n  border-color: #3f51b5;\n}\n.filter-bar[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%], \n.filter-bar[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  color: #222;\n}\n.filter-count[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n  margin-top: 8px;\n  font-size: 0.95em;\n  color: #666;\n}\n.label-with-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n}\n@media (max-width: 600px) {\n  .filter-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 8px;\n  }\n  .filter-left[_ngcontent-%COMP%], \n   .filter-right[_ngcontent-%COMP%] {\n    flex: 1 1 100%;\n    min-width: 0;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n  }\n  .filter-right[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n    align-items: stretch;\n  }\n  .filter-bar[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n  }\n  .mat-header-row[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 600px) and (max-width: 600px) {\n  .responsive-cell[_ngcontent-%COMP%] {\n    display: flex !important;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: flex-start;\n    width: 100%;\n    box-sizing: border-box;\n    padding: 4px 12px 12px 12px !important;\n    border: 0 none !important;\n    gap: 2px;\n    min-height: 0 !important;\n    vertical-align: top !important;\n  }\n  .responsive-cell[_ngcontent-%COMP%]::before {\n    content: attr(data-label) ": ";\n    font-weight: bold;\n    color: #666;\n    white-space: nowrap;\n    position: static;\n    line-height: 1.2;\n    margin: 0;\n    padding: 0;\n  }\n}\n@media (max-width: 600px) {\n  .responsive-row[_ngcontent-%COMP%] {\n    display: block;\n    overflow: hidden;\n    height: auto;\n    position: relative;\n    box-shadow:\n      0 2px 1px -1px rgba(0, 0, 0, 0.2),\n      0 1px 1px 0 rgba(0, 0, 0, 0.14),\n      0 1px 3px 0 rgba(0, 0, 0, 0.12);\n    border-radius: 3px;\n    margin-bottom: 24px;\n  }\n  .responsive-row[_ngcontent-%COMP%]    + .responsive-row[_ngcontent-%COMP%] {\n    margin-top: 24px;\n  }\n  mat-paginator[_ngcontent-%COMP%] {\n    margin-top: 24px;\n  }\n  .mobile-sort-buttons[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: nowrap;\n    gap: 2px;\n    justify-content: center;\n    margin-bottom: 12px;\n  }\n  .sort-btn[_ngcontent-%COMP%] {\n    min-width: unset;\n    padding: 2px 6px;\n    font-size: 0.95em;\n    line-height: 1.2;\n    border: none;\n    box-shadow: none;\n    background: transparent;\n  }\n  .sort-btn[_ngcontent-%COMP%]:focus {\n    outline: none;\n  }\n  .sort-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    margin-left: 2px;\n    font-size: 1em;\n  }\n}\n/*# sourceMappingURL=prosopography.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProsopographyComponent, { className: "ProsopographyComponent", filePath: "src\\app\\prosopography\\prosopography.component.ts", lineNumber: 39 });
})();
export {
  ProsopographyComponent
};
//# sourceMappingURL=prosopography.component-ZEYSTB2X.js.map
