import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

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

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Category };
