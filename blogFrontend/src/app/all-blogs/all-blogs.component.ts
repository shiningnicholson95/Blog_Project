import { Component, OnInit,OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';
@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.css']
})
export class AllBlogsComponent implements OnInit,OnDestroy {
public TotalBlogs;
  constructor(public blogService:BlogService) { 
    console.log("All blogs contructor called through services")
  }

  ngOnInit() {
    console.log("AllBlogs component called")
    this.TotalBlogs=this.blogService.getAllBlogs();
    console.log(this.TotalBlogs)
  }
  ngOnDestroy(){
    console.log("All Blogs component Destroyed.")
  }

}
