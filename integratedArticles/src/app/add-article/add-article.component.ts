import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styles: [
  ]
})
export class AddArticleComponent {

  title = 'NDF';

  constructor(private formBuilder:FormBuilder, private router:Router, private articleService:ArticleService){}

  articleForm = this.formBuilder.group({
    title:['',[Validators.required,Validators.pattern('[A-Z]{1}[a-zA-z\\s]*'),Validators.minLength(5)]],
    category:['',Validators.required],
 
  })


  get controls(){
    return this.articleForm.controls; 
  }

  articleModel:any;
  
  submitForm(data:any){
    console.log(data);
    let article= new Article(data.id,data.title,data.category);
   
    this.articleService.addArticle(article).subscribe(
      data=>{
        this.articleModel=data;
        alert("article added");
        this.router.navigate(['articleList']);
      }
    )
    console.log(article);
  }

}
