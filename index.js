
const Gameboard=(function(){
    let myBoard=document.querySelector(".gameboard")
    let currentPlayer;
    let gameboard=[]
    gameboard.forEach((item)=>{
        let card=document.createElement("button")
        card.className="card"
        card.textContent=item
        myBoard.appendChild(card)
        card.addEventListener("click",()=>{
            card.style.backgroundColor="green"
            card.disabled=true
        })
    })
    function changePlayer(){
        let inputX=document.querySelector("#X")
        let inputY=document.querySelector("#O")

        inputX.addEventListener("change",()=>{
            currentPlayer="X"
            console.log(currentPlayer)
        })
        inputY.addEventListener("change",()=>{
            currentPlayer="O"
            console.log(currentPlayer)
        })
    }
    return{
        changePlayer:changePlayer
    }
})();
Gameboard.changePlayer()
