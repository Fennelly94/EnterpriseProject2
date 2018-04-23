import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigationBar',
  templateUrl: './navigationBar.component.html',
  styleUrls: ['./navigationBar.component.css']
})
export class NavigationBarComponent implements OnInit {
  title = 'Stocks and Shares App';
  constructor() { }

  ngOnInit() {
  }

}
