const knex = require('knex');
const knexCon = knex(require('../../knexfile').development);
const { Model } = require('objection');

Model.knex(knexCon);
module.exports = class Car extends Model{
  static get tableName(){
    return 'cars';
  }
  static get relationMappings() {
    return {
      carOwners: {
        relation: Model.BelongsToOneRelation,
        modelClass: Ingredient,
        join: {
          from: 'carOwners.id',
          to: 'cars.owner_id'
        }
      }
    };
  }
}
