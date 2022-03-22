import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { ProductService } from '../../service/product.service';
// import { Product } from "../../model/Product.model";


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  Products:any


  constructor(private productService: ProductService) {
    this.getListProduct()
   }

  
  ngOnInit(): void {

  }


  // lấy thông tin sản phẩm từ firebase thông qua service ProductService là service của firebase
  getListProduct() {
    this.productService.getAllProduct().subscribe((data: any) => {
      this.Products = data.map((item: any) => item)
    })
  }



  //============ Cách Thêm và xoá item   =====================
  id:number=0
  add(item:any){
    // let {id, ...data} = item
    delete item.id
    console.log(item);
    this.productService.create(item)
  }

  deleteProduct(id:any){
    console.log(id);
    this.productService.delete(id)
  }



}
