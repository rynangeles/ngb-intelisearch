import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Subject, merge, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import * as _ from 'lodash';
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
export class NgbIntelisearchComponent {
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
        tokens.push(_.filter(this.tokens, token => token.length));
        window.localStorage.setItem(`sf:${this.name}`, JSON.stringify(_.takeRight(tokens, 5)));
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
        return _.map(tokens, i => i.join('')).join('&');
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
                        this.token = _.last(this.tokens);
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
            const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.typehead.isPopupOpen()));
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
                return $observable.pipe(map(list => ({ list, term })));
            }), map(({ list, term }) => {
                return _.chain(list)
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
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLWludGVsaXNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnlhbmFuZ2VsZXMvV29ya3NwYWNlL1BsYXlncm91bmQvbmd4LWludGVsaXNlYXJjaC9pbnRlbGlzZWFjaC1kZW1vL3Byb2plY3RzL25nYi1pbnRlbGlzZWFyY2gvc3JjLyIsInNvdXJjZXMiOlsibGliL25nYi1pbnRlbGlzZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBYyxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFPLE1BQU0sZ0JBQWdCLENBQUM7QUFDakcsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFHNUIsSUFBSyxLQUtKO0FBTEQsV0FBSyxLQUFLO0lBQ1IsdUNBQU8sQ0FBQTtJQUNQLCtCQUFHLENBQUE7SUFDSCx5Q0FBUSxDQUFBO0lBQ1IsbUNBQUssQ0FBQTtBQUNQLENBQUMsRUFMSSxLQUFLLEtBQUwsS0FBSyxRQUtUO0FBQ0QsSUFBSyxPQUdKO0FBSEQsV0FBSyxPQUFPO0lBQ1Ysd0NBQVUsQ0FBQTtJQUNWLCtDQUFhLENBQUE7QUFDZixDQUFDLEVBSEksT0FBTyxLQUFQLE9BQU8sUUFHWDtBQUFBLENBQUM7QUFFRixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsRUFBRTtJQUN4QixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FB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IE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIG1lcmdlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgTmdiVHlwZWFoZWFkIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuXG5lbnVtIFRva2VuIHtcbiAgTG9naWNhbCxcbiAgS2V5LFxuICBPcGVyYXRvcixcbiAgVmFsdWVcbn1cbmVudW0gS2V5Q29kZSB7XG4gIEVudGVyID0gMTMsXG4gIEJhY2tzcGFjZSA9IDhcbn07XG5cbmNvbnN0IEVudW1MZW5ndGggPSBFbnVtID0+IHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKEVudW0pLm1hcCh2YWwgPT4gTnVtYmVyKGlzTmFOKE51bWJlcih2YWwpKSkpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ2ItaW50ZWxpc2VhcmNoW25hbWVdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25nYi1pbnRlbGlzZWFyY2guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZ2ItaW50ZWxpc2VhcmNoLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmdiSW50ZWxpc2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZCgnaW5wdXQnLCB7IHN0YXRpYzogZmFsc2UgfSkgaW5wdXQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3R5cGVoZWFkJywgeyBzdGF0aWM6IGZhbHNlIH0pIHR5cGVoZWFkOiBOZ2JUeXBlYWhlYWQ7XG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkga2V5czogKHZhbHVlOiBhbnkpID0+IE9ic2VydmFibGU8YW55PjtcbiAgQElucHV0KCkgdmFsdWVzOiAodmFsdWU6IGFueSkgPT4gT2JzZXJ2YWJsZTxhbnk+O1xuICBASW5wdXQoKSBsb2dpY2FsOiAodmFsdWU6IGFueSkgPT4gT2JzZXJ2YWJsZTxhbnk+ID0gKCkgPT4gb2YoW1xuICAgIHsgdmFsdWU6ICdBTkQnLCBsYWJlbDogJ0FORCcgfSxcbiAgICB7IHZhbHVlOiAnT1InLCBsYWJlbDogJ09SJyB9XG4gIF0pO1xuICBASW5wdXQoKSBjb21wYXJpc29uOiAodmFsdWU6IGFueSkgPT4gT2JzZXJ2YWJsZTxhbnk+ID0gKCkgPT4gb2YoW1xuICAgIHsgdmFsdWU6ICc9JywgbGFiZWw6ICdlcXVhbCcgfSxcbiAgICB7IHZhbHVlOiAnIT0nLCBsYWJlbDogJ25vdCBlcXVhbCcgfSxcbiAgICB7IHZhbHVlOiAnTElLRScsIGxhYmVsOiAnY29udGFpbnMnIH0sXG4gICAgeyB2YWx1ZTogJz4nLCBsYWJlbDogJ2dyZWF0ZXIgdGhhbicgfSxcbiAgICB7IHZhbHVlOiAnPCcsIGxhYmVsOiAnbGVzcyB0aGFuJyB9XG4gIF0pO1xuICBAT3V0cHV0KCkgc2VhcmNoOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZm9jdXMkID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuICBjbGljayQgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG4gIHNlYXJjaFRva2VuczogYW55W107XG4gIHRva2VuczogYW55W10gPSBbXTtcbiAgdG9rZW46IHN0cmluZ1tdO1xuICBpbnB1dE1vZGVsOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRva2VuU2VhcmNoID0gdGhpcy50b2tlblNlYXJjaC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaW5wdXRGb3JtYXR0ZXIgPSAoaW5wdXQ6IHsgdmFsdWU6IHN0cmluZyB9KSA9PiBpbnB1dC52YWx1ZTtcblxuICBhZGRUb2tlbigpIHtcbiAgICBjb25zdCB0b2tlbiA9IHRoaXMudG9rZW5zLmxlbmd0aCA/IFtdIDogW251bGxdO1xuICAgIHRoaXMudG9rZW5zLnB1c2godG9rZW4pO1xuICAgIHRoaXMudG9rZW4gPSB0aGlzLnRva2Vuc1t0aGlzLnRva2Vucy5pbmRleE9mKHRva2VuKV07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFkZFRva2VuKCk7XG4gICAgdGhpcy5nZXRTZWFyY2hUb2tlbnMoKTtcbiAgfVxuXG4gIHNhdmVTZWFyY2hUb2tlbnMoKSB7XG4gICAgY29uc3QgdG9rZW5zID0gdGhpcy5nZXRTZWFyY2hUb2tlbnMoKTtcbiAgICB0b2tlbnMucHVzaChfLmZpbHRlcih0aGlzLnRva2VucywgdG9rZW4gPT4gdG9rZW4ubGVuZ3RoKSk7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGBzZjoke3RoaXMubmFtZX1gLCBKU09OLnN0cmluZ2lmeShfLnRha2VSaWdodCh0b2tlbnMsIDUpKSk7XG4gIH1cblxuICBnZXRTZWFyY2hUb2tlbnMoKSB7XG4gICAgY29uc3QgdG9rZW5zID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGBzZjoke3RoaXMubmFtZX1gKTtcbiAgICB0aGlzLnNlYXJjaFRva2VucyA9IEpTT04ucGFyc2UodG9rZW5zKSB8fCBbXTtcbiAgICByZXR1cm4gdGhpcy5zZWFyY2hUb2tlbnM7XG4gIH1cblxuICBjbGVhclNlYXJjaFRva2VucygpIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYHNmOiR7dGhpcy5uYW1lfWApO1xuICAgIHRoaXMuZ2V0U2VhcmNoVG9rZW5zKCk7XG4gIH1cblxuICB0b2tlbnNUb1N0cmluZyh0b2tlbnMpIHtcbiAgICByZXR1cm4gXy5tYXAodG9rZW5zLCBpID0+IGkuam9pbignJykpLmpvaW4oJyYnKTtcbiAgfVxuXG4gIG9uU2VsZWN0UmVjZW50U2VhcmNoKHRva2Vucykge1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMuYWRkVG9rZW4oKTtcbiAgICB0aGlzLnNlYXJjaC5lbWl0KHRoaXMudG9rZW5zKTtcbiAgfVxuXG4gIGdldElucHV0UGxhY2Vob2xkZXIodG9rZW4pIHtcbiAgICBsZXQgcGxhY2Vob2xkZXIgPSAnU2VhcmNoJztcbiAgICBzd2l0Y2ggKHRva2VuLmxlbmd0aCkge1xuICAgICAgY2FzZSBUb2tlbi5Mb2dpY2FsOlxuICAgICAgICBwbGFjZWhvbGRlciA9ICdTZWFjaCBMb2dpY2FsIE9wZXJhdG9yJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFRva2VuLktleTpcbiAgICAgICAgcGxhY2Vob2xkZXIgPSAnU2VhY2ggS2V5JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFRva2VuLk9wZXJhdG9yOlxuICAgICAgICBwbGFjZWhvbGRlciA9ICdTZWFjaCBDb21wYXJpc29uIE9wZXJhdG9yJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFRva2VuLlZhbHVlOlxuICAgICAgICBwbGFjZWhvbGRlciA9ICdTZWFjaCBWYWx1ZSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcGxhY2Vob2xkZXIgPSAnU2VhY2guLi4nO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHBsYWNlaG9sZGVyO1xuICB9XG4gIC8qXG4gIFRPRE86XG4gIGluc3BlY3QgaG93IHRva2VucyBhbmQgcXVlcmllcyBwcm9kdWNlZFxuICAqL1xuICBvblR5cGVoZWFkS2V5ZG93bihldnQ/KSB7XG4gICAgY29uc3Qga2V5Q29kZSA9IChldnQud2hpY2gpID8gZXZ0LndoaWNoIDogZXZ0LmtleUNvZGU7XG4gICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICBjYXNlIEtleUNvZGUuRW50ZXI6XG4gICAgICAgIGlmICh0aGlzLmlucHV0TW9kZWwubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuc2VhcmNoLmVtaXQoWy4uLnRoaXMudG9rZW5zLCBbdGhpcy5pbnB1dE1vZGVsXV0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggPiAxICYmIHRoaXMudG9rZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5zZWFyY2guZW1pdCh0aGlzLnRva2Vucyk7XG4gICAgICAgICAgdGhpcy5zYXZlU2VhcmNoVG9rZW5zKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEtleUNvZGUuQmFja3NwYWNlOlxuICAgICAgICBpZiAoIXRoaXMuaW5wdXRNb2RlbC5sZW5ndGgpIHtcbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgICAgIGlmICghdGhpcy50b2tlbi5sZW5ndGggJiYgdGhpcy50b2tlbnMuaW5kZXhPZih0aGlzLnRva2VuKSAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy50b2tlbnMucG9wKCk7XG4gICAgICAgICAgICB0aGlzLnRva2VuID0gXy5sYXN0KHRoaXMudG9rZW5zKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5pbnB1dE1vZGVsID0gdGhpcy50b2tlbi5wb3AoKSB8fCAnJztcbiAgICAgICAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID09PSAxICYmIHRoaXMudG9rZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnRva2Vucy5wb3AoKTtcbiAgICAgICAgICAgIHRoaXMuYWRkVG9rZW4oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB0b2tlblNlYXJjaCgpIHtcbiAgICByZXR1cm4gKHRleHQkOiBPYnNlcnZhYmxlPHN0cmluZz4pID0+IHtcbiAgICAgIGNvbnN0IGRlYm91bmNlZFRleHQkID0gdGV4dCQucGlwZShkZWJvdW5jZVRpbWUoMjAwKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICBjb25zdCBjbGlja3NXaXRoQ2xvc2VkUG9wdXAkID0gdGhpcy5jbGljayQucGlwZShmaWx0ZXIoKCkgPT4gIXRoaXMudHlwZWhlYWQuaXNQb3B1cE9wZW4oKSkpO1xuICAgICAgY29uc3QgaW5wdXRGb2N1cyQgPSB0aGlzLmZvY3VzJDtcbiAgICAgIHJldHVybiBtZXJnZShkZWJvdW5jZWRUZXh0JCwgaW5wdXRGb2N1cyQsIGNsaWNrc1dpdGhDbG9zZWRQb3B1cCQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHN3aXRjaE1hcCh0ZXJtID0+IHtcbiAgICAgICAgICAgIGxldCAkb2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxhbnk+O1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLnRva2VuLmxlbmd0aCkge1xuICAgICAgICAgICAgICBjYXNlIFRva2VuLkxvZ2ljYWw6XG4gICAgICAgICAgICAgICAgJG9ic2VydmFibGUgPSB0aGlzLmxvZ2ljYWwoeyB0eXBlOiAnTE9HSUNBTCcsIHByb3BlcnR5OiBudWxsLCB0ZXJtLCBjb3VudDogMTAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgVG9rZW4uS2V5OlxuICAgICAgICAgICAgICAgICRvYnNlcnZhYmxlID0gdGhpcy5rZXlzKHsgdHlwZTogJ0tFWScsIHByb3BlcnR5OiBudWxsLCB0ZXJtLCBjb3VudDogMTAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgVG9rZW4uT3BlcmF0b3I6XG4gICAgICAgICAgICAgICAgJG9ic2VydmFibGUgPSB0aGlzLmNvbXBhcmlzb24oeyB0eXBlOiAnQ09NUEFSSVNPTicsIHByb3BlcnR5OiBudWxsLCB0ZXJtLCBjb3VudDogMTAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgVG9rZW4uVmFsdWU6XG4gICAgICAgICAgICAgICAgJG9ic2VydmFibGUgPSB0aGlzLnZhbHVlcyh7IHR5cGU6ICdWQUxVRScsIHByb3BlcnR5OiB0aGlzLnRva2VuW1Rva2VuLktleV0sIHRlcm0sIGNvdW50OiAxMCB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAkb2JzZXJ2YWJsZSA9IG9mKFtdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAkb2JzZXJ2YWJsZS5waXBlKG1hcChsaXN0ID0+ICh7IGxpc3QsIHRlcm0gfSkpKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBtYXAoKHsgbGlzdCwgdGVybSB9KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gXy5jaGFpbihsaXN0KVxuICAgICAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0ZXJtLnRvTG93ZXJDYXNlKCkpID49IDApXG4gICAgICAgICAgICAgIC51bmlxKClcbiAgICAgICAgICAgICAgLnNsaWNlKDAsIDEwKVxuICAgICAgICAgICAgICAudmFsdWUoKTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHRva2VuSGFuZGxlcihldnQpIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBldnQuaXRlbTtcbiAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgIHRoaXMudG9rZW4ucHVzaCh2YWx1ZSk7XG4gICAgdGhpcy5pbnB1dE1vZGVsID0gJyc7XG4gICAgaWYgKHRoaXMudG9rZW4uaW5kZXhPZih2YWx1ZSkgPT09IFRva2VuLlZhbHVlKSB7XG4gICAgICB0aGlzLmFkZFRva2VuKCk7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCkpO1xuICB9XG5cbiAgc2VsZWN0VG9rZW4oaWR4KSB7XG4gICAgY29uc3QgdG9rZW4gPSB0aGlzLnRva2Vuc1tpZHhdO1xuICAgIGlmICh0b2tlbi5sZW5ndGggPT09IEVudW1MZW5ndGgoVG9rZW4pKSB7XG4gICAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgdGhpcy50b2tlbnMucG9wKCk7XG4gICAgICB0aGlzLnRva2VuID0gdG9rZW47XG4gICAgICB0aGlzLmlucHV0TW9kZWwgPSB0aGlzLnRva2VuLnBvcCgpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlVG9rZW4oaWR4KSB7XG4gICAgdGhpcy50b2tlbnMuc3BsaWNlKGlkeCwgMSk7XG4gICAgdGhpcy5zZWFyY2guZW1pdCh0aGlzLnRva2Vucyk7XG4gIH1cblxuICBjbGVhclRva2VucygpIHtcbiAgICB0aGlzLnRva2Vucy5sZW5ndGggPSAwO1xuICAgIHRoaXMuc2VhcmNoLmVtaXQodGhpcy50b2tlbnMpO1xuICAgIHRoaXMuYWRkVG9rZW4oKTtcbiAgfVxufVxuIl19