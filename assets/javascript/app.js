// A. After page loads, game is started when timer button is clicked on. 
   
   
    //$(document).ready() {

var intervalId;

var timerValue= 90;

//When click on 'Start Game' button, timer should start and count down in 1000 mil.sec. to zero, then stop.
$("#start").on("click", function(){
function showTimer() {
    $("#timerStatus").html(timerValue);
        timerValue--;
if (timerValue <=-1){
    clearInterval(intervalId);
}
}

intervalId = setInterval(showTimer, 1000);

    })


//Set up an event handler to append the 'ol' (#results) with a new 'li' when radio buttons clicked and are are not correct answer
var checkAnswers = document.questions[5];
for (var i = 0; i < questions.length; i++) {
    checkAnswers[i]= questions.correct; 
}
    if (checkAnswers != questions[i].correct) {
        $('#resultsList > #results').append('ol');
    }








/* handler (e, ) {
   if (e.value !== question[1].correct) {
        $('ol').append('<li>')
    }
    else {
        $("#restart").append(e.text);
    };
}*/

//do  array of object questions??
var questions = [{
    question1: "",
    a1: "yes",
    b1: "no",
    c1: "no",
    correct: "a1",
    
},
 {question2: "",
    a2: "no",
    b2: "yes",
    c2: "no",
    correct: "b1",
    
},

 {question3: "",
    a3: "no",
    b3: "no",
    c3: "yes",
    correct: "c3",
   
},
 {question4: "",
    a4: "no",
    b4: "yes",
    c4: "no",
    correct: "b4",
   
},

{
    question5: "",
    a5: "no",
    b5: "yes",
    c5: "no",
    correct: "a5",
    
}]

//When the 'Results' button is clicked OR the timer is zero, then the results 'ol' will show.

$('#results').show(); {
    if (timerValue === 0) {

    } else {
        $('#resultslist').click(function() {
            
    })
        }

}


$("#startGame").click(function(){
    $("ol").hide();
});





//D. Resest function
//1. reset timer, clear question answers, clears out list by clicking on Try Again button.
function reset(){



    }

