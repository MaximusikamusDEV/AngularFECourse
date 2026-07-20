import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../shared/service/product/product.service';
import {Product} from '../../shared/models/product/product';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  standalone: false,
  styleUrl: './product-edit.component.scss'
})
export class ProductEditComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private productService = inject(ProductService);
  private productId!: number;
  product!: Product;

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');

      if (id === null) {
        return;
      }

      this.productId = Number(id);
      this.productService.getProductById(this.productId).subscribe(product => {
        this.product = product;
      });
    });
  }

  saveProduct(editForm: NgForm) {
    if (!this.product || editForm.invalid) {
      return;
    }

    this.product.stock = Number(this.product.stock);
    this.product.price = Number(this.product.price);
    this.productService.updateProduct(this.product).subscribe(() => {
      this.router.navigate(['/product/edit', this.productId]);
    })
  }

}
