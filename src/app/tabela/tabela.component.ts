import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit {

  @Input() headers: any = [];
  @Input() valores: any = []
  @Input() actions: any = []
  @Input() tituloFilho: any = [];

  @Output() atualizar: EventEmitter<any> = new EventEmitter<any>();

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
    console.log(item)
    alert('Olha no cosole !!!')
  }

  onClickExcluir(id: any) {
    this.valores = this.valores.filter((x: any, index: any): any => index != id)
    this.atualizar.emit(this.valores);
  }

  onClickImprimir() {
    window.print()
  }
  ngOnInit(): void {
  }
}
