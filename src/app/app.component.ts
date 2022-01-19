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
  totals: any = {};
  taxRate: number = 7;
  show = true;

  constructor() {
    this.cartItems = [];
  }

  onSubmit(f: NgForm) {
    this.customer.firstName = f.value.firstName;
    this.customer.lastName = f.value.lastName;
    this.customer.address = f.value.address;
    f.resetForm();
  }

  addItem(i: NgForm) {
    let newItem = {
      'itemName': i.value.item.itemName,
      'price': i.value.item.price,
      'qty': i.value.qty,
      'itemNum': this.cartItems.length,
      'grossPrice': i.value.item.price * i.value.qty
    }
    this.cartItems.push(newItem)
    this.calculateTotals()
    i.resetForm();
  }

  removeItem(item: any) {
    for (var i = 0; i < this.cartItems.length; i++) {
      if (item.itemNum == i) {
        this.cartItems.splice(i, 1); // remove 1 item at ith place
      }
    }
    this.calculateTotals()
  }

  calculateTotals() {
    this.totals.subtotal = this.cartItems.reduce(function (a, b) {
      return a + b.grossPrice;
    }, 0)

    this.totals.totalWTaxes = +(this.totals.subtotal * this.taxRate / 100);
    this.totals.total = eval(this.totals.subtotal + this.totals.totalWTaxes);
  }

}
