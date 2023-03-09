import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styles: [
  ]
})
export class ArticleListComponent implements OnInit{

  constructor(private myService:ArticleService, private router:Router){}

  articles:Article[] = [];

  ngOnInit(): void {

    this.myService.getArticles().subscribe(
      (      data: Article[]) => this.articles = data
    )


 
}

editArticle(article:any){
  //this.router.navigate('editArticle',article);

  this.router.navigate(['editArticle', {articleData:JSON.stringify(article)}]);
}  

deleteArticle(articleid:any){
  let result= confirm("u sure?");
  if(result){
  this.router.navigate(['deleteArticle',articleid]);
  }
}
}
