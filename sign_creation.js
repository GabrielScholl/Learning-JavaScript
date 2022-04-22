// File containing the creation functions

function signCreator(){
    // Grab the input
    var input = document.getElementById("worldNum").value;
    var errDisp = document.getElementById("errorDisplay");
    
    // Verify input and display error messages, or display the sign
    try{
        if(input == "") throw "empty";
        if(isNaN(input)) throw "not a number";
        input = Number(input); // Because the input is always text
        if(input < 5) throw "already taken";
        if(input > 35) throw "too high";
        else{
            // Write the sign
            document.getElementById("sign").innerHTML = "Welcome to " + input + "-land!";
        }
    }
    catch(err){
        // "err" is the value thrown
        errDisp.innerHTML = "Input is " + err;
    }
    finally{
        input = "";
        // The line above won't clear the input field, because the variable has
        // "document.getElementById("worldNum").value" value and not the pointer (I think)
        document.getElementById("worldNum").value = ""; // But this will
    }

    console.log("Done")
}