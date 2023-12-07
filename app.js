// class FormValidation{
//     formValues = {
//         username : "",
//         email : "",
//         phonenumber : "",
//         password : "",
//         confirmpassword : ""
//     }
//     errorValues = {
//         usernameErr : "",
//         emailErr : "",
//         phonenumberErr : "",
//         passwordErr : "",
//         confirmpasswordErr : ""
//     }
//     showErrorMsg(index,msg){
//         const form_group = document.getElementsByClassName('form-group')[index]
//         form_group.classList.add('error')
//         form_group.getElementsByTagName('span')[0].textContent = msg   
//     }
//     showSuccessMsg(index){
//         const form_group = document.getElementsByClassName('form-group')[index]
//         form_group.classList.remove('error')
//         form_group.classList.add('success')
//     }
//     getInputs(){
//         this.formValues.username = document.getElementById('username').value.trim()
//         this.formValues.email = document.getElementById('email').value.trim()
//         this.formValues.phonenumber = document.getElementById('phonenumber').value.trim()
//         this.formValues.password = document.getElementById('password').value.trim()
//         this.formValues.confirmpassword = document.getElementById('confirmpassword').value.trim()
//     }
//     validateUsername(){
//         if(this.formValues.username === ""){
//             this.errorValues.usernameErr = "* Please Enter Your Name"
//             this.showErrorMsg(0,this.errorValues.usernameErr)
//         } else if(this.formValues.username.length <= 4 ){
//             this.errorValues.usernameErr = "* Username must be atleast 5 Characters"
//             this.showErrorMsg(0,this.errorValues.usernameErr)
//         } else if(this.formValues.username.length > 14){
//             this.errorValues.usernameErr = "* Username should not exceeds 14 Characters"
//             this.showErrorMsg(0,this.errorValues.usernameErr)
//         } else {
//             this.errorValues.usernameErr = ""
//             this.showSuccessMsg(0)
//         }
//     }
//     validateEmail(){
//         //abc@gmail.co.in
//         const regExp = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/
//         if(this.formValues.email === ""){
//             this.errorValues.emailErr = "* Please Enter Valid Email"
//             this.showErrorMsg(1,this.errorValues.emailErr)
//         } else if(!(regExp.test(this.formValues.email))){
//             this.errorValues.emailErr = "* Invalid Email"
//             this.showErrorMsg(1,this.errorValues.emailErr)
//         } else {
//             this.errorValues.emailErr = ""
//             this.showSuccessMsg(1)
//         }
//     }
//     validatePhonenumber(){
//        const phoneno = /^\d{10}$/
//        if(this.formValues.phonenumber === ""){
//            this.errorValues.phonenumberErr = "* Please Enter your Phone Number"
//            this.showErrorMsg(2,this.errorValues.phonenumberErr)
//        } else if(phoneno.test(this.formValues.phonenumber)){
//            this.errorValues.phonenumberErr = ""
//            this.showSuccessMsg(2)
//        } else {
//            this.errorValues.phonenumberErr = "* Invalid Phone Number"
//            this.showErrorMsg(2,this.errorValues.phonenumberErr)
//        }
//     }
//     validatePassword(){
//         if(this.formValues.password === ""){
//             this.errorValues.passwordErr = "* Please Provide a Password"
//             this.showErrorMsg(3,this.errorValues.passwordErr)
//         } else if(this.formValues.password.length <= 4){
//             this.errorValues.passwordErr = "* Password must be atleast 5 Characters"
//             this.showErrorMsg(3,this.errorValues.passwordErr)
//         } else if(this.formValues.password.length > 10){
//             this.errorValues.passwordErr = "* Password should not exceeds 10 Characters"
//             this.showErrorMsg(3,this.errorValues.passwordErr)
//         } else {
//             this.errorValues.passwordErr = ""
//             this.showSuccessMsg(3)
//         }
//     }
//     validateConfirmpassword(){
//         if(this.formValues.confirmpassword === ""){
//             this.errorValues.confirmpasswordErr = "* Invalid Confirm Password"
//             this.showErrorMsg(4,this.errorValues.confirmpasswordErr)
//         } else if(this.formValues.confirmpassword === this.formValues.password && this.errorValues.passwordErr === ""){
//             this.errorValues.confirmpasswordErr = ""
//             this.showSuccessMsg(4)
//         } else if(this.errorValues.passwordErr){
//             this.errorValues.confirmpasswordErr = "* An error occurred in Password Field"
//             this.showErrorMsg(4,this.errorValues.confirmpasswordErr)
//         } else {
//             this.errorValues.confirmpasswordErr = "* Password Must Match"
//             this.showErrorMsg(4,this.errorValues.confirmpasswordErr)
//         }
//     }
//     alertMessage(){
//         const {usernameErr , emailErr , phonenumberErr , passwordErr , confirmpasswordErr}= this.errorValues
//         if(usernameErr === "" && emailErr === "" && phonenumberErr === "" && passwordErr === "" && confirmpasswordErr === ""){
//             swal("Registration Successful","ThankYou , "+this.formValues.username,"success").then(() => {
//                 console.log(this.formValues)
//                 this.removeInputs()
//             })
//         } else {
//             swal("Give Valid Inputs","Click ok to Continue" ,"error")
//         }
//     }

//     removeInputs(){
//         const form_groups = document.getElementsByClassName('form-group')
//         Array.from(form_groups).forEach(element => {
//             element.getElementsByTagName('input')[0].value = ""
//             element.getElementsByTagName('span')[0].textContent = ""
//             element.classList.remove('success')
//         })
//     }
// } 

// const ValidateUserInputs = new FormValidation()

// document.getElementsByClassName('form')[0].addEventListener('submit' , event => {
//     event.preventDefault()
//     ValidateUserInputs.getInputs()
//     ValidateUserInputs.validateUsername()
//     ValidateUserInputs.validateEmail()
//     ValidateUserInputs.validatePhonenumber()
//     ValidateUserInputs.validatePassword()
//     ValidateUserInputs.validateConfirmpassword()
//     ValidateUserInputs.alertMessage()
// })



const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phonenumber = document.getElementById('phonenumber');
const password = document.getElementById('password');
const password2 = document.getElementById('confirmpassword');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
    const phonenumberValue=phonenumber.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = confirmpassword.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	}
	else if(!isUsername(usernameValue)){
		setErrorFor(username, 'Username must be min 5 & max 10 characters');
	}
	 else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}

    if(phonenumberValue === '') {
		setErrorFor(phonenumber, 'Phone number cannot be blank');
	} 
	else if (!isPhone(phonenumberValue)){
		setErrorFor(phonenumber, 'Not a valid phone Number');

	}

	else {
		setSuccessFor(phonenumber);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'confirmpassword cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

// function isUsername(username){
// 	return length <= 4 .test(username);
// }
function isUsername(username){
	return /^.{5,10}$/.test(username);
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPhone(phonenumber) {
	return /^[0-9]{10}$/.test(phonenumber);
}



