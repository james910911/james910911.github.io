$(document).ready(function () {
    $(".changeToOne").click(function () {
        $("#exam").text(1);
    });
    
    $(".changeToTwo").click(function () {
        $("#exam").text(2);
    });
    
    $(".hide").click(function (){
        $(".main").slideUp(300);
    });

    $(".show").click(function (){
        $(".main").slideDown(300);
    });

    $("#addBtn").click(function (e){
        $("ol").append("<li>list");
    });

    $("#removeBtn").click(function (){
        $("li:last-child").remove();
    });
});
