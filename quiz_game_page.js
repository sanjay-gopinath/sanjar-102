// Create function addUser()
function addUser() {
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location = "quiz_game_page.html";
}

function check() {
    get_answer = document.getElementById("input_check_box").value;
    player1 = document.getElementById("input_check_box").value;
    if (get_answer == atcul_answer) {
        if (answer_turn == "player1") {
            player1_score = +1
            document.getElementById("player1_score").innerHTML = player1_score;
        }
    } else {
        player2_score = player2_score + 1
        document.getElementById("player2_score").innerHTML = player2_score;
    }

    if (question_turn == player1) {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question_turn - " + player2_name;
    } else {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question_turn - " + player1_name;
    }

    if (answer_turn == player1) {
        answer_turn = "player2"
        document.getElementById("answer_turn").innerHTML = "answer_turn - " + player2_name;
    } else {
        answer_turn = "player1"
        document.getElementById("answer_turn").innerHTML = "answer_turn - " + player1_name;
    }


}


function send() {
    question_turn = "player1";
    answer_turn = "player2";
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    atcul_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}


// Get value of user by id player1_name_input and player2_name_input

// Store these values locally

//Assign "game_page.html" to window.location