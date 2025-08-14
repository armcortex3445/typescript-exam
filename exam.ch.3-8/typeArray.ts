

//myEvery
const R1 = [1,2,3,4].myEvery((v)=> v%2);
const RR1 = ['1','2','3','4'].myEvery((v,idx,arr)=> v !== null)
const RRR1 = [{num:1}, {num:2 } , {num:3} ].myEvery((v,idx,arr) => v.num === idx+1); 

//mySome
const R2 = [1,2,3,4].mySome((v)=> v%2);
const RR2 = ['1','2','3','4'].mySome((v,idx,arr)=> v !== null)
const RRR2 = [{num:1}, {num:2 } , {num:3} ].mySome((v,idx,arr) => v.num === idx+1); 

//myConcat
// 에제 참조 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

const R3 = [1,2,3,4].myConcat([5,6,7]);
const RR3 = [1,2,3,4].myConcat(["1","2","3"]);
const RRR3 = [1,2,3,4].myConcat([{num:1}, {num:2 } , {num:3} ]);
const RRRR3 = [1,2,3,4].myConcat([5,6,7],[8,9,10]);
const RRRRR3 = [1,2,3,4].myConcat(["1","2","3"],[{num:1}, {num:2 } , {num:3} ]);
const RRRRRR3 = [1,2,3,4].myConcat(1,[2,3]);
const RRRRRRR3 = [1,2,3,4].myConcat("a",["b","c"]);
const RRRRRRRR3 = [1,2,3,4].myConcat(undefined,[2,3]);
const RRRRRRRRR3 = [[1]].myConcat([2,[3]],[4,[5]]);
const RRRRRRRRRR3 = [[1]].myConcat([2,[3]],[4,,6]);


type RestArgs<T> = T extends [ infer L, ...infer R] ? ArrayElement<L>|ArrayElement<RestArgs<R>> : T;
type ArrayElement<T> = T extends readonly (infer U)[] ? U : 
                        T extends {} ? T : never;

type arr1 = ArrayElement<undefined[][]>

interface Array<T> {
    myEvery( callback : (v: T,idx: number, arr : Array<T> ) => unknown, ) : boolean;
    mySome( callback : (V: T, idx : number, arr : Array<T>) => unknown) : boolean;
    myConcat<S>( value0 : S) : (T|ArrayElement<S>)[]
    myConcat<ARGS extends readonly U[],U>( ...valueN : ARGS) : (T|RestArgs<ARGS>)[]
}
// TS에서 concat는 Array<T> 타입 인자만 받는다. 즉, 자바스크립트 예제와 다르다.
const TESTR3 = [1,2,3,4].concat([5,6,7]);
const TESTRR3 = [1,2,3,4].concat(["1","2","3"]);
const TESTRRR3 = [1,2,3,4].concat([{num:1}, {num:2 } , {num:3} ]);
const TESTRRRR3 = [1,2,3,4].concat([5,6,7],[8,9,10]);
const TESTRRRRR3 = [1,2,3,4].concat(["1","2","3"],[{num:1}, {num:2 } , {num:3} ]);
const TESTRRRRRR3 = [1,2,3,4].concat(1,[2,3]);
const TESTRRRRRRR3 = [1,2,3,4].concat("a",["b","c"]);
const TESTRRRRRRRR3 = [1,2,3,4].concat(undefined,[2,3]);
const TESTRRRRRRRRR3 = [[1]].concat([2,[3]],[4,[5]]);
const TESTRRRRRRRRRR3 = [[1]].concat([2,[3]],[4,,6]);