import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';

  gdata$:Observable<any> = this.http.get('https://api.debugger.pl/items').pipe(map((res:any) => res.data))

  constructor(private http: HttpClient) {
  }

  onRemove(item: any) {
    console.warn(item)
  }
}
