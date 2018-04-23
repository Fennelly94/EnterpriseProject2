import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { StockCurrency } from '../models/stockCurrency';

import { StockCurrencyService } from '../services/stockCurrency.service';

@Component({
    selector: 'app-case4',
    templateUrl: './case4.component.html',
    styleUrls: ['./case4.component.css']
})

export class Case4Component implements OnInit {
    title = 'case4';
    ise = StockCurrency;
    ftse = StockCurrency;
    coinranking = StockCurrency;



    constructor(private stockCurrencyService: StockCurrencyService) { }

    ngOnInit() {

        this.stockCurrencyService.getIseCase4Data().subscribe(responseIses => this.ise = responseIses);
        this.stockCurrencyService.getFtseCase4Data().subscribe(responseFtses => this.ftse = responseFtses);
        this.stockCurrencyService.getCoinRankingCase4Data().subscribe(responseCoins => this.coinranking = responseCoins);

        }
}
