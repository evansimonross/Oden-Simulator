$(document).ready(function(){
    $(".type-btn").on("click",function(){
        $.ajax({
            url: "/api/ingredients",
            method: "POST",
            data: { type_id: $(this).data("type") }
        }).then(function(){
            location.reload();
        });
    })
});