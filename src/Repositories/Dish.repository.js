const Dish = require('../Models/Dish.js');
//console.log(Dish);

const DishRepository = {
  findById(id) {
    return Dish.query().findById(id);
  },
  findByIdWithIngredients(dishId){
    return TheBook.query().select('ingredients.ingredient_name','the_book.amount').joinRelation('ingredients').where('the_book.dish_id',dish_id).union().select('dishes.dish_name','dishes.description').joinRelation('dishes').where('the_book.dish_id',dish_id);
  },
  findMany(){
    //console.log('findMany');
    return Dish.query().select('*');
  },
   createDishEntity(dishEntity){
    return Dish.query().insert(dishEntity);
  },
  remove(id){
    return Dish.query().findById(id).del();
  },
  update(id, entity){
    return Dish.query().findById(id).update(entity);
  }

}
module.exports = DishRepository;
