function Cat(name,weight)
{
    this.name=name;
    this.weight=weight;
}
Cat.prototype.eat=function(mouse)
{
    this.weight+=mouse.weight;
}
module.exports=Cat;