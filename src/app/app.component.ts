import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  items: Array<any> = [{ 'itemName': 'Apples', 'price': 1.99 },
  { 'itemName': 'Peaches', 'price': 2.99 },
  { 'itemName': 'Pears', 'price': 3.99 },
  { 'itemName': 'Plums', 'price': 4.99 }];

  customer: any = {
    'firstName': '',
    'lastName': '',
    'address': ''
  };

  cartItems: Array<any>;

  constructor() {
    this.cartItems = [];
  }

  onSubmit(f: NgForm) {
    this.customer.firstName = f.value.firstName;
    this.customer.lastName = f.value.lastName;
    this.customer.address = f.value.address;
  }

  addItem(i: NgForm) {
    let newItem = {
      'itemName' : i.value.item.itemName,
      'price': i.value.item.price,
      'qty': i.value.qty,
      'itemNum': this.cartItems.length,
      'grossPrice': i.value.item.price * i.value.qty
    }
    this.cartItems.push(newItem)
  }

  removeItem(item: any) {
    for (var i = 0; i < this.cartItems.length; i++) {
      if (item.itemNum == i) {
        this.cartItems.splice(i, 1); // remove 1 item at ith place
      }
    }
  }
}
