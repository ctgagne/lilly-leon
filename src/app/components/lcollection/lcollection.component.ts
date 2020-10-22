import { Component, OnInit } from '@angular/core';
import ShopifyBuy from '@shopify/buy-button-js';

@Component({
  selector: 'app-lcollection',
  templateUrl: './lcollection.component.html',
  styleUrls: ['./lcollection.component.scss']
})
export class LcollectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var client = ShopifyBuy.buildClient({
      apiKey: '81480939c4a716f28be5933a9c198b82',
      domain: 'lillyundleon.myshopify.com',
      appId: '6'
     });
     
     var ui = ShopifyBuy.UI.init(client);
     
     ui.createComponent('collection', {
       id: 232149483699,
       node: document.getElementById('my-collection'),
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
                "background-color": "#482716"
              },
              "background-color": "#7c6a51",
              ":focus": {
                "background-color": "#482716"
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
                "background-color": "#482716"
              },
              "background-color": "#7c6a51",
              ":focus": {
                "background-color": "#482716"
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
              "background-color": "#482716",
              ":hover": {
                "background-color": "#7c6a51"
              },
              ":focus": {
                "background-color": "#7c6a51"
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
  }

}
