import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtrar-tabela',
  templateUrl: './filtrar-tabela.component.html',
  styleUrls: ['./filtrar-tabela.component.scss']
})
export class FiltrarTabelaComponent implements OnInit {

  @Output() atualizar: EventEmitter<any> = new EventEmitter<any>();
  @Input() lista: any = []
  @Input() headers: any = []

  listaTotal: any = []
  termoPesquisado: string = ''

  constructor() { }

  onKeyEnter() {
    if (this.termoPesquisado == '') return this.atualizar.emit(this.listaTotal)

    this.lista = this.listaTotal
    let listaTem: any = []
    this.lista.forEach((item: any) => {
      console.log('index1')
      let index = this.headers.findIndex((_: any) => {
        return ('' + item[_.data]).toLocaleUpperCase().includes(this.termoPesquisado.toUpperCase())
      })
      console.log('index2')
      console.log(index)
      if (index >= 0) {
        listaTem.push(item)
      }
    });

    this.atualizar.emit(listaTem)
  }

  onKeyEsc() {
    this.termoPesquisado = ''
    this.atualizar.emit(this.listaTotal)
  }

  ngOnInit(): void {
    this.listaTotal = [...this.lista]
  }

}
