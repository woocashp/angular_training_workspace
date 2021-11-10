import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Api } from 'src/app/shared/utils/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formConfig$ = this.http.get(Api.DATA_FORM_CONFIG).pipe(map((resp: any) => resp.data))

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

}
