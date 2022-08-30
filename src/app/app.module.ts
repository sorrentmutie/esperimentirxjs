import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EsperimentiComponent } from './components/esperimenti/esperimenti.component';
import { EroeFormComponent } from './components/eroe-form/eroe-form.component';
import { EroeFormReattivoComponent } from './components/eroe-form-reattivo/eroe-form-reattivo.component';

@NgModule({
  declarations: [
    AppComponent,
    EsperimentiComponent,
    EroeFormComponent,
    EroeFormReattivoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
