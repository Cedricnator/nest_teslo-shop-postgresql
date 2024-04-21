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

    //* Be carefull, PostgreSQL don't support all types of TypeORM
    @Column('numeric', {
        default: 0
    })
    price: number;

    //* Other way to define a column
    @Column({
        type: 'text',
        nullable: true
    })
    description: string;

    @Column('text', {
        unique: true
    })
    slug: string;

    @Column('int', {
        default: 0
    })
    stock: number;

    @Column('text', {
        array: true
    })
    sizes: string[]

    @Column('text')
    gender: string;
}