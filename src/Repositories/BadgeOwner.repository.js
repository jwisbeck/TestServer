const BadgeOwner = require('../Models/BadgeOwner.js');


const BadgeOwnerRepository = {
  findById(id) {
    return BadgeOwner.query().findById(id);
  },
  findMany(){
    //console.log('findMany');
    return BadgeOwner.query().select('*');
  },
  createBadgeOwnerEntity(entity){
    return BadgeOwner.query().insert(entity);
  },
  remove(id){
    return BadgeOwner.query().findById(id).del();
  },
  update(id, entity){
    return BadgeOwner.query().findById(id).update(entity);
  }

}
module.exports = BadgeOwnerRepository;
