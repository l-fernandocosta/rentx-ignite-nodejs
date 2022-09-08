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

@Entity("car")
class Car {
  @PrimaryColumn()
  id: string;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "text" })
  description: string;

  @Column({ type: "bigint" })
  daily_rate: number;

  @Column({ type: "boolean" })
  available: boolean;

  @Column({ type: "text" })
  license_plate: string;

  @Column({ type: "bigint" })
  fine_amount: number;

  @Column({ type: "text" })
  brand: string;

  @ManyToOne(() => Category, (category) => category.car)
  @JoinColumn({ name: "category_id" })
  category: Category;

  @Column("text")
  category_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
      this.available = true;
    }
  }
}

export { Car };
