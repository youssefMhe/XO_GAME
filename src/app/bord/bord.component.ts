import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bord',
  templateUrl: './bord.component.html',
  styleUrls: ['./bord.component.css']
})
export class BordComponent implements OnInit {

  squares: any[]
  xInNext: boolean | undefined
  winner: string | undefined
  finishGame: boolean | undefined
  try: number | undefined

  constructor() {
    this.squares = []
    this.winner = ''
    this.finishGame = false
    this.try = 0
  }

  ngOnInit(): void {

    this.newGame()
    this.xInNext = !this.xInNext
  }

  newGame() {
    this.squares = Array(9)
    this.winner = ''
    this.xInNext = true
    this.finishGame = false
    this.try = 0
  }

  get player() {
    return this.xInNext ? 'X' : 'O';
  }

  makeMove(idx: number) {
    if (!this.squares[idx]) {
      this.squares?.splice(idx, 1, this.player)
      this.xInNext = !this.xInNext
      if (this.try !== undefined) {
        this.try += 1
      }
    }
    this.winner = this.calculateWinner()
    if (this.try === 9) {
      this.finishGame = true
    }
    if(this.winner==='X' || this.winner==='O'){
      this.finishGame = true
      console.log(this.finishGame)
    }
  }


  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
        return this.squares[a]
      }
    }
    return null
  }
}
