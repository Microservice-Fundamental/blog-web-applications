import { Component, OnInit, Input } from '@angular/core';
import { Comments } from "../../models/comment";
import { CommentService } from "../../services/comment.service";
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  public comments = new Comments();
  @Input() commentList: any;
  @Input() blogId: any;
  @Output() reloadPostComponent = new EventEmitter<boolean>();

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    // this.getAllComments();
  }

  onCommentPost(commentForm: any) {
    this.comments.postId = this.blogId;
    this.commentService.saveComment(this.comments).subscribe(
      () => {
        commentForm.resetForm();
        this.reloadPostComponent.emit(true);
      }
    );
  }

  // getAllComments() {
  //   this.commentService.getAllCommentsForBlog(this.blogId)
  //     .subscribe(result => {
  //       Object.values(result).map(comment => {
  //         return this.commentList.push(comment);
  //       })
  //     });
  // }

}
