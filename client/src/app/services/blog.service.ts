import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http: HttpClient) { }

  createPost(post: Post): any {
    return this.http.post<any>(`${environment.apiBaseUrl}` + '/posts/create', post)
      .pipe(map(res => {
        return res;
      }));
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<any>(`${environment.apiBaseUrl}` + '/posts')
      .pipe(map(res => {
        return res;
      }));
  }

  getPost(postId: number): Observable<Post[]> {
    return this.http.get<any>(`${ environment.apiBaseUrlQuery }` + `/posts/${postId}`)
      .pipe(map(res => {
        console.log('post: ', res)
        return res;
      }));
  }
}
