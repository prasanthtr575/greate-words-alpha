System.register(['angular2/core', 'angular2/router', './word.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, word_service_1;
    var WordsListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (word_service_1_1) {
                word_service_1 = word_service_1_1;
            }],
        execute: function() {
            WordsListComponent = (function () {
                function WordsListComponent(_router, _wordService) {
                    this._router = _router;
                    this._wordService = _wordService;
                    this.title = 'Great Words';
                }
                WordsListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    /*
                    this._wordService.getWords()
                        .then(words => this.words = words);
                    */
                    debugger;
                    this._wordService.getWords()
                        .subscribe(function (words) { return _this.words = words; }, function (error) { return _this.errorMessage = error; });
                };
                WordsListComponent.prototype.addWord = function () {
                    var link = ['AddWord'];
                    this._router.navigate(link);
                };
                WordsListComponent.prototype.goWordMeaning = function () {
                    var link = ['WordMeaning'];
                    this._router.navigate(link);
                };
                WordsListComponent = __decorate([
                    core_1.Component({
                        selector: 'words-list',
                        templateUrl: "app/words-list.Component.html",
                        providers: [
                            word_service_1.WordService
                        ]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, word_service_1.WordService])
                ], WordsListComponent);
                return WordsListComponent;
            }());
            exports_1("WordsListComponent", WordsListComponent);
        }
    }
});
//# sourceMappingURL=wordsList.component.js.map