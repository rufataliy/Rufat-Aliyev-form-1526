const nameInput = document.querySelector("#fullname"),
      emailInput = document.querySelector("#email"),
      textInput = document.querySelector("#message"),
      submitBtn = document.querySelector("#submit-button");

const emailRegex = new RegExp(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);

let data = {};

let errors = [];

submitBtn.addEventListener("click", submit)

function submit (e) {

  e.preventDefault();

  if(nameInput.value) {
    data.fullname = nameInput.value;
  } else {
    errors.push("Provide your name, please");
  }

  if (emailInput.value && emailRegex.test(emailInput.value)) {
    data.email = emailInput.value
  } else if (emailInput.value && !emailRegex.test(emailInput.value)) {
    errors.push("Provide valid email, please")
  } else{
    errors.push("Provide email, please")
    
  }

  if (textInput.value) {
    data.message = textInput.value
  } else {
    errors.push("Provide your message, please")
  }

  if (errors.length > 0) {
    console.log(errors)
    errors=[]
  } else {
    console.log(data);
  }
  // emailInput.value = ""
  // nameInput.value = ""
  // textInput.value = ""
}
