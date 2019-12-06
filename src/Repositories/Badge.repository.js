const BadgeRepository = {
  findById(id) {
    return Badge.query().findById(id);
  },
  findMany(){
    //console.log('findMany');
    return Badge.query().select('*');
  },
   createBadgeEntity(badgeEntity){
    return Badge.query().insert(badgeEntity);
  },
  remove(id){
    return Badge.query().findById(id).del();
  },
  update(id, entity){
    return Badge.query().findById(id).update(entity);
  }

}
module.exports = BadgeRepository;
