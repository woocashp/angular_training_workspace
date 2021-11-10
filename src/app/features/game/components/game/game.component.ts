import { Component, OnInit } from '@angular/core';
import { GameApiService } from 'src/app/shared/services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(private gameService: GameApiService) { }

  ngOnInit(): void {
    this.gameService.getUser().subscribe(console.log)
  }

}
