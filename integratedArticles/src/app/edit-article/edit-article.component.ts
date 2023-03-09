import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styles: [
  ]
})
export class EditArticleComponent {
  articleData :any;
  articleModel:any;
  message:any;
  flag = false;

  id:any;
  title:any;
  category:any;

  constructor(private router:Router, private route:ActivatedRoute, private articleService:ArticleService){}

  ngOnInit(): void {
      this.articleData = this.route.snapshot.paramMap.get('articleData');
  
      this.articleModel = JSON.parse(this.articleData);
      console.log(this.articleData);
  }

  edit(data:any){
    console.log(data);
    let article = new Article(data.id,data.title,data.category);
   
    this.articleData=this.route.snapshot.paramMap.get("articleData");
    this.articleModel = JSON.parse(this.articleData);
    this.articleService.editArticle(article,this.articleModel.id).subscribe((data: any) => {
      this.articleModel=data;
      this.message = "Data that you have edited has been updated successfully";
      this.flag = true;
      this.router.navigate(['articleList']);
    });
  }





}
