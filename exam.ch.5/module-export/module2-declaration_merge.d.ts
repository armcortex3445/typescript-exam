
//Q. Why this *.d.ts declaration is not applied to project?
import Module1 from "./module1_namespace";

declare module "./module1_namespace" {
    interface Test{
        age : number;
    }
    namespace TestNameSpace {

        export interface Interface {
            country : 'kor' | 'us'
        }
    }
}
