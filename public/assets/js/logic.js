$(document).ready(function(){
    $(".type-btn").on("click",function(){
        $.ajax({
            url: "/api/ingredients",
            method: "POST",
            data: { type_id: $(this).data("id") }
        }).then(function(){
            location.reload();
        });
    });

    $(".eat-btn").on("click", function(){
        $.ajax({
            url: "/api/ingredients",
            method: "PUT",
            data: { id: $(this).data("id"), devoured: 1 }
        }).then(function(){
            location.reload();
        });
    });

    $(".delete-btn").on("click", function(){
        $.ajax({
            url: "/api/ingredients",
            method: "DELETE",
            data: { id: $(this).data("id") }
        }).then(function(){
            location.reload();
        });
    });
});