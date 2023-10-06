
const Gameboard=(function(){
    let myBoard=document.querySelector(".gameboard")
    const container=document.querySelector(".container")
    let currentPlayer;
    let opponent;
    const winningCombinations=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    let gameboard=[]
    for(let i=0;i<9;i++){
        let card=document.createElement("button")
        card.className="card"
        myBoard.appendChild(card)

        card.addEventListener("click",()=>{
            if(!currentPlayer){
                alert("Please choose X or Y before making a move!")
                return
            }
            card.innerText=currentPlayer
            gameboard.push(card.innerText)
            console.log(gameboard)
            card.style.color="black"
            card.style.backgroundColor="white"
            card.disabled=true
            chooseWinner()
    })
    }
    function changePlayer(){
        let inputX=document.querySelector("#X")
        let inputY=document.querySelector("#O")

        inputX.addEventListener("change",()=>{
            currentPlayer="X"
            opponent="O"
            console.log(currentPlayer)
        })
        inputY.addEventListener("change",()=>{
            currentPlayer="O"
            opponent="X"
            console.log(currentPlayer)
        })
    }
    function chooseWinner(){
        for(let combinations of winningCombinations){
            let [a,b,c]=combinations
            
        }
            
    }
    return{
        changePlayer:changePlayer
    }
})();
Gameboard.changePlayer()
