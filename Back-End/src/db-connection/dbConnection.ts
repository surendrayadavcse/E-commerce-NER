import { Sequelize } from "sequelize";

export const sequelize=new Sequelize({
    dialect:"sqlite",
    storage:'users.sqlite'
})
export const connect=async()=>{
    try {
        await sequelize.authenticate();
        console.log("connection established successfully")
        
    }
    catch(err){
    console.log('error while connecting',err)
    }
}
