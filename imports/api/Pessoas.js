import { Mongo } from 'meteor/mongo';

const Pessoas = new Mongo.Collection('Pessoas');

const paginatePessoas = function ({filter, page, orderBy, descending}) {
    return Pessoas.find(filter, {
        skip: (page - 1) * 10,
        limit: 10,
        sort: {
            [orderBy]: descending ? -1 : 1
        }
    })
}

export { Pessoas, paginatePessoas }

