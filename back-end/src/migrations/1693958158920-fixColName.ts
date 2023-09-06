import { MigrationInterface, QueryRunner } from "typeorm";

export class FixColName1693958158920 implements MigrationInterface {
    name = 'FixColName1693958158920'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" RENAME COLUMN "img_url" TO "imgUrl"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" RENAME COLUMN "imgUrl" TO "img_url"`);
    }

}
