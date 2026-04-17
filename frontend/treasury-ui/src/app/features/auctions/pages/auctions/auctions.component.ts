import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource } from '@angular/material/table';
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
  templateUrl: './auctions.component.html'
})
export class AuctionsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'rate'];
  dataSource = new MatTableDataSource<Auction>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private auctionService: AuctionService) {}

  ngOnInit(): void {
    this.auctionService.getAuctions().subscribe(data => {
      this.dataSource.data = data;

      // attach paginator + sort AFTER data loads
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
