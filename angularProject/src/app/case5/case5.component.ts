import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { StockCurrency } from '../models/stockCurrency';

import { StockCurrencyService } from '../services/stockCurrency.service';

@Component({
    selector: 'app-case5',
    templateUrl: './case5.component.html',
    styleUrls: ['./case5.component.css']
})

export class Case5Component implements OnInit {
    title = 'case5';
    ise = StockCurrency;
    ftse = StockCurrency;
    coinranking = StockCurrency;



    constructor(private stockCurrencyService: StockCurrencyService) { }

    ngOnInit() {

        this.stockCurrencyService.getIseCase5Data().subscribe(responseIses => this.ise = responseIses);
        this.stockCurrencyService.getFtseCase5Data().subscribe(responseFtses => this.ftse = responseFtses);
        this.stockCurrencyService.getCoinRankingCase5Data().subscribe(responseCoins => this.coinranking = responseCoins);

        }
}
