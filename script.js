function getFormvalue() {
    //Write your code here
	let element = document.querySelectorAll("input");
	let msg = element[0].value+" "+element[1].value;
	alert(msg);
}
