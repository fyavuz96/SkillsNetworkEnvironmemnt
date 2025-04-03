let count=0;


function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
  }
function displayCount() {
  document.getElementById("countDisplay").innerText = count;
}

function resetCount() {
    count = 0;  
    displayCount();
    alert("Count has been reset to 0.");
    }



function checkCountValue()
{
    if (count ===10)
    {
        alert("You have reached 10 followers!Congratulations!");
    }

    else if (count === 20)
    {
        alert("You have reached 20 followers!Congratulations!");
    }
}