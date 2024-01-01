// destructuring objects
const course = {
    courseName : "js in hindi",
    price:999,
    courseinstructor:"hitesh"
}
// course.instructor
const {courseinstructor : teacher} =course
// console.log(courseinstructor);
console.log(teacher);