import { Component, OnInit } from '@angular/core';
import { Topics } from 'src/app/Topics';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  topics: Topics[] = [];
  constructor(private http: HttpClient) {

    this.getData();
  }
  async getData() {
    let url = "http://localhost:1337/api/test1";
    await this.http.request('GET', url, { responseType: 'json' }).toPromise()
      .then((data: any) => {

        this.topics = data.results;
        console.log("TOPICS DATA", this.topics)
      });
  }

  ngOnInit(): void {
  }

}
