import { Component } from '@angular/core';

import { StockListService } from './Services/stock-list.service';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Stock-Market-UI';

  constructor(private StockListService: StockListService) {}

  globalStockList :any 
  stockList: any;
  userInput:any;

  ngOnInit() {
    this.StockListService.getStockLlist().subscribe((response) => {
      this.globalStockList = response?.results.slice(0, 50);
      this.stockList = this.globalStockList;
      console.log('response', this.stockList);
    });
  }

  getDaataAsUserInserted() {
    console.log('User input:', this.userInput);
    this.stockList = this.globalStockList
    this.stockList =  this.stockList?.slice(0, this.userInput);
  }
}
