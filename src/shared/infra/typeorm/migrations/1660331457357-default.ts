import { MigrationInterface, QueryRunner } from "typeorm";

export class default1660331457357 implements MigrationInterface {
    name = 'default1660331457357'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" character varying NOT NULL, "name" character varying NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, "driver_license" character varying NOT NULL, "admin" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT 'now()', CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
