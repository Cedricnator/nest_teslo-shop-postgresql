import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Product {

    //* TypeORM will be autogenerate every value 
    @PrimaryGeneratedColumn('uuid')
    id: number;

    //* With the Column decorator, we can specify the column type and other options
    @Column('text', {
        unique: true,        
    })
    title: string;


}