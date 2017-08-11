$(document).ready(function() {
  $("#developmentType").change(function(event){
    event.preventDefault();
    var developement = $("input:radio[name=development]:checked").val();
    console.log(developement)
    if (developement === "front-end"){
      $("#frontEnd").show();
      $("#backEnd").hide();
    }else if (developement === "back-end"){
      $("#backEnd").show();
      $("#frontEnd").hide();
    }

  })
});
