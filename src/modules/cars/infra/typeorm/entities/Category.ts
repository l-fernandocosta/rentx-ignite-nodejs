import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Car } from "./Car";

@Entity("category")
class Category {
  @PrimaryColumn()
  id?: string;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar" })
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => Car, (car) => car.category)
  car: Car[];

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Category };
