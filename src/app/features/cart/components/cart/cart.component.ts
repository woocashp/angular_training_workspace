import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartStoreService } from '../../cart-store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart$: Observable<any> = this.cartService.getState()

  constructor(private cartService: CartStoreService) { }

  ngOnInit(): void {
  }

}
