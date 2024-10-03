import { Table,DataType,Column,Model, PrimaryKey } from "sequelize-typescript";

@Table({
    tableName:'products',

})
export class ProductsModel extends Model{
    @PrimaryKey
    @Column({
        type:DataType.UUID,
        defaultValue:DataType.UUIDV4
    })
    id!:string

    @Column({
           type:DataType.STRING,
           allowNull:false
        }
    )
    product_name!:string;
    @Column({
        type:DataType.STRING
    })
    description!:string
    @Column({
        type:DataType.INTEGER
    })
    price!:number
    @Column({
        type:DataType.STRING
    })
    category!:string

    

    

}