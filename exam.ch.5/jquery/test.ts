$("p").removeClass("myClass noClass").addClass("yourClass");

$(["p","t"]).text("hello");

const tag = $("ul li").addClass(function(index) { return "item-" + index;});
const html = $(tag).html(function(index){
    console.log(this);
    return $(this).data('name')+"make string";
});