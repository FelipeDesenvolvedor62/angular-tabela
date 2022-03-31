import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit {

  @Input() headers: any = [];
  @Input() lista: any = []
  @Input() tituloFilho: any = [];

  actions: any = [
    { id: 1, label: 'Editar', icone: "../../assets/icon/pencil.svg" },
    { id: 2, label: 'Excluir', icone: "../../assets/icon/trash.svg" },
    { id: 3, label: 'Imprimir', icone: "../../assets/icon/printer.svg" }
  ]

  @Output() atualizar: EventEmitter<any> = new EventEmitter<any>();
  @Output() editar: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  onClick(tipo: number, id?: any, item?: any) {
    switch (tipo) {
      case 1:
        this.onClickEditar(item)
        break
      case 2:
        this.onClickExcluir(id)
        break
      case 3:
        this.onClickImprimir()
        break
    }

  }

  tipoVarieavel(variavel: any) {
    return typeof (variavel) == 'number';
  }

  onClickEditar(item: any) {
    this.editar.emit(item);
  }

  onClickExcluir(id: any) {
    this.lista = this.lista.filter((x: any, index: any): any => index != id)
    this.atualizar.emit(this.lista);
  }

  onClickImprimir() {
    window.print()
  }
  ngOnInit(): void {
  }
}
