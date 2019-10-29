$(document).ready(function(){
  $("form#fortuneTeller").submit(function(event){
    event.preventDefault();


    $("input:checkbox[name=unlucky]:checked").each(function(){
      var unlucky1 = $(this).val();
      console.log(unlucky1)
      var total = [];
      console.log(total);

      $(total).push(unlucky1);
      console.log(total);
    });
    // $("input:checkbox[name=unlucky]:checked").each(function(){
    //   var unlucky1 = $(this).val();
    //   $('#fun-responses').append(funTransportationMode + "<br>");
    // });

  });
});
