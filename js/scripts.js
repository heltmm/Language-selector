$(document).ready(function() {
  //Targeting form #developmentType if a change is made to a radio button #frontEnd or #backEnd will display
  $("#developmentType").change(function(event){
    event.preventDefault();
    var developement = $("input:radio[name=development]:checked").val();
    if (developement === "front-end"){
      $("#frontEnd").show();
      $("#developmentType").hide();
    }else if (developement === "back-end"){
      $("#backEnd").show();
      $("#developmentType").hide();
    }
  })
  //Targeting form #frontChoice if a change is made to a box option #css or #javascript will display
  $("#frontChoice").change(function(event){
    event.preventDefault();
    var frontLanguage = $("#frontLanguage").val();
    if (frontLanguage === "design"){
      $('#css').siblings().hide()
      $('#css').parents().siblings().hide();
      $("#css").show();
    }else if (frontLanguage === "interactive"){
      $('#javascript').siblings().hide()
      $('#javascript').parents().siblings().hide();
      $("#javascript").show();
    }
  });
  //Targeting form #backSize if a change is made to a radio button #ruby or #backInstitution will display
  $("#backSize").change(function(event){
    event.preventDefault();
    var size = $("input:radio[name=size]:checked").val();
    if (size === "small"){
      $('#ruby').siblings().hide()
      $('#ruby').parents().siblings().hide();
      $("#ruby").show();


    }else if (size === "large"){
      $("#backInstitution").show();
      $("#backSize").hide();
    }
  });
  //Targeting form #backInstitution if a change is made to a radio button #php or #backCorpChoice will display
  $("#backInstitution").change(function(event){
    event.preventDefault();
    var institution = $("input:radio[name=institution]:checked").val();
    if (institution === "government"){
      $('#php').siblings().hide()
      $('#php').parents().siblings().hide();
      $("#php").show();


    }else if (institution === "private"){
      $("#backCorpChoice").show();
      $("#backInstitution").hide();

    }
  });
  //Targeting form #backCorpChoice if a change is made to a box option #java or #cSharp will display
  $("#backCorpChoice").change(function(event){
    event.preventDefault();
    var company = $("#backCorp").val();

    if (company === "google"){
      $('#java').siblings().hide()
      $('#java').parents().siblings().hide();
      $("#java").show();

    }else if (company === "microsoft"){
      $('#cSharp').siblings().hide()
      $('#cSharp').parents().siblings().hide();
      $("#cSharp").show();
    }
  });



  // button click hinges language information then refreshes page
  $(".clickDrop").click(function(event){
    $("#frontEnd").addClass("animated hinge");
    $("#backEnd").addClass("animated hinge");
    setTimeout(location.reload.bind(location), 1200);
  });
  // button click unhides form #developmentType
  $("#startButton").click(function(event){
    $("#name").show();
    $("#choosingStatement").hide();
    $("#startButton").hide();
  });
  $("#name").submit(function(event){
    event.preventDefault();
    var name = $("#nameInput").val();
    console.log(name)
    $(".nameInsert").append(name)
    $("#developmentType").show();
    $("#name").hide();
    $()
  });
});
