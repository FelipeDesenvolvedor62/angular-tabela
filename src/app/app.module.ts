import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelaComponent } from './tabela/tabela.component';
import { FiltrarTabelaComponent } from './filtrar-tabela/filtrar-tabela.component';
import { ProdutosComponent } from './produtos/produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelaComponent,
    FiltrarTabelaComponent,
    ProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
