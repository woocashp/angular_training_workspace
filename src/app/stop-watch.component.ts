import { Observable, of } from 'rxjs';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { mapTo, switchMap, scan, tap, map, delay, share } from 'rxjs/operators';


import { merge } from 'rxjs';
import { startWith } from 'rxjs/operators';


interface State {
  count: boolean;
  speed: number;
  value: number;
}


@Component({
  selector: 'stop-watch',
  styles: [`
  .wrapper {
    text-align: center;
    background: green;
    color: yellow;
    display: inline-block;
    border-radius: 50%;
    padding: 30px;
    margin: 20px;
    width: 150px;
    height: 150px;
  }
  .hidden {
    display: none;
  }
  #counter {
    font-size:14px;
  }
  `],
  template: `
  <p>Użyte operatory: fromEvent,mapTo, startWith, scan, tap, switchMap, share.</p>
  <div class="wrapper">
    <pre id="counter">{{(counter$|async)|json}}</pre>
    <div id="controls">
      <button [class.hidden]="(counter$|async)?.count" #start>start</button>
      <button [class.hidden]="!(counter$|async)?.count" #pause>pause</button>
      <button #reset>reset</button>
    </div>
  </div>
  `
})


export class StopWatchComponent implements AfterViewInit {


  counter$!: Observable<State>;
  @ViewChild('start') start!: ElementRef;
  @ViewChild('pause') pause!: ElementRef;
  @ViewChild('reset') reset!: ElementRef;


  ngAfterViewInit(): void {


    const events$ = merge(
      fromEvent(this.start.nativeElement, 'click').pipe(mapTo({ count: true })),
      fromEvent(this.pause.nativeElement, 'click').pipe(mapTo({ count: false })),
      fromEvent(this.reset.nativeElement, 'click').pipe(mapTo({ value: 0 }))
    );


    const initValue: State = {
      count: false,
      speed: 10,
      value: 0
    };


    this.counter$ = events$.pipe(
        // startWith(initValue),
        scan((acc: State, val: any) => ({...acc, ...val}), initValue),
        switchMap((v: State) => {
            return v.count
            ? interval(v.speed).pipe(
                tap(console.log),
                tap(_ => v.value++),
                map(_ => v)
            )
            : of(v)

        }),
        // Ważne, żeby nie było 3 razy w związku z async w template'ie
        share()
    );


  }


}

