package com.example.treasury_api.controller;

import com.example.treasury_api.model.Auction;
import com.example.treasury_api.service.AuctionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/auctions")
@CrossOrigin(origins = "*")
public class AuctionController {

    private final AuctionService auctionService;

    public AuctionController(AuctionService auctionService) {
        this.auctionService = auctionService;
    }

    @GetMapping
    public List<Auction> getAuctions() {
        return auctionService.getAllAuctions();
    }
}