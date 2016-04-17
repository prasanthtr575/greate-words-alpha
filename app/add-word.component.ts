import { Component} from 'angular2/core';

@Component({
	selector: 'add-word',
	templateUrl: 'app/add-word.component.html'
})

export class AddWordComponent {
	goBack() {
		window.history.back();
	}
}