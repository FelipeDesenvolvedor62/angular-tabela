import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelaComponent } from './componentes/tabela';
import { FiltrarTabelaComponent } from './componentes/filtrar-tabela';
import { ProdutosComponent } from './paginas/produtos';
import { TituloComponent } from './componentes/titulo/titulo.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelaComponent,
    FiltrarTabelaComponent,
    ProdutosComponent,
    TituloComponent
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
