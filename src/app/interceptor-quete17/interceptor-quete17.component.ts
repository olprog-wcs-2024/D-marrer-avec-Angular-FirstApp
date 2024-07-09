import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-interceptor-quete17',
  templateUrl: './interceptor-quete17.component.html',
  styleUrls: ['./interceptor-quete17.component.css']
})
export class InterceptorQuete17Component {

  constructor(private http: HttpClient) {}

  fetchData() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      data => console.log(data),
      error => console.error(error)
    );
  }
}
