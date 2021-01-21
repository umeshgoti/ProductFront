import { environment } from './../../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { isEmptyExpression } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(
    public http: HttpClient
  ) { }


  getMethodAPI(apiName, httpParams: HttpParams, callback: (response) => void) {


    /*if (!this.isNull(params)) {
      Object.keys(params).forEach(key => {
        if (key && params[key] && params.hasOwnProperty(key) && !this.emptyObject(params[key])) {
          httpParams = httpParams.append(key, params[key]);
        }
      });
    }*/

    let headers = new HttpHeaders();

    apiName = environment.API_URL + apiName;

    this.http.get(apiName, { params: httpParams, headers: headers }).subscribe(response => {

      if (response['status'] < 200 || response['status'] >= 300) {
        alert(response['message']);
      } else {
        callback(response['data']);
      }

    },

      (err: HttpErrorResponse) => {
        alert('some error');
      }
    )



  }


  isNull(obj): boolean {

    if (obj == null || obj === undefined || (obj === '' && obj !== 0)) {
      return true;
    }
    return false;
  }

  emptyObject(...value) {
    if (value && value.length > 0) {
      for (let i = 0; i < value.length; i++) {
        if (this.isNull(value[i]) || this.isEmpty(value[i])) {
          return true;
        }
      }
    }
    return false;
  }

  isEmpty(obj): boolean {
    return (obj && (Object.keys(obj).length === 0));
  }


}
