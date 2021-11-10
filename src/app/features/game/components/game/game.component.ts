import { EmbeddedTemplateAst } from '@angular/compiler';
import { Component, EmbeddedViewRef, OnInit, TemplateRef, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';
import { catchError, fromEvent, map, of, pipe, retry, switchMap, throttleTime, throwError } from 'rxjs';
import { Message } from 'src/app/shared/models/services.models';
import { GameApiService } from 'src/app/shared/services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @ViewChild('playerTpl') playerTpl!: TemplateRef<{ $implicit: Message}>

  players: Map<string, EmbeddedViewRef<any>> = new Map();


  // Context explained
  // const obj = {
  //   name: 'bob',
  //   displayName() {
  //     console.log(this.name);
  //   }
  // }

  // const fn = obj.displayName;
  // fn();

  // obj.displayName()

  constructor(
    private gameService: GameApiService,
    private container: ViewContainerRef
  ) { }

  ngOnInit(): void {
    this.gameService.getUser()
    .pipe(
      catchError((err: any) => {
        this.register();
        return throwError(() => err)
      })
    )
    .subscribe(this.init.bind(this))
  }

  register() {
    of('your name /^[a-zA-Z]{3,6}$/')
      .pipe(
        map(txt => prompt(txt)),
        switchMap(username => this.gameService.register(username as string)),
        catchError((error) => {
          console.log('register error', JSON.stringify(error));
          return throwError(() => error);
        }),
        retry(1)
      )
      .subscribe(this.init.bind(this))
  }

  init() {
    this.gameService.messanger.subscribe((msg: Message) => {

      const exists: EmbeddedViewRef<any> | undefined = this.players.get(msg.username || '')

      if (exists) {
        exists.context.$implicit = msg;
      } else {
        const view = this.container.createEmbeddedView(this.playerTpl, { $implicit: msg });
        this.players.set(msg.username || '', view)
      }
    });

    fromEvent<MouseEvent>(document.body, 'mousemove')
      .pipe(
        throttleTime(17)
      )
      .subscribe(({ clientX, clientY }: MouseEvent) => {
        this.gameService.messanger.next({ clientX, clientY });
      })
  }
}
