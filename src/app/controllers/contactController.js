const contactsRepository = require('../repositories/contactsRepository')
const ContactsRepository = require('../repositories/contactsRepository')

class ContactController {
    async index(request, response) {
        // LISTAR TODOS OS REGISTROS
        const { orderBy } = request.query

        const contacts = await ContactsRepository.findAll(orderBy)
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
            return response.status(400).json({error: 'This email is already in use.'})
        }

        const contact = await ContactsRepository.create({name, email, phone, category_id})

        response.json(contact)

    }

    async update(request, response){
        // EDITAR UM REGISTRO
        const { id } = request.params

        const { name, email, phone, category_id } = request.body

        const contactExists = await contactsRepository.findById(id)

        if (!name) {
            return response.status(400).json({error: 'Name is required.'})
        }

        if (!contactExists) {
            return response.status(404).json({error:'User not found. '})
        }

        const contactByEmail = await contactsRepository.findByEmail(email)

        if (contactByEmail && contactByEmail.id != id) {
            return response.status(404).json({error: 'This email is already in use.'})
        }

        const contact = await contactsRepository.update(id, {name, email, phone, category_id})

        response.json(contact)
    }

    async delete(request, response){
        // DELETAR UM REGISTRO
        const { id } = request.params

        await ContactsRepository.deleteById(id)
        // 204: No content.
        response.sendStatus(204)
    }

}

// Singleton
module.exports = new ContactController()
