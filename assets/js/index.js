$("#add_game").submit(function (event) {
  alert("Data Inserted Successfully!");
});

$("#update_game").submit(function (event) {
  event.preventDefault();

  var unindexed_array = $("#update_game").serializeArray();
  var data = {};

  $.map(unindexed_array, function (n, i) {
    data[n["name"]] = n["value"];
  });
  // to update the data using method PUT
  var request = {
    url: `http://localhost:3000/api/games/${data.id}`,
    method: "PUT",
    data: data,
  };

  $.ajax(request).done(function (response) {
    alert("Data Updated Successfully!");
  });
});

// to delete the data from page and remove the data from mongo method DELETE
if (window.location.pathname == "/") {
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(function () {
    var id = $(this).attr("data-id");

    var request = {
      url: `http://localhost:3000/api/games/${id}`,
      method: "DELETE",
    };

    if (confirm("Do you really want to delete this Game?")) {
      $.ajax(request).done(function (response) {
        alert("Game Deleted Successfully!");
        location.reload();
      });
    }
  });
}
