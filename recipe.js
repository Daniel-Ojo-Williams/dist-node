module.exports = class Recipe{
  constructor(id){
    this.id = id;
    this.name = null;
  }

  async hydrate() {
    this.name =  `Recipe: #${this.id}`
  }

  toJSON(){
    return { id: this.id, namae: this.name };
  }
}