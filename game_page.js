player1_name = localStorage.getItem("Player1Name");
player2_name = localStorage.getItem("Player2Name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1name").innerHTML =  player1_name + ": ";
document.getElementById("player2name").innerHTML =  player2_name + ": ";
document.getElementById("player1score").innerHTML = player1_score;
document.getElementById("player2score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn- " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn- " + player2_name;

function send(){

Number1 = document.getElementById("number1").value;
Number2 = document.getElementById("number2").value;
actual_answer = parseInt(Number1) * parseInt(Number2);
question_number = "<h4>" + Number1 + " X " + Number2 + "<h4>"
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_number + input_box + check_button ;
document.getElementById("output").innerHTML = row;
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";
   
}

question_turn = "player1";
 answer_turn = "player2";

function check(){

get_answer = document.getElementById("input_check_box").value;
if(get_answer == actual_answer)
{

  if(answer_turn == "player1")
  {

    update_player1_score = player1_score +1;
    document.getElementById("player1score").innerHTML = update_player1_score;

  }
  else
  {

    update_player2_score = player2_score +1;
    document.getElementById("player2score").innerHTML = update_player2_score; 

  }

}

  if(question_turn == "player1")
  {

     question_turn = "player2";
     document.getElementById("player_question").innerHTML = "Question Turn :- " + player2_name ;

  }
  else
  {

     question_turn = "player1";
     document.getElementById("player_question").innerHTML = "Question Turn :- " + player1_name ;

  }

  if(answer_turn == "player1")
  {

     answer_turn = "player2";
     document.getElementById("player_answer").innerHTML = "Answer Turn :- " + player2_name ;

  }
  else
  {

     answer_turn = "player1";
     document.getElementById("player_answer").innerHTML = "Answer Turn :- " + player1_name ;

  }

  document.getElementById("output").innerHTML = "";

}