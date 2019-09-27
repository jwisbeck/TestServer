const knex = require('knex');
const knexCon = knex(require('../../knexfile').development);
const { Model } = require('objection');

Model.knex(knexCon);
module.exports = class CarOwner extends Model{
  static get tableName(){
    return 'carOwners';
  }
  static get relationMappings() {
    return {
      car: {
        relation: Model.BelongsToOneRelation,
        modelClass: Ingredient,
        join: {
          from: 'cars.owner_id',
          to: 'carOwners.id'
        }
      }
    };
  }
}
