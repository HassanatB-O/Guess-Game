var  UserNumber = 100; //Prompts the user to guess between 1 and UserNumber
var RandomNumber = 34;
var counter = 0;
var Tries = 10; //Maximum number of attempts is 10
while (Attempts !== RandomNumber)
{
    var Attempts = prompt("Pick a number between 1 and " + UserNumber);
    counter +=1;
    if (counter > Tries)
    {
        alert("You have no more attempts. Press F5 to restart the game.");
        break
    }
    if (Attempts == RandomNumber)
    {
        alert("You guessed the correct number");
        alert("The correct number is " + RandomNumber)
        alert("It took you " + counter + " attemps to guess the number correctly");
    }
    else if (Attempts > RandomNumber)
    {
        alert("Try a lower number");
    }
    else 
    {
        alert("Try a higher number");
    }
}
