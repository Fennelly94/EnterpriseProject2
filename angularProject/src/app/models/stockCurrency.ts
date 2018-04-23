export class StockCurrency {
  exchange: string;
  time: Date;
  data: [
    {
      company: string;
      symbol: string;
      price: string;
      change: string;
      pChg: number
    }
  ]
}
