import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IssueService } from './issue.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapreduceComponentComponent } from './components/mapreduce-component/mapreduce-component.component';
import { FetchdataComponent } from './components/fetchdata/fetchdata.component';
import { MatToolbarModule } from '@angular/material'
const routes: Routes = [
  { path: 'mapReduce', component: MapreduceComponentComponent },
  { path: 'fetchData', component: FetchdataComponent }
  // { path: '', redirectTo: 'mapReduce', pathMatch: 'full' }
]
@NgModule({
  declarations: [
    AppComponent,
    MapreduceComponentComponent,
    FetchdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
