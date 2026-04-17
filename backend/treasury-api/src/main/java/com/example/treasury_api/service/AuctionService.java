package com.example.treasury_api.service;

import com.example.treasury_api.model.Auction;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AuctionService {

    public List<Auction> getAllAuctions() {

        List<Auction> auctions = new ArrayList<>();

        auctions.add(new Auction("1", "Treasury Bond", 4.5));
        auctions.add(new Auction("2", "Money Market", 5.2));
        auctions.add(new Auction("3", "Corporate Bond", 6.1));

        return auctions;
    }
}