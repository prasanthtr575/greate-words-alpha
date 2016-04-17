import { Injectable } from 'angular2/core';
import { Word } from './word';
import { Http, Response } from 'angular2/http';
import { Headers, RequestOptions } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WordService {
	private _wordsUrl = 'app/data/words.json'; // URL to JSON file

	constructor (private http: Http) {}

	getWords() : Observable<Word[]> {
		return this.http.get(this._wordsUrl)
						.map(this.extractData)
						.catch(this.handleError);
	}

	private extractData(res: Response) {
		if (res.status < 200 || res.status >= 300) {
    		throw new Error('Bad response status: ' + res.status);
    	}

    	let body = res.json();
    	
    	return body.data || { };
	}

	private handleError(error: any) {
    	let errMsg = error.message || 'Server error';
    	
    	console.error(errMsg);

    	return Observable.throw(errMsg);
	}
}

