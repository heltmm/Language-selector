$(document).ready(function() {
  //Targeting form #developmentType if a change is made to a radio button #frontEnd or #backEnd will display
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
  //Targeting form #frontChoice if a change is made to a box option #css or #javascript will display
  $("#frontChoice").change(function(event){
    event.preventDefault();
    var frontLanguage = $("#frontLanguage").val();
    if (frontLanguage === "design"){
      $("#css").show();
      $("#javascript").hide();
    }else if (frontLanguage === "interactive"){
      $("#css").hide();
      $("#javascript").show();
    }
  });
  $("#backSize").change(function(event){
    event.preventDefault();
    var size = $("input:radio[name=size]:checked").val();
    if (size === "small"){
      $("#ruby").show();
      $("#backInstitution").hide();

    }else if (size === "large"){
      $("#backInstitution").show();
      $("#ruby").hide();
    }
  });
  $("#backInstitution").change(function(event){
    event.preventDefault();
    var institution = $("input:radio[name=institution]:checked").val();
    if (institution === "government"){
      $("#php").show();
      $("#backCorpChoice").hide();

    }else if (institution === "private"){
      $("#backCorpChoice").show();
      $("#php").hide();
    }
  });
  $("#backCorpChoice").change(function(event){
    event.preventDefault();
    var company = $("#backCorp").val();

    if (company === "google"){
      $("#java").show();
      $("#cSharp").hide();
    }else if (company === "microsoft"){
      $("#java").hide();
      $("#cSharp").show();
    }
  });



  // button click hinges language information then refreshes page
  $(".clickDrop").click(function(event){
    $("#frontEnd").addClass("animated hinge");
    $("#backEnd").addClass("animated hinge");
    setTimeout(location.reload.bind(location), 1000);
  });
});
