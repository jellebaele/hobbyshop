import { BadRequestError, NotFoundError } from '../../error';
import { ICategoryDocument, ICategoryDto } from '../../models/Category';
import { productRepository } from '../../persistence';
import { BaseRepository } from '../../persistence/BaseRepository';
import { IPaginationData } from '../../utils/Pagination';
import { BaseService } from '../BaseService';
import { ProductService } from './ProductService';

export class CategoryService extends BaseService<ICategoryDocument, ICategoryDto> {
  private readonly _productService: ProductService;

  constructor(repo: BaseRepository<ICategoryDocument, ICategoryDto>) {
    super(repo);
    this._productService = new ProductService(productRepository);
  }

  public async create(dto: ICategoryDto): Promise<ICategoryDocument> {
    const found = await this.isUnique({ name: dto.name });
    if (found) throw new BadRequestError('Category already exists.');

    return await this._repository.create({ ...dto });
  }

  public async createIfNotExists(categoryDto: ICategoryDto): Promise<ICategoryDocument> {
    let category = await this._repository.getOneByQuery({ name: categoryDto.name });

    if (category) return category;
    else
      return await this._repository.create({
        name: categoryDto.name,
      });
  }

  public async addProductById(id: string, products: string[]): Promise<void> {
    this._repository.updateById(id, { $push: { products } });
  }

  public async getAllRelatedProductsById(
    id: string,
    paginationData: IPaginationData
  ): Promise<Object[]> {
    const category = await this._repository.getById(id);
    if (!category) throw new NotFoundError();

    const relatedProductIds = category.products.map((x) => x.toString());
    const relatedProducts = await this._productService.getMultipleById(
      relatedProductIds,
      paginationData
    );

    return relatedProducts;
  }
}
