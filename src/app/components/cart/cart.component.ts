import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/cart-item';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  private pathToAssets: string = "../../assets/";
  items: CartItem[] = new Array();
  cartEmpty: boolean = false;
  constructor(private cartService: CartService) { 
  }

  ngOnInit() {
    this.cartService.getItems().subscribe((data: CartItem[]) => {
      this.items = data;
    })
    if(this.cartService.totalItems() == 0) {
      this.cartEmpty = true;
    }
    else {
      this.cartEmpty = false;
    }
  }

  getPrice(item: CartItem): number {
    
    return this.cartService.getPrice(item.pet);

  }

  //definition might change base on intepretation
  itemTotal(item: CartItem): number {
    let total: number = this.cartService.totalItems();
    return total;
  }

  //remove an item from cart
  delete(item: CartItem) {
    this.items = this.cartService.remove(item)
  }

  total() {
    return this.cartService.total();
  }

  grandTotal() {
    return this.cartService.grandTotal();
  }

  shipping() {
    return this.cartService.shipping();
  }

  discount() {
    return this.cartService.discount();
  }

  isCartEmpty(itemz: CartItem[]): boolean {
    let total: number = 0;
    for (var i = 0; i < itemz.length; i++) {
      total += 1;
    }
    if(total <= 0) {
      return true;
    }
    if(total >= 1) {
      return false;
    }
  }
}