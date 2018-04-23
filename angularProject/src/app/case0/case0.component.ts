import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { StockCurrency } from '../models/stockCurrency';

import { StockCurrencyService } from '../services/stockCurrency.service';

@Component({
    selector: 'app-case0',
    templateUrl: './case0.component.html',
    styleUrls: ['./case0.component.css']
})

export class Case0Component implements OnInit {
    title = 'case0';
    ise = StockCurrency;
    ftse = StockCurrency;
    coinranking = StockCurrency;


    constructor(private stockCurrencyService: StockCurrencyService) { }

    ngOnInit() {

        this.stockCurrencyService.getIseCase0Data().subscribe(responseIses => this.ise = responseIses);
        this.stockCurrencyService.getFtseCase0Data().subscribe(responseFtses => this.ftse = responseFtses);
        this.stockCurrencyService.getCoinRankingCase0Data().subscribe(responseCoins => this.coinranking = responseCoins);

    }

}
