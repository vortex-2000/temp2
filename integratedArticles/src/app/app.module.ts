import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, components } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { DeleteArticleComponent } from './delete-article/delete-article.component';

@NgModule({
  declarations: [
    AppComponent,
 
    HeaderComponent,
    FooterComponent,
   
    components,
        EditArticleComponent,
        DeleteArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
