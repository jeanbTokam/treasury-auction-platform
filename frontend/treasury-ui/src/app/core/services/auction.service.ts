import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auction } from '../../shared/models/auction.model';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  // Spring Boot backend URL
  private apiUrl = 'http://localhost:8080/api/auctions';

  constructor(private http: HttpClient) {}

  // GET all auctions
  getAuctions(): Observable<Auction[]> {
    return this.http.get<Auction[]>(this.apiUrl);
  }

  // OPTIONAL (future use)
  getAuctionById(id: string): Observable<Auction> {
    return this.http.get<Auction>(`${this.apiUrl}/${id}`);
  }

  // OPTIONAL (future use)
  createAuction(auction: Auction): Observable<Auction> {
    return this.http.post<Auction>(this.apiUrl, auction);
  }
}
