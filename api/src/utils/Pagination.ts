import { Request } from 'express';
import { PaginationRelation } from './enums';

class Pagination {
  constructor() {}

  public generateHeadersMetadata(
    collectionSize: number,
    pageNumber: number,
    perPage: number,
    req: Request
  ): string | null {
    const nextPage =
      collectionSize > pageNumber * perPage ? pageNumber + 1 : null;
    const prevPage = pageNumber > 1 ? pageNumber - 1 : null;
    const lastPage =
      collectionSize > 1 ? Math.ceil(collectionSize / perPage) : null;
    const firstPage = collectionSize > 1 ? 1 : null;
    const url = `${req.protocol}://${req.hostname}${req.baseUrl}`;

    let link: string | null = '';

    if (nextPage)
      link += this.createLink(nextPage, perPage, url, PaginationRelation.next);
    if (prevPage)
      link += this.createLink(
        prevPage,
        perPage,
        url,
        PaginationRelation.previous
      );
    if (lastPage)
      link += this.createLink(lastPage, perPage, url, PaginationRelation.last);
    if (firstPage)
      link += this.createLink(
        firstPage,
        perPage,
        url,
        PaginationRelation.first
      );
    if (link === '') link = null;

    return link;
  }

  private createLink(
    pageNumber: number,
    perPage: number,
    url: string,
    relation: PaginationRelation
  ): string | null {
    return `<${url}?per_page=${perPage}&page=${pageNumber}>; rel="${relation}"`;
  }
}

export default Pagination;
