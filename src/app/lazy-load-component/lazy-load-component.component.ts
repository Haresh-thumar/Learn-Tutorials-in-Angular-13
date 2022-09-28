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

  async loadAdmin() {
    this.viewContainer.clear();
    const { AdminListComponent } = await import('./admin-list/admin-list.component');
    this.viewContainer.createComponent(
      this.cfr.resolveComponentFactory(AdminListComponent)
    )
  }

  async loadUser() {
    this.viewContainer.clear();
    const { UserListComponent } = await import('./user-list/user-list.component');
    this.viewContainer.createComponent(
      this.cfr.resolveComponentFactory(UserListComponent)
    )
  }

}
