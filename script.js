// class FormValidation{
//  formValues={
//     username:"",
//     email:"",
//     phonenumber:"",
//     password:"",
//     confirmpassword:"",
//  }
//  errorValues={
//     usernameErr:"",
//     emailErr:"",
//     phonrnumberErr:"",
//     passwordErr:"",
//     // confirmpasswordErr:""7]=.]
//  }
//  showErrorMsg(index,msg){
//     let form_group=document.getElementsByClassName(form-group)[index]
//     form_group.classList.add('error')
//     form_group.getElementsByTagName('span')[0].textContent=msg
//  }
//  showSuccessMsg(index){
//     let form_group=document.getElementsByClassName(form-group)[index]
//     form_group.classList.remove('error')
//     form_group.classList.add('success')
//  }
//  getInputs(){
//     this.formValues.username=document.getElementById('username').value.trim()
//     this.formValues.email=document.getElementById('email').value.trim()
//     this.formValues.phonenumber=document.getElementById('phonenumber').value.trim()
//     this.formValues.password=document.getElementById('password').value.trim()
//     this.formValues.confirmpassword=document.getElementById('confirmpassword').value.trim()
//  }
//  validateUsername(){
// if(this.formValues.username === ""){
// this.usernameErr="*Please enter your name"
// this.showErrorMsg(0, this.errorValues.usernameErr)
// }else if(this.formValues.username .length<=4){
//     this.errorValues.usernameErr="* Usename must be atleast 5 character"
//     this.showErrorMsg(0,this.errorValues.usernameErr)
// }else if(this.formValues.username .length>14){
//     this.errorValues.usernameErr="*Username should not exceeds 14 characters"
//     this.showErrorMsg(0, this.errorValues.usernameErr)
// }else{
//     this.errorValues.usernameErr =""
//     this. showSuccessMsg(0)
// }

//  }
//  validateEmail(){

//  }
//  validatePhonenumber(){

//  }
//  validatePassword(){

//  }
//  validateConfirmpassword(){

//  }
//  alertMessage(){

//  }
//  removeInputs(){

//  }
// }
// let ValidateUserInput =new FormValidation()
// document.getElementsByClassName('form')['0'].
// addEventListener('submit',()=>{
//     ValidateUserInput.getInputs()
//     ValidateUserInput.validateUsername()
// })

// new js
// document.addEventListener('DOMContentLoaded', function() {
//    var username = document.getElementsByClassName('username');
//    var email = document.getElementsByClassName('email');
//    var phonenumber = document.getElementsByClassName('phonenumber');
//    var password = document.getElementById('password');
//    var confirmPassword = document.getElementsByClassName('Confirmpassword');

//    username.addEventListener('username', function() {
//        var usernameRegex = /^[a-zA-Z\s]*$/;
//        if (username.value === '' || !usernameRegex.test(username.value)) {
//            username.parentElement.classList.add('error');
//            username.parentElement.classList.remove('success');
//        } else {
//            username.parentElement.classList.add('success');
//            username.parentElement.classList.remove('error');
//        }
//    });

//    email.addEventListener('email', function() {
//        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//        if (email.value === '' || !emailRegex.test(email.value)) {
//            email.parentElement.classList.add('error');
//            email.parentElement.classList.remove('success');
//        } else {
//            email.parentElement.classList.add('success');
//            email.parentElement.classList.remove('error');
//        }
//    });

//    phonenumber.addEventListener('phonenumber', function() {
//        var phonenumberRegex = /^[0-9]{10}$/;
//        if (phonenumber.value === '' || !phonenumberRegex.test(phonenumber.value)) {
//            phonenumber.parentElement.classList.add('error');
//            phonenumber.parentElement.classList.remove('success');
//        } else {
//            phonenumber.parentElement.classList.add('success');
//            phonenumber.parentElement.classList.remove('error');
//        }
//    });

//    password.addEventListener('password', function() {
//        var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
//        if (password.value === '' || !passwordRegex.test(password.value)) {
//            password.parentElement.classList.add('error');
//            password.parentElement.classList.remove('success');
//        } else {
//            password.parentElement.classList.add('success');
//            password.parentElement.classList.remove('error');
//        }
//    });

//    confirmPassword.addEventListener('confirmpassword', function() {
//        if (confirmPassword.value === '' || confirmPassword.value !== confirmpassword.value) {
//            confirmPassword.parentElement.classList.add('error');
//            confirmPassword.parentElement.classList.remove('success');
//        } else {
//            confirmPassword.parentElement.classList.add('success');
//            confirmPassword.parentElement.classList.remove('error');
//        }
//    });
// });

// new js2
document.addEventListener('DOMContentLoaded', function() {

   var form = document.querySelector('.form');
   var username = document.getElementById('Username');
   var email = document.getElementById('Email');
   var phoneNumber = document.getElementById('PhoneNumber');
   var password = document.getElementById('Password');
   var confirmPassword = document.getElementById('Confirmpassword');
   var submitButton = document.getElementById('Submit');
  
   form.addEventListener('input', function(event) {
      if (event.target.id === 'Username') {
        validateUsername();
      } else if (event.target.id === 'Email') {
        validateEmail();
      } else if (event.target.id === 'PhoneNumber') {
        validatePhoneNumber();
      } else if (event.target.id === 'Password') {
        validatePassword();
      } else if (event.target.id === 'Confirmpassword') {
        validateConfirmPassword();
      }
   });
  
   submitButton.addEventListener('click', function(event) {
      event.preventDefault();
      validateUsername();
      validateEmail();
      validatePhoneNumber();
      validatePassword();
      validateConfirmPassword();
  
      if (username.validity.valid && email.validity.valid && phoneNumber.validity.valid && password.validity.valid && confirmPassword.validity.valid) {
        alert('Form Submitted Successfully!');
      }
   });
  
   function validateUsername() {
      var validity = username.validity;
      if (!validity.valid) {
        setError(username, 'Username must be at least 5 characters long');
      } else {
        setSuccess(username);
      }
   }
  
   function validateEmail() {
      var validity = email.validity;
      if (!validity.valid) {
        setError(email, 'Please enter a valid email address');
      } else {
        setSuccess(email);
      }
   }
  
   function validatePhoneNumber() {
      var validity = phoneNumber.validity;
      if (!validity.valid) {
        setError(phoneNumber, 'Please enter a valid phone number');
      } else {
        setSuccess(phoneNumber);
      }
   }
  
   function validatePassword() {
      var validity = password.validity;
      if (!validity.valid) {
        setError(password, 'Password must be at least 8 characters long');
      } else {
        setSuccess(password);
      }
   }
  
   function validateConfirmPassword() {
      var validity = confirmPassword.validity;
      if (!validity.valid) {
        setError(confirmPassword, 'Passwords do not match');
      } else {
        setSuccess(confirmPassword);
      }
   }
  
   function setError(input, message) {
      var formGroup = input.parentElement;
      formGroup.classList.remove('success');
      formGroup.classList.add('error');
      var span = formGroup.querySelector('span');
      span.textContent = message;
   }
  
   function setSuccess(input) {
      var formGroup = input.parentElement;
      formGroup.classList.remove('error');
      formGroup.classList.add('success');
   }
  });