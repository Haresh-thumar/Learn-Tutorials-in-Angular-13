import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-routing',
  templateUrl: './custom-routing.component.html',
  styleUrls: ['./custom-routing.component.scss']
})
export class CustomRoutingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  /*===================================================================================
                                    Server-side Routing
  ===================================================================================*/
  studentFile() {
    this.router.navigate(['/student-file']);
  }

  studentDetail() {
    this.router.navigate(['/student-detail']);
  }



}
