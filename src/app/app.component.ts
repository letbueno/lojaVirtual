import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lojaVirtual';
  produtos = [{ // o array de produtos que existem para serem comprados e seus atributos
    nome: "Produto 1",
    qtd: 1,
    valor: 100
  },
  {
    nome: "Produto 2",
    qtd: 1,
    valor: 150
  }];

  carrinho =[]; // array do carrinho
  somaCarrinho = 0; // variável para a soma dos valores dos produtos no carrinho


adicionarCarrinho(produto){ // função para adicionar os produtos comprados no carrinho

    if(this.carrinho.indexOf(produto) === -1){ // verificação que se não existir esse item já no carrinho, ele adiciona
      this.carrinho.push(produto);
    
    }
    else{ // caso exista, apenas aumentar a quantidade dele no carrinho e alteração do valor conforme o valor a quantidade
      produto.qtd +=1; // aumentando a quantidade do produto no carrinho
     
      
      
    }
    this.somaCarrinho+=produto.valor; // a soma do carrinho por cada valor e quantidade no carrinho
    
}
}
