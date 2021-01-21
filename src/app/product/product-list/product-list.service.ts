import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deserialize } from 'cerialize';
import { Product } from '../../models/Product';
import { APIService } from '../../shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  products: Array<Product> = new Array<Product>();

  searchTextProductName: string = "";
  searchTextProductCategory: string = "";

  constructor(
    public apiService: APIService,

  ) { }


  getProducts() {

    let httpParams = new HttpParams();
    httpParams = httpParams.append('page', '0');
    httpParams = httpParams.append('size', '20');


    if (!this.apiService.isNull(this.searchTextProductName)) {
      httpParams = httpParams.append('productName', this.searchTextProductName);
    }
    if (!this.apiService.isNull(this.searchTextProductCategory)) {
      httpParams = httpParams.append('categoryName', this.searchTextProductCategory);
    }


    const productGetAPI = 'api/product/getProductDetails';

    this.apiService.getMethodAPI(productGetAPI, httpParams, (response) => {
      this.products = Deserialize(response, Product);
    });
  }
}
