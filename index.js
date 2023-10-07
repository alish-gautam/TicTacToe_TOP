
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
            
        })
        inputY.addEventListener("change",()=>{
            currentPlayer="O"
            opponent="X"
            
        })
    }
    function chooseWinner(){
        for(let combinations of winningCombinations){
            let [a,b,c]=combinations
            const cardA=document.querySelector(`.card:nth-child(${a+1})`)
            const cardB=document.querySelector(`.card:nth-child(${b+1})`)
            const cardC=document.querySelector(`.card:nth-child(${c+1})`)
            if(cardA.innerText && cardA.innerText==cardB.innerText && cardC.innerText==cardB.innerText){
                alert(`${currentPlayer} wins!`)
                removeAndAddName()
                return
            }
        }  
         
    }

    function removeAndAddName(){
        container.innerText=""
        let maindiv=document.createElement("div")
        maindiv.className="mainDiv"
        let winnerName=document.createElement("input")
        let submitName=document.createElement("button")
        let replay=document.createElement("button")
        let winnerDeclaration=document.createElement("h1")
        winnerDeclaration.className="declareWinner"
        replay.className="replay"
        submitName.className="submitName"
        winnerName.className="winnerName"
        submitName.innerText="Submit"
        replay.innerText="Play Again"
        winnerName.placeholder="Please Enter Your Name Your Majesty:"
        submitName.addEventListener("click",()=>{
            let winnerInput=winnerName.value
            winnerDeclaration.innerText=`Congratulations ${winnerInput} You Won!`
        })
        submitName.addEventListener("keypress",(e)=>{
            if(e.key==="Enter"){
                let winnerInput=winnerName.value
                winnerDeclaration.innerText=`Congratulations ${winnerInput} You Won!`
            }
        })
        replay.addEventListener("click",()=>{
            location.reload()
        })
        maindiv.appendChild(winnerName)
        maindiv.appendChild(submitName)
        maindiv.appendChild(winnerDeclaration)
        maindiv.appendChild(replay)
        container.appendChild(maindiv)

    }
    return{
        changePlayer:changePlayer,
    }
})();
Gameboard.changePlayer()
