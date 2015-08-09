$(document).ready(function(){
var $fname= $("input[name='first']");
var $lname= $("input[name='last']");
var $phone= $("input[name='phone']");
var $email= $("input[name='email']");
$(".submit").on('click', validate);

function validate(event){
	event.preventDefault();
	var empty = {
		'fname': null,
		'lname': null,
		'phone': null,
		'email': null
	};
	if($fname.val().length === 0){
		empty.fname=true;
	}else{
		empty.fname=null;
	}

	if($lname.val().length === 0){
		empty.lname=true;
	}else{
		empty.lname=null;
	}

	if($phone.val().length === 0){
		empty.phone=true;
	}else{
		empty.phone=null;
	}

	if($email.val().length === 0){
		empty.email=true;
	}else{
		empty.email=null;
	}
	throwError(empty);

}
function throwError(empty){
	var error = false;
	$('.danger').detach();
	if(empty.fname){
			$fname.before('<p class="danger fname">Please Enter First name</p>');
			$fname.addClass('error');
	}else{
		error=true;
		$fname.removeClass('error');
	}
	if(empty.lname){
		$lname.before('<p class="danger lname">Please Enter Last name</p>');
		$lname.addClass('error');
	}else{
		error=true;
		$lname.removeClass('error');
	}
	if(empty.phone){
		$phone.before('<p class="danger">Please enter a home phone number</p>');
		$phone.addClass('error');
	}
	else{
		$phone.removeClass('error');
		error=true;
	}
	if(empty.email){
		$email.before('<p class="danger email">please enter an email address</p>');
		$email.addClass('error');

	}else{
		$email.removeClass('error');
		error=true;
	}
	if(($email.val().indexOf(/(@)\w+./g)) && (empty.email === true)){
		$email.before('<p class="danger">your email must contain an @ symbol</p>');
		$email.addClass('error');
	
	}
	if (error){
		$('input').val("");
		alert('your submission was recieved!');

	}
}

});

