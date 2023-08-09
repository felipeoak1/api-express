const { v4 } = require('uuid');
let contacts = [
    {
        id: 2, // Universal Unique ID
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

    findByEmail(email){
        return new Promise((resolve)=>{
            resolve(contacts.find((contact)=>{return contact.email == email}))
        })
    }

    findById(id){
        return new Promise((resolve, reject)=>{
            resolve(contacts.find((contact)=>{return contact.id == id}))
        })
    }

    create({name, email, phone, category_id}){
        return new Promise((resolve) => {
            const newContact = {id:v4(), name, email, phone, category_id}

            contacts.push(newContact)
            resolve(contacts)
        })
    }

    update(id, {name, email, phone, category_id}){
        return new Promise((resolve) => {
            const updatedContact = {id, name, email, phone, category_id}

            contacts = contacts.map((contact)=>{
                return contact.id === Number(id) ? updatedContact : contact
            })

            resolve(updatedContact)
        })
    }

    deleteById(id){
        return new Promise((resolve) => {
            contacts = contacts.filter((contact)=>{return contact.id != id})
            resolve()
        })
    }
}

module.exports = new contactsRepository()
