import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _http: HttpClient) {}
  //Now Here i will define the Post,Get,Put,Delete
  //Create Restaurant
  postRestaurant(data: any) {
    return this._http.post<any>('http://localhost:3000/posts/', data).pipe(
      map((response: any) => {
        console.log(response);
      })
    );
  }

  //Get Restaurant Data Using Get Method
  getRestaurant() {
    return this._http.get<any>('http://localhost:3000/posts').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  //Update Restaurant
  updateRestaurant(data: any, id: number) {
    return this._http.put<any>('http://localhost:3000/posts/' + id, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  //Delete Restaurant Delete Method
  deleteRestaurant(id: number) {
    return this._http.delete<any>('http://localhost:3000/posts/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
