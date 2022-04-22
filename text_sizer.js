// Makes the small text big, specifically attacking only the wanted id

// Initialize with make it small button not being displayed
document.getElementById("makeSmall").style.display = "none";

// Function makes bigger or smaller, depending on current size
function sizer(id, size) {
    // Applies size, regardless (because the button will only appear accordingly)
    document.getElementById(id).style.fontSize = size;
    
    // Logs the size for reference
    console.log(document.getElementById(id).style.fontSize)
    console.log(sizeToNum(document.getElementById(id).style.fontSize))

    // Selects which button to display
    if (sizeToNum(document.getElementById(id).style.fontSize) < 30) {
        document.getElementById("makeSmall").style.display = "none";
        document.getElementById("makeBig").style.display = "block";
    } else {
        document.getElementById("makeSmall").style.display = "block";
        document.getElementById("makeBig").style.display = "none";
    }
}

// Treats the fontSize string like "35px" to be a number like 35
function sizeToNum(size) {
    // Find the start with regexp (size should be a string)
    let start = size.search(/[0-9]/);
    console.log("start = " + start)

    // Find the number end with regex
    let end = size.search(/px/);
    console.log("end = " + end)

    // Define the size as a number
    let numericalSize = Number(size.slice(start, end));

    // Return the number
    return numericalSize;
}