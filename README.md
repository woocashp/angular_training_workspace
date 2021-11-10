# LearnNgAdvApp

    npm i ../my-workspace/dist/my-lib/my-lib-0.1.0.tgz

    ng g c item --skip-tests -s -t

    ng g resolver item

    ng g s items-store --skip-tests

    ng g s features/cart/cart-store --skip-tests

    npm install idb
    ng g s features/cart/cart-idb --skip-tests

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Szczegółowy program szkolenia
### Szczegółowy opis szkolenia

#### Struktura aplikacji i podział na moduły
- Zasady tworzenia drzewa katalogów w projekcie
- Modularna struktura
- Wydzielanie komponentów, pajpów oraz dyrektyw do zew. modułów
- Konfiguracja zew. modułu
- Dynamiczne ładowanie modułów - lazy loading

#### Programowanie reaktywne - RxJs
- Tworzenie strumieni
- Observable
- Subject
- BehaviorSubject
- ReplaySubject
- Operatory
- przetwarzanie: map, buffer, group, scan ...
- Filtrowanie: filter, throttling, skip, debounce ...
- Łączenie: zip, merge, combine latest …
- warunkowe: iif, every
- narzędzia: tap, delay, toObservable
- Przydatne mechanizmy
- Higher order observables
- Cold and Hot observables
#### Generowanie własnej biblioteki - Angular library

- Tworzenie multi-project workspace
- Tworzenie biblioteki
- Konfiguracja oraz export biblioteki
- Publikowanie biblioteki na npm (opcja)
- Aktualizacja oraz wersjonowanie
- Tworzenie projektu
- Instalacja biblioteki - lokalnie oraz z NPM
- Testowanie biblioteki
#### Reaktywne zarządzanie stanem aplikacji
- Omówienie architektury Redux
- RxJs/BehaviorSubject state
- set & get state
- map to entities
- loading state
- routing state

#### Komponenty
- Ograniczenie odpowiedzialności komponentów; reużywalność
- Jak działa change detector i strategie detekcji
- Immutable & mutable

#### Dyrektywy
- Własne dyrektywy strukturalne i atrybutowe
- Wykorzystanie serwisów w dyrektywach
- ViewContainerRef
- TemplateRef
- ComponentFactoryResolver
- Export dyrektywy
- HostListener & HostBinding

#### Dynamiczne tworzenie formularzy
- Dane opisujące formularz (JSON)
- Dynamiczne tworzenie modelu formularza - form builder
- Dynamiczne tworzenie instancji komponentów
- ng-container
- ngTemplateOutlet
- Walidacja
- Obsługa zdarzeń
- Nietypowe pola formularza - form API

#### Routing
- Parametryzowanie routingu
- Zagnieżdżanie routingu
- Guards
- Resolvers

#### Komunikacja z serwerem WebSocket
- RxJs - webSocket
- Zdarzenia: open, close, message, send

#### Zapis danych w przeglądarce
- IndexedDB
- Odczyt i zapis
- Kontrolowanie wersji
- LocalStorage

#### Wprowadzenie do PWA - Progressive Web Apps
- JSON Manifest
- Service Worker
- Kontrolowanie wersji

#### Angular Material Design
- Nawigacja i podstawowy układ aplikacji
- Kontrolki formularzy
- Generowanie z użyciem schematics

#### Konfiguracja
- Zmienne środowiskowe
- proxy
- Browserslist
