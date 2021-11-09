import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BehaviorSubject, catchError, combineLatest, concatAll, concatMap, delay, filter, from, fromEvent, groupBy, interval, map, mapTo, merge, mergeAll, mergeMap, multicast, Observable, Observer, of, pipe, pluck, refCount, ReplaySubject, retry, scan, share, shareReplay, Subject, switchAll, switchMap, switchMapTo, take, takeUntil, takeWhile, tap, throwError, timer, toArray } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn-rxjs';
  url = 'https://api.debugger.pl/items';


  constructor(private http:HttpClient) {
  // this.observableAndObserver();
  // this.observabeExamples();
  // this.subjectExamples();
  // this.customObservable();
  // this.unsubscribeWays();
  
  // this.errorHandle();
  // this.filteringOperators();
  // this.transformationOperators();
  // this.combinationOperators();
  // this.hotvscold();
  
  // this.multicastOperators();
  
  // this.customOperators();
  // this.higherOrder()
  }  

  higherOrder() {

    const data$: Observable<any[]> = ajax('https://api.debugger.pl/items')
      .pipe(
        map(({ response: { data } }: any) => data)
      )

    data$
      .pipe(
        switchMap((val: any[]) => from(val)),


        groupBy((val) => val.price > 100),
        tap((val) => {
          console.log(val);
        }),
        mergeMap((ob$:any)=>{
          return ob$.pipe(toArray())
        })
      ).subscribe({
        next: console.log
      })


    const text = 'hello world!';
    const arr = text.split('');

    from(arr)
      .pipe(
        map((v) => v == ' ' ? '*' : v),
        concatMap((v) => of(v).pipe(delay(100)))
      )
      .subscribe(console.log)

    // interval(1000)
    //   .pipe(switchMapTo(of(1))).subscribe(console.log)

    // of('your nick')
    //   .pipe(
    //     map((val) => prompt(val)),
    //     switchMap((v: any) => /^\w{3,6}$/.test(v) ? of(v) : throwError(() => { e: 'any error' })),
    //     retry(2)
    //   )
    // .subscribe(console.log)

    // const obs: Observable<number[]> = of([1, 2, 3]).pipe(
    //   switchMap(() => of([0])),
    //   map((value) => [...value, 4])
    // )
    // obs.subscribe(console.log);

    // const urls = [
    //   'https://api.debugger.pl/utils/big-deal/10000',
    //   'https://api.debugger.pl/utils/big-deal/1000000',
    //   'https://api.debugger.pl/utils/big-deal/10000'
    // ];

    // from(urls)
    //   .pipe(
    //     map(url => ajax(url)),
    //     // concatAll(),
    //     // mergeAll(),
    //     switchAll()
    //   )
    //   .subscribe(({response}) => console.log(response))


    // of(0,1,2,4,5,6,7,8,9,10,11,12,13,14)
    //   .pipe(
    //     tap(console.log),
    //     map((val) => {
    //       return of(val).pipe(delay(1200))
    //     }),
    //     switchAll()
    //     // mergeAll()
    //     // concatAll()
    //   ).subscribe(this.myObserver)  
  }

  double(ob$: Observable<number>) {
    return new Observable((observer: Observer<number>) => {
      ob$.subscribe({
        next: (val: number) => observer.next(val * 2),
        error: (err: any) => {},
        complete: () => observer.complete()
      })
    })
  }

  multiply(num: number): any {
    return (ob$: Observable<number>) => {
      return new Observable((obeserver: Observer<number>) => {
        ob$.subscribe({
          next: (val) => obeserver.next(val * num),
          error: (err) => {},
          complete: () => obeserver.complete()
        })
      })
    }
  }

  customOperators() {
    of(111, 222)
      .pipe(
        this.double,
        this.multiply(10)
      )
      .subscribe(this.myObserver)
  }

  multicastOperators() {
    const req$ = ajax.get(this.url).pipe(
      // multicast(new Subject()), // share
      // refCount()
      
      // share()

      // multicast(new ReplaySubject()), // shareReplay
      shareReplay()
    );

    let sub1 = req$.subscribe(this.myObserver);
    let sub2 = req$.subscribe(this.myObserver);

    setTimeout(()=> {
      let sub3 = req$.subscribe();
    }, 200);
    
    setTimeout(()=> {
      let sub4 = req$.subscribe(this.myObserver);
    }, 1000);

    setTimeout(() => {
      sub1.unsubscribe();
      sub2.unsubscribe();
    }, 0)
  }

  combinationOperators() {
    merge(
      fromEvent<MouseEvent>(document.body, 'click'),
      fromEvent<MouseEvent>(document.body, 'mousemove')
    )
    .pipe(
      map(({type}: MouseEvent) => ({type})),
      // scan((acc: any, val: any) => ({...acc, [val.type]: ++acc[val.type]}), {click: 0, mousemove: 0})
      scan((acc: any, val: any) => ({...acc, [val.type]: (acc[val.type] !== undefined ? acc[val.type] += 1 : 0)}), {})
    )
    .subscribe(this.myObserver)

    combineLatest([
      fromEvent<MouseEvent>(document.body, 'click'),
      fromEvent<MouseEvent>(document.body, 'mousemove')
    ])
    .subscribe(([click, mousemove]) => console.log(click, mousemove))
  }

  transformationOperators() {
    const people = [
      {name: 'Sue', aga: 25},
      {name: 'Joe', aga: 30},
      {name: 'Frank', aga: 25},
      {name: 'Sarah', aga: 55},
    ];

    const source = from(people);

    const example = source.pipe(
      groupBy((val: any) => val.age)
    ).subscribe(this.myObserver)
  }

  filteringOperators() {
    interval(1000)
      .pipe(
        mapTo("nie interesuje mnie co jest w środku")
      ).subscribe(this.myObserver)


    interval(1000)
      .pipe(
        filter((val) => {
          return val % 2 === 0;
        }),
        take(4),
        takeUntil(fromEvent(document.body, 'click')),
        map((val) => val-1),
        takeWhile((val: any) => val <= 5)
      )
      .subscribe(this.myObserver)

    fromEvent<MouseEvent>(document.body, 'mouseover')
        .pipe(
          // pluck('target', 'type')
          // map((e: MouseEvent) => ({x: e.clientX, y: e.clientY}))
          map(({clientX: x, clientY: y, target: { className: name } }: any) => ({x, y, name})),
          // map(({clientX: x, clientY: y, target: { className: name } }: { clientX: any, clientY: any, target: any}) => ({x, y, name})),
          // map(({clientX: x, clientY: y, target: { className: name }: any }: MouseEvent) => ({x, y, name}))
          scan((acc:any, val:any) =>({...acc, ...val, count: ++acc.count }), {count: 0})
        )
        .subscribe(this.myObserver);

    [1,2,3].reduce((acc,val)=>acc+val,0)
  }

  hotvscold() {
    // cold
    //const req$ = ajax.get(this.url);

    // hot
    const req$ = ajax.get(this.url).pipe(share());

    let sub1 = req$.subscribe(this.myObserver);

    setTimeout(()=> {
      sub1.unsubscribe();
    }, 1000);
    
    setTimeout(()=> {
      req$.subscribe(this.myObserver);
    }, 1000);
  }

  errorHandle() {
    const req$ = this.http.get('http://badurl.pl')
    req$
      .pipe(
        catchError((err: any)=>{
          return throwError(err);
        })
      )
      .subscribe(this.myObserver);

    req$.subscribe(this.myObserver);

  }

  unsubscribeWays() {
    // przez operator
    // interval(1000).pipe(take(1)).subscribe(this.myObserver)

    const int$ = interval(1000)

    const subscription = int$.subscribe(this.myObserver)
    
    // basic
    setTimeout(() => {
      subscription.unsubscribe();
    }, 2000);


  }

  customObservable() {
    const ob$ = new Observable((observer:Observer<any>)=>{
      let i = 0;
      setInterval(()=> {
        i++;
        observer.next(new Date());
      }, 1000);

      //TODO: doesn't work
      if (i > 5) {
        observer.complete();
      }
    })

    ob$.subscribe(this.myObserver)
  }

  subjectExamples() {
    const su: Subject<number> = new Subject();

    su.subscribe(this.myObserver)

    su.next(1);
    su.next(2);
    su.error("fucking shitt");

    const bs: BehaviorSubject<number> = new BehaviorSubject(100);

    bs.subscribe(this.myObserver);
    bs.next(101);
    bs.complete()

    console.debug(bs.getValue(), bs.value)

    const rs: ReplaySubject<number> = new ReplaySubject()

    rs.next(1);
    rs.next(2);
    rs.error("dupa");
    rs.next(4);
    rs.subscribe(this.myObserver);

  }

  observabeExamples() {
    // interval(1000).subscribe(this.myObserver);

    // timer(0, 5000).subscribe(this.myObserver);

    fromEvent(document.body, 'click').subscribe(this.myObserver);

    // ajax(this.url).subscribe(this.myObserver);
    // of(1,2,3).subscribe(this.myObserver);
    // from([1,2,3]).subscribe(this.myObserver)
    // from(fetch(this.url)).subscribe(this.myObserver)

    // interval(500).pipe(take(5)).subscribe(this.myObserver);

    interval(500).pipe(delay(5000)).subscribe(this.myObserver);
  }

  observableAndObserver() {
    of(123)
    .subscribe(this.myObserver)
  }

  get myObserver(): Observer<any> {
    return {
      next: (val: any) => {
        console.log(val);
      },
      error: (err: any) => {
        console.error("kaputo", err);
      },
      complete: () => {
        console.warn("finito: ", this);
      }
    }
  }
}

