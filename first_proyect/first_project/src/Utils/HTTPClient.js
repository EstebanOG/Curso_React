// Data, styles, files
//import products from '../Data/data.json';
import { get, post, put, del } from './Requester';

export function getProducts() {
  return get('products');
}

export function addProduct(obj) {
  return post('products', obj);
}

export function updateProduct(id, obj) {
  return put('products/' + id, obj);
}

export function deleteProducts(id) {
  return del('products/' + id);
}
