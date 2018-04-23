import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { StockCurrency } from '../models/stockCurrency';

import { StockCurrencyService } from '../services/stockCurrency.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    title = 'home';
    ise = StockCurrency;
    ftse = StockCurrency;
    coinranking = StockCurrency;



    constructor(private stockCurrencyService: StockCurrencyService) { }

    ngOnInit() {

        this.stockCurrencyService.getIseData().subscribe(responseIses => this.ise = responseIses);
        this.stockCurrencyService.getFtseData().subscribe(responseFtses => this.ftse = responseFtses);
        this.stockCurrencyService.getCoinRankingData().subscribe(responseCoins => this.coinranking = responseCoins);

    }

}
