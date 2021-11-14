import { Component } from '@angular/core';
import { Post } from '../../models/post';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent {
  blogPost: Post[] = [];
  constructor(private blogService: BlogService) {
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.blogService.getPosts()
      .subscribe(result => {
        Object.values(result).map(post => {
          this.blogPost.push(post);
        })
      });
  }
}
