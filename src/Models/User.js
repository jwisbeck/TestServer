const knex = require('knex');
const knexCon = knex(require('../../knexfile').development);
const { Model } = require('objection');

Model.knex(knexCon);
module.exports = class User extends Model{
  static get tableName(){
    return 'users';
  }
  static get relationMappings() {
    return {
    };
  }
}
