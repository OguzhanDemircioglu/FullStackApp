import axios from "axios";
const API_URL = BASE_URL + "/api/product";

class ProductService {
  saveProduct(product) {
    return axios.post(API_URL, product);
  }
  getAllProduct() {
    return axios.get(API_URL);
  }
}
