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

    $(".ingredient").on("click", function(){
        $.ajax({
            url: "/api/types/" + $(this).data("id"),
            method: "GET"
        }).then(function(res){
            var type = res[0]
            $('#ingredientModalTitle').text(type.name.toUpperCase());
            $('#ingredientModalBody').empty();
            $('#ingredientModalBody').append('<img src="' + type.image + '">');
            $('#ingredientModalBody').append('<p>' + type.description + '</p>');
            $('#ingredientModal').modal('show');
        });
    });
});