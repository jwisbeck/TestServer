const CarOwnerRepository = {
  findById(id) {
    return CarOwner.query().findById(id);
  },
  findMany(){
    return CarOwner.query().select('*');
  },
   createDishEntity(CarOwnerEntity){
    return CarOwner.query().insert(carOwnerEntity);
  },
  remove(id){
    return CarOwner.query().findById(id).del();
  },
  update(id, entity){
    return CarOwner.query().findById(id).update(entity);
  }

}
module.exports = CarOwnerRepository;
