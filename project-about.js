$(document).ready(function() {
  /* 
   * Ideally, I would use AJAX to populate just the officers section
   * with a picture and short bio from each officer; this will be
   * added in the future if we start using the site.
   */
  $.ajax({
    type: "get",
    url: "about.json",
    timeout: 10000,
    error: function(xhr, status, error) {
      alert("Error: " + xhr.status + " - " + error);
    },
    dataType: "json",
    success: function(data) {
      $.each(data, function() {
        $.each(this, function(key, value) {
          $("#tabs-3").html("<p>" + value.text + "</p>");
        });
      });
    }
  });
  $("#tabs").tabs().accordion();
});
