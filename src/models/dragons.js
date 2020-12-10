class DragonModel{
  constructor(){
    this.id = 0 ;
    this.db = [];
  }
  get(id){
    if(id){
      return this.db.find(record =>record.id === id);
    }else{
      return this.db;
    }
  }
  create(newDragon){
    newDragon.id = ++this.id;
    this.db.push(newDragon);
    return newDragon;
  }

  update(id, dragon){
    if (!id){return null;}
    else{
      const target = this.db.find(record => record.id === id);
      this.db[target] = dragon;

      return `updated ${this.db[target]}`;
    }
  }
  delete(id){
    if(!id) {return null;
    }else{
      const target = this.db.find(record => record.id === id);
      this.db.filter(target);
      return `success ${target} removed`;
    }
  }
}


module.exports = DragonModel;