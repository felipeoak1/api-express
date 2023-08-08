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

    store() {
        // CRIAR UM NOVO REGISTRO
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
