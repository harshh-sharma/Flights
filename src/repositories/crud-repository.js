class CrudRepository {
    constructor(model){
        this.model = model;
    }

    async create(data){
        try {
           const response = await this.model.create(data);
           return response; 
        } catch (error) {
            throw error;
        }
    }

    async destroy(){
        try {
            const response = await this.model.destroy({
                where: {
                    id:data
                }
            })

            return response;
        } catch (error) {
            throw error
        }
    }

    async get(data){
        try {
            const response = await this.model.findByPk(data);
            return response;
        } catch (error) {
            throw error
        }
    }

    async getAll(){
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            throw error;
        }
    }

    async update(id,data){
        try {
            const response = await this.model.update(data,{
                where:{
                    id
                }
            })

            return response;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CrudRepository;