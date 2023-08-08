const contactsRepository = require('../repositories/contactsRepository')
const ContactsRepository = require('../repositories/contactsRepository')

class ContactController {
    async index(request, response) {
        // LISTAR TODOS OS REGISTROS
        const contacts = await ContactsRepository.findAll()
        response.json(contacts)
    }

    async show(request, response) {
        // OBTER UM REGISTRO
        const { id } = request.params

        const contact = await ContactsRepository.findById(id)

        if (!contact){
            return response.status(404).json({error:'User not found'})
        }

        response.json(contact)

    }

    async store(request, response) {
        // CRIAR UM NOVO REGISTRO
        const { name, email, phone, category_id } = request.body

        if (!name) {
            return response.status(400).json({error: 'Name is required.'})
        }

        const contactExists = await ContactsRepository.findByEmail(email)

        if (contactExists){
            return response.status(400).json({error: 'This e-mail is already been taken. '})
        }

        const contact = await ContactsRepository.create({name, email, phone, category_id})

        response.json(contact)

    }

    update(){
        // EDITAR UM REGISTRO
    }

    async delete(request, response){
        // DELETAR UM REGISTRO
        const { id } = request.params

        const contact = await ContactsRepository.findById(id)


        if (!contact) {
            return response.status(404).json({error:'User not found.'})
        }

        await ContactsRepository.deleteById(id)
        // 204: No content.
        response.sendStatus(204)
    }

}

// Singleton
module.exports = new ContactController()
