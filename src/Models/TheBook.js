const knex = require('knex');
const knexCon = knex(require('../../knexfile').development);
const { Model } = require('objection');
const Ingredient = require('./Ingredient');
const Dish = require('./Dish');

Model.knex(knexCon);
module.exports = class TheBook extends Model{
  static get tableName(){
    return 'the_book';
  }
  static get relationMappings() {
    return {
      //
      ingredients: {
        relation: Model.BelongsToOneRelation,
        modelClass: Ingredient,
        join: {
          from: 'the_book.ingredient_id',
          to: 'ingredients.id'
        }
      },
      dishes: {
        relation: Model.BelongsToOneRelation,
        modelClass: Dish,
        join: {
          from: 'the_book.dish_id',
          to: 'dishes.id'
        }
      }


    };
  }
}
/*
BelongsToOneRelation: Use this relation when the source model has the foreign key

class Animal extends Model {
  static tableName = 'animals';

  static relationMappings = {
    owner: {
      relation: Model.BelongsToOneRelation,
      modelClass: Person,
      join: {
        from: 'animals.ownerId',
        to: 'persons.id'
      }
    }
  }
}*/
