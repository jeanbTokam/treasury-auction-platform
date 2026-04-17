import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuctionService } from '../../../../core/services/auction.service';
import { Auction } from '../../../../shared/models/auction.model';

@Component({
  selector: 'app-auctions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auctions.component.html'
})
export class AuctionsComponent implements OnInit {

  auctions: Auction[] = [];

  constructor(private auctionService: AuctionService) {}

  ngOnInit(): void {
    this.auctionService.getAuctions().subscribe(data => {
      this.auctions = data;
      console.log('API DATA:', data); // 👈 check browser console
    });
  }
}
