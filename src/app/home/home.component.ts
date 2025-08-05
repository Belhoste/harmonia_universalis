import { Component, OnInit, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HuDatabaseService } from '../harmonia-universalis/services/hu-database.service';
import { ProsopoDatabaseService } from  '../prosopography/prosopo-database.service';
import { SelectedLangService } from '../selected-lang.service';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private huDatabase = inject(HuDatabaseService);
  private lang = inject(SelectedLangService);
  private prosopoDatabase = inject(ProsopoDatabaseService);

  private myLang: string = "%20.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22" + this.lang.selectedLang + "%22%2C%22en%22.%20%7D%0A%7D%0A";

  ngOnInit(): void {
   const sparqlhuDatabaseUrl = this.huDatabase.sparqlBuilding(this.myLang);
    const sparqlApihuDatabaseUrl = this.huDatabase.newSparqlAdress(sparqlhuDatabaseUrl);
    this.huDatabase.loadBiblioData(sparqlApihuDatabaseUrl); // déclenche la requête et alimente le cache

    const sparqlprosopoDatabaseUrl = this.prosopoDatabase.sparqlBuilding(this.myLang);
    const sparqlApiprosopoDatabaseUrl = this.prosopoDatabase.newSparqlAdress(sparqlprosopoDatabaseUrl);
    this.prosopoDatabase.loadProsopoData(sparqlApiprosopoDatabaseUrl); // déclenche la requête et alimente le cache 

  }

}


