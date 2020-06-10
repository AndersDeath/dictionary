import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UtilsService } from './utils.service';

@Injectable()
export class DataService {
  private dictionaryApiComSpanishKey = '09ad6ac9-1cdf-4416-b641-b7cca0a852bb';
  private dictionaryApiComSpanishUrl = 'https://dictionaryapi.com/api/v3/references/spanish/json/';
  private vocabularyComEnglishDefenition = `http://app.vocabulary.com/app/1.0/dictionary/search`;

  constructor(private http: HttpClient, public utils: UtilsService) { }

  public dictionaryApiComSpanishGet(word: string) {
    const params = new HttpParams().set('key', this.dictionaryApiComSpanishKey);
    return this.http.get(this.dictionaryApiComSpanishUrl + word, { params });
  }

  public vocabularyComEnglishDefenitionGet(word: string) {
    // let headers = new HttpHeaders({ 'Content-Type': 'text/html'});

    const params = new HttpParams()
    .set('word', word)
    .set('tz', 'Russia Moscow')
    .set('tzo', '-300')
    .set('appver', '1.0.0');
    return this.http.get(this.vocabularyComEnglishDefenition, {responseType: 'text', params}).pipe(map((e) => {
      const q = document.createElement('span');
      q.innerHTML = e;
      return q.firstChild;
    }));
  }
}
