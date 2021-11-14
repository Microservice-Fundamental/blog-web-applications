import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Comments } from '../models/comment';
import {Observable} from "rxjs";
import {Post} from "../models/post";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  saveComment(comment: Comments): any {
    return this.http.post<any>(`${environment.apiBaseUrlComment}` + `/posts/${comment.postId}/comments`, comment)
      .pipe(map(res => {
        return res;
      }));
  }
  getAllCommentsForBlog(postId: number): Observable<Post[]> {
    return this.http.get<any>(`${environment.apiBaseUrlComment}` + `/posts/${postId}/comments`)
      .pipe(map(res => {
        return res;
      }));
  }
}
