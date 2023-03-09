import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-delete-article',
  templateUrl: './delete-article.component.html',
  styles: [
  ]
})
export class DeleteArticleComponent {

  articleData:any;
  constructor(private route:ActivatedRoute,private router: Router, private service:ArticleService){}

  ngOnInit():void{
    this.articleData=this.route.snapshot.paramMap.get("articleData");
    console.log(this.articleData);
    let id=this.route.snapshot.paramMap.get("id");
   
    this.service.deleteArticle(id).subscribe(
      data=>{
        this.router.navigate(['articleList']);
      }
    )
  }

}
