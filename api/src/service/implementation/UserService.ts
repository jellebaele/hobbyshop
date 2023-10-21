import { IUserDocument, IUserDto } from '../../models/User';
import { BaseService } from '../BaseService';
import { BadRequestError, NotFoundError } from '../../error';
import { IPaginationData } from '../../utils/Pagination';
import { ProductService } from './ProductService';
import { BaseRepository } from '../../persistence/BaseRepository';
import { productRepository } from '../../persistence';
import { IProductDocument } from '../../models/Product';

export class UserService extends BaseService<IUserDocument, IUserDto> {
  private readonly _productService: ProductService;

  constructor(repo: BaseRepository<IUserDocument, IUserDto>) {
    super(repo);
    this._productService = new ProductService(productRepository);
  }

  async create(dto: IUserDto): Promise<IUserDocument> {
    const isUnique = await this.isUnique({
      username: dto.username,
      email: dto.email,
    });
    if (!isUnique) throw new BadRequestError();

    return await this._repository.create(dto);
  }

  public async update(id: string, dto: any): Promise<IUserDocument | null> {
    const isUsernameAndEmailUnique = await this.isUnique({
      username: dto.username,
      email: dto.email,
    });
    if (!isUsernameAndEmailUnique) throw new BadRequestError('Username or email invalid.');

    const updated = await this._repository.updateById(id, dto);
    return updated;
  }

  public async getByUsernameOrEmail(
    username: string | null = null,
    email: string | null = null
  ): Promise<IUserDocument | null> {
    return await this._repository.getOneByQuery({ $or: [{ username }, { email }] });
  }

  public async getAllRelatedProductsById(
    id: string,
    paginationData: IPaginationData
  ): Promise<(IProductDocument | null)[]> {
    const user = await this._repository.getById(id);
    if (!user) throw new NotFoundError();

    const relatedProducts = await this._productService.getPartByQuery(
      { user: user._id },
      paginationData
    );

    if (!relatedProducts) throw new NotFoundError();
    return relatedProducts;
  }
}
