import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AllBlogsComponent } from './all-blogs/all-blogs.component';
import { BlogviewComponent } from './blogview/blogview.component';
import { BlogService } from './blog.service'
import { BlogHttpService } from './blog-http.service';
import {HttpClientModule}  from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    AllBlogsComponent,
    BlogviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'allBlogs', component: AllBlogsComponent },
      { path: 'blog/:Id', component: BlogviewComponent }

    ],
  )

  ],
  providers: [BlogService,BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
