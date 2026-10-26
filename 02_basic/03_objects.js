// de-structure

const course={
    coursename:"hindi",
    price:"567",
    courseInstructor:"mereko kya pata"
}
// course.courseInsructor
const {courseInstructor}=course
console.log(courseInstructor)

// we can also give the name by ourselves

const {courseInstructor:Instructor}=course
console.log(Instructor)

const navbar=({company})=>{

}
navbar(company="yash")