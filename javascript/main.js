
console.log("testing");

var old_x = 8;
function qoutefn() {

    do {
            var x =Math.round(Math.random()*6);
    }
    
    while(x == old_x);

    

    switch(x)
    {
        case 1:
            document.getElementById("qoute").innerHTML = "“Be yourself; everyone else is already taken.";
            document.getElementById("author").innerHTML = "-- Oscar Wilde";

            console.log(x);
            break; 
        case 2:
            document.getElementById("qoute").innerHTML = "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”";
            document.getElementById("author").innerHTML = "-- Marilyn Monroe";

            console.log(x);
            break;

        case 3:
            document.getElementById("qoute").innerHTML = "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”";
            document.getElementById("author").innerHTML = "-- Albert Einstein";

            console.log(x);
            break;
        case 4:
            document.getElementById("qoute").innerHTML =   "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”";
            document.getElementById("author").innerHTML = "-- Bernard M.Baruch";

            console.log(x);
            break;
        case 5:
            document.getElementById("qoute").innerHTML = "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”";
            document.getElementById("author").innerHTML = "-- Dr.Seuss";

            console.log(x);
            break;
        case 0:
            document.getElementById("qoute").innerHTML = "“In three words I can sum up everything I've learned about life: it goes on.”";
            document.getElementById("author").innerHTML = "-- Robert Frost";

            console.log(x);
            break;
            


        default:
            console.log(x);

    }

    old_x = x;
    
  }