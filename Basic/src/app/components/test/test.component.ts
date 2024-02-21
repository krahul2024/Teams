import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  searchTerm: string = '';
  shareMessage : any = {
    "type": "message",
    "attachments": [
      {
        "contentType": "application/vnd.microsoft.card.adaptive",
        "contentUrl": null,
        "content": {
          "type": "AdaptiveCard",
          "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
          "version": "1.5",
          "body": [
            {
              "type" : "TextBlock", 
              "text" : "Sharing the summary from web page", 
              "weight" : "Bolder", 
              "wrap" : true 
            },
            {
              "type": "TextBlock",
              "text": "Document type: Lorem Ipsum",
              "weight": "Bolder",
              "wrap": true
            },
            {
              "type": "TextBlock",
              "text": "Date received: 02/05/2024 03:45:50 AM",
              "weight": "Bolder",
              "wrap": true
            },
            {
              "type": "TextBlock",
              "text": "User One: Rahul",
              "weight" : "Bolder",
              "wrap": true
            },
            {
              "type": "TextBlock",
              "text": "User Two: Kumar",
              "weight" : "Bolder",
              "wrap": true
            }
          ]
        }
      }
    ]
  }
  // proxyUrl : string = 'https://cors-anywhere.herokuapp.com/'; 
  webhooks_url : string = 'https://sagportal.webhook.office.com/webhookb2/fea331ef-e4e7-46b2-b6c1-0593f0ebe5ac@d9662eb9-ad98-4e74-a8a2-04ed5d544db6/IncomingWebhook/8c8453bc7b8b4517a6c9ba6cd8233d1b/535d63a1-ac25-4ea9-92a7-c9fc5afe3ee7'; 
  
  constructor (private http: HttpClient){} ; 

  // share summary to the teams channel 
  shareSummaryToTeamsChannel() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With'
    });
  
    this.http.post(this.webhooks_url, this.shareMessage, { headers })
      .subscribe(
        response => { console.log({ response }) },
        error => { console.log({ error }) }
      ); 
  }
  
}
