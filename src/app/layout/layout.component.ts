import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  result: string = '';

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get<any>(`/users/10`).subscribe(result => {
      this.result = JSON.stringify(result);
    });
  }

}
