import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import * as ɵngcc0 from '@angular/core';
export declare class NgbIntelisearchComponent implements OnInit {
    input: ElementRef;
    typehead: NgbTypeahead;
    name: string;
    keys: (value: any) => Observable<any>;
    values: (value: any) => Observable<any>;
    logical: (value: any) => Observable<any>;
    comparison: (value: any) => Observable<any>;
    search: EventEmitter<any>;
    focus$: Subject<string>;
    click$: Subject<string>;
    searchTokens: any[];
    tokens: any[];
    token: string[];
    inputModel: string;
    constructor();
    inputFormatter: (input: {
        value: string;
    }) => string;
    addToken(): void;
    ngOnInit(): void;
    saveSearchTokens(): void;
    getSearchTokens(): any[];
    clearSearchTokens(): void;
    tokensToString(tokens: any): any;
    onSelectRecentSearch(tokens: any): void;
    getInputPlaceholder(token: any): string;
    onTypeheadKeydown(evt?: any): void;
    tokenSearch(): (text$: Observable<string>) => Observable<any>;
    tokenHandler(evt: any): void;
    selectToken(idx: any): void;
    removeToken(idx: any): void;
    clearTokens(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbIntelisearchComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NgbIntelisearchComponent, "ngb-intelisearch[name]", never, { "logical": "logical"; "comparison": "comparison"; "name": "name"; "keys": "keys"; "values": "values"; }, { "search": "search"; }, never, never>;
}

//# sourceMappingURL=ngb-intelisearch.component.d.ts.map