/*
SIDENOTE: the rxjs mofo is gonna give you headache coz of compatibility issue to avoid that get the command npm i rxjs-compat running
SHIYYYAATTTT!
*/
import { Injectable } from '@angular/core';
// importing http requests functionality
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do'; // this was a big mofo to get out of my back but i did it nonetheless. the problem was
//that the above 
@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {
  public allBlogs;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
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
  constructor(private _http:HttpClient) {
    console.log("blog http service was called");
  }
  public getAllBlogs(): any {
    let myResponse = this._http.get(this.baseUrl+'/all?authToken=ZDA5MjVmZDEzMzY4MmEyMzJkZjVkYjUzYWQ5ZGMyMTk1YWNkYzgxOWEyNTZlOGMxY2RlNzQ2ZWJjNjk5MmVkODBlMjI5NzViYWUwYTdjMGFhM2NhZDg4MDc3ZjI5MjQxZjczYThjYzE0YjRiYjY2ZTNkMDAxOWFiNTZjNWE1NGJjNg==');
    console.log(myResponse)
    return myResponse;
  }
  public getSingleBlog(currentBlogId): any {
 
  }
}
