const db = require('../../database/index')

class categoriesRepository {
    async findAll(){
        const rows = await db.query('SELECT * FROM categories ORDER BY name')
        return rows
    }

    async create({ name }){
        console.log('ENTRANDO NO CREATE DA CATEGORY')
        const [row] = await db.query(`
        INSERT INTO categories (name)
        VALUES ($1)
        RETURNING *
        `, [name])

        return row
    }
}

module.exports = new categoriesRepository()
