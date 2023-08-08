const { v4 } = require('uuid');
const contacts = [
    {
        id: v4(), // Universal Unique ID
        name: 'Mateus',
        email: 'mateus@gmail.com',
        phone: 123123123,
        category_id: v4(),
    },

    {
        id: v4(), // Universal Unique ID
        name: 'José',
        email: 'jose@gmail.com',
        phone: 123123123,
        category_id: v4(),
    },
]

class contactsRepository {
    findAll() {
        return new Promise((resolve)=> {
            resolve(contacts)
        })
    }

    findById(id){
        return new Promise((resolve, reject)=>{
            resolve(contacts.find((contact)=>{
                return contact.id === id
            }))
        })
    }
}

module.exports = new contactsRepository()
