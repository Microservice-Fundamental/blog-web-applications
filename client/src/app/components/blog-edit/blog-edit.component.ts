import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { Post } from "../../models/post";

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.scss']
})
export class BlogEditComponent implements OnInit {
  ckeConfig: any;
  Editor: any;
  postData = new Post();

  constructor(private blogService: BlogService,
              private router: Router) {
    this.Editor = ClassicEditor;
  }

  ngOnInit(): void {
  }

  saveBlogPost() {
    this.blogService.createPost(this.postData).subscribe(
      () => {
        this.router.navigate(['/']);
      }
    );
  }
}
