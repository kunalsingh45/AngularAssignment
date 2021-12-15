import { AfterViewChecked, Component, OnInit } from '@angular/core';

const PRODUCTS= [
  {
      "Product ID": 7631,
      "Name": "On Cloud Nine Pillow",
      "Price": 14.99
  },
  {
      "Product ID": 7615,
      "Name": "Simply Sweet Shirt",
      "Price": 42
  },
  {
      "Product ID": 8100,
      "Name": "Uptown Girl Shirt",
      "Price": 58
     
  },
  {
      "Product ID": 6489,
      "Name": "Knock Lace-Up Heels",
      "Price": 18
  },
  {
      "Product ID": 7732,
      "Name": "My Cup of Tea Sweater",
      "Price": 68
  },
  {
      "Product ID": 7609,
      "Name": "Walk On Out Sneakers",
      "Price": 34.99
  },
  {
      "Product ID": 7463,
      "Name": "Silver Lining Dress",
      "Price": 62
  },
  {
      "Product ID": 7677,
      "Name": "Follow The Beat Sneakers",
      "Price": 32
  },
  {
      "Product ID": 8099,
      "Name": "Cup of Joe Pillow",
      "Price": 36
  },
  {
      "Product ID": 7425,
      "Name": "Burst  Denim Jacket",
      "Price": 84
  },
  {
      "Product ID": 8102,
      "Name": "Walk It Out Heels",
      "Price": 32
  },
  {
      "Product ID": 9964,
      "Name": "Word To The Wise Journal",
      "Price": 14.95
  },
  {
      "Product ID": 10440,
      "Name": "Basic  Dress",
      "Price": 52
  },
  {
      "Product ID": 6060,
      "Name": "Sunset Boulevard Pants",
      "Price": 44
  },
  {
      "Product ID": 10448,
      "Name": "Across The Pond Boots",
      "Price": 74.49
  },
  {
      "Product ID": 8137,
      "Name": "A Time Lace Dress",
      "Price": 50
  },
  {
      "Product ID": 10018,
      "Name": "Simple and shining Dress",
      "Price": 68
  },
  {
      "Product ID": 5695,
      "Name": "Denim Jeans",
      "Price": 100
  },
  {
      "Product ID": 9856,
      "Name": "Bufellow Denim",
      "Price": 96
  },
  {
      "Product ID": 7432,
      "Name": "Levis Jeans",
      "Price": 110
  },
  {
      "Product ID": 5670,
      "Name": "Shot in the Dark Pillow",
      "Price": 40
  },
  {
      "Product ID": 3421,
      "Name": "Reymonds Suite",
      "Price": 190
  },
  {
      "Product ID": 6753,
      "Name": "Lee Cooper Suite",
      "Price": 40
  },
  {
      "Product ID": 3567,
      "Name": "Allen Solly Jeans",
      "Price": 88.12
  },
  {
      "Product ID": 8765,
      "Name": "Sparky Jeans",
      "Price": 78
  },
  {
      "Product ID": 8732,
      "Name": "Lee Jeans",
      "Price": 111
  },
  {
      "Product ID": 6932,
      "Name": "Duster Jeans Shirt",
      "Price": 98
  },
  {
      "Product ID": 7904,
      "Name": "Fancy Shirt",
      "Price": 123.11
  },
  {
      "Product ID": 3890,
      "Name": "Men Casual Shirt",
      "Price": 98
  },
  {
      "Product ID": 1679,
      "Name": "Men Party Wear Shirt",
      "Price": 110.11
  },
  {
      "Product ID": 1122,
      "Name": " White Printed Shirt",
      "Price": 86
  },
  {
      "Product ID": 1672,
      "Name": " White Checked Shirt",
      "Price": 67
  },
  {
      "Product ID": 9987,
      "Name": " Blue Denim Jeans",
      "Price": 89.99
  },
  {
      "Product ID": 9677,
      "Name": " Black Denim Jeans",
      "Price": 99.99
  },
  {
      "Product ID": 3178,
      "Name": " Brown Denim Jeans",
      "Price": 119.00
  },
  {
      "Product ID": 5683,
      "Name": " Grey Denim Jeans",
      "Price": 87
  },
  {
      "Product ID": 9043,
      "Name": " Grey Denim Shirt",
      "Price": 120
  },
  {
      "Product ID": 6864,
      "Name": " Grey Checked Shirt",
      "Price": 143
  },
  {
      "Product ID": 5076,
      "Name": " Welcome party Shirt",
      "Price": 111.11
  },
  {
      "Product ID": 5412,
      "Name": " Formal Shirt",
      "Price": 78
  }
  ]
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, AfterViewChecked {
  products:any[] = PRODUCTS;
  viewType:string = "grid"
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewChecked(): void {
      if(this.viewType == 'list') {
        this.listView();
      }
  }
  // Get the elements with class="column"
  elements: any = document.getElementsByClassName("column");

  // List View
  listView() {
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].style.width = "48%";
    }
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    let container = document.getElementById("btnContainer");
    let btns = container.getElementsByClassName("btn");
    btns[0].className += " active"
    this.viewType = "list"
  }

  // Grid View
  gridView() {
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].style.width = "23%";
    }
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    let container = document.getElementById("btnContainer");
    let btns = container.getElementsByClassName("btn");
    btns[1].className += " active"
    this.viewType = "grid"
  }

  filterPrice(event){
    let value = +event.target.value;
    if(value == 20){
      this.products = PRODUCTS.filter(product=>{
        return product.Price < 20;
      })
    } else if(value == 50){
        this.products = PRODUCTS.filter(product=>{
          return product.Price < 50 && product.Price > 20;
        })
      }
      else if(value == 99){
        this.products = PRODUCTS.filter(product=>{
          return product.Price < 99 && product.Price > 50;
        })
      } else if(value == 100){
        this.products = PRODUCTS.filter(product=>{
          return product.Price  > 100;
        })
      }
      if(this.viewType == "list"){
        this.listView();
      } else{
         this.gridView();
      }
    }
}
