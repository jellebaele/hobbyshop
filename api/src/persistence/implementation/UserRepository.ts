import { IUserDocument, IUserDto } from '../../models/User';
import { BaseRepository } from '../BaseRepository';

export default class UserRepository extends BaseRepository<IUserDocument, IUserDto> {}
