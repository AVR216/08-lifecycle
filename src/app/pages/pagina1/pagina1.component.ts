import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges
} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component
  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  name: string = "Jhon";
  segundos: number = 0;
  timerSubscription!: Subscription;

  /**
   * Se llama primero, se hace inyeccion de dependencias que necesita el componente
   * O si se ocupa algún tipo de inicialización antes de que el html sea construido
   */
  constructor() {
    console.log("constructor");
  }

  /**
   * Se ejcuta cuando el componente está ya inicializado. De tal manera, que se puede
   * tener acceso al html.
   * Por ejemplo: Se pueden hacer peticiones http, traer información desde servicios
   */
  ngOnInit(): void {
    console.log("on Init");
    this.timerSubscription = interval(1000).subscribe(number => this.segundos = number);
  }

  /**
   * Se ejecuta cuando hay cambios en componentes
   * ocasionados por @inputs
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
    this.timerSubscription.unsubscribe();
  }

  guardar() {

  }
}
