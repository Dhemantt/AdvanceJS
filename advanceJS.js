// this.table = 'window table';

// const cleantable = function(){
//     console.log(`${this.table} cleaning`);
// }

// this.garage = {
//     table : 'garage table'
// }

// let john = {
//     table: 'johns table'
// }

// cleantable.call(this);
// cleantable.call(this.garage);
// cleantable.call(john);

// class student{
//     static count = 0
//     constructor(name,age,phone,marks){
//         student.count++
//         this.age = age;
//         this.name=name
//         this.phone=phone
//         this.marks = marks
//     }
    
//     check(){
//     return this.marks > 40 ? 'eligible': 'not eligible';
//     }
// }
// let std1 = new student('user1',20,1234,30);
// let std2 = new student('user1',20,1234,40);
// let std3 = new student('user1',20,1234,50);
// let std4 = new student('user1',20,1234,60);
// let std5 = new student('user1',20,1234,20);
// console.log(std1.check(), student.count);
// console.log(std2.check());
// console.log(std3.check());


//fat Arrow fn

class student{
        static count = 0
        constructor(name,age,phone,marks){
            student.count++
            this.age = age;
            this.name=name
            this.phone=phone
            this.marks = marks
        }
        
        check(minage){
            return (minmarks) => {
                if (this.marks > minmarks && this.age > minage) {
                console.log(this.name +" is eligible")
                }
                else {
                    console.log(this.name +" is not eligible")
                }
        }
        }
}
    
let std1 = new student('user1', 20, 1234, 30);
std1.check(18)(40);
