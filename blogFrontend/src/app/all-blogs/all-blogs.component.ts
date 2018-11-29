import { Component, OnInit,OnDestroy } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.css']
})
export class AllBlogsComponent implements OnInit,OnDestroy {
public TotalBlogs;
  constructor(public blogHttpService:BlogHttpService) { 
    console.log("All blogs contructor called through http services")
  }

  ngOnInit() {
    console.log("AllBlogs component called")
   // this.TotalBlogs=this.blogHttpService.getAllBlogs();
this.TotalBlogs = this.blogHttpService.getAllBlogs().subscribe(
  data =>{
    console.log(data);
    this.TotalBlogs = data["data"];
  },
  error =>{
    console.log('Some error occured')
    console.log(error.errorMessage);
  }
)
console.log(this.TotalBlogs)

  }
  ngOnDestroy(){
    console.log("All Blogs component Destroyed.")
  }

}
