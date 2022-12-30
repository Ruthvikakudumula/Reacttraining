var rectangle={
    length:10,
    breath:20,
    printPerimeter:function(){
        
        let printPerimeter=2*(this.length+this.breath)
        return printPerimeter
    },
    updateLength:function(value){
        if(value>0){
        rectangle.length=value;
        }else{
            console.log("length must be grater then 0")
        }
    },
      updateBreath:function(value){
          if(value>0){
        rectangle.length=value;
          }else{
            console.log("breath must be grater then 0")
        }
    },
    printArea:function(){
        let area=this.length*this.breath;
        return area;
    }
}

var value=20

const perimeterResult=rectangle.printPerimeter();

// const lengthUpdate=rectangle.updateLength(10);

// const braethUpdate=rectangle.updateBreath(10);

let printArea=rectangle.printArea()

console.log("perimeter",perimeterResult)
console.log("printArea",printArea)

rectangle.updateLength(-1);
 printArea=rectangle.printArea()
 console.log("printArea",printArea)

// console.log("lengthUpdate",lengthUpdate)
// console.log("breathhUpdate",braethUpdate)