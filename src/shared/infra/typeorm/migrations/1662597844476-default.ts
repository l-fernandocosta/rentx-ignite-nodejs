import { MigrationInterface, QueryRunner } from "typeorm";

export class default1662597844476 implements MigrationInterface {
    name = 'default1662597844476'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "car" ("id" character varying NOT NULL, "name" character varying NOT NULL, "description" text NOT NULL, "daily_rate" bigint NOT NULL, "available" boolean NOT NULL, "license_plate" text NOT NULL, "fine_amount" bigint NOT NULL, "brand" text NOT NULL, "category_id" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_55bbdeb14e0b1d7ab417d11ee6d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "car" ADD CONSTRAINT "FK_2f64ab33f185899f256d63f3483" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "car" DROP CONSTRAINT "FK_2f64ab33f185899f256d63f3483"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2022-08-17 02:37:26.914227'`);
        await queryRunner.query(`DROP TABLE "car"`);
    }

}
