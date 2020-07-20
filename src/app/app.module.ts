import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// NgRx
import {StoreModule} from '@ngrx/store';
import {appReducers} from "./app.reducer";
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {AppComponent} from './app.component';
import {TodosModule} from "./todos/todos.module";
import {FooterComponent} from "./footer/footer.component";
import {environment} from "../environments/environment";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TodosModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
