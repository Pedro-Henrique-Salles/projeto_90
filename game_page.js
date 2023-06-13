var player1Name = localStorage.getItem("player1Name");
var	player2Name = localStorage.getItem("player2Name");

var	player1Score = 0;
var	player2Score = 0;

var  questionTurn="player1";
var answerTurn="player2";
var resposta_certa;

document.getElementById("player1Name").innerHTML = player1Name + " : ";
document.getElementById("player2Name").innerHTML = player2Name + " : ";

document.getElementById("player1Score").innerHTML = player1Score ;
document.getElementById("player2Score").innerHTML = player2Score ;

document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + player1Name ;
document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + player2Name ;


function send() {
	var numero1=document.getElementById("numero1").value;
	var numero2=document.getElementById("numero2").value;
	resposta_certa=parseInt(numero1)*parseInt(numero2);
    var question_number= "<h4 id='wordDisplay'>  "+numero1+" x "+numero2+"</h4>";
    var input_box = "<br>Resposta : <input type='text' id='inputCheckBox'>";
    var checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    var row =  question_number + input_box + checkButton ; 
    document.getElementById("output").innerHTML = row;
document.getElementById("numero1").value = "";
document.getElementById("numero2").value = "";
}





function check()
{
	var resposta_do_usuario = document.getElementById("inputCheckBox").value;
	if(resposta_certa == resposta_do_usuario)	
	{
		if(answerTurn == "player1")
		{
			player1Score = player1Score +1;
		    document.getElementById("player1Score").innerHTML = player1Score;
		}
		else 
		{
			player2Score = player2Score +1;
		    document.getElementById("player2Score").innerHTML = player2Score;
		}
	}
	if(questionTurn == "player2")
	{
		questionTurn = "player1"
		document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta: " + player2Name ;
	}
	else 
	{
		questionTurn = "player1"
		document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta: " + player1Name ;
	}

	if(answerTurn == "player1")
	{
		answerTurn = "player2"
		document.getElementById("playerAnswer").innerHTML = "Turno de Resposta: " + player2Name ;
	}
	else 
	{
		answerTurn = "player1"
		document.getElementById("playerAnswer").innerHTML = "Turno de Resposta: " + player1Name ;
	}

    document.getElementById("output").innerHTML = "";
}

