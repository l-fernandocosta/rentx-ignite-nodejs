import { MigrationInterface, QueryRunner } from "typeorm";

export class default1662599018585 implements MigrationInterface {
    name = 'default1662599018585'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2022-09-08 01:03:35.088836'`);
    }

}
