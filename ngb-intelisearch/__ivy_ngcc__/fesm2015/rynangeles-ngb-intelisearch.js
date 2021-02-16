import { ɵɵdefineInjectable, Injectable, EventEmitter, Component, ViewChild, Input, Output, NgModule } from '@angular/core';
import { of, Subject, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter as filter$1, switchMap, map as map$1 } from 'rxjs/operators';
import { filter, takeRight, map, last, chain } from 'lodash';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@ng-bootstrap/ng-bootstrap';
import * as ɵngcc2 from '@angular/common';

const _c0 = ["input"];
const _c1 = ["typehead"];
const _c2 = ["name", ""];
function NgbIntelisearchComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 7);
    ɵngcc0.ɵɵlistener("click", function NgbIntelisearchComponent_button_5_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r7); const tokens_r5 = ctx.$implicit; const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.onSelectRecentSearch(tokens_r5); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const tokens_r5 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.tokensToString(tokens_r5));
} }
function NgbIntelisearchComponent_ng_container_11_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 21);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _token_r8 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(_token_r8[0]);
} }
function NgbIntelisearchComponent_ng_container_11_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 22);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _token_r8 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(_token_r8[1]);
} }
function NgbIntelisearchComponent_ng_container_11_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 23);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _token_r8 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(_token_r8[2]);
} }
function NgbIntelisearchComponent_ng_container_11_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 24);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _token_r8 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(_token_r8[3]);
} }
function NgbIntelisearchComponent_ng_container_11_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 25);
    ɵngcc0.ɵɵlistener("click", function NgbIntelisearchComponent_ng_container_11_a_7_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r22); const i_r9 = ɵngcc0.ɵɵnextContext().index; const ctx_r20 = ɵngcc0.ɵɵnextContext(); return ctx_r20.removeToken(i_r9); });
    ɵngcc0.ɵɵelement(1, "i", 26);
    ɵngcc0.ɵɵelementEnd();
} }
function NgbIntelisearchComponent_ng_container_11_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r26 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 27);
    ɵngcc0.ɵɵelementStart(1, "input", 28, 29);
    ɵngcc0.ɵɵlistener("keydown", function NgbIntelisearchComponent_ng_container_11_li_8_Template_input_keydown_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r26); const ctx_r25 = ɵngcc0.ɵɵnextContext(2); return ctx_r25.onTypeheadKeydown($event); })("focus", function NgbIntelisearchComponent_ng_container_11_li_8_Template_input_focus_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r26); const ctx_r27 = ɵngcc0.ɵɵnextContext(2); return ctx_r27.focus$.next($event.target.value); })("click", function NgbIntelisearchComponent_ng_container_11_li_8_Template_input_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r26); const ctx_r28 = ɵngcc0.ɵɵnextContext(2); return ctx_r28.click$.next($event.target.value); })("ngModelChange", function NgbIntelisearchComponent_ng_container_11_li_8_Template_input_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r26); const ctx_r29 = ɵngcc0.ɵɵnextContext(2); return ctx_r29.inputModel = $event; })("selectItem", function NgbIntelisearchComponent_ng_container_11_li_8_Template_input_selectItem_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r26); const ctx_r30 = ɵngcc0.ɵɵnextContext(2); return ctx_r30.tokenHandler($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = ɵngcc0.ɵɵnextContext(2);
    const _r3 = ɵngcc0.ɵɵreference(14);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("placeholder", ctx_r15.getInputPlaceholder(ctx_r15.token))("focusFirst", false)("ngModel", ctx_r15.inputModel)("ngbTypeahead", ctx_r15.tokenSearch())("inputFormatter", ctx_r15.inputFormatter)("resultTemplate", _r3);
} }
function NgbIntelisearchComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r32 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "li", 13);
    ɵngcc0.ɵɵelementStart(2, "div", 14);
    ɵngcc0.ɵɵlistener("click", function NgbIntelisearchComponent_ng_container_11_Template_div_click_2_listener() { ɵngcc0.ɵɵrestoreView(_r32); const i_r9 = ctx.index; const ctx_r31 = ɵngcc0.ɵɵnextContext(); return ctx_r31.selectToken(i_r9); });
    ɵngcc0.ɵɵtemplate(3, NgbIntelisearchComponent_ng_container_11_div_3_Template, 2, 1, "div", 15);
    ɵngcc0.ɵɵtemplate(4, NgbIntelisearchComponent_ng_container_11_div_4_Template, 2, 1, "div", 16);
    ɵngcc0.ɵɵtemplate(5, NgbIntelisearchComponent_ng_container_11_div_5_Template, 2, 1, "div", 17);
    ɵngcc0.ɵɵtemplate(6, NgbIntelisearchComponent_ng_container_11_div_6_Template, 2, 1, "div", 18);
    ɵngcc0.ɵɵtemplate(7, NgbIntelisearchComponent_ng_container_11_a_7_Template, 2, 0, "a", 19);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(8, NgbIntelisearchComponent_ng_container_11_li_8_Template, 4, 6, "li", 20);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _token_r8 = ctx.$implicit;
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", _token_r8[0]);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", _token_r8[1]);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", _token_r8[2]);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", _token_r8[3]);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", _token_r8[3]);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", _token_r8 === ctx_r1.token);
} }
function NgbIntelisearchComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    const _r34 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 30);
    ɵngcc0.ɵɵlistener("click", function NgbIntelisearchComponent_a_12_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r34); const ctx_r33 = ɵngcc0.ɵɵnextContext(); return ctx_r33.clearTokens(); });
    ɵngcc0.ɵɵelement(1, "i", 26);
    ɵngcc0.ɵɵelementEnd();
} }
function NgbIntelisearchComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "ngb-highlight", 31);
    ɵngcc0.ɵɵelementStart(1, "span", 32);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const result_r35 = ctx.result;
    const term_r36 = ctx.term;
    ɵngcc0.ɵɵproperty("result", result_r35.value)("term", term_r36);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(result_r35.label);
} }
class NgbIntelisearchService {
    constructor() { }
}
NgbIntelisearchService.ɵfac = function NgbIntelisearchService_Factory(t) { return new (t || NgbIntelisearchService)(); };
NgbIntelisearchService.ɵprov = ɵɵdefineInjectable({ factory: function NgbIntelisearchService_Factory() { return new NgbIntelisearchService(); }, token: NgbIntelisearchService, providedIn: "root" });
NgbIntelisearchService.ctorParameters = () => [];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgbIntelisearchService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

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
NgbIntelisearchComponent.ɵfac = function NgbIntelisearchComponent_Factory(t) { return new (t || NgbIntelisearchComponent)(); };
NgbIntelisearchComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgbIntelisearchComponent, selectors: [["ngb-intelisearch", "name", ""]], viewQuery: function NgbIntelisearchComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.input = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.typehead = _t.first);
    } }, inputs: { logical: "logical", comparison: "comparison", name: "name", keys: "keys", values: "values" }, outputs: { search: "search" }, attrs: _c2, decls: 15, vars: 3, consts: [[1, "search-filter-box"], ["ngbDropdown", "", "container", "body", 1, "search-filter-box-recent-searches"], ["type", "button", "ngbDropdownToggle", "", "ngbTooltip", "Recent Searches", 1, "btn", "btn-outline-secondary", "dropdown-toggle"], [1, "las", "la-history"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "recent-searches", "p-0"], ["class", "dropdown-item px-2", 3, "click", 4, "ngFor", "ngForOf"], ["role", "separator", 1, "dropdown-divider", "m-0"], [1, "dropdown-item", "px-2", 3, "click"], [1, "search-filter-box-container"], [1, "tokens-container", "list-unstyled"], [4, "ngFor", "ngForOf"], ["class", "clear", "role", "button", 3, "click", 4, "ngIf"], ["resultTemplate", ""], [1, "visual-token"], ["role", "button", 1, "selectable", 3, "click"], ["class", "logical", 4, "ngIf"], ["class", "key", 4, "ngIf"], ["class", "operator", 4, "ngIf"], ["class", "value", 4, "ngIf"], ["class", "remove", "role", "button", 3, "click", 4, "ngIf"], ["class", "input-token", 4, "ngIf"], [1, "logical"], [1, "key"], [1, "operator"], [1, "value"], ["role", "button", 1, "remove", 3, "click"], [1, "las", "la-times"], [1, "input-token"], ["type", "text", "container", "body", 1, "form-control", 3, "placeholder", "focusFirst", "ngModel", "ngbTypeahead", "inputFormatter", "resultTemplate", "keydown", "focus", "click", "ngModelChange", "selectItem"], ["input", "", "typehead", "ngbTypeahead"], ["role", "button", 1, "clear", 3, "click"], [3, "result", "term"], [1, "text-muted"]], template: function NgbIntelisearchComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "button", 2);
        ɵngcc0.ɵɵelement(3, "i", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "div", 4);
        ɵngcc0.ɵɵtemplate(5, NgbIntelisearchComponent_button_5_Template, 2, 1, "button", 5);
        ɵngcc0.ɵɵelement(6, "div", 6);
        ɵngcc0.ɵɵelementStart(7, "button", 7);
        ɵngcc0.ɵɵlistener("click", function NgbIntelisearchComponent_Template_button_click_7_listener() { return ctx.clearSearchTokens(); });
        ɵngcc0.ɵɵtext(8, "Clear recent searches");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "div", 8);
        ɵngcc0.ɵɵelementStart(10, "ul", 9);
        ɵngcc0.ɵɵtemplate(11, NgbIntelisearchComponent_ng_container_11_Template, 9, 6, "ng-container", 10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(12, NgbIntelisearchComponent_a_12_Template, 2, 0, "a", 11);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(13, NgbIntelisearchComponent_ng_template_13_Template, 3, 3, "ng-template", null, 12, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(5);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.searchTokens);
        ɵngcc0.ɵɵadvance(6);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.tokens);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.tokens.length > 1);
    } }, directives: [ɵngcc1.NgbDropdown, ɵngcc1.NgbDropdownToggle, ɵngcc1.NgbTooltip, ɵngcc1.NgbDropdownMenu, ɵngcc2.NgForOf, ɵngcc2.NgIf, ɵngcc1.NgbTypeahead, ɵngcc1.NgbHighlight], styles: [".search-filter-box[_ngcontent-%COMP%]{display:flex}.search-filter-box[_ngcontent-%COMP%]   .search-filter-box-recent-searches[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-bottom-right-radius:0;border-color:#ced4da;border-top-right-radius:0}.search-filter-box[_ngcontent-%COMP%]   .search-filter-box-recent-searches[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:after{display:none}.search-filter-box[_ngcontent-%COMP%]   .search-filter-box-recent-searches[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.5rem;vertical-align:middle}.search-filter-box[_ngcontent-%COMP%]   .search-filter-box-container[_ngcontent-%COMP%]{align-items:center;background-color:#fff;border:1px solid #ced4da;border-bottom-left-radius:0!important;border-left-width:0;border-radius:.25rem;border-top-left-radius:0!important;display:flex;flex:1;overflow-y:auto}.search-filter-box[_ngcontent-%COMP%]   .search-filter-box-container[_ngcontent-%COMP%]   .tokens-container[_ngcontent-%COMP%]{align-items:center;display:flex;flex:1;margin:0;padding-left:.5rem}.search-filter-box[_ngcontent-%COMP%]   .search-filter-box-container[_ngcontent-%COMP%]   .tokens-container[_ngcontent-%COMP%]   li.visual-token[_ngcontent-%COMP%]   .selectable[_ngcontent-%COMP%]{align-items:center;display:flex}.search-filter-box[_ngcontent-%COMP%]   .search-filter-box-container[_ngcontent-%COMP%]   .tokens-container[_ngcontent-%COMP%]   li.visual-token[_ngcontent-%COMP%]   .selectable[_ngcontent-%COMP%]   .remove[_ngcontent-%COMP%], .search-filter-box[_ngcontent-%COMP%]   .search-filter-box-container[_ngcontent-%COMP%]   .tokens-container[_ngcontent-%COMP%]   li.visual-token[_ngcontent-%COMP%]   .selectable[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{align-items:center;background-color:#e7e7e7;color:#818181;font-size:.9rem;margin-right:.1rem;padding:.25rem .5rem;white-space:nowrap}.search-filter-box[_ngcontent-%COMP%]   .search-filter-box-container[_ngcontent-%COMP%]   .tokens-container[_ngcontent-%COMP%]   li.visual-token[_ngcontent-%COMP%]   .selectable[_ngcontent-%COMP%]   .remove.value[_ngcontent-%COMP%], .search-filter-box[_ngcontent-%COMP%]   .search-filter-box-container[_ngcontent-%COMP%]   .tokens-container[_ngcontent-%COMP%]   li.visual-token[_ngcontent-%COMP%]   .selectable[_ngcontent-%COMP%]   div.value[_ngcontent-%COMP%]{color:#000;margin:0}.search-filter-box[_ngcontent-%COMP%]   .search-filter-box-container[_ngcontent-%COMP%]   .tokens-container[_ngcontent-%COMP%]   li.visual-token[_ngcontent-%COMP%]   .selectable[_ngcontent-%COMP%]   .remove[_ngcontent-%COMP%]{padding-left:0;text-decoration:none}.search-filter-box[_ngcontent-%COMP%]   .search-filter-box-container[_ngcontent-%COMP%]   .tokens-container[_ngcontent-%COMP%]   li.visual-token[_ngcontent-%COMP%]   .selectable[_ngcontent-%COMP%]   .remove[_ngcontent-%COMP%]:hover{color:#000}.search-filter-box[_ngcontent-%COMP%]   .search-filter-box-container[_ngcontent-%COMP%]   .tokens-container[_ngcontent-%COMP%]   li.visual-token[_ngcontent-%COMP%]   .selectable[_ngcontent-%COMP%]:hover   .remove[_ngcontent-%COMP%], .search-filter-box[_ngcontent-%COMP%]   .search-filter-box-container[_ngcontent-%COMP%]   .tokens-container[_ngcontent-%COMP%]   li.visual-token[_ngcontent-%COMP%]   .selectable[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%]{background-color:#d4d4d4}.search-filter-box[_ngcontent-%COMP%]   .search-filter-box-container[_ngcontent-%COMP%]   .tokens-container[_ngcontent-%COMP%]   li.input-token[_ngcontent-%COMP%]:last-child{flex:1}.search-filter-box[_ngcontent-%COMP%]   .search-filter-box-container[_ngcontent-%COMP%]   .tokens-container[_ngcontent-%COMP%]   li.input-token[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;border-radius:0;box-shadow:none;height:calc(1.5em + .75rem);padding:.25rem}.search-filter-box[_ngcontent-%COMP%]   .search-filter-box-container[_ngcontent-%COMP%]   .clear[_ngcontent-%COMP%]{color:#818181;padding:.25rem .5rem;text-decoration:none}.search-filter-box[_ngcontent-%COMP%]   .search-filter-box-container[_ngcontent-%COMP%]   .clear[_ngcontent-%COMP%]:hover{color:#000}  .recent-searches{max-width:250px;overflow:hidden}  .recent-searches .dropdown-item{font-size:.9rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}  .recent-searches .dropdown-item:last-child{color:#666}  [id^=ngb-typeahead-]{z-index:99996}  [id^=ngb-typeahead-] .dropdown-item{display:flex;justify-content:space-between;padding:.25rem .75rem}  [id^=ngb-typeahead-] .dropdown-item.active{background-color:#e7e7e7;color:#000}"] });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgbIntelisearchComponent, [{
        type: Component,
        args: [{
                selector: 'ngb-intelisearch[name]',
                template: "<div class=\"search-filter-box\">\n  <div class=\"search-filter-box-recent-searches\" ngbDropdown container=\"body\">\n    <button class=\"btn btn-outline-secondary dropdown-toggle\" type=\"button\" ngbDropdownToggle\n      ngbTooltip=\"Recent Searches\">\n      <i class=\"las la-history\"></i>\n    </button>\n    <div class=\"dropdown-menu recent-searches p-0\" ngbDropdownMenu>\n      <button (click)=\"onSelectRecentSearch(tokens)\" class=\"dropdown-item px-2\"\n        *ngFor=\"let tokens of searchTokens\">{{tokensToString(tokens)}}</button>\n      <div role=\"separator\" class=\"dropdown-divider m-0\"></div>\n      <button class=\"dropdown-item px-2\" (click)=\"clearSearchTokens()\">Clear recent searches</button>\n    </div>\n  </div>\n  <div class=\"search-filter-box-container\">\n    <ul class=\"tokens-container list-unstyled\">\n      <ng-container *ngFor=\"let _token of tokens; let i = index;\">\n        <li class=\"visual-token\">\n          <div class=\"selectable\" role=\"button\" (click)=\"selectToken(i)\">\n            <div *ngIf=\"_token[0]\" class=\"logical\">{{_token[0]}}</div>\n            <div *ngIf=\"_token[1]\" class=\"key\">{{_token[1]}}</div>\n            <div *ngIf=\"_token[2]\" class=\"operator\">{{_token[2]}}</div>\n            <div *ngIf=\"_token[3]\" class=\"value\">{{_token[3]}}</div>\n            <a *ngIf=\"_token[3]\" class=\"remove\" role=\"button\" (click)=\"removeToken(i)\">\n              <i class=\"las la-times\"></i>\n            </a>\n          </div>\n        </li>\n        <li class=\"input-token\" *ngIf=\"_token === token\">\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"getInputPlaceholder(token)\" #input\n            #typehead=\"ngbTypeahead\" [focusFirst]=\"false\" (keydown)=\"onTypeheadKeydown($event)\"\n            (focus)=\"focus$.next($any($event).target.value)\" (click)=\"click$.next($any($event).target.value)\"\n            [(ngModel)]=\"inputModel\" [ngbTypeahead]=\"tokenSearch()\" [inputFormatter]=\"inputFormatter\"\n            [resultTemplate]=\"resultTemplate\" container=\"body\" (selectItem)=\"tokenHandler($event)\">\n        </li>\n      </ng-container>\n    </ul>\n    <a class=\"clear\" role=\"button\" (click)=\"clearTokens()\" *ngIf=\"tokens.length > 1\">\n      <i class=\"las la-times\"></i>\n    </a>\n  </div>\n</div>\n<ng-template #resultTemplate let-result=\"result\" let-term=\"term\">\n  <ngb-highlight [result]=\"result.value\" [term]=\"term\"></ngb-highlight>\n  <span class=\"text-muted\">{{ result.label }}</span>\n</ng-template>",
                styles: [".search-filter-box{display:flex}.search-filter-box .search-filter-box-recent-searches button{border-bottom-right-radius:0;border-color:#ced4da;border-top-right-radius:0}.search-filter-box .search-filter-box-recent-searches button:after{display:none}.search-filter-box .search-filter-box-recent-searches button i{font-size:1.5rem;vertical-align:middle}.search-filter-box .search-filter-box-container{align-items:center;background-color:#fff;border:1px solid #ced4da;border-bottom-left-radius:0!important;border-left-width:0;border-radius:.25rem;border-top-left-radius:0!important;display:flex;flex:1;overflow-y:auto}.search-filter-box .search-filter-box-container .tokens-container{align-items:center;display:flex;flex:1;margin:0;padding-left:.5rem}.search-filter-box .search-filter-box-container .tokens-container li.visual-token .selectable{align-items:center;display:flex}.search-filter-box .search-filter-box-container .tokens-container li.visual-token .selectable .remove,.search-filter-box .search-filter-box-container .tokens-container li.visual-token .selectable div{align-items:center;background-color:#e7e7e7;color:#818181;font-size:.9rem;margin-right:.1rem;padding:.25rem .5rem;white-space:nowrap}.search-filter-box .search-filter-box-container .tokens-container li.visual-token .selectable .remove.value,.search-filter-box .search-filter-box-container .tokens-container li.visual-token .selectable div.value{color:#000;margin:0}.search-filter-box .search-filter-box-container .tokens-container li.visual-token .selectable .remove{padding-left:0;text-decoration:none}.search-filter-box .search-filter-box-container .tokens-container li.visual-token .selectable .remove:hover{color:#000}.search-filter-box .search-filter-box-container .tokens-container li.visual-token .selectable:hover .remove,.search-filter-box .search-filter-box-container .tokens-container li.visual-token .selectable:hover div{background-color:#d4d4d4}.search-filter-box .search-filter-box-container .tokens-container li.input-token:last-child{flex:1}.search-filter-box .search-filter-box-container .tokens-container li.input-token input{border:none;border-radius:0;box-shadow:none;height:calc(1.5em + .75rem);padding:.25rem}.search-filter-box .search-filter-box-container .clear{color:#818181;padding:.25rem .5rem;text-decoration:none}.search-filter-box .search-filter-box-container .clear:hover{color:#000}::ng-deep .recent-searches{max-width:250px;overflow:hidden}::ng-deep .recent-searches .dropdown-item{font-size:.9rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}::ng-deep .recent-searches .dropdown-item:last-child{color:#666}::ng-deep [id^=ngb-typeahead-]{z-index:99996}::ng-deep [id^=ngb-typeahead-] .dropdown-item{display:flex;justify-content:space-between;padding:.25rem .75rem}::ng-deep [id^=ngb-typeahead-] .dropdown-item.active{background-color:#e7e7e7;color:#000}"]
            }]
    }], function () { return []; }, { logical: [{
            type: Input
        }], comparison: [{
            type: Input
        }], search: [{
            type: Output
        }], input: [{
            type: ViewChild,
            args: ['input', { static: false }]
        }], typehead: [{
            type: ViewChild,
            args: ['typehead', { static: false }]
        }], name: [{
            type: Input
        }], keys: [{
            type: Input
        }], values: [{
            type: Input
        }] }); })();

class NgbIntelisearchModule {
}
NgbIntelisearchModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NgbIntelisearchModule });
NgbIntelisearchModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NgbIntelisearchModule_Factory(t) { return new (t || NgbIntelisearchModule)(); }, imports: [[
            BrowserModule,
            NgbModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgbIntelisearchModule, { declarations: function () { return [NgbIntelisearchComponent]; }, imports: function () { return [BrowserModule,
        NgbModule]; }, exports: function () { return [NgbIntelisearchComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgbIntelisearchModule, [{
        type: NgModule,
        args: [{
                declarations: [NgbIntelisearchComponent],
                imports: [
                    BrowserModule,
                    NgbModule
                ],
                exports: [NgbIntelisearchComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of ngb-intelisearch
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgbIntelisearchComponent, NgbIntelisearchModule, NgbIntelisearchService, ɵ0 };

//# sourceMappingURL=rynangeles-ngb-intelisearch.js.map