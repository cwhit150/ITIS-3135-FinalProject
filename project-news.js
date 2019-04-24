$(document).ready(function() {
  $.ajax({
    type: 'GET',
    url: "https://graph.facebook.com/AppVenturesClub/feed?access_token=ACCESS_TOKEN",
    beforeSend: function() {
      $("#fb_feed").html("Loading...");
    },
    timeout: 10000,
    error: function(xhr, status, error) {
      alert("Error: " + xhr.status + " - " + error);
    },
    dataType: "json",
    success: function(data) {
      $.each(data, function() {
        $.each(this, function(key, value) {
          $("#fb_feed").append("");
        });
      });
    }
  });
});
