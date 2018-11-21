import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  public currentBlog;
  public TotalBlogs = [
    {
      "Id": '1',
      "Title": 'Is quality rap dying?',
      'Genre': "Music/Art",
      'Author': "Ashish Badoni",
      'Date_Created': "21/10/2018",
      'Description': "Nas, Tupac, Biggie, Mobdeep, Rakim etc. are all gone, will the new gen keep it gangsta y'all?",
      'Poster': './assets/hip-hop.jpeg'
    },
    {
      "Id": '2',
      "Title": 'Where you should travel in your late 20s??',
      'Genre': "Travel",
      'Author': "Ashish Badoni",
      'Date_Created': "08/04/2018",
      'Description': "Travel the worls and the seven seas, Everybody is looking for something!!",
      'Poster': './assets/travel.jpg'
    },
    {
      "Id": '3',
      "Title": 'Celebrating the life of Alan Turing.',
      'Genre': "Technology",
      'Author': "Ashish Badoni",
      'Date_Created': "11/01/2018",
      'Description': "One of the greatest computer scientist of all time, let us celebrate by his life by 'imtitating' him!",
      'Poster': './assets/alan_turing.jpg'
    }
  ]
  constructor() {
    console.log("service constructor called!")
  }
  public getAllBlogs():any 
  {
    return this.TotalBlogs;
  }
  public getSingleBlog(currentBlogId): any {
    for (let blog of this.TotalBlogs) {
      if (blog.Id == currentBlogId) {
        this.currentBlog = blog;
      }
    }
    console.log("this is"+this.currentBlog)
    return this.currentBlog;
  }
}
