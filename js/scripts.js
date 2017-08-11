$(document).ready(function() {
  $("#developmentType").change(function(event){
    event.preventDefault();
    var developement = $("input:radio[name=development]:checked").val();
    console.log(developement)
    if (developement === "front-end"){
      location.href = "frontend.html";
    }else if (developement === "back-end"){
      location.href = "backend.html"
    }

  })
});
