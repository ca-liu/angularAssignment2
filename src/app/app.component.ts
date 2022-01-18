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
    this.addItem(f.value.item);
  }

  addItem(item:any) {
    let newItem = {
      'itemName' : item.itemName,
      'price': item.price,
      'qty': item.qty
    }
    this.cartItems.push(newItem)
  }

  addItems() {
    let products = [{ 'item': 'Apples', 'price': 2.99 }];
    for (var i = 0; i < products.length; i++) {
      let newItem = {
        'item': products[i].item,
        'price': products[i].price,
        'num': i + 1
      }
      this.items.push(newItem)
    }
  }

  removeItem(item: any) {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].num == item.num) {
        this.items.splice(i, 1); // remove 1 item at ith place
      }
    }
  }
}
