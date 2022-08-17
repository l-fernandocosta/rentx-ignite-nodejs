import { MigrationInterface, QueryRunner } from "typeorm";

export class default1660703813744 implements MigrationInterface {
    name = 'default1660703813744'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "avatar" character varying`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2022-08-13 03:20:44.634299'`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "avatar"`);
    }

}
