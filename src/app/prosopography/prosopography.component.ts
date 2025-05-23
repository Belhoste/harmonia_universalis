import { Component, OnInit, AfterViewInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable, BehaviorSubject, combineLatest, map } from 'rxjs';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { ProsopoDatabaseService } from './prosopo-database.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SelectedLangService } from '../selected-lang.service';
import { ArrayToCsvService } from '../services/array-to-csv.service';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

export interface Prosopo {
  person: { label: string, description: string, id: string };
  name: { label: string, id: string };
  society: { label: string, id: string };
}

const columnMapping = {
  label: (data) => data.person?.label,
  description: (data) => data.person?.description,
  society: (data) => data.society?.label,
  name: (data) => data.name?.label, // si besoin
};

@Component({
  selector: 'app-prosopogra^phy',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatTableModule, MatSelectModule, MatSortModule, MatProgressSpinnerModule, MatPaginatorModule, MatInputModule, RouterModule],
  templateUrl: './prosopography.component.html',
  styleUrl: './prosopography.component.scss'
})
export class ProsopographyComponent implements OnInit, AfterViewInit {

  private database = inject(ProsopoDatabaseService);
  private lang = inject(SelectedLangService);
  private csv = inject(ArrayToCsvService);

  prosopography: string = "Prosopography Harmonia Universalis";

  displayedColumns: string[] = ['label', 'description'];
  dataSource = new MatTableDataSource<Prosopo>();
  dataSource$: Observable<any>;

  behavior$ = new BehaviorSubject<string>('');

  length = 50;
  pageSize = 25;
  pageIndex = 0;
  pageSizeOptions = [10, 25, 50, 100, 500, 1000];
  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent: PageEvent;

  generalFilter: string = '';
  nameFilter: string = '';
  societyFilter: string = '';

  isMobile = window.innerWidth <= 600;

  societyOptions: string[] = [];
  selectedSociety: string = '';



  isSpinner: boolean = true;

  //selectedLang: string = (localStorage['selectedLang'] === undefined) ? "en" : localStorage['selectedLang'];
  myLang: string = "%20.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22" + this.lang.selectedLang + "%22%2C%22en%22.%20%7D%0A%7D%0A";

  getHeaderLabel(column: string): string {
    switch (column) {
      case 'label': return 'Nom';
      case 'description': return 'Description';
      case 'society': return 'Société';
      default: return column;
    }
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {

    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 600;
    });

    this.dataSource.filterPredicate = (data: Prosopo, filter: string) => {
      const parsed = JSON.parse(filter);
      const general = parsed.general;
      const name = parsed.name;
      const society = parsed.society;

      const generalMatch =
        (data.person?.label?.toLowerCase().includes(general) ?? false) ||
        (data.person?.description?.toLowerCase().includes(general) ?? false);

      const nameMatch = data.name?.label
        ? data.name.label.toLowerCase().includes(name)
        : false;

      const societyMatch = !society || data.society?.label === society;

      return generalMatch && (name === '' || nameMatch) && societyMatch;
    };

    

    this.dataSource.sortingDataAccessor = (data, sortHeaderId) =>
      columnMapping[sortHeaderId]
        ? columnMapping[sortHeaderId](data) || ''
        : (typeof data[sortHeaderId] === 'string' ? data[sortHeaderId] : '');


    this.dataSource.sortData = (data, sort) => {   // pour tenir compte des accents et de la casse
      const active = sort.active;
      const direction = sort.direction;
      if (!active || direction === '') {
        return data;
      }
      return data.slice().sort((a, b) => {
        const valueA = this.dataSource.sortingDataAccessor(a, active);
        const valueB = this.dataSource.sortingDataAccessor(b, active);
        // Utilise localeCompare pour un tri français insensible à la casse et aux accents
        const comparison = (valueA as string).localeCompare(valueB as string, 'fr', { sensitivity: 'base' });
        return direction === 'asc' ? comparison : -comparison;
      });
    };

    let u = this.database.sparqlBuilding(this.myLang);
    let sparqlApiUrl = this.database.newSparqlAdress(u);


    // Initialisation conditionnelle du cache
    this.database.initProsopoData(sparqlApiUrl);

    let dataService$ = this.database.getProsopoData(); // observable sur la donnée en cache

    this.dataSource$ = combineLatest([this.behavior$, dataService$]).pipe(
      map(res => {
        this.dataSource.filter = res[0];
        this.dataSource.data = res[1];
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.dataSource.data);
        return this.dataSource
      }));

    this.dataSource$.subscribe(res => {
      this.isSpinner = false;
      // Extraction des labels uniques de société
      this.societyOptions = Array.from(
        new Set(this.dataSource.data
          .map((item: Prosopo) => item.society?.label)
          .filter(label => !!label))
      );
    });

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onClick(query) { //handling click for downlooding the filtered data
    let u = query;
    u = this.database.databaseToDownload(query);
    let v = this.csv.arrayToCsv(u);
    this.csv.downloadBlob(v, "_prosopo_harmonia_universalis", "text/csv;charset=utf-8;")
  }


  applyGeneralFilter(event: Event) {
    this.generalFilter = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.applyCombinedFilter();
  }

  applyNameFilter(event: Event) {
    this.nameFilter = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.applyCombinedFilter();
  }

  applyCombinedFilter() {
    this.dataSource.filter = JSON.stringify({
      general: this.generalFilter,
      name: this.nameFilter,
      society: this.societyFilter
    });
  }

  applySocietyFilter(value: string) {
    this.societyFilter = value;
    this.applyCombinedFilter();
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  setSort(column: string) {
    if (this.sort.active === column) {
      this.sort.direction = this.sort.direction === 'asc' ? 'desc' : 'asc';
    } else {
      this.sort.active = column;
      this.sort.direction = 'asc';
    }
    this.sort.sortChange.emit({ active: this.sort.active, direction: this.sort.direction });
  }
}

