const knex = require('knex');
const knexCon = knex(require('../../knexfile').development);
const { Model } = require('objection');
const Badge = require('./Badge');
const User = require('./User');

Model.knex(knexCon);
module.exports = class BadgeOwner extends Model{
  static get tableName(){
    return 'badge_owners';
  }
  static get relationMappings() {
    return {
      badge: {
        relation: Model.HasOneRelation,
        modelClass: Badge,
        join:{
          from: 'badge.id',
          to: 'badge_owners.badge_id'
        }
      },
      user: {
        relation: Model.HasOneRelation,
        modelClass: User,
        join:{
          from: 'user.id',
          to: 'badge_owners.user_id'
        }
      }
    };
  }
}
