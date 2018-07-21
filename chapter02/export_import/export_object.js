class car {

  constructor(brand,model){
    this.brand=brand
    this.model= model
  }

  print(){
    console.log(`My car is a  ${this.brand} ${this.model}`)
  }
}

// IN JS the different function arguement and function are stored int ou class.propototype.myfunction
class TuningCar extends car {

  constructor(brand,model,reprog){
    super(brand,model)
    this.reprog= reprog
  }

  print(){
    super.print()
    console.log(`Bring your ${this.reprog.join(" and your ")}`)
  }
}

const mytuningcar = new TuningCar("BMW","Serie1",["220ch", "200ch"])
mytuningcar.print()

// export =/= expot default
// export default is to export only one type
 export default mytuningcar
