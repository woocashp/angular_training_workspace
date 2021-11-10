import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CartStoreService } from 'src/app/features/cart/cart-store.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  cart$: Observable<any> = this.cartService.getState();

  count$: Observable<any> = this.cartService.getState().pipe(map((state) => {
    return state.reduce((acc: any, item: any) => acc + item.count, 0)
  }))

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private cartService: CartStoreService) {}

}
