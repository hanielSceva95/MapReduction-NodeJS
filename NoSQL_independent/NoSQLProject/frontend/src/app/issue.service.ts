import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  url = 'http://localhost:3001';
  constructor(private http: HttpClient) { }
  fetchMapReduce() {
    return this.http.get('http://localhost:3001/fetchMapReduce');
  }
  performMapReduceData() {
    console.log("asfasdfasdgfasd", this.url)
    return this.http.get('http://localhost:3001/mapReduce');
  }

}
