import connection from '../models/connection';
import ProductModel from '../models/product';
import IProductModel from '../interfaces/models/ProductModel';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<IProductModel[]> {
    const products = await this.model.getAll();
    return products;
  }

  create(product: IProductModel): Promise<IProductModel> {
    const productCreated = this.model.create(product);
    return productCreated;
  }
}

export default ProductService;