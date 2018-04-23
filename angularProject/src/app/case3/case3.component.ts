import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { StockCurrency } from '../models/stockCurrency';

import { StockCurrencyService } from '../services/stockCurrency.service';

@Component({
    selector: 'app-case3',
    templateUrl: './case3.component.html',
    styleUrls: ['./case3.component.css']
})

export class Case3Component implements OnInit {
    title = 'case3';
    ise = StockCurrency;
    ftse = StockCurrency;
    coinranking = StockCurrency;



    constructor(private stockCurrencyService: StockCurrencyService) { }

    ngOnInit() {

        this.stockCurrencyService.getIseCase3Data().subscribe(responseIses => this.ise = responseIses);
        this.stockCurrencyService.getFtseCase3Data().subscribe(responseFtses => this.ftse = responseFtses);
        this.stockCurrencyService.getCoinRankingCase3Data().subscribe(responseCoins => this.coinranking = responseCoins);

        }
}
