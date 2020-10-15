import { Component, OnInit } from '@angular/core';
import ShopifyBuy from '@shopify/buy-button-js';

@Component({
  selector: 'app-collection-a',
  templateUrl: './collection-a.component.html',
  styleUrls: ['./collection-a.component.scss']
})
export class CollectionAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

var client = ShopifyBuy.buildClient({
  apiKey: '6579d83c85dfe70b98a8b4c9da3af428',
  domain: 'chazdesigns.myshopify.com',
  appId: '6'
 });
 
 var ui = ShopifyBuy.UI.init(client);
 
 ui.createComponent('collection', {
   id: 223908921501,
   node: document.getElementById('my-product'),
   options: {
    product: {
      buttonDestination: 'modal',
      text: {
        button: 'View Product'
      },
      styles: {
        button: {
          "font-family": "Karla, sans-serif",
          "font-size": "16px",
          "padding-top": "16px",
          "padding-bottom": "16px",
          "color": "#fafafa",
          ":hover": {
            "color": "#fafafa",
            "background-color": "#995c33"
          },
          "background-color": "#aa6639",
          ":focus": {
            "background-color": "#995c33"
          }
        },
      },
      "googleFonts": [
        "Karla"
      ]
    },
    modalProduct: {
      "contents": {
        "img": false,
        "imgWithCarousel": true,
        "button": false,
        "buttonWithQuantity": true
      },
    },
    cart: {
      startOpen: false,
      styles: {
        button: {
          "font-family": "Karla, sans-serif",
          "font-size": "16px",
          "padding-top": "16px",
          "padding-bottom": "16px",
          "color": "#fafafa",
          ":hover": {
            "color": "#fafafa",
            "background-color": "#995c33"
          },
          "background-color": "#aa6639",
          ":focus": {
            "background-color": "#995c33"
          }
        }
      },
      "googleFonts": [
        "Karla"
      ]
    },
    toggle: {
      "styles": {
        "toggle": {
          "font-family": "Karla, sans-serif",
          "background-color": "#aa6639",
          ":hover": {
            "background-color": "#995c33"
          },
          ":focus": {
            "background-color": "#995c33"
          }
        },
        "count": {
          "font-size": "16px",
          "color": "#fafafa",
          ":hover": {
            "color": "#fafafa"
          }
        },
        "iconPath": {
          "fill": "#fafafa"
        }
      },
      "googleFonts": [
        "Karla"
      ]
    }
  }
 });