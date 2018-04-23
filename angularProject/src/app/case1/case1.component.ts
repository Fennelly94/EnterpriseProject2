import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { StockCurrency } from '../models/stockCurrency';

import { StockCurrencyService } from '../services/stockCurrency.service';

@Component({
    selector: 'app-case1',
    templateUrl: './case1.component.html',
    styleUrls: ['./case1.component.css']
})

export class Case1Component implements OnInit {
    title = 'case1';
    ise = StockCurrency;
    ftse = StockCurrency;
    coinranking = StockCurrency;



    constructor(private stockCurrencyService: StockCurrencyService) { }

    ngOnInit() {

        this.stockCurrencyService.getIseCase1Data().subscribe(responseIses => this.ise = responseIses);
        this.stockCurrencyService.getFtseCase1Data().subscribe(responseFtses => this.ftse = responseFtses);
        this.stockCurrencyService.getCoinRankingCase1Data().subscribe(responseCoins => this.coinranking = responseCoins);

        }
        }
