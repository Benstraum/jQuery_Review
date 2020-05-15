//!!!!!!!!!!!!!!!!!!!!!!!!second event code will run at
$(document).ready(readyNow)
let peopleArr = []



function readyNow() {
    $('#hello').append("Welcome to my page!")
    //$('#id') is a selector/targets an id or class within our html

    $('#hello').addClass('blue')
    //just use the css file or you can add classes or take away classes





    $('#btn').on('click', handleButton)

//this targets an existing class. the descendant class extraButton on a click event
//runs handleclick function
    $(this).on('click', '.extraButton', handleClick)


    // This parent exists already. 
    //if this target(the ul id in this case) has a child with ID deletebutton it will run a function
    $('#peopleTarget').on('click','#deleteBtn', deleteItem)


}


//!!!!!!!!!!!!!!!!!!!!first time events would occur
console.log('js works')
function handleClick(){
    $(this).addClass('blue')
    console.log("yoooooo");
}

function handleButton() {
   
   let personObject = {
           //targets my input
            // Is Getter 
       firstName : $('#firstName').val(),
       lastName : $('#lastName').val()
   }

   peopleArr.push(personObject)

    // clears input
    $('#firstName').val('');
    $('#lastName').val('');
    // this is setter
  
    //logs input on buttonclick

  

    //this adds new buttons on click of the old button!!!

   // $('#wrapper').append('<button class ="extraButton">click me</button>')


   displayPeople(peopleArr);
}



function displayPeople(array){
   $('#peopleTarget').empty()
   for(el of array){
    $('#peopleTarget').append(`<li>${el.firstName} ${el.lastName}
        <button id = "deleteBtn">submit</button></li>`)
   
    
    }
    
}
console.log(peopleArr);





function deleteItem(){
    $(this).parent().remove()
}




