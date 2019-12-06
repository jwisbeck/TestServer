const knex = require('knex');
const knexCon = knex(require('../../knexfile').development);
const { Model } = require('objection');

Model.knex(knexCon);
module.exports = class Badge extends Model{
  static get tableName(){
    return 'badges';
  }
  static get relationMappings() {
    return {
    };
  }
}
