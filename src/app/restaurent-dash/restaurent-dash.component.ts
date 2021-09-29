import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { RestaurantData } from './restaurent.model';

@Component({
  selector: 'app-restaurent-dash',
  templateUrl: './restaurent-dash.component.html',
  styleUrls: ['./restaurent-dash.component.css'],
})
export class RestaurentDashComponent implements OnInit {
  formValue!: FormGroup;
  restaurentModelObj: RestaurantData = new RestaurantData();
  allRestaurantData: RestaurantData[]= [];
  constructor(private formBuilder: FormBuilder, private _api: ApiService) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      services: [''],
    });
    this.getAllData();
  }

  //Now Subscribing Our Data which is mapped via Services..0
  addRestaurant() {
    this.restaurentModelObj.name = this.formValue.value.name;
    this.restaurentModelObj.email = this.formValue.value.email;
    this.restaurentModelObj.mobile = this.formValue.value.mobile;
    this.restaurentModelObj.address = this.formValue.value.address;
    this.restaurentModelObj.services = this.formValue.value.services;
    console.log(this.restaurentModelObj);
    this._api.postRestaurant(this.restaurentModelObj).subscribe(
      (res) => {
        this.formValue.reset();
      },
      (err) => {
        alert('somethig wrong' + err);
      }
    );
  }
  getAllData() {
    this._api.getRestaurant().subscribe((res: any) => {
      this.allRestaurantData = res;
      console.log(this.allRestaurantData);
    });
  }
}
