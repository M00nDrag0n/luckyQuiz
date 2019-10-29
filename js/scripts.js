$(document).ready(function(){
  $("form#fortuneTeller").submit(function(event){
    event.preventDefault();
    var total = [];

    $("input:checkbox[name=unlucky]:checked").each(function(){
      var unlucky1 = parseInt($(this).val())
      console.log(unlucky1);
      console.log(total);


      total.push(unlucky1);
      console.log(total);
    });
    $("input:checkbox[name=lucky]:checked").each(function(){
      var lucky1 = parseInt($(this).val())
      console.log(lucky1);
      total.push(lucky1);
      console.log(total);
    });
    $("input:checkbox[name=nice]:checked").each(function(){
      var nice1 = parseInt($(this).val())
      console.log(nice1);
      total.push(nice1);
      console.log(total);
    });
    $("input:checkbox[name=mean]:checked").each(function(){
      var mean1 = parseInt($(this).val())
      console.log(mean1);
      total.push(mean1);
      console.log(total);
    });
    //defines grandTotal, adds each number within the total array into the grandTotal variable.
    var grandTotal = 0;
    total.forEach(function(number) {
      grandTotal += number;
    });
    console.log(grandTotal);
    if (grandTotal < 5) {
      $("#worstFortune").show();
    }
    else if (grandTotal < 25) {
      $("#badFortune").show();
    }
    else if (grandTotal < 50) {
      $("#goodFortune").show();
    }
    else {
      $("#bestFortune").show();
    }
  });
});
