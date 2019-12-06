const User = require('../Models/User.js');


const UserRepository = {
  findById(id) {
    return User.query().findById(id);
  },
  findMany(){
    //console.log('findMany');
    return User.query().select('*');
  },
   createUserEntity(entity){
    return User.query().insert(entity);
  },
  remove(id){
    return User.query().findById(id).del();
  },
  update(id, entity){
    return User.query().findById(id).update(entity);
  }

}
module.exports = UserRepository;
