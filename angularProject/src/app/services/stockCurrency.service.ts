import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

import { StockCurrency } from '../models/stockCurrency';

@Injectable()
export class StockCurrencyService {

    constructor(private http: Http) {

    }
    private url: string = 'https://scraper601.herokuapp.com/scrape/all';
    private url_case0: string = 'https://scraper601.herokuapp.com/scrape/test?n=1';
    private url_case1: string = 'https://scraper601.herokuapp.com/scrape/test?n=2';
    private url_case3: string = 'https://scraper601.herokuapp.com/scrape/test?n=3';
    private url_case4: string = 'https://scraper601.herokuapp.com/scrape/test?n=4';
    private url_case5: string = 'https://scraper601.herokuapp.com/scrape/test?n=5';


   getCoinRankingData() {
       return this.http.get(this.url).map((response: Response) => response.json().coinranking);
    }

    getIseData() {
       return this.http.get(this.url).map((response: Response) => response.json().ise);
    }

    getFtseData() {
       return this.http.get(this.url).map((response: Response) => response.json().ftse350);
    }

    getCoinRankingCase0Data() {
       return this.http.get(this.url_case0).map((response: Response) => response.json().coinranking);
    }

    getIseCase0Data() {
       return this.http.get(this.url_case0).map((response: Response) => response.json().ise);
    }

    getFtseCase0Data() {
       return this.http.get(this.url_case0).map((response: Response) => response.json().ftse350);
    }

     getCoinRankingCase1Data() {
       return this.http.get(this.url_case1).map((response: Response) => response.json().coinranking);
    }

    getIseCase1Data() {
       return this.http.get(this.url_case1).map((response: Response) => response.json().ise);
    }

    getFtseCase1Data() {
       return this.http.get(this.url_case1).map((response: Response) => response.json().ftse350);

    }

    getCoinRankingCase3Data() {
       return this.http.get(this.url_case3).map((response: Response) => response.json().coinranking);
    }

    getIseCase3Data() {
       return this.http.get(this.url_case3).map((response: Response) => response.json().ise);
    }

    getFtseCase3Data() {
       return this.http.get(this.url_case3).map((response: Response) => response.json().ftse350);

    }
    getCoinRankingCase4Data() {
       return this.http.get(this.url_case4).map((response: Response) => response.json().coinranking);
    }

    getIseCase4Data() {
       return this.http.get(this.url_case4).map((response: Response) => response.json().ise);
    }

    getFtseCase4Data() {
       return this.http.get(this.url_case4).map((response: Response) => response.json().ftse350);

    }

    getCoinRankingCase5Data() {
       return this.http.get(this.url_case5).map((response: Response) => response.json().coinranking);
    }

    getIseCase5Data() {
       return this.http.get(this.url_case5).map((response: Response) => response.json().ise);
    }

    getFtseCase5Data() {
       return this.http.get(this.url_case5).map((response: Response) => response.json().ftse350);


    }

}
