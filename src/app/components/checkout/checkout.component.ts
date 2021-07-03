import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/cart-item';
import { ShippingDetails } from '../../models/api/shippingDetails';
import { CartService } from '../../services/cart.service';
import { Checkout } from '../../models/api/checkout';
import { Cart } from '../../models/api/cart';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import {CartItem as ApiCartItem} from '../../models/api/cartItem';
import Swal from 'sweetalert2'
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../../services/pets.service';
import { Pet } from '../../models/pets';
import { Item } from 'src/app/models/item';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  pet: Pet
  pets: Pet[]
  isLoading = false;
  buttonMsg = "Inquire Now";
  chosen: string;
  private pathToAssets: string = "../../assets/";
  items: CartItem[] = new Array()
  shipping: ShippingDetails = new ShippingDetails();
  constructor(private cartService: CartService, 
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private petService: PetService) { 
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id: string = params["id"];
      this.pet = this.petService.find(id)
      if (!this.pet) {
        this.router.navigate(["/"]);
      }
    })
    this.pets = this.petService.findAll()

    this.cartService.getItems().subscribe((data: CartItem[]) => {
      console.log(this.shipping.paymentOption)
      this.items = data;
      this.shipping = new ShippingDetails();
    })
    if (this.items.length > 0) {
      this.chosen = this.items[0].pet.id
    } else {
      this.chosen = this.pets[0].id
      this.pet = this.pets[0]
    }

    this.items.forEach(item => {
      if(item.pet.id == this.chosen) {
        this.pet = item.pet
      }
    })
  }

  total() {
    return this.cartService.grandTotal();
  }

  submit() {
    this.isLoading = true;
    this.buttonMsg = "Loading...";
    if(this.items.length < 1) {
      Swal({
        title: 'Oops!',
        text: 'Your cart is empty try adding some items to your cart before trying to checkout',
        type: 'warning',
        confirmButtonText: 'Ok got it!',
        confirmButtonColor: '#c37c5d'
      })
      this.isLoading = false;
      this.buttonMsg = "Inquire Now";
    } else {
    let checkout = new Checkout();
    let cart = new Cart()
    this.items.forEach((value: CartItem) => {
      let apiCartItem: ApiCartItem = new ApiCartItem();
      apiCartItem.petName = value.pet.name;
      cart.cartItems.push(apiCartItem)
    })
    cart.grandTotal = this.cartService.grandTotal();
    checkout.cart = cart;
    checkout.shippingDetails = this.shipping;
    this.apiService.checkout(checkout)
    .subscribe((data: any) => {
      this.isLoading = true;
      this.shipping = new ShippingDetails()
      this.cartService.purge()
      Swal({
        title: '👍Thanks!',
        text: 'Thank you! Your request has been received. We will contact you as soon as possible',
        type: 'success',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#c37c5d'
      })
      this.isLoading = false;
      this.buttonMsg = "Inquire Now";
    },
      (err: HttpErrorResponse) => {
        this.isLoading = false;
        Swal({
          title: 'Error!',
          text: 'Unable to send request. Make sure you are connected to the internet',
          type: 'warning',
          confirmButtonText: 'Ok got it!',
          confirmButtonColor: '#c37c5d'
        })
        this.buttonMsg = "Inquire Now";
      });
    }
  }

  itemTotal(item: CartItem): number {
    let total: number = this.cartService.totalItems();
    return total;
  }

  getPrice(item: CartItem) {
    return this.cartService.getPrice(item.pet);
  }

  Shipping() {
    return this.cartService.shipping();
  }

  onChange(value: string) {
    console.log(value)
    let item: Item = new Item();
    item.pet = this.petService.find(this.chosen)
    this.pet = item.pet
    this.cartService.add(item)
  }
}
