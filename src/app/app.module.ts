import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EsperimentiComponent } from './components/esperimenti/esperimenti.component';
import { EroeFormComponent } from './components/eroe-form/eroe-form.component';
import { EroeFormReattivoComponent } from './components/eroe-form-reattivo/eroe-form-reattivo.component';
import { ThrowerrorComponent } from './components/throwerror/throwerror.component';
import { RandomUserComponent } from './components/random-user/random-user.component';
import { FirstInterceptor } from './interceptors/first.interceptor';
import { SecondInterceptor } from './interceptors/second.interceptor';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    EsperimentiComponent,
    EroeFormComponent,
    EroeFormReattivoComponent,
    ThrowerrorComponent,
    RandomUserComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
   {provide: HTTP_INTERCEPTORS, useClass: FirstInterceptor, multi: true},
   {provide: HTTP_INTERCEPTORS, useClass: SecondInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
