const Ingredient = require('../old_models/Ingredient.js');
//console.log(Ingredient);

const IngredientsRepository = {
  findById(id) {
    return Ingredient.query().findById(id);
  },
  findMany(){
    return Ingredient.query().select('*');
  },
   createIngredientEntity(ingredientEntity){
    return Ingredient.query().insert(ingredientEntity);
  },
  remove(id){
    return Ingredient.query().findById(id).del();
  },
  update(id, entity){
    return Ingredient.query().findById(id).update(entity);
  }

}
module.exports = IngredientsRepository;
