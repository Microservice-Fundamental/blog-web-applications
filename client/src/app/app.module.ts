import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { NarBarComponent } from './components/nar-bar/nar-bar.component';
import { NgMaterialModule } from "./ng-material/ng-material.module";
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { BlogEditComponent } from './components/blog-edit/blog-edit.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AuthorProfileComponent } from './components/author-profile/author-profile.component';
import { CommentsComponent } from './components/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    NarBarComponent,
    BlogCardComponent,
    BlogEditComponent,
    AuthorProfileComponent,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgMaterialModule,
    CKEditorModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'addpost', component: BlogEditComponent },
      { path: 'page/:pagenum', component: HomeComponent },
      { path: 'blog/:id/:slug', component: BlogComponent },
      { path: '**', component: HomeComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
