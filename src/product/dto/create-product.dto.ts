export class CreateProductDto {
    readonly name: string;
    readonly description: string;
    readonly price: number;
    readonly stock: number;
    readonly categoryIds: number[];
  }
  