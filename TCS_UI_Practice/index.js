function processFormData() {
    let stdname = document.getElementById("stdname");
    let age = document.getElementById("age");
    let city = document.getElementById("city");
    let hobbies = document.getElementsByName("hobbies");
    let check_val = [];
    let res;
    for (var k in hobbies){
      if (hobbies[k].checked) {
          check_val.push(hobbies[k].value);
          res  = check_val.join("#");
      }
    }

    if (!/\d/.test(stdname.value) && stdname.value.length <= 20 && stdname.value != "") {
      document.querySelector("#nameResult").textContent = "Name:" + stdname.value;
    } else {
      document.querySelector("#nameResult").textContent = "Name:" + "invalid";
    }

    let ageInt = parseInt(age.value);
    if (ageInt != NaN && ageInt <= 100) {
      document.querySelector("#ageResult").textContent = "Age:" + age.value;
    } else {
      document.querySelector("#ageResult").textContent = "Age:" + "invalid";
    }

    if (city.value != "") {
      document.querySelector("#cityResult").textContent = "City:" + city.value;
    } else {
      document.querySelector("#cityResult").textContent = "City:" + "invalid";
    }
    
    // console.log(hobbies[0].checked);
    // if (hobbies[0].checked == true || hobbies[1].checked == true || hobbies[2].checked == true) {
    if (check_val.length > 0) {
    document.querySelector("#hobbyResult").textContent = "Hobbies:" + res + "#";
    } else {
      document.querySelector("#hobbyResult").textContent = "Hobbies:" + "invalid";
    }
};