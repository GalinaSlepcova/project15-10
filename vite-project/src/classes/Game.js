import Line from "./Line.js";

export default class Game{

    constructor(){
        this.tileSize = 100
        this.tileCount = 4


        this.score = 0
        this.bestScore = 0

        this.tiles = [
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
        ]
        this.score = 0
        this.spawnTile()
        this.spawnTile()


    }

    newGame(){

        this.tiles = [
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
        ]

        this.score = 0
        this.spawnTile()
        this.spawnTile()
    }


    findEmptySpaces(){
        let emptyCoords = []
        for (let y = 0; y < this.tiles.length; y++){
            for(let x = 0; x < this.tiles[y].length; x++){
                if (!this.tiles[y][x]) emptyCoords.push({x, y})
            }
        }

        return emptyCoords
    }

    spawnTile(x, y, v){
        if (!x || !y){
            if (Math.random() > 0.75) v = 4
            else v = 2
            let emptyCoords = this.findEmptySpaces()
            let emptyPos = emptyCoords[Math.floor(Math.random() * emptyCoords.length)]
            x = emptyPos.x
            y = emptyPos.y

            
        }
        console.log(x, y, v);


        this.tiles[y][x] = new Tile(v)
    }

    moveLeft(){
        for (let y = 0; y < this.tiles.length; y++){
            for(let x = 1; x < this.tiles[y].length; x++){
                if(this.tiles[y][x]) {
                    this.tiles[y][0] = this.tiles[y][x]
                    this.tiles[y][x] = null
                }
            }
        }
    }
    moveRight(){
        for (let y = 0; y < this.tiles.length; y++){
            for(let x = 1; x < this.tiles[y].length - 1; x++){
                if(this.tiles[y][x]) {
                    this.tiles[y][this.tiles[y].length - 1] = this.tiles[y][x]
                    this.tiles[y][x] = null
                }
            }
        }
    }
    moveUp(){
        for (let y = 0; y < this.tiles.length; y++){
            for(let x = 1; x < this.tiles[y].length - 1; x++){
                if(this.tiles[y][x]) {
                    this.tiles[y][this.tiles[y].length - 1] = this.tiles[y][x]
                    this.tiles[y][x] = null
                }
            }
        }
    }
    moveDown(){}
}