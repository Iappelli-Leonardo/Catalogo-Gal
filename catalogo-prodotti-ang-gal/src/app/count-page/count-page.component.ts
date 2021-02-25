import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediatorService } from '../mediator.service';

@Component({
  selector: 'app-count-page',
  templateUrl: './count-page.component.html',
  styleUrls: ['./count-page.component.css']
})
export class CountPageComponent implements OnInit {

  constructor(public med: MediatorService, private router: Router) { }

  ngOnInit(): void {
  }

  tornaMain() {
    this.router.navigateByUrl("/main-page");
  }



}
