import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { HistoryService } from '../../services/history.service';
import {  MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  historyList = [];
  histSub = [];
  @ViewChild('drawer', { static: false }) public drawer: MatSidenav;
  constructor(public histroy: HistoryService) {

  }
  ngOnInit() {
    this.historyList = this.histroy.getAll();
    this.historyList.reverse();
    const sub = this.histroy.get.subscribe((el) => {
      this.historyList.unshift(el);
    });
    this.histSub.push(sub);
  }
  search(word, drawer) {
    drawer.toggle();
    this.histroy.toSearch(word);
  }
  ngOnDestroy() {
    if(this.histSub.length > 0) {
      this.histSub.forEach(sub => {
        sub.unsibscribe();
      });
    }
  }
}
