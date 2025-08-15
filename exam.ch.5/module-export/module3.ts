import { Test ,TestNameSpace } from "./module1"
import { Test,TestNameSpace } from "./module2"


// ts not merge interface declared in module files
// module file means ts file exporting or importing object, or type, namespace.
// if you want merge 
const ex1 : Test = {
    name : "hi",
    age : 10
}

const nameEx1 : TestNameSpace.Interface = {
    gender : 'female',
    country : 'us',
}

const ex2 : Test = {
    name : "hi",
    age : 10
}

const nameEx2 : TestNameSpace.Interface = {
    gender : 'female',
    country : 'us',
}