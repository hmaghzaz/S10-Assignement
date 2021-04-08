
class Course {
    constructor(title, lenght, price){
     this.title = title;
     this.lenght = lenght;
     this.price = price
    }

    amountPaid(amount) {
           
    }
}

const jsCourse = new Course('Js', '10 H', 20);

const TsCourse = new Course('Ts', '20 H', 30);

console.log(jsCourse);
console.log(TsCourse)
