import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ChangeDetectionStrategy, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';
import { SetDataService } from '../services/set-data.service';
import { ArrayToCsvService} from '../services/array-to-csv.service';
import { HuDatabaseService } from './services/hu-database.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PageEvent, MatPaginatorModule } from '@angular/material/paginator';
import { SelectedLangService } from '../selected-lang.service';
import { MatTooltipModule } from '@angular/material/tooltip';

export interface HU {
  author:{ label:string, id:string };
  title:{ label:string, id:string  };
  location:{ label:string, id:string };
  date:{ value:string };
}

const columnMapping = {
  author: (data) => data.author?.label,
  title: (data) => data.title?.label,
  location: (data) => data.location?.label,
  date: (data) => data.date?.value,
};


@Component({
  selector: 'app-harmonia-universalis',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    RouterModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatTooltipModule
  ],
  templateUrl: './harmonia-universalis.component.html',
  styleUrl: './harmonia-universalis.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HarmoniaUniversalisComponent implements OnInit {
  private database = inject(HuDatabaseService);
  private _liveAnnouncer = inject(LiveAnnouncer);
  private csv = inject(ArrayToCsvService);
  private lang = inject(SelectedLangService);

  public readonly displayedColumns:string[] = ['author','title','location','date'];

  dataSource: MatTableDataSource<HU> = new MatTableDataSource;
  dataSource$: Observable<any>;

  filtered;

  isMobile = window.innerWidth <= 600;


  biblioHU:string = "Bibliography Harmonia Universalis";

  authorHeader:string ="Author";
  titleHeader:string = "Title";
  locationHeader:string ="Location";
  dateHeader:string ="Date";

  behavior$ = new BehaviorSubject<string>('');

  length = 50;
  pageSize = 25;
  pageIndex = 0;
  pageSizeOptions = [10, 25, 50, 100, 500, 1000];
  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent:PageEvent;

  isSpinner: boolean = true;

  //selectedLang: string = (localStorage['selectedLang'] === undefined) ? "en" : localStorage['selectedLang'];
  myLang:string = "%20.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22"+this.lang.selectedLang+"%22%2C%22en%22.%20%7D%0A%7D%0A";


@ViewChild(MatSort)
sort: MatSort;

@ViewChild("paginator")
  paginator;

  getHeaderLabel(column: string): string {
    switch (column) {
      case 'author': return this.authorHeader;
      case 'title': return this.titleHeader;
      case 'location': return this.locationHeader;
      case 'date': return this.dateHeader;
      default: return column;
    }
  }

  ngOnInit() {

    this.isSpinner = true; // Affiche le spinner
    console.log('Spinner ON');

    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 600;
    });

    this.dataSource.sortingDataAccessor = (data, sortHeaderId) =>
      columnMapping[sortHeaderId]
        ? columnMapping[sortHeaderId](data) || ''
        : data[sortHeaderId] || '';

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

  this.biblioHU = this.lang.getTranslation('biblioHu',this.lang.selectedLang);

  this.authorHeader = this.lang.getTranslation('authorHeader', this.lang.selectedLang);
    this.titleHeader = this.lang.getTranslation('titleHeader', this.lang.selectedLang);
    this.locationHeader = this.lang.getTranslation('locationHeader', this.lang.selectedLang);
    this.dateHeader = this.lang.getTranslation('dateHeader', this.lang.selectedLang);
  
  let u = this.database.sparqlBuilding(this.myLang);
  let sparqlApiUrl = this.database.newSparqlAdress(u);

  // Initialisation conditionnelle du cache
  this.database.initBiblioData(sparqlApiUrl);

  let dataService$ = this.database.getBiblioData(); // observable sur la donnée en cache


    this.dataSource$ = combineLatest([this.behavior$, dataService$]).pipe(
      map(res => {
        this.dataSource.filter = res[0];
        this.dataSource.data = res[1];
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
       return this.dataSource }));

    this.dataSource$.subscribe(res => {
      console.log('Spinner OFF');
      this.isSpinner = false;
    
      // Force la détection pour que MatSort prenne en compte les nouvelles données
    //  this.cdr.detectChanges();
    });

}


onClick(query){ //handling click for downlooding the filtered data
 let u= query;
 u = this.database.databaseToDownload(query);
 let v= this.csv.arrayToCsv(u);
 this.csv.downloadBlob(v, "biblio_harmonia_universalis", "text/csv;charset=utf-8;")
    }

applyFilter(event) {
 const filterValue = event.target.value.trim().toLowerCase();
 this.dataSource.filter = filterValue;
 this.dataSource.filteredData;
 this.filtered = this.dataSource.filteredData[0].author.label
}

handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
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
