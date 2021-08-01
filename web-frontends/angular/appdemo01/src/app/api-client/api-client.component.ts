import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api-client',
  templateUrl: './api-client.component.html',
  styleUrls: ['./api-client.component.css']
})
export class ApiClientComponent implements OnInit {

  constructor(private http: HttpClient ) { }

  ngOnInit(): void {
      /* if running in the same server as the api server, or event embedded together as static files in a spring boot app 
      for example, this simple path will work, with no other proxy setup */
      this.http.get('/api/hello').subscribe( (data) => {
          console.log(data);
      })

  }

}
