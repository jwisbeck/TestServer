const TheBook = require('../Models/TheBook.js');
const Ingredient = require('../Models/Ingredient.js');

//console.log(TheBook);

const TheBookRepository = {
  findById(id) {
    return TheBook.query().findById(id);
  },
  findMany(){
    return TheBook.query().select('*');
  },
  findByDishId(dish_id){
    return TheBook.query().select().where('dish_id',dish_id);

  },
  findByIdWithIngredients(dishId){

    return TheBook.query().select('dishes.dish_name','dishes.description').where('the_book.dish_id',dishId).union(TheBook.query().select('ingredients.ingredient_name','the_book.amount').where('the_book.dish_id',dishId).joinRelation({'ingredients':true})).joinRelation({'dishes':true});
  },
  findAllIngredientNames(dish_id){
    //console.log('Find ingredients');
    return TheBook.query().select('ingredients.ingredient_name','the_book.amount').joinRelation('ingredients').where('the_book.dish_id',dish_id);
  },
  createBookEntity(bookEntity){
    return TheBook.query().insert(bookEntity);
  },
  remove(id){
    return TheBook.query().findById(id).del();
  },
  update(id, entity){
    return TheBook.query().findById(id).update(entity);
  }

}
module.exports = TheBookRepository;
