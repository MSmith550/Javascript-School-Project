//function created to replace the content
function replaceContent() {
	//declaring the variables
	var myRecipientName;
	var myHostName; //variable for holding the host name
	
	//setting the variable to the input field's id named recipientNameInput's value
	myRecipientName = document.getElementById("recipientNameInput").value;

	//setting the variable to the input field'd id named hostNameInput
	myHostName = document.getElementById("hostNameInput").value;
	
	console.log('Variable myRecipientName: ' + myRecipientName);
	
	//setting the HTML code in the span id recipientNamePlaceholder with the variable 
	document.getElementById("recipientNamePlaceholder").innerHTML = myRecipientName;

	//setting the code for the host name
	document.getElementById("hostNamePlaceholder").innerHTML = myHostName;
} 