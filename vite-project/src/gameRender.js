import Game from "./classes/Game";


const gameLines = document.querySelector(".game__tiles");
const newGame = document.querySelector(".newGame");
const best = document.querySelector(".best");
const current = document.querySelector(".current");

function render(game){
    gameTiles.innerHTML = ""
    for (let y = 0; y < game.tiles.length; y++){
        for(let x = 0; x < game.tiles[y].length; x++){
            if (!game.tiles[y][x]) continue
            
            
            
            const tile = game.tiles[y][x]
            let div = document.createElement("div")
            div.innerHTML = tile.value
            div.classList.add("tile")


            div.setAttribute("style", `top: ${y * 100 + y * 10}px; left: ${x * 100 + x * 10}px`)
    
            gameTiles.appendChild(div)
        }
    }
}


export default function start(){


    let game = new Game()

    newGame.addEventListener("click", ()=>{
        game.newGame()
        render(game)
    })
}