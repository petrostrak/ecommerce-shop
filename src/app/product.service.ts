import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product){
    return this.db.list('/products').push(product)
  }

  getAll(){
    return this.db.list('/products', ref => ref.orderByChild('name')).snapshotChanges();
  }

  get(productId){
    return this.db.object('/products/' + productId)
  }

  updateProduct(productId, product){
    console.log(product)
    return this.db.object('/products/' + productId).update(product)
  }

  delete(productId){
    console.log(productId)
    return this.db.object('/products/' + productId).remove()
  }
}
