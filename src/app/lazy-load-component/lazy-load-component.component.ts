import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-lazy-load-component',
  templateUrl: './lazy-load-component.component.html',
  styleUrls: ['./lazy-load-component.component.scss']
})
export class LazyLoadComponentComponent implements OnInit {

  constructor(private viewContainer: ViewContainerRef, private cfr: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

}
