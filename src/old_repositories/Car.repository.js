const CarRepository = {
  findById(id) {
    return Car.query().findById(id);
  },
  findMany(){
    //console.log('findMany');
    return Car.query().select('*');
  },
   createDishEntity(carEntity){
    return Car.query().insert(carEntity);
  },
  remove(id){
    return Car.query().findById(id).del();
  },
  update(id, entity){
    return Car.query().findById(id).update(entity);
  }

}
module.exports = CarRepository;
