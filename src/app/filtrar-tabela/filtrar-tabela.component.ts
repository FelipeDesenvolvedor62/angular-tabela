import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtrar-tabela',
  templateUrl: './filtrar-tabela.component.html',
  styleUrls: ['./filtrar-tabela.component.scss']
})
export class FiltrarTabelaComponent implements OnInit {

  @Output() atualizar: EventEmitter<any> = new EventEmitter<any>();
  @Input() valores: any = []
  @Input() headers: any = []

  listaTotal: any = []
  texto: string = ''

  constructor() { }

  onKeyEnter() {
    if (this.texto == '') return this.atualizar.emit(this.listaTotal)

    this.valores = this.listaTotal
    console.log('Inicio')
    console.log(this.valores)
    console.log('Fim -filho')
    let listaTem: any = []
    this.valores.forEach((item: any, index: any) => {
      this.headers.forEach((cab: any) => {
        if (('' + item[cab.data]).toLocaleUpperCase().includes(this.texto.toUpperCase())) {
          listaTem.push(item)
        }
      })
    });

    this.atualizar.emit(listaTem)
  }

  onKeyEsc() {
    this.texto = ''
    this.atualizar.emit(this.listaTotal)
  }

  ngOnInit(): void {
    this.listaTotal = [...this.valores]
  }

}
