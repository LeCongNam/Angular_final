import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from "../../model/Product.model";


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

  getListProduct() {
    this.productService.getAllProduct().subscribe((data: any) => {
      this.Products = data.map((item: any) => item)
    })
  }

  ngOnInit(): void {

  }



  //============ Cách Thêm và xoá item
  id:number=0
  add(item:any){
    let {id, ...data} = item
    this.productService.create(data)
  }

  deleteProduct(id:any){
    console.log(id);
    this.productService.delete(id)
  }



}
