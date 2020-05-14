//second event code will run at
$(document).ready(readyNow)




function readyNow() {
    console.log('jQuery is gucci')
    $('#hello').append("Welcome to my page!")
    //$('#id') is a selector/targets an id or class within our html

    $('#hello').addClass('blue')
    //just use the css file or you can add classes or take away classes





    $('#btn').on('click', handleButton)

//this targets an existing class. the descendant class extraButton on a click event
//runs handleclick function
    $('#wrapper').on('click', '.extraButton', handleClick)



    //this would be the third event code will run at 
    $(document).on('click', buttonFun)
}

//first time events would occur
console.log('js works')
function handleClick(){
    console.log("yoooooo");
}


function handleButton() {
   
    //targets my input
    let firstName = $('#firstName').val();
   // Is Getter 
    
    // clears input
    $('#firstName').val('');
    // this is setter
    
    //logs input on buttonclick
    console.log(firstName);


    //this adds new buttons on click of the old button!!!

    $('#wrapper').append('<button class ="extraButton">click me</button>')
}


function buttonFun() {
    console.log('yee haw ya dun clicked me');
}