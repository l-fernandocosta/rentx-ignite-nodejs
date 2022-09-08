import { MigrationInterface, QueryRunner } from "typeorm";

export class default1662595519837 implements MigrationInterface {
    name = 'default1662595519837'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cars" ("id" character varying NOT NULL, "name" character varying NOT NULL, "description" text NOT NULL, "daily_rate" bigint NOT NULL, "available" boolean NOT NULL, "license_plate" text NOT NULL, "fine_amount" bigint NOT NULL, "brand" text NOT NULL, "category_id" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_fc218aa84e79b477d55322271b6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "cars" ADD CONSTRAINT "FK_9b6410d2f4eabb985524faae074" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" DROP CONSTRAINT "FK_9b6410d2f4eabb985524faae074"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2022-08-17 02:37:26.914227'`);
        await queryRunner.query(`DROP TABLE "cars"`);
    }

}
