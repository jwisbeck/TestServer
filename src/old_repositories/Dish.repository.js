const Dish = require('../old_models/Dish.js');
//console.log(Dish);

const DishRepository = {
  findById(id) {
    return Dish.query().findById(id);
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
