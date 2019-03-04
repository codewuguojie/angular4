import {Component, OnInit} from "@angular/core";
import {ProductService} from "../shared/product.service";
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  formModel: FormGroup;

  categories: string[];

  constructor(private productService: ProductService) {

    const fb = new FormBuilder();

    this.formModel = fb.group({
      title: ['', Validators.minLength(3)],
      price: [null, this.numberValidator],
      category: ["-1"]
    })

  }

  numberValidator(control:FormControl):any {
    if(!control.value){
      return null;
    }
    let price = parseInt(control.value);
    if(price > 0) {
      return null;
    }else{
      return {positivenumber: true};
    }
  }

  ngOnInit() {
    this.categories = this.productService.getAllCategories();
  }

  onSearch() {
    if(this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }

}
