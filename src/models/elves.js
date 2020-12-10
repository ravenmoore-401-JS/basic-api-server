class elvesModel{
  constructor(){
    this.id = 0 ;
    this.db = [];
  }
  get(id){
    if(id){
      return this.db.find(elvesRecord =>elvesRecord.id === id);
    }else{
      return this.db;
    }
  }
  create(newElves){
    newElves.id = ++this.id;
    this.db.push(newElves);
    return newElves;
  }

  update(id, elves){
    if (!id){return null;}
    else{
      const target = this.db.find(record => record.id === id);
      this.db[target] = elves;

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


module.exports = elvesModel;