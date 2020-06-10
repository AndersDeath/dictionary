import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class HistoryService {
  public get = new Subject();
  public search = new Subject();
  constructor() { }

  set(el) {
    this.get.next(el);
    this.updateStorage(el);
  }

  public toSearch(word) {
    this.search.next(word);
  }

  public getAll() {
    return  this.loadDataFromStorage();
  }

  private updateStorage(el) {
    let st = this.loadDataFromStorage();
    st.push(el);
    localStorage.setItem('searchHistory', JSON.stringify(st));
  }

  private loadDataFromStorage() {
    let st: any = localStorage.getItem('searchHistory');
    if (st === null) {
      st = [];
    } else {
      st = JSON.parse(st);
    }
    return st;
  }


}
