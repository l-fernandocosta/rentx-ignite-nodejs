import { MigrationInterface, QueryRunner } from "typeorm";

export class default1660318543637 implements MigrationInterface {
    name = 'default1660318543637'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "category" ("id" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "specifications" ("id" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_621aabf71e640ab86f0e8b62a37" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "specifications"`);
        await queryRunner.query(`DROP TABLE "category"`);
    }

}
