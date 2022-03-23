import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  headers: any = [
    { label: 'Código', data: 'id' },
    { label: 'Descrição', data: 'descProd' },
    { label: 'Quantidae', data: 'quantidade' },
    { label: 'Preço', data: 'valor' },
    { label: 'Total', data: 'total' }
  ];

  valores: any = [
    { id: '001', descProd: 'Bola', quantidade: 10, valor: '20,00', total: '200,00' },
    { id: '002', descProd: 'Carro', quantidade: 10, valor: '30,00', total: '300,00' },
    { id: '003', descProd: 'Boneca', quantidade: 10, valor: '50,00', total: '500,00' },
    { id: '004', descProd: 'Pula corda', quantidade: 10, valor: '25,00', total: '250,00' },
    { id: '005', descProd: 'Pião', quantidade: 10, valor: '5,00', total: '50,00' },
    { id: '006', descProd: 'Pipa', quantidade: 10, valor: '15,00', total: '150,00' },
  ]

  actions: any = [
    { id: 1, label: 'Editar', icone: "../../assets/icon/pencil.svg" },
    { id: 2, label: 'Excluir', icone: "../../assets/icon/trash.svg" },
    { id: 3, label: 'Imprimir', icone: "../../assets/icon/printer.svg" }
  ]

  atualizarLista(lista: any) {
    console.log(lista);

    this.valores = [...lista];
  }

  constructor() { }

  ngOnInit(): void { }

}
