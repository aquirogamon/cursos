import {
  Entity,
  Column,
  ObjectIdColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from "typeorm";

import { Field, ObjectType, Int } from "type-graphql";

@ObjectType()
@Entity()
export class Product extends BaseEntity {
  @Field(() => String)
  @ObjectIdColumn()
  _id!: string;

  @Field()
  @Column()
  name!: string;

  @Field(() => Int)
  @Column("int", { default: 0 })
  quantity!: number;

  @Field(() => Date)
  @CreateDateColumn({ type: "timestamp" })
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn({ type: "timestamp", nullable: true })
  updatedAt?: Date;
}
