import { v4 as uuidv4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("users")
class User {
  @PrimaryColumn()
  id?: string;

  @Column("varchar")
  name: string;

  @Column("varchar", { unique: true })
  username: string;

  @Column("varchar")
  password: string;

  @Column("varchar")
  email: string;

  @Column("varchar")
  driver_license: string;

  @Column("boolean", { default: false })
  admin: boolean;

  @CreateDateColumn({ default: "now()" })
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { User };
