import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediatorService } from '../mediator.service';
import { Prodotto } from '../prodotto';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  chiaveDiRicerca: string; //""
  listaProdottiFiltrata: Prodotto[] = [];
  visListaCompleta: boolean = true;
  visListaFiltrata: boolean = false;
  constructor(public med: MediatorService, private router: Router) { }

  ngOnInit(): void {
  }

  cerca() {
    this.visListaCompleta = false;
    this.visListaFiltrata = true;
    this.listaProdottiFiltrata = this.med.listaProdotti;
    this.listaProdottiFiltrata = this.listaProdottiFiltrata.filter(p => p.descrizione.startsWith(this.chiaveDiRicerca) || p.codice.startsWith(this.chiaveDiRicerca) || p.prezzo.startsWith(this.chiaveDiRicerca));
    console.log(this.listaProdottiFiltrata);
  }

  cancella (i: number){
    
    this.listaProdottiFiltrata.splice(i,1);
    this.med.listaProdotti.splice(i,1);
  }

  mainPage() {
    this.router.navigateByUrl("/main-page");
  }

}
