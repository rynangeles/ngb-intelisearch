import { ɵɵdefineInjectable, Injectable, EventEmitter, Component, ViewChild, Input, Output, NgModule } from '@angular/core';
import { of, Subject, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter as filter$1, switchMap, map as map$1 } from 'rxjs/operators';
import { filter, takeRight, map, last, chain } from 'lodash';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

class NgbIntelisearchService {
    constructor() { }
}
NgbIntelisearchService.ɵprov = ɵɵdefineInjectable({ factory: function NgbIntelisearchService_Factory() { return new NgbIntelisearchService(); }, token: NgbIntelisearchService, providedIn: "root" });
NgbIntelisearchService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
NgbIntelisearchService.ctorParameters = () => [];

var Token;
(function (Token) {
    Token[Token["Logical"] = 0] = "Logical";
    Token[Token["Key"] = 1] = "Key";
    Token[Token["Operator"] = 2] = "Operator";
    Token[Token["Value"] = 3] = "Value";
})(Token || (Token = {}));
var KeyCode;
(function (KeyCode) {
    KeyCode[KeyCode["Enter"] = 13] = "Enter";
    KeyCode[KeyCode["Backspace"] = 8] = "Backspace";
})(KeyCode || (KeyCode = {}));
;
const EnumLength = Enum => {
    return Object.keys(Enum).map(val => Number(isNaN(Number(val)))).reduce((a, b) => a + b, 0);
};
const ɵ0 = EnumLength;
class NgbIntelisearchComponent {
    constructor() {
        this.logical = () => of([
            { value: 'AND', label: 'AND' },
            { value: 'OR', label: 'OR' }
        ]);
        this.comparison = () => of([
            { value: '=', label: 'equal' },
            { value: '!=', label: 'not equal' },
            { value: 'LIKE', label: 'contains' },
            { value: '>', label: 'greater than' },
            { value: '<', label: 'less than' }
        ]);
        this.search = new EventEmitter();
        this.focus$ = new Subject();
        this.click$ = new Subject();
        this.tokens = [];
        this.inputModel = '';
        this.inputFormatter = (input) => input.value;
        this.tokenSearch = this.tokenSearch.bind(this);
    }
    addToken() {
        const token = this.tokens.length ? [] : [null];
        this.tokens.push(token);
        this.token = this.tokens[this.tokens.indexOf(token)];
    }
    ngOnInit() {
        this.addToken();
        this.getSearchTokens();
    }
    saveSearchTokens() {
        const tokens = this.getSearchTokens();
        tokens.push(filter(this.tokens, token => token.length));
        window.localStorage.setItem(`sf:${this.name}`, JSON.stringify(takeRight(tokens, 5)));
    }
    getSearchTokens() {
        const tokens = window.localStorage.getItem(`sf:${this.name}`);
        this.searchTokens = JSON.parse(tokens) || [];
        return this.searchTokens;
    }
    clearSearchTokens() {
        window.localStorage.removeItem(`sf:${this.name}`);
        this.getSearchTokens();
    }
    tokensToString(tokens) {
        return map(tokens, i => i.join('')).join('&');
    }
    onSelectRecentSearch(tokens) {
        this.tokens = tokens;
        this.addToken();
        this.search.emit(this.tokens);
    }
    getInputPlaceholder(token) {
        let placeholder = 'Search';
        switch (token.length) {
            case Token.Logical:
                placeholder = 'Seach Logical Operator';
                break;
            case Token.Key:
                placeholder = 'Seach Key';
                break;
            case Token.Operator:
                placeholder = 'Seach Comparison Operator';
                break;
            case Token.Value:
                placeholder = 'Seach Value';
                break;
            default:
                placeholder = 'Seach...';
                break;
        }
        return placeholder;
    }
    /*
    TODO:
    inspect how tokens and queries produced
    */
    onTypeheadKeydown(evt) {
        const keyCode = (evt.which) ? evt.which : evt.keyCode;
        switch (keyCode) {
            case KeyCode.Enter:
                if (this.inputModel.length > 0) {
                    evt.preventDefault();
                    this.search.emit([...this.tokens, [this.inputModel]]);
                }
                if (this.tokens.length > 1 && this.token.length === 0) {
                    evt.preventDefault();
                    this.search.emit(this.tokens);
                    this.saveSearchTokens();
                }
                break;
            case KeyCode.Backspace:
                if (!this.inputModel.length) {
                    evt.preventDefault();
                    this.input.nativeElement.blur();
                    if (!this.token.length && this.tokens.indexOf(this.token) !== 0) {
                        this.tokens.pop();
                        this.token = last(this.tokens);
                    }
                    this.inputModel = this.token.pop() || '';
                    if (this.tokens.length === 1 && this.token.length === 0) {
                        this.tokens.pop();
                        this.addToken();
                    }
                    setTimeout(() => this.input.nativeElement.focus());
                }
                break;
            default:
                break;
        }
    }
    tokenSearch() {
        return (text$) => {
            const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
            const clicksWithClosedPopup$ = this.click$.pipe(filter$1(() => !this.typehead.isPopupOpen()));
            const inputFocus$ = this.focus$;
            return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$)
                .pipe(switchMap(term => {
                let $observable;
                switch (this.token.length) {
                    case Token.Logical:
                        $observable = this.logical({ type: 'LOGICAL', property: null, term, count: 10 });
                        break;
                    case Token.Key:
                        $observable = this.keys({ type: 'KEY', property: null, term, count: 10 });
                        break;
                    case Token.Operator:
                        $observable = this.comparison({ type: 'COMPARISON', property: null, term, count: 10 });
                        break;
                    case Token.Value:
                        $observable = this.values({ type: 'VALUE', property: this.token[Token.Key], term, count: 10 });
                        break;
                    default:
                        $observable = of([]);
                        break;
                }
                return $observable.pipe(map$1(list => ({ list, term })));
            }), map$1(({ list, term }) => {
                return chain(list)
                    .filter(item => item.toString().toLowerCase().indexOf(term.toLowerCase()) >= 0)
                    .uniq()
                    .slice(0, 10)
                    .value();
            }));
        };
    }
    tokenHandler(evt) {
        evt.preventDefault();
        const { value } = evt.item;
        this.input.nativeElement.blur();
        this.token.push(value);
        this.inputModel = '';
        if (this.token.indexOf(value) === Token.Value) {
            this.addToken();
        }
        setTimeout(() => this.input.nativeElement.focus());
    }
    selectToken(idx) {
        const token = this.tokens[idx];
        if (token.length === EnumLength(Token)) {
            this.input.nativeElement.blur();
            this.tokens.pop();
            this.token = token;
            this.inputModel = this.token.pop();
            setTimeout(() => this.input.nativeElement.focus());
        }
    }
    removeToken(idx) {
        this.tokens.splice(idx, 1);
        this.search.emit(this.tokens);
    }
    clearTokens() {
        this.tokens.length = 0;
        this.search.emit(this.tokens);
        this.addToken();
    }
}
NgbIntelisearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngb-intelisearch[name]',
                template: "<div class=\"search-filter-box\">\n  <div class=\"search-filter-box-recent-searches\" ngbDropdown container=\"body\">\n    <button class=\"btn btn-outline-secondary dropdown-toggle\" type=\"button\" ngbDropdownToggle\n      ngbTooltip=\"Recent Searches\">\n      <i class=\"las la-history\"></i>\n    </button>\n    <div class=\"dropdown-menu recent-searches p-0\" ngbDropdownMenu>\n      <button (click)=\"onSelectRecentSearch(tokens)\" class=\"dropdown-item px-2\"\n        *ngFor=\"let tokens of searchTokens\">{{tokensToString(tokens)}}</button>\n      <div role=\"separator\" class=\"dropdown-divider m-0\"></div>\n      <button class=\"dropdown-item px-2\" (click)=\"clearSearchTokens()\">Clear recent searches</button>\n    </div>\n  </div>\n  <div class=\"search-filter-box-container\">\n    <ul class=\"tokens-container list-unstyled\">\n      <ng-container *ngFor=\"let _token of tokens; let i = index;\">\n        <li class=\"visual-token\">\n          <div class=\"selectable\" role=\"button\" (click)=\"selectToken(i)\">\n            <div *ngIf=\"_token[0]\" class=\"logical\">{{_token[0]}}</div>\n            <div *ngIf=\"_token[1]\" class=\"key\">{{_token[1]}}</div>\n            <div *ngIf=\"_token[2]\" class=\"operator\">{{_token[2]}}</div>\n            <div *ngIf=\"_token[3]\" class=\"value\">{{_token[3]}}</div>\n            <a *ngIf=\"_token[3]\" class=\"remove\" role=\"button\" (click)=\"removeToken(i)\">\n              <i class=\"las la-times\"></i>\n            </a>\n          </div>\n        </li>\n        <li class=\"input-token\" *ngIf=\"_token === token\">\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"getInputPlaceholder(token)\" #input\n            #typehead=\"ngbTypeahead\" [focusFirst]=\"false\" (keydown)=\"onTypeheadKeydown($event)\"\n            (focus)=\"focus$.next($any($event).target.value)\" (click)=\"click$.next($any($event).target.value)\"\n            [(ngModel)]=\"inputModel\" [ngbTypeahead]=\"tokenSearch()\" [inputFormatter]=\"inputFormatter\"\n            [resultTemplate]=\"resultTemplate\" container=\"body\" (selectItem)=\"tokenHandler($event)\">\n        </li>\n      </ng-container>\n    </ul>\n    <a class=\"clear\" role=\"button\" (click)=\"clearTokens()\" *ngIf=\"tokens.length > 1\">\n      <i class=\"las la-times\"></i>\n    </a>\n  </div>\n</div>\n<ng-template #resultTemplate let-result=\"result\" let-term=\"term\">\n  <ngb-highlight [result]=\"result.value\" [term]=\"term\"></ngb-highlight>\n  <span class=\"text-muted\">{{ result.label }}</span>\n</ng-template>",
                styles: [".search-filter-box{display:flex}.search-filter-box .search-filter-box-recent-searches button{border-bottom-right-radius:0;border-color:#ced4da;border-top-right-radius:0}.search-filter-box .search-filter-box-recent-searches button:after{display:none}.search-filter-box .search-filter-box-recent-searches button i{font-size:1.5rem;vertical-align:middle}.search-filter-box .search-filter-box-container{align-items:center;background-color:#fff;border:1px solid #ced4da;border-bottom-left-radius:0!important;border-left-width:0;border-radius:.25rem;border-top-left-radius:0!important;display:flex;flex:1;overflow-y:auto}.search-filter-box .search-filter-box-container .tokens-container{align-items:center;display:flex;flex:1;margin:0;padding-left:.5rem}.search-filter-box .search-filter-box-container .tokens-container li.visual-token .selectable{align-items:center;display:flex}.search-filter-box .search-filter-box-container .tokens-container li.visual-token .selectable .remove,.search-filter-box .search-filter-box-container .tokens-container li.visual-token .selectable div{align-items:center;background-color:#e7e7e7;color:#818181;font-size:.9rem;margin-right:.1rem;padding:.25rem .5rem;white-space:nowrap}.search-filter-box .search-filter-box-container .tokens-container li.visual-token .selectable .remove.value,.search-filter-box .search-filter-box-container .tokens-container li.visual-token .selectable div.value{color:#000;margin:0}.search-filter-box .search-filter-box-container .tokens-container li.visual-token .selectable .remove{padding-left:0;text-decoration:none}.search-filter-box .search-filter-box-container .tokens-container li.visual-token .selectable .remove:hover{color:#000}.search-filter-box .search-filter-box-container .tokens-container li.visual-token .selectable:hover .remove,.search-filter-box .search-filter-box-container .tokens-container li.visual-token .selectable:hover div{background-color:#d4d4d4}.search-filter-box .search-filter-box-container .tokens-container li.input-token:last-child{flex:1}.search-filter-box .search-filter-box-container .tokens-container li.input-token input{border:none;border-radius:0;box-shadow:none;height:calc(1.5em + .75rem);padding:.25rem}.search-filter-box .search-filter-box-container .clear{color:#818181;padding:.25rem .5rem;text-decoration:none}.search-filter-box .search-filter-box-container .clear:hover{color:#000}::ng-deep .recent-searches{max-width:250px;overflow:hidden}::ng-deep .recent-searches .dropdown-item{font-size:.9rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}::ng-deep .recent-searches .dropdown-item:last-child{color:#666}::ng-deep [id^=ngb-typeahead-]{z-index:99996}::ng-deep [id^=ngb-typeahead-] .dropdown-item{display:flex;justify-content:space-between;padding:.25rem .75rem}::ng-deep [id^=ngb-typeahead-] .dropdown-item.active{background-color:#e7e7e7;color:#000}"]
            },] }
];
NgbIntelisearchComponent.ctorParameters = () => [];
NgbIntelisearchComponent.propDecorators = {
    input: [{ type: ViewChild, args: ['input', { static: false },] }],
    typehead: [{ type: ViewChild, args: ['typehead', { static: false },] }],
    name: [{ type: Input }],
    keys: [{ type: Input }],
    values: [{ type: Input }],
    logical: [{ type: Input }],
    comparison: [{ type: Input }],
    search: [{ type: Output }]
};

class NgbIntelisearchModule {
}
NgbIntelisearchModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgbIntelisearchComponent],
                imports: [
                    BrowserModule,
                    NgbModule
                ],
                exports: [NgbIntelisearchComponent]
            },] }
];

/*
 * Public API Surface of ngb-intelisearch
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgbIntelisearchComponent, NgbIntelisearchModule, NgbIntelisearchService, ɵ0 };
//# sourceMappingURL=rynangeles-ngb-intelisearch.js.map
