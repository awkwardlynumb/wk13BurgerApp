$("#addBtn").on("click", function (event) {
  event.preventDefault();
  const newBurger = {
    name: $("#newBurger").val().trim(),
  };
  console.log("bacon");
  $.ajax("/api/burgers", {
    type: "POST",
    data: newBurger,
  }).then(function (data) {
    console.log(data);
  });
});
$(".devour").on("click", function (event) {
  const id = $(this).data("id");
  const devoured = {
    devoured: 1,
  };
  $.ajax("/api/burgers" + id, {
    type: "PUT",
    data: devoured,
  }).then(function () {
    console.log("DEVOURED");
  });
});
