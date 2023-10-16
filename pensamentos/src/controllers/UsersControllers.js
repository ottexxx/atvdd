const { json } = require('sequelize');
const { sync } = require('../model/user');
const user  = require('../model/user');

module.exports = {
    
async createuser (req, response ){
 const {name , email, senha , confirmsenha} = req.body   

    const user =  await  user.create({
        name, 
        email,
        senha, 
        confirmsenha
    });
    return response.json(user);
     
},

async getuser (response){
 return response.json(user)
},

async finduser(req , res ){
const { id } = req.params; 
const user =  await user.findOne({where : {id : id}});
return res.json(user);
},

async deleteUser(req, res ){
    const id = req.params
    const user = await user.Update(
        {
        nome, 
        email,
        senha,
        confirmsenha
        },
        {
            where : {id : id}
        }
       );
       return res.json(user);
}


}