import { Request, Response } from 'express';
import { Op } from 'sequelize'

// import { sequelize } from '../instances/pg'
// import { sequelize } from '../instances/mysql'

import { Product } from '../models/Product';


import { User } from '../models/User'

export const home = async (req: Request, res: Response) => {

    let searchName: string = 'te'
    let users = await User.findAll({
        // where: { name: ['aSilas', 'Samara']}
        // ou
        // where: {
        //     [Op.or]:[
        //         { age: 30},
        //         { age: 90}
        //     ]
        // }
        where:{
            age: {
                [Op.gt]: 40, // > 40
                // [Op.gte]: 40, >=40
                // [Op.lt]: 40,  < 40
                // [Op.lte]: 30, <= 30
                //[Op.notIn]: [30, 55] 
                //[Op.In]: [10, 20] 
                
            },
            name:{
                // [Op.like]: '%a%'
                [Op.like]: `${searchName}%`
            }
        }
    });
    console.log('usuarios: ', JSON.stringify(users));





    let age: number = 90;
    let showOld: boolean = false;

    if (age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Bonieky',
        lastName: 'Lacerda',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: [],
        users
    });
};