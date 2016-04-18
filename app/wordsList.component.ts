import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Word } from './word';
import { WordService } from './word.service';
import { Observable }     from 'rxjs/Observable';

@Component({
    selector: 'words-list',
    templateUrl: "app/words-list.Component.html",
    providers: [
        WordService
    ]
})

export class WordsListComponent implements OnInit {
    title = 'Great Words';
    errorMessage: string;
    words: Word[];

    constructor(
        private _router: Router,
        private _wordService: WordService
    ) { }

    ngOnInit() {
        /*
        this._wordService.getWords()
            .then(words => this.words = words);
        */
        this._wordService.getWords()
                     .subscribe(
                       words => this.words = words,
                       error => this.errorMessage = <any>error);
    }

    addWord() {
        let link = ['AddWord'];
        this._router.navigate(link);
    }

    goWordMeaning(quote: Word) {
        let quoteStr = JSON.stringify(quote);
        let link = ['WordMeaning',{ word: quoteStr}];
        this._router.navigate(link);
    }

    /*
    gotoDetail(hero: Hero) {
    let link = ['HeroDetail', { id: hero.id }];
    this._router.navigate(link);
  }
    */
}