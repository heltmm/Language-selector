$(document).ready(function() {
  $("#developmentType").change(function(event){
    event.preventDefault();
    var developement = $("input:radio[name=development]:checked").val();
    if (developement === "front-end"){
      $("#frontEnd").show();
      $("#backEnd").hide();
    }else if (developement === "back-end"){
      $("#backEnd").show();
      $("#frontEnd").hide();
    }
  })
  $("#frontChoice").change(function(event){
    event.preventDefault();
    var frontLanguage = $("#frontLanguage").val();
    console.log(frontLanguage)
    if (frontLanguage === "design"){
      $("#css").show();
      $("#javascript").hide();
    }else if (frontLanguage === "interactive"){
      $("#css").hide();
      $("#javascript").show();
    }
  });
});
