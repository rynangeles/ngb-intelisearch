(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('lodash'), require('@angular/platform-browser'), require('@ng-bootstrap/ng-bootstrap')) :
    typeof define === 'function' && define.amd ? define('@rynangeles/ngb-intelisearch', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', 'lodash', '@angular/platform-browser', '@ng-bootstrap/ng-bootstrap'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.rynangeles = global.rynangeles || {}, global.rynangeles['ngb-intelisearch'] = {}), global.ng.core, global.rxjs, global.rxjs.operators, global._, global.ng.platformBrowser, global['@ng-bootstrap/ng-bootstrap']));
}(this, (function (exports, i0, rxjs, operators, _, platformBrowser, ngBootstrap) { 'use strict';

    var NgbIntelisearchService = /** @class */ (function () {
        function NgbIntelisearchService() {
        }
        return NgbIntelisearchService;
    }());
    NgbIntelisearchService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgbIntelisearchService_Factory() { return new NgbIntelisearchService(); }, token: NgbIntelisearchService, providedIn: "root" });
    NgbIntelisearchService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    NgbIntelisearchService.ctorParameters = function () { return []; };

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

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
    var EnumLength = function (Enum) {
        return Object.keys(Enum).map(function (val) { return Number(isNaN(Number(val))); }).reduce(function (a, b) { return a + b; }, 0);
    };
    var ɵ0 = EnumLength;
    var NgbIntelisearchComponent = /** @class */ (function () {
        function NgbIntelisearchComponent() {
            this.logical = function () { return rxjs.of([
                { value: 'AND', label: 'AND' },
                { value: 'OR', label: 'OR' }
            ]); };
            this.comparison = function () { return rxjs.of([
                { value: '=', label: 'equal' },
                { value: '!=', label: 'not equal' },
                { value: 'LIKE', label: 'contains' },
                { value: '>', label: 'greater than' },
                { value: '<', label: 'less than' }
            ]); };
            this.search = new i0.EventEmitter();
            this.focus$ = new rxjs.Subject();
            this.click$ = new rxjs.Subject();
            this.tokens = [];
            this.inputModel = '';
            this.inputFormatter = function (input) { return input.value; };
            this.tokenSearch = this.tokenSearch.bind(this);
        }
        NgbIntelisearchComponent.prototype.addToken = function () {
            var token = this.tokens.length ? [] : [null];
            this.tokens.push(token);
            this.token = this.tokens[this.tokens.indexOf(token)];
        };
        NgbIntelisearchComponent.prototype.ngOnInit = function () {
            this.addToken();
            this.getSearchTokens();
        };
        NgbIntelisearchComponent.prototype.saveSearchTokens = function () {
            var tokens = this.getSearchTokens();
            tokens.push(_.filter(this.tokens, function (token) { return token.length; }));
            window.localStorage.setItem("sf:" + this.name, JSON.stringify(_.takeRight(tokens, 5)));
        };
        NgbIntelisearchComponent.prototype.getSearchTokens = function () {
            var tokens = window.localStorage.getItem("sf:" + this.name);
            this.searchTokens = JSON.parse(tokens) || [];
            return this.searchTokens;
        };
        NgbIntelisearchComponent.prototype.clearSearchTokens = function () {
            window.localStorage.removeItem("sf:" + this.name);
            this.getSearchTokens();
        };
        NgbIntelisearchComponent.prototype.tokensToString = function (tokens) {
            return _.map(tokens, function (i) { return i.join(''); }).join('&');
        };
        NgbIntelisearchComponent.prototype.onSelectRecentSearch = function (tokens) {
            this.tokens = tokens;
            this.addToken();
            this.search.emit(this.tokens);
        };
        NgbIntelisearchComponent.prototype.getInputPlaceholder = function (token) {
            var placeholder = 'Search';
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
        };
        /*
        TODO:
        inspect how tokens and queries produced
        */
        NgbIntelisearchComponent.prototype.onTypeheadKeydown = function (evt) {
            var _this = this;
            var keyCode = (evt.which) ? evt.which : evt.keyCode;
            switch (keyCode) {
                case KeyCode.Enter:
                    if (this.inputModel.length > 0) {
                        evt.preventDefault();
                        this.search.emit(__spread(this.tokens, [[this.inputModel]]));
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
                        setTimeout(function () { return _this.input.nativeElement.focus(); });
                    }
                    break;
                default:
                    break;
            }
        };
        NgbIntelisearchComponent.prototype.tokenSearch = function () {
            var _this = this;
            return function (text$) {
                var debouncedText$ = text$.pipe(operators.debounceTime(200), operators.distinctUntilChanged());
                var clicksWithClosedPopup$ = _this.click$.pipe(operators.filter(function () { return !_this.typehead.isPopupOpen(); }));
                var inputFocus$ = _this.focus$;
                return rxjs.merge(debouncedText$, inputFocus$, clicksWithClosedPopup$)
                    .pipe(operators.switchMap(function (term) {
                    var $observable;
                    switch (_this.token.length) {
                        case Token.Logical:
                            $observable = _this.logical({ type: 'LOGICAL', property: null, term: term, count: 10 });
                            break;
                        case Token.Key:
                            $observable = _this.keys({ type: 'KEY', property: null, term: term, count: 10 });
                            break;
                        case Token.Operator:
                            $observable = _this.comparison({ type: 'COMPARISON', property: null, term: term, count: 10 });
                            break;
                        case Token.Value:
                            $observable = _this.values({ type: 'VALUE', property: _this.token[Token.Key], term: term, count: 10 });
                            break;
                        default:
                            $observable = rxjs.of([]);
                            break;
                    }
                    return $observable.pipe(operators.map(function (list) { return ({ list: list, term: term }); }));
                }), operators.map(function (_a) {
                    var list = _a.list, term = _a.term;
                    return _.chain(list)
                        .filter(function (item) { return item.toString().toLowerCase().indexOf(term.toLowerCase()) >= 0; })
                        .uniq()
                        .slice(0, 10)
                        .value();
                }));
            };
        };
        NgbIntelisearchComponent.prototype.tokenHandler = function (evt) {
            var _this = this;
            evt.preventDefault();
            var value = evt.item.value;
            this.input.nativeElement.blur();
            this.token.push(value);
            this.inputModel = '';
            if (this.token.indexOf(value) === Token.Value) {
                this.addToken();
            }
            setTimeout(function () { return _this.input.nativeElement.focus(); });
        };
        NgbIntelisearchComponent.prototype.selectToken = function (idx) {
            var _this = this;
            var token = this.tokens[idx];
            if (token.length === EnumLength(Token)) {
                this.input.nativeElement.blur();
                this.tokens.pop();
                this.token = token;
                this.inputModel = this.token.pop();
                setTimeout(function () { return _this.input.nativeElement.focus(); });
            }
        };
        NgbIntelisearchComponent.prototype.removeToken = function (idx) {
            this.tokens.splice(idx, 1);
            this.search.emit(this.tokens);
        };
        NgbIntelisearchComponent.prototype.clearTokens = function () {
            this.tokens.length = 0;
            this.search.emit(this.tokens);
            this.addToken();
        };
        return NgbIntelisearchComponent;
    }());
    NgbIntelisearchComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ngb-intelisearch[name]',
                    template: "<div class=\"search-filter-box\">\n  <div class=\"search-filter-box-recent-searches\" ngbDropdown container=\"body\">\n    <button class=\"btn btn-outline-secondary dropdown-toggle\" type=\"button\" ngbDropdownToggle\n      ngbTooltip=\"Recent Searches\">\n      <i class=\"las la-history\"></i>\n    </button>\n    <div class=\"dropdown-menu recent-searches p-0\" ngbDropdownMenu>\n      <button (click)=\"onSelectRecentSearch(tokens)\" class=\"dropdown-item px-2\"\n        *ngFor=\"let tokens of searchTokens\">{{tokensToString(tokens)}}</button>\n      <div role=\"separator\" class=\"dropdown-divider m-0\"></div>\n      <button class=\"dropdown-item px-2\" (click)=\"clearSearchTokens()\">Clear recent searches</button>\n    </div>\n  </div>\n  <div class=\"search-filter-box-container\">\n    <ul class=\"tokens-container list-unstyled\">\n      <ng-container *ngFor=\"let _token of tokens; let i = index;\">\n        <li class=\"visual-token\">\n          <div class=\"selectable\" role=\"button\" (click)=\"selectToken(i)\">\n            <div *ngIf=\"_token[0]\" class=\"logical\">{{_token[0]}}</div>\n            <div *ngIf=\"_token[1]\" class=\"key\">{{_token[1]}}</div>\n            <div *ngIf=\"_token[2]\" class=\"operator\">{{_token[2]}}</div>\n            <div *ngIf=\"_token[3]\" class=\"value\">{{_token[3]}}</div>\n            <a *ngIf=\"_token[3]\" class=\"remove\" role=\"button\" (click)=\"removeToken(i)\">\n              <i class=\"las la-times\"></i>\n            </a>\n          </div>\n        </li>\n        <li class=\"input-token\" *ngIf=\"_token === token\">\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"getInputPlaceholder(token)\" #input\n            #typehead=\"ngbTypeahead\" [focusFirst]=\"false\" (keydown)=\"onTypeheadKeydown($event)\"\n            (focus)=\"focus$.next($any($event).target.value)\" (click)=\"click$.next($any($event).target.value)\"\n            [(ngModel)]=\"inputModel\" [ngbTypeahead]=\"tokenSearch()\" [inputFormatter]=\"inputFormatter\"\n            [resultTemplate]=\"resultTemplate\" container=\"body\" (selectItem)=\"tokenHandler($event)\">\n        </li>\n      </ng-container>\n    </ul>\n    <a class=\"clear\" role=\"button\" (click)=\"clearTokens()\" *ngIf=\"tokens.length > 1\">\n      <i class=\"las la-times\"></i>\n    </a>\n  </div>\n</div>\n<ng-template #resultTemplate let-result=\"result\" let-term=\"term\">\n  <ngb-highlight [result]=\"result.value\" [term]=\"term\"></ngb-highlight>\n  <span class=\"text-muted\">{{ result.label }}</span>\n</ng-template>",
                    styles: [".search-filter-box{display:flex}.search-filter-box .search-filter-box-recent-searches button{border-bottom-right-radius:0;border-color:#ced4da;border-top-right-radius:0}.search-filter-box .search-filter-box-recent-searches button:after{display:none}.search-filter-box .search-filter-box-recent-searches button i{font-size:1.5rem;vertical-align:middle}.search-filter-box .search-filter-box-container{align-items:center;background-color:#fff;border:1px solid #ced4da;border-bottom-left-radius:0!important;border-left-width:0;border-radius:.25rem;border-top-left-radius:0!important;display:flex;flex:1;overflow-y:auto}.search-filter-box .search-filter-box-container .tokens-container{align-items:center;display:flex;flex:1;margin:0;padding-left:.5rem}.search-filter-box .search-filter-box-container .tokens-container li.visual-token .selectable{align-items:center;display:flex}.search-filter-box .search-filter-box-container .tokens-container li.visual-token .selectable .remove,.search-filter-box .search-filter-box-container .tokens-container li.visual-token .selectable div{align-items:center;background-color:#e7e7e7;color:#818181;font-size:.9rem;margin-right:.1rem;padding:.25rem .5rem;white-space:nowrap}.search-filter-box .search-filter-box-container .tokens-container li.visual-token .selectable .remove.value,.search-filter-box .search-filter-box-container .tokens-container li.visual-token .selectable div.value{color:#000;margin:0}.search-filter-box .search-filter-box-container .tokens-container li.visual-token .selectable .remove{padding-left:0;text-decoration:none}.search-filter-box .search-filter-box-container .tokens-container li.visual-token .selectable .remove:hover{color:#000}.search-filter-box .search-filter-box-container .tokens-container li.visual-token .selectable:hover .remove,.search-filter-box .search-filter-box-container .tokens-container li.visual-token .selectable:hover div{background-color:#d4d4d4}.search-filter-box .search-filter-box-container .tokens-container li.input-token:last-child{flex:1}.search-filter-box .search-filter-box-container .tokens-container li.input-token input{border:none;border-radius:0;box-shadow:none;height:calc(1.5em + .75rem);padding:.25rem}.search-filter-box .search-filter-box-container .clear{color:#818181;padding:.25rem .5rem;text-decoration:none}.search-filter-box .search-filter-box-container .clear:hover{color:#000}::ng-deep .recent-searches{max-width:250px;overflow:hidden}::ng-deep .recent-searches .dropdown-item{font-size:.9rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}::ng-deep .recent-searches .dropdown-item:last-child{color:#666}::ng-deep [id^=ngb-typeahead-]{z-index:99996}::ng-deep [id^=ngb-typeahead-] .dropdown-item{display:flex;justify-content:space-between;padding:.25rem .75rem}::ng-deep [id^=ngb-typeahead-] .dropdown-item.active{background-color:#e7e7e7;color:#000}"]
                },] }
    ];
    NgbIntelisearchComponent.ctorParameters = function () { return []; };
    NgbIntelisearchComponent.propDecorators = {
        input: [{ type: i0.ViewChild, args: ['input', { static: false },] }],
        typehead: [{ type: i0.ViewChild, args: ['typehead', { static: false },] }],
        name: [{ type: i0.Input }],
        keys: [{ type: i0.Input }],
        values: [{ type: i0.Input }],
        logical: [{ type: i0.Input }],
        comparison: [{ type: i0.Input }],
        search: [{ type: i0.Output }]
    };

    var NgbIntelisearchModule = /** @class */ (function () {
        function NgbIntelisearchModule() {
        }
        return NgbIntelisearchModule;
    }());
    NgbIntelisearchModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [NgbIntelisearchComponent],
                    imports: [
                        platformBrowser.BrowserModule,
                        ngBootstrap.NgbModule
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

    exports.NgbIntelisearchComponent = NgbIntelisearchComponent;
    exports.NgbIntelisearchModule = NgbIntelisearchModule;
    exports.NgbIntelisearchService = NgbIntelisearchService;
    exports.ɵ0 = ɵ0;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=rynangeles-ngb-intelisearch.umd.js.map
