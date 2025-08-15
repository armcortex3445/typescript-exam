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