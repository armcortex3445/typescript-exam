import * as module1 from "./module1"
import * as module2 from "./module2"


type MergedTest = module1.Test & module2.Test 
type MergedInterface = module1.TestNameSpace.Interface & module2.TestNameSpace.Interface; 

const ex1 : MergedTest = {
    name : "hi",
    age : 10
}

const nameEx1 : MergedInterface = {
    gender : 'female',
    country : 'us',
}

const ex2 : MergedTest = {
    name : "hi",
    age : 10
}

const nameEx2 : MergedInterface = {
    gender : 'female',
    country : 'us',
}