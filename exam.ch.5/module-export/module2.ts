export interface Test {
    age: number;
}

export default function() {
    console.log(`default export 2`);
}

export namespace TestNameSpace {
    export interface Interface {
        country : 'kor'|'us';
    }
}