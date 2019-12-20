import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationThemeComponent } from './presentation-theme/presentation-theme.component';
import { PresentationComponent } from './presentation/presentation.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';


const appRoutes: Routes = [
  {path: 'presentation', component: PresentationComponent},
  {path: 'presentationTheme', component: PresentationThemeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PresentationThemeComponent,
    PresentationComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    MatTableModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
