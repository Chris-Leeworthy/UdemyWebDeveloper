// Check off specific to-do items by clicking.
$("ul").on("click","li",function () {
    $(this).toggleClass("completed");
});

//Click on X to delete todo
$("ul").on("click", "span", function (event) {
    // Stop the event in parent elements triggering
    event.stopPropagation();

    // Need to put the remove() in the callback function or it
    // will delete the item before the fadeOut completes
    $(this).parent().fadeOut(300, function () {
        $(this).remove();
    });
});

//Create new items
$("input[type='text']").keypress(function(keyPressed){
    if (keyPressed.which === 13){
        //Grab the input value
        var todoText = $(this).val();

        //clear the input box
        $(this).val("");

        //Use the input value to create the new list item
        $("ul").append("<li> <span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})