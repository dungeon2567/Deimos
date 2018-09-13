import { Meteor } from 'meteor/meteor';
import { Pessoas, paginatePessoas } from '../imports/api/Pessoas.js';

Meteor.methods({
  updatePessoa(p) {
    if (p._id) {
      return Pessoas.update(
        { id: p._id },
        p,
      );
    }
    else {
      return Pessoas.insert(p);
    }
  }
})

Meteor.publish('paginatePessoas', paginatePessoas);

Meteor.startup(() => {
  // code to run on server at startup
});
