import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import {Auction} from "../../../../shared/models/auction.model";
import {AuctionService} from "../../../../core/services/auction.service";

@Component({
  selector: 'app-auctions',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule
  ],
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.css']
})
export class AuctionsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'rate'];
  dataSource = new MatTableDataSource<Auction>();

  kpi = {
    yield: 0,
    volume: 0,
    spread: 0
  };

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private auctionService: AuctionService) {}

  ngOnInit(): void {
    this.auctionService.getAuctions().subscribe(data => {

      // table data
      this.dataSource.data = data;

      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });

      // KPI calculations
      this.kpi = {
        yield: this.calculateYield(data),
        volume: data.length,
        spread: this.calculateSpread(data)
      };
    });
  }

  applyFilter(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
  }

  calculateYield(data: Auction[]): number {
    const avg = data.reduce((sum, a) => sum + a.rate, 0) / data.length;
    return parseFloat(avg.toFixed(2));
  }

  calculateSpread(data: Auction[]): number {
    const rates = data.map(a => a.rate);
    return Math.max(...rates) - Math.min(...rates);
  }
}
