import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../issue.service'

@Component({
  selector: 'app-mapreduce-component',
  templateUrl: './mapreduce-component.component.html',
  styleUrls: ['./mapreduce-component.component.css']
})
export class MapreduceComponentComponent implements OnInit {

  constructor(private issueServices: IssueService) { }

  loading: Boolean;
  mapReducedFlag: boolean;
  ngOnInit() {
    this.loading = false;
    this.mapReducedFlag = false;
  }

  performMapReduce() {
    this.loading = true;
    this.issueServices.performMapReduceData()
      .subscribe((data) => {
        console.log(data);
        this.loading = false;
        this.mapReducedFlag = true;
      })
  }
  fethcData() {

  }

}
