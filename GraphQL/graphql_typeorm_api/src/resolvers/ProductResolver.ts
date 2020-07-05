import {
  Resolver,
  Mutation,
  Arg,
  Int,
  Query,
  InputType,
  Field,
} from "type-graphql";
import { Product } from "../entity/Product";

@InputType()
class ProductInput {
  @Field()
  name!: string;

  @Field(() => Int)
  quantity!: number;
}

@InputType()
class ProductUpdateInput {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Int, { nullable: true })
  quantity?: number;
}

@Resolver()
export class ProductResolver {
  @Mutation(() => Product)
  async createProduct(
    @Arg("variables", () => ProductInput) variables: ProductInput
  ) {
    const newProduct = Product.create(variables);
    return await newProduct.save();
  }

  @Mutation(() => Boolean)
  async deleteProduct(@Arg("_id", () => String) _id: string) {
    await Product.delete(_id);
    return true;
  }

  @Mutation(() => Boolean)
  async updateProduct(
    @Arg("_id", () => String) _id: string,
    @Arg("fields", () => ProductUpdateInput) fields: ProductUpdateInput
  ) {
    await Product.update(_id, fields);
    console.log(_id, fields);
    return true;
  }

  @Query(() => [Product])
  products() {
    return Product.find();
  }
}
