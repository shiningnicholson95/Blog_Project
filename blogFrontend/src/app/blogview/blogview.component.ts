import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service'
@Component({
  selector: 'app-blogview',
  templateUrl: './blogview.component.html',
  styleUrls: ['./blogview.component.css']
})
export class BlogviewComponent implements OnInit, OnDestroy {
  public currentBlog;
  constructor(private _route: ActivatedRoute, private router: Router, public blogService:BlogService,public blogHttpService:BlogHttpService) {
    console.log("constructor of blogview called!")
  }

  ngOnInit() {
    console.log("ng oninit called!")
    let blogId = this._route.snapshot.paramMap.get("Id");
    console.log(blogId);
    this.currentBlog=this.blogService.getSingleBlog(blogId)
  }
  ngOnDestroy() {
    console.log("blog view destroyed")
  }
}
