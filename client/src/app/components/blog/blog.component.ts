import { Component, OnInit } from '@angular/core';
import { BlogService } from "../../services/blog.service";
import { Post } from "../../models/post";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  postData: any = new Post();
  postId: any;

  constructor(private blogService: BlogService, private route: ActivatedRoute) {
    if (this.route.snapshot.params['id']) {
      this.postId = this.route.snapshot.paramMap.get('id');
    }
  }

  ngOnInit(): void {
    this.blogService.getPost(this.postId)
      .subscribe(
        (result) => {
          this.postData = result;
        }
      );
  }

  reloadComponents(isReload: boolean) {
    if (isReload === true) {
      this.ngOnInit();
    }
  }

}
