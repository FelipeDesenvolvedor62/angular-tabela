import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Produto } from './model/produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  model: Produto = new Produto()
  caminho = [
    {rota: '', label: 'Home'},
    {rota: 'Produto', label: 'Formúlario de produto'},
  ]

  headers: any = [
    { label: 'Código', data: 'id' },
    { label: 'Descrição', data: 'descricao' },
    { label: 'Quantidae', data: 'quantidade' },
    { label: 'Preço', data: 'valor' },
    { label: 'Total', data: 'total' }
  ];

  produtos: any = [
    { id: 1, descricao: 'Bola', quantidade: 10, valor: 20.00, total: 200.00 },
    { id: 2, descricao: 'Carro', quantidade: 10, valor: 30.00, total: 300.00 },
    { id: 3, descricao: 'Boneca', quantidade: 10, valor: 50.00, total: 500.00 },
    { id: 4, descricao: 'Pula corda', quantidade: 10, valor: 25.00, total: 250.00 },
    { id: 5, descricao: 'Pião', quantidade: 10, valor: 5.00, total: 50.00 },
    { id: 6, descricao: 'Pipa', quantidade: 10, valor: 15.00, total: 150.00 },
  ]

  atualizarListaComTermoDeBusca(produtos: any) {
    this.produtos = [...produtos];
  }

  editarProduto(produto: any) {
    this.model = { ...produto };
  }

  salvar() {
    if (!this.validarProdutoAntesDeGravar()) return;

    let index = this.produtos.findIndex((_: any) => _.id == this.model.id)

    if (index >= 0) {
      this.produtos[index] = { ...this.model };
    } else {
      this.model.id = this.produtos.length + 1
      this.produtos.unshift(this.model)
    }

    this.model = new Produto()
  }

  validarProdutoAntesDeGravar(): boolean {
    if (this.model.descricao !== '' &&
      this.model.quantidade > 0 &&
      this.model.valor > 0) {
      return true
    }
    alert('Preencha os campos corretamente')
    this.model = new Produto()
    return false
  }
  constructor() { }

  ngOnInit(): void { }

}

