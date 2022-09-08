import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Category } from "./Category";

@Entity("cars")
class Car {
  @PrimaryColumn()
  id: string;

  @Column("varchar")
  name: string;

  @Column("text")
  description: string;

  @Column("bigint")
  daily_rate: number;

  @Column("boolean")
  available = true;

  @Column("text")
  license_plate: string;

  @Column("bigint")
  fine_amount: number;

  @Column("text")
  brand: string;

  @ManyToOne(() => Category, (category) => category.cars)
  @JoinColumn({ name: "category_id" })
  category: Category;

  @Column("text")
  category_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Car };
