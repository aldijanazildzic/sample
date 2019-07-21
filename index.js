$(document).ready(function(){
// alert("aldijana");

$(".sidebar-header-column").click(function(e){
e.preventDefault();
const id = $(this).attr("id");

console.log(id);

if(id == "newest_link"){
console.log("newest");
$("#sidebar_main").css({
'background-color' : 'blue'
});

}
else if(id == "mostread_link"){
$("#sidebar_main").css({
'background-color' : 'red'
});
}
else if(id == "recommend_link"){
$("#sidebar_main").css({
'background-color' : 'green'
});
}

$(".sidebar-header-column > a").removeClass("active");
$("#" + id + " > a").addClass("active");

});
});
