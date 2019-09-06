document.getElementsByClassName('btn-primary')[0].addEventListener("click", input_name);

function input_name() {
  var name = document.getElementsByClassName('input')[1];
  name.value = prompt('Please enter your name?', 'eg John Smith');
  check_name(name);
}

function check_name(nm) {
  alert('Your name is: ' + nm.value);
  var error = "";
  var num = parseInt('nm'.replace(/\D+/g, "")); 

  if ((nm == " ")||(nm == "")) {
    nm.style.background = 'pink';
    alert('Name is not found. Please try again.');
    return false;

  } else if (num !== "") {
    alert('Your name contains numbers.');
    var eman = "";
    for (i = nm.value.length - 1; i >= 0; i--) {
      eman += nm.value[i];
    }
    nm.value = eman;
    nm.style.background = 'LightGreen';
    return false;

  } else { nm.value = nm.value.toLocaleUpperCase(); nm.style.background = 'LightGreen'; }
  return true;
}