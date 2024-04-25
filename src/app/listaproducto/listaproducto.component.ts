import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../_servicio/producto.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Producto {
  product_id: number;
  nombreProducto: string;
  precioUnitario: number;
  unidadesStock: number;
  categoria: number;
}

@Component({
  selector: 'app-listaproducto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './listaproducto.component.html',
  styleUrl: './listaproducto.component.css'
})
export class ListaproductoComponent implements OnInit{

  productos: Producto[]=[];
  newProducto: Producto = {
    product_id: 0,
    nombreProducto: '',
    precioUnitario: 0,
    unidadesStock: 0,
    categoria: 0
  }; 
  constructor(private servicio: ProductoService){}
  ngOnInit(): void {
    this.servicio.obtenerTodos()
    .subscribe(data => {this.productos = data});
  }
  altaProducto(){
    this.servicio.altaProducto(this.newProducto).subscribe();
  }
  borrarProducto(product_id: number): void {
    this.servicio.borrarProducto(product_id).subscribe(() => {
      window.location.reload();
    });
}
}
