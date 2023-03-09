import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {


  constructor(private httpClient:HttpClient) {}
  
  getArticles():Observable<Article[]>{
    return this.httpClient.get<Article[]>("https://localhost:7228/api/Article");
  }

  addArticle(article:any):Observable<Article>{
    return this.httpClient.post<Article>("https://localhost:7228/api/Article",article);
  }

  editArticle(article:any,id:any):Observable<Article>{
    return this.httpClient.put<Article>("https://localhost:7228/api/Article?id=" + id,article);
  }

  deleteArticle(id:any):Observable<Article[]>{
    return this.httpClient.delete<Article[]>("https://localhost:7228/api/Article?id=" + id);
  }


}


