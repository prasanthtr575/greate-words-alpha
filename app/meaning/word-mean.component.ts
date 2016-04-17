import { Component, Input, OnInit } from 'angular2/core';
import { Word } from '../word';
import { RouteParams } from 'angular2/router';

@Component({
	selector: 'word-mean',
	templateUrl: 'app/meaning/word-mean.component.html'
})

export class WordMeanComponent implements OnInit{
	@Input() word: Word;

	constructor(
    	private _routeParams: RouteParams) {
  	}
    
  	ngOnInit() {
    	//this.word = this._routeParams.get('word');
    	debugger;
  	}
    
  	goBack() {
    	window.history.back();
  	}
}


