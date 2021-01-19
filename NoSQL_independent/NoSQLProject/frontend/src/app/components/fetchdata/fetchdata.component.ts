import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../issue.service';

@Component({
  selector: 'app-fetchdata',
  templateUrl: './fetchdata.component.html',
  styleUrls: ['./fetchdata.component.css']
})
export class FetchdataComponent implements OnInit {

  constructor(private issueServices: IssueService) { }

  fetchedData: {};
  ngOnInit() {
    this.issueServices.fetchMapReduce()
      .subscribe((data) => {
        console.log(data);
        this.fetchedData = data;
        console.log(this.fetchedData[0].value)
      })

  }

}
