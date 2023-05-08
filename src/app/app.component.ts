import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/IProduct';
import { ProductsService } from "./services/products.service"
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'crash course';
  loading = false
  products$: Observable<IProduct[]>

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.loading = true
    this.products$ = this.productsService.getAll().pipe(
      tap(() => this.loading = false)
    )

  }
}
