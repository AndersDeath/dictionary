import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { take, map } from 'rxjs/operators';
import { HistoryService } from '../../services/history.service';

@Component({
  selector: "app-front",
  templateUrl: "./front.component.html",
  styleUrls: ["./front.component.scss"]
})
export class FrontComponent implements OnInit {
  public viewObj = [];
  public searchValue: any;
  private spanishAudioUrl = `https://media.merriam-webster.com/audio/prons/es/me/mp3/`;
  // private dictResponse = [{ "meta": { "id": "madre", "uuid": "22a1ab2b-89a9-43af-ae93-a7de57c0707c", "lang": "es", "src": "spanish", "section": "alpha", "stems": ["madre", "madre política", "la madre patria"], "offensive": false }, "hwi": { "hw": "madre", "prs": [{ "sound": { "audio": "madre01sp" } }] }, "fl": "feminine noun", "def": [{ "sseq": [[["sense", { "sn": "1", "dt": [["text", "{bc}{a_link|mother} "], ["vis", [{ "t": "madre biológica/adoptiva", "tr": "biological/adoptive mother" }, { "t": "madre de alquiler", "tr": "surrogate mother" }, { "t": "madre soltera", "tr": "single/unwed mother" }]]] }]], [["sense", { "sn": "2", "vrs": [{ "va": "madre política" }], "dt": [["text", "{bc}{a_link|mother-in-law}"]] }]], [["sense", { "sn": "3", "vrs": [{ "va": "la Madre Patria" }], "dt": [["text", "{bc}the mother country (said of Spain)"]] }]]] }], "shortdef": ["mother", "mother-in-law", "the mother country (said of Spain)"] }, { "meta": { "id": "mentar", "uuid": "e0a0a278-6691-437e-bb7e-ede5bcccd332", "lang": "es", "src": "spanish", "section": "alpha", "stems": ["mentar", "mentar la madre a"], "offensive": false }, "hwi": { "hw": "mentar" }, "fl": "transitive verb", "def": [{ "sseq": [[["sense", { "sn": "1", "dt": [["text", "{bc}to {a_link|mention}, to {a_link|name}"]] }]], [["sense", { "sn": "2", "vrs": [{ "va": "mentar la madre a" }], "sls": ["familiar"], "dt": [["text", "{bc}to {a_link|insult}, to swear at"]] }]]] }], "suppl": { "cjts": [{ "cjid": "gppt", "cjfs": ["mentando", "mentado"] }, { "cjid": "pind", "cjfs": ["miento", "mientas", "mienta", "mentamos", "mentáis", "mientan"] }, { "cjid": "pret", "cjfs": ["mentaba", "mentabas", "mentaba", "mentábamos", "mentabais", "mentaban"] }, { "cjid": "pprf", "cjfs": ["menté", "mentaste", "mentó", "mentamos", "mentasteis", "mentaron"] }, { "cjid": "futr", "cjfs": ["mentaré", "mentarás", "mentará", "mentaremos", "mentaréis", "mentarán"] }, { "cjid": "cond", "cjfs": ["mentaría", "mentarías", "mentaría", "mentaríamos", "mentaríais", "mentarían"] }, { "cjid": "psub", "cjfs": ["miente", "mientes", "miente", "mentemos", "mentéis", "mienten"] }, { "cjid": "pisb1", "cjfs": ["mentara", "mentaras", "mentara", "mentáramos", "mentarais", "mentaran"] }, { "cjid": "pisb2", "cjfs": ["mentase", "mentases", "mentase", "mentásemos", "mentaseis", "mentasen"] }, { "cjid": "fsub", "cjfs": ["mentare", "mentares", "mentare", "mentáremos", "mentareis", "mentaren"] }, { "cjid": "ppci", "cjfs": ["he mentado", "has mentado", "ha mentado", "hemos mentado", "habéis mentado", "han mentado"] }, { "cjid": "ppsi", "cjfs": ["había mentado", "habías mentado", "había mentado", "habíamos mentado", "habíais mentado", "habían mentado"] }, { "cjid": "pant", "cjfs": ["hube mentado", "hubiste mentado", "hubo mentado", "hubimos mentado", "hubisteis mentado", "hubieron mentado"] }, { "cjid": "fpin", "cjfs": ["habré mentado", "habrás mentado", "habrá mentado", "habremos mentado", "habréis mentado", "habrán mentado"] }, { "cjid": "cpef", "cjfs": ["habría mentado", "habrías mentado", "habría mentado", "habríamos mentado", "habríais mentado", "habrían mentado"] }, { "cjid": "ppfs", "cjfs": ["haya mentado", "hayas mentado", "haya mentado", "hayamos mentado", "hayáis mentado", "hayan mentado"] }, { "cjid": "ppss1", "cjfs": ["hubiera mentado", "hubieras mentado", "hubiera mentado", "hubiéramos mentado", "hubierais mentado", "hubieran mentado"] }, { "cjid": "ppss2", "cjfs": ["hubiese mentado", "hubieses mentado", "hubiese mentado", "hubiésemos mentado", "hubieseis mentado", "hubiesen mentado"] }, { "cjid": "fpsb", "cjfs": ["hubiere mentado", "hubieres mentado", "hubiere mentado", "hubiéremos mentado", "hubiereis mentado", "hubieren mentado"] }, { "cjid": "impf", "cjfs": ["-", "mienta", "miente", "mentemos", "mentad", "mienten"] }] }, "shortdef": ["to mention, to name", "to insult, to swear at"] }];
  // private dictResponse2 = [{"meta":{"id":"trabajar","uuid":"ab4e71cf-c967 - 4750 - 85aa - 251a37074085","lang":"es","src":"spanish","section":"alpha","stems":["trabajar"],"offensive":false},"hwi":{"hw":"trabajar","prs":[{"sound":{"audio":"traba04sp"}}]},"fl":"intransitive verb","def":[{"sseq":[[["sense",{"sn":"1","dt":[["text","{ bc } to { a_link | work } "],["vis",[{"t":"trabaja mucho","tr":"he works hard"},{"t":"trabajo de secretaria","tr":"I work as a secretary"}]]]}]],[["sense",{"sn":"2","dt":[["text","{ bc } to { a_link | strive } "],["vis",[{"t":"trabajan por mejores oportunidades","tr":"they're striving for better opportunities"}]]]}]],[["sense",{"sn":"3","dt":[["text","{bc}to {a_link|act}, to {a_link|perform} "],["vis",[{"t":"trabajar en una película","tr":"to be in a movie"}]]]}]]]},{"vd":"transitive verb","sseq":[[["sense",{"sn":"1","dt":[["text","{bc}to {a_link|work} (metal)"]]}]],[["sense",{"sn":"2","dt":[["text","{bc}to {a_link|knead}"]]}]],[["sense",{"sn":"3","dt":[["text","{bc}to {a_link|till}"]]}]],[["sense",{"sn":"4","dt":[["text","{bc}to {a_link|work on} "],["vis",[{"t":"tienes que trabajar el español","tr":"you need to work on your Spanish"}]]]}]]]}],"suppl":{"cjts":[{"cjid":"gppt","cjfs":["trabajando","trabajado"]},{"cjid":"pind","cjfs":["trabajo","trabajas","trabaja","trabajamos","trabajáis","trabajan"]},{"cjid":"pret","cjfs":["trabajaba","trabajabas","trabajaba","trabajábamos","trabajabais","trabajaban"]},{"cjid":"pprf","cjfs":["trabajé","trabajaste","trabajó","trabajamos","trabajasteis","trabajaron"]},{"cjid":"futr","cjfs":["trabajaré","trabajarás","trabajará","trabajaremos","trabajaréis","trabajarán"]},{"cjid":"cond","cjfs":["trabajaría","trabajarías","trabajaría","trabajaríamos","trabajaríais","trabajarían"]},{"cjid":"psub","cjfs":["trabaje","trabajes","trabaje","trabajemos","trabajéis","trabajen"]},{"cjid":"pisb1","cjfs":["trabajara","trabajaras","trabajara","trabajáramos","trabajarais","trabajaran"]},{"cjid":"pisb2","cjfs":["trabajase","trabajases","trabajase","trabajásemos","trabajaseis","trabajasen"]},{"cjid":"fsub","cjfs":["trabajare","trabajares","trabajare","trabajáremos","trabajareis","trabajaren"]},{"cjid":"ppci","cjfs":["he trabajado","has trabajado","ha trabajado","hemos trabajado","habéis trabajado","han trabajado"]},{"cjid":"ppsi","cjfs":["había trabajado","habías trabajado","había trabajado","habíamos trabajado","habíais trabajado","habían trabajado"]},{"cjid":"pant","cjfs":["hube trabajado","hubiste trabajado","hubo trabajado","hubimos trabajado","hubisteis trabajado","hubieron trabajado"]},{"cjid":"fpin","cjfs":["habré trabajado","habrás trabajado","habrá trabajado","habremos trabajado","habréis trabajado","habrán trabajado"]},{"cjid":"cpef","cjfs":["habría trabajado","habrías trabajado","habría trabajado","habríamos trabajado","habríais trabajado","habrían trabajado"]},{"cjid":"ppfs","cjfs":["haya trabajado","hayas trabajado","haya trabajado","hayamos trabajado","hayáis trabajado","hayan trabajado"]},{"cjid":"ppss1","cjfs":["hubiera trabajado","hubieras trabajado","hubiera trabajado","hubiéramos trabajado","hubierais trabajado","hubieran trabajado"]},{"cjid":"ppss2","cjfs":["hubiese trabajado","hubieses trabajado","hubiese trabajado","hubiésemos trabajado","hubieseis trabajado","hubiesen trabajado"]},{"cjid":"fpsb","cjfs":["hubiere trabajado","hubieres trabajado","hubiere trabajado","hubiéremos trabajado","hubiereis trabajado","hubieren trabajado"]},{"cjid":"impf","cjfs":["-","trabaja","trabaje","trabajemos","trabajad","trabajen"]}]},"shortdef":["to work","to strive","to act, to perform"]},{"meta":{"id":"hora","uuid":"f91434e1-d5d3-40ad-a811-8e91680ae75a","lang":"es","src":"spanish","section":"alpha","stems":["hora","hora de cierre","hora local","horas de oficina/trabajo","horas de oficina","horas de trabajo","hora pico","horas extras","las altas horas","trabajar por horas"],"offensive":false},"hwi":{"hw":"hora","prs":[{"sound":{"audio":"hora001sp"}}]},"fl":"feminine noun","def":[{"sseq":[[["sense",{"sn":"1","dt":[["text","{bc}{a_link|hour} "],["vis",[{"t":"media hora","tr":"half an hour"},{"t":"se pasa horas viendo televisión","tr":"he spends hours watching television"}]]]}]],[["sense",{"sn":"2","dt":[["text","{bc}{a_link|time} "],["vis",[{"t":"¿qué hora es?","tr":"what time is it?"},{"t":"llegar a la hora","tr":"to arrive on time"},{"t":"a la hora en punto","tr":"on the dot"},{"t":"a la hora de comer","tr":"at mealtime"},{"t":"a la última hora","tr":"at the last minute"},{"t":"a primera hora","tr":"first thing"},{"t":"antes de la hora","tr":"early, ahead of time"},{"t":"es hora de irnos a casa","tr":"it's time to go home"},{"t":"ya es hora de tomarlo en serio","tr":"it's about time we took it seriously"}]]]}]],[["sense",{"sn":"3","dt":[["text","{sx|cita||} {bc}{a_link|appointment} "],["vis",[{"t":"pedir/dar/tener hora","tr":"to make/give/have an appointment"}]]]}]],[["sense",{"sn":"4","vrs":[{"va":"hora de cierre"}],"dt":[["text","{bc}closing time"]]}]],[["sense",{"sn":"5","vrs":[{"va":"hora local"}],"dt":[["text","{bc}local time"]]}]],[["sense",{"sn":"6","vrs":[{"va":"horas de oficina/trabajo"}],"dt":[["text","{bc}office/work hours"]]}]],[["sense",{"sn":"7","vrs":[{"va":"hora pico"}],"dt":[["text","{bc}{a_link|rush hour}"]]}]],[["sense",{"sn":"8","vrs":[{"va":"horas extras"}],"dt":[["text","{bc}{a_link|overtime}"]]}]],[["sense",{"sn":"9","vrs":[{"va":"las altas horas"}],"dt":[["text","{bc}{a_link|the wee hours}"]]}]],[["sense",{"sn":"10","vrs":[{"va":"trabajar por horas"}],"dt":[["text","{bc}to work by the hour"]]}]]]}],"shortdef":["hour","time","cita : appointment"]}];
;
  private subs = [];

  constructor(public data: DataService, public history: HistoryService) {}

  ngOnInit() {
    // this.dictResponse = this.dictResponse2;
    // console.log(this.dictResponse);
    // this.dictResponse.forEach((data) => {
    //   console.log(data.hwi);
    //   console.log(data.shortdef);
    //   this.viewObj.push({
    //     lang: data.meta.lang,
    //     word: data.hwi.hw,
    //     soundUrls: this.getSoundUrls(data, data.meta.lang),
    //     def: {variants: this.getDefenitions(data)},
    //     shortDef: data.shortdef,
    //     fl: data.fl,
    //   });
    // });
    // console.log('viewObj',this.viewObj);

    this.data.vocabularyComEnglishDefenitionGet('death').subscribe((e)=>{
      console.log('voc',e)
    })

    const sub = this.history.search.subscribe((e) => {
      this.searchValue = e;
      this.getData();
    });
    this.subs.push(sub);
  }

  parseResponce(resp) {
    // console.log(resp, JSON.stringify(resp));
    let arr = []
    resp.forEach((data) => {
      // console.log(data.hwi);
      if (data.meta.lang === 'es') {
        arr.push({
          lang: data.meta.lang,
          word: data.hwi.hw,
          soundUrls: this.getSoundUrls(data, data.meta.lang),
          def: { variants: this.getDefenitions(data) },
          shortDef: data.shortdef,
          fl: data.fl,
        });
      }
    });

    return arr;
  }

  getSoundUrls(data, lang) {
    const res = [];
    if (lang === 'es') {
      if (data.hwi.prs === undefined) {return res;}
      data.hwi.prs.forEach((e) => {
        res.push(this.spanishAudioUrl + e.sound.audio[0]+ '/' + e.sound.audio + '.mp3');
      });
    }
    return res;
  }

  getDefenitions(data) {
    let res = {translated: [], simple:[]};
    data.def.forEach(level1 => {
      for (const level2 of level1.sseq) {
        level2.forEach((level3)=>{
          if(level3[0] === 'sense') {
            let q = this.parceSense(level3[1]);
            if (q.translated.length > 0 || q.simple.length > 0) {
              if(q.simple.length>0){

                res.simple.push(q.simple);
              }
              if(q.translated.length>0){

                res.translated.push(q.translated);
              }
            }
          } else {
            console.log('ы');
          }
        });
      }
    });
    return res;
  }

  parceSense(data) {
    let res = {
      translated:[],
      simple: []
    };
    Object.keys(data).forEach((key) => {
      switch(key) {
        case 'vrs':
          res.simple.push(this.vrsParse(data[key]));
          break;
        case 'dt':
          let q = this.dtParse(data[key]);
          if(q.length > 0) {
            for (let i of q) {
              res.translated.push(i);
            }
          }
          break;
        case 'sn':
          break;
        default:
          break;
      }
    });
    return res;
  }

  vrsParse(data) {
    let res=[];
    data.forEach(element => {
      res.push(element.va);
    });
    return res;
  }
  dtParse(data) {
    let res = [];
    data.forEach(element => {
      if(element[0] === 'vis') {
        element[1].forEach((el) => {
          res.push(el);
        })
      }
    });
    return res;
  }

  search() {
    // console.log('this.searchValue', this.searchValue);
    this.history.set(this.searchValue);
    this.getData();
  }

  getData() {
    this.data.dictionaryApiComSpanishGet(this.searchValue).pipe(take(1), map((res) => this.parseResponce(res))).subscribe((e: any[]) => {
      // console.log(JSON.stringify(e));
      this.viewObj= [];
      this.viewObj = e;
      this.searchValue = '';
      // console.log(this.viewObj);

    });

  }

  public ngOnDestroy() {
    if(this.subs.length>0) {
      this.subs.forEach(sub=>{
        sub.unsubscribe();
      })
    }
  }

}
