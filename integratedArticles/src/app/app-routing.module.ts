import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from './add-article/add-article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { DeleteArticleComponent } from './delete-article/delete-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';

const routes: Routes = [
  {path:"", redirectTo:"articleList",pathMatch:"full"},
  {path:"articleList", component:ArticleListComponent},
  {path:"addArticle",component:AddArticleComponent},
  {path:"editArticle",component:EditArticleComponent},
  {path:"deleteArticle/:id",component:DeleteArticleComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const components=[ArticleListComponent,AddArticleComponent,EditArticleComponent,DeleteArticleComponent]