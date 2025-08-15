// ts not merge interface declared in module files
// module file means ts file exporting or importing object, or type, namespace.
// if you want merge 


import { type Test, type TestNameSpace } from "./module1_namespace";

declare module "./module1_namespace" {
    interface Test{
        age : number;
        greeting : "hello" | "안녕하세요"
    }
    namespace TestNameSpace {

        export interface Interface {
            country : 'kor' | 'us'
        }
    }
    
}


const ex1 : Test = {
    name : "hi",
    age : 10,
    greeting : 'hello',
}

const nameEx1 : TestNameSpace.Interface = {
    gender : 'female',
    country : 'us',
}

const ex2 : Test = {
    name : "hi",
    age : 10,
    greeting : "안녕하세요"
}

const nameEx2 : TestNameSpace.Interface = {
    gender : 'female',
    country : 'us',
}