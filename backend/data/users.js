import bcrypt from 'bcrypt';

const users = [
    {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
},
{
    name: 'Aniol Raza',
    email: 'aniol@example.com',
    password: bcrypt.hashSync('123456', 10),
    
    
},
{
    name: 'Adil schmidt',
    email: 'adil@example.com',
    password: bcrypt.hashSync('123456', 10),
    
   
},
]
export default users