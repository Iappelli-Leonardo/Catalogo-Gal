import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MediatorService } from '../mediator.service';
import { Prodotto } from '../prodotto';

@Component({
  selector: 'app-form-panel',
  templateUrl: './form-panel.component.html',
  styleUrls: ['./form-panel.component.css']
})
export class FormPanelComponent implements OnInit {
  @Output() contaEvent = new EventEmitter<string>();
  @Output() cercaEvent = new EventEmitter<string>();
  @Input() inputCodice: string;
  @Input() inputDescrizione: string;
  @Input() inputPrezzo: string;

  codice: string;
  descrizione: string;
  prezzo: string;
  prodotto: Prodotto = new Prodotto();


  constructor(public med: MediatorService) { }

  ngOnInit(): void {
    this.codice = this.inputCodice;
    this.descrizione = this.inputDescrizione;
    this.prezzo = this.inputPrezzo;
  }

  aggiungi() {
    this.med.listaProdotti.push(this.prodotto);
    console.log("Prodotto aggiunto al catalogo: ", this.prodotto.codice, this.prodotto.descrizione, this.prodotto.prezzo);
    this.prodotto = new Prodotto();
  }

  ricerca() {
    console.log("Premuto tasto ricerca");
    this.cercaEvent.emit("Siamo in cercaEvent");
  }

  conta() {
    console.log("Premuto tasto conta");
    this.contaEvent.emit("Siamo in contaEvent");

  }
}
