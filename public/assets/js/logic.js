$(document).ready(function () {
    $(".type-btn").on("click", function () {
        $.ajax({
            url: "/api/ingredients",
            method: "POST",
            data: { type_id: $(this).data("id") }
        }).then(function () {
            location.reload();
        });
    });

    $(".eat-btn").on("click", function () {
        $.ajax({
            url: "/api/ingredients",
            method: "PUT",
            data: { id: $(this).data("id"), devoured: 1 }
        }).then(function () {
            location.reload();
        });
    });

    $(".delete-btn").on("click", function () {
        $.ajax({
            url: "/api/ingredients",
            method: "DELETE",
            data: { id: $(this).data("id") }
        }).then(function () {
            location.reload();
        });
    });

    $(".ingredient").on("click", function () {
        $.ajax({
            url: "/api/types/" + $(this).data("id"),
            method: "GET"
        }).then(function (res) {
            var type = res[0]
            $('#ingredientModalTitle').text(type.name.toUpperCase());
            $('#ingredientModalBody').empty();
            $('#ingredientModalBody').append('<img class="modalImg" src="' + type.image + '">');
            $('#ingredientModalBody').append('<p>' + type.description + '</p>');
            $('#ingredientModalFooter').empty();
            $('#ingredientModal').modal('show');
        });
    });

    $("#addType").on("click", function () {
        $('#ingredientModalTitle').text("Add your own ingredient!");
        $('#ingredientModalBody').empty();
        $('#ingredientModalBody').append(`<div class="form-group">
        <label for="ingredient-name" class="col-form-label">Ingredient:</label>
        <input type="text" class="form-control" id="ingredient-name">
      </div>
      <div class="form-group">
        <label for="ingredient-image" class="col-form-label">Image URL:</label>
        <input type="text" class="form-control" id="ingredient-image">
      </div>
      <div class="form-group">
        <label for="description-text" class="col-form-label">Description:</label>
        <textarea class="form-control" id="description-text"></textarea>
      </div>
      <p id="error" style="color:red"></p>`);
        $('#ingredientModalFooter').append('<button id="saveType" type="button" class="btn btn-primary">Save ingredient</button>');
        $('#ingredientModal').modal('show');

        $('#saveType').on("click",function(){
            var name = $('#ingredient-name').val().trim().toLowerCase();
            if(!name) { 
                $('#error').text("Please input an ingredient name.");
                return;
            }
            var img = $('#ingredient-image').val().trim();
            if(!(img.includes(".png"))&&!(img.includes(".jpg"))&&!(img.includes(".gif"))){
                img = "";
            }
            if(!img){
                $('#error').text("Please input a valid image URL.");
                return;
            }
            var desc = $('#description-text').val().trim();
            if(!desc){
                $('#error').text("Please input a description.");
                return;
            }
            $.ajax({
                url: "/api/types/",
                method: "POST",
                data: {
                    name: name,
                    image: img,
                    description: desc
                }
            }).then(function(){
                location.reload();
            });
        });
    });
});