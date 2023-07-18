var $ = function (id) { return document.getElementById(id); };

var volunteerArray = [];

var displayVolunteers = function () {   
    // display the volunteers in the text area
    //$("volunteerList").value = volunteerArray.join("\n");

	// comment out the line above change this to a loop instead to loop through the array.
    /*
        For loop for going through the volunteerArray and then displaying the names on the screen
    */
    var count; //variable used in the for loop
	for(count = 0; count < volunteerArray.length; count++){
        $("volunteerList").value = volunteerArray.join("\n");
    }
	
};

var addVolunteer = function () {
    // get the data from the form
    var volunteerString = $("first_name").value + " " + $("last_name").value;

    // store the data in an array
    volunteerArray.push(volunteerString);
    
    // display the volunteers and clear the add form
    displayVolunteers();
    
    // get the add form ready for next entry
    $("first_name").value = "";
    $("last_name").value = "";
    $("first_name").focus();
};


var deleteVolunteer = function () {
    // get the data from the form (hint: use the same format as from the add).
    var volunteerString = $("first_name").value + " " + $("last_name").value; //variable for holding the name to remove

    // remove the string from the array (hint, loop through the entire list, compare the string with the item in the array.)
	var count; //variable used in the loop
    //for loop for going through the array
    for(count = 0; count < volunteerArray.length; count++){
        if (volunteerArray[count] === volunteerString){ // if statement for checking if the current item in the array matchs the volunteerString
            volunteerArray.splice(count, 1); //if it matches, removes the volunteer
        }
    }
    
	 
    // display the volunteers and clear the add form
    displayVolunteers();
    
    // get the delete form ready for next entry
    $("first_name").value = "";
    $("last_name").value = "";
    $("first_name").focus();
};

var clearList = function () {   
    // delete the data from the arrays
    volunteerArray = [];
    
	//   alternative way to delete all of the data from the array
	//    volunteerArray.length = 0;
    
    // remove the volunteers data from the web page
    $("volunteerList").value = "";
    
    $("first_name").focus();
};

var sortList = function () {   
    // sort the scores
    volunteerArray.sort();
    
    // display the scores
    displayVolunteers();    
};

//When the page is fully loaded, the buttons will be mapped to the JavaScript functions
window.onload = function () {
    $("add_button").onclick = addVolunteer;
	$("delete_button").onclick = deleteVolunteer;
    $("clear_button").onclick = clearList;    
    $("sort_button").onclick = sortList;    
    $("first_name").focus();
};