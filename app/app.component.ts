import { Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { WordsListComponent } from './wordsList.component';
import { AddWordComponent } from './add-word.component';

@Component({
    selector: 'my-app',
    template: `
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS
    ]
})

@RouteConfig([
    {
        path: '/wordslist',
        name: 'WordsList',
        component: WordsListComponent,
        useAsDefault: true
    },
    {
        path: '/addword',
        name: 'AddWord',
        component: AddWordComponent
    }
])

export class AppComponent {
    title = 'Great Words';
}