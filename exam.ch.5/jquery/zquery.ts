
/*Mocking JQuery type based on test.ts
*/
interface zQuery {
    (tag : string | string[]) : zQueryInstance;
    (tag: zQueryInstance) : zQueryInstance;
}

interface zQueryInstance {
    removeClass(arg : string| string[] | ((this : this, index : number, e : string) => string)) : this;
    addClass(arg: string| string[] | ((this : this, index : number, e : string) => string)) : this;
    text(arg: string| string[] | ((this : this, index : number, e : string) => string)) : this;
    html(arg: string| string[] | ((this : this, index : number, e : string) => string)) : this;
    data(arg: string| string[] | ((this : this, index : number, e : string) => string)) : this;
}

declare const Z : zQuery;

Z("p").removeClass("myClass noClass").addClass("yourClass");

Z(["p","t"]).text("hello");

const tag2 = Z("ul li").addClass(function(index) { return "item-" + index;});
const html = Z(tag2).html(function(index){
    console.log(this);
    return Z(this).data('name')+"make string";
});