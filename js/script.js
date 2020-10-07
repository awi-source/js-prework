function playGame(playerInput) {
    clearMessages();
    function getMoveName(argMoveId){
        if(argMoveId === 1){
        return 'kamień';
        } else if(argMoveId === 2){
            return 'papier';
        } else if(argMoveId === 3){
            return 'nożyce';
        }
    
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }

    function displayResult(argComputerMove, argPlayerMove){
        if(argComputerMove === 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
        } else if(argComputerMove === 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Przegyrwasz :-(');
        } else if(argComputerMove === 'kamień' && argPlayerMove == 'kamień'){
            printMessage('Remis, gramy jeszcze raz');
        } else if(argComputerMove === 'papier' && argPlayerMove == 'kamień'){
            printMessage('Niestety, przegrywasz tę rundę');
        } else if(argComputerMove === 'papier' && argPlayerMove == 'papier'){
            printMessage('Remis, jeszcze raz!');
        } else if(argComputerMove === 'papier' && argPlayerMove == 'nożyce'){
            printMessage('Brawo, wygrywasz!');
        } else if(argComputerMove === 'nożyce' && argPlayerMove == 'kamień'){
            printMessage('Wygrywasz!!! Świetnie :-)');
        } else if(argComputerMove === 'nożyce' && argPlayerMove == 'papier'){
            printMessage('Tym razem przegrywasz');
        } else if(argComputerMove === 'nożyce' && argPlayerMove == 'nożyce'){
            printMessage('Myślimy podobnie ;-) spróbujmy jeszcze raz');
        } else {
            printMessage('Hej, wybierz jakąś liczbę sposród 1,2,3 ;-)');
        }
    }
    

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);


        printMessage('Mój ruch to: ' + computerMove); 

   /* let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + playerMove);

    console.log('Komputer wybiera: ' + computerMove + ' Ty wybierasz: ' + playerMove);

    let argComputerMove = getMoveName(randomNumber);

    let argPlayerMove = getMoveName(playerInput);

    displayResult(argComputerMove, argPlayerMove);
}
document.getElementById('play-rock').addEventListener('click', function(){
    playGame('1');
  });
  document.getElementById('play-paper').addEventListener('click', function(){
    playGame('2');
  });
  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame('3')
  });

  
