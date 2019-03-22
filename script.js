$("button").click(function(){
    var future = $("#one").val();
    $("#name_here").text(future);
});

$("button").click(function(){
    // var future2 = $("#two").parseInt();
    var future2 = parseInt($("#two").val());
    $("#number_here").text(future2);
});

$("button").click(function(){
    var future3 = $("#three").val();
    $("#verb_here").text(future3);
});


$("button").click(function(){
    $("#ball").hide();
    $("#ball2").show();
    $("body").css("background-image", "url(https://i.gifer.com/ODku.gif)");
});

