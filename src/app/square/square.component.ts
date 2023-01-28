import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  ngOnInit(): void {
  }

  @Input() value: "X" | "O" | undefined;
  @Input() winner: string | undefined;


  winnerFind(winner: any): boolean {
    return winner === 'O' || winner === 'X';
  }

}
