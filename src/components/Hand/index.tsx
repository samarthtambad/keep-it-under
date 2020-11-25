import React from 'react'
import './style.css';

import Card from '../Card';

interface Props {
    className?: string
}

const Hand: React.FC<Props> = (props) => {

  let cards = [
      {
        "code": "8S",
        "image": "https://deckofcardsapi.com/static/img/8S.png",
        "images": {
          "svg": "https://deckofcardsapi.com/static/img/8S.svg",
          "png": "https://deckofcardsapi.com/static/img/8S.png"
        },
        "value": "8",
        "suit": "SPADES"
      },
      {
        "code": "4D",
        "image": "https://deckofcardsapi.com/static/img/4D.png",
        "images": {
          "svg": "https://deckofcardsapi.com/static/img/4D.svg",
          "png": "https://deckofcardsapi.com/static/img/4D.png"
        },
        "value": "4",
        "suit": "DIAMONDS"
      },
      {
        "code": "0S",
        "image": "https://deckofcardsapi.com/static/img/0S.png",
        "images": {
          "svg": "https://deckofcardsapi.com/static/img/0S.svg",
          "png": "https://deckofcardsapi.com/static/img/0S.png"
        },
        "value": "10",
        "suit": "SPADES"
      },
      {
        "code": "JD",
        "image": "https://deckofcardsapi.com/static/img/JD.png",
        "images": {
          "svg": "https://deckofcardsapi.com/static/img/JD.svg",
          "png": "https://deckofcardsapi.com/static/img/JD.png"
        },
        "value": "JACK",
        "suit": "DIAMONDS"
      },
      {
        "code": "2C",
        "image": "https://deckofcardsapi.com/static/img/2C.png",
        "images": {
          "svg": "https://deckofcardsapi.com/static/img/2C.svg",
          "png": "https://deckofcardsapi.com/static/img/2C.png"
        },
        "value": "2",
        "suit": "CLUBS"
      },
      {
        "code": "AD",
        "image": "https://deckofcardsapi.com/static/img/aceDiamonds.png",
        "images": {
          "svg": "https://deckofcardsapi.com/static/img/aceDiamonds.svg",
          "png": "https://deckofcardsapi.com/static/img/aceDiamonds.png"
        },
        "value": "ACE",
        "suit": "DIAMONDS"
      },
      {
        "code": "2D",
        "image": "https://deckofcardsapi.com/static/img/2D.png",
        "images": {
          "svg": "https://deckofcardsapi.com/static/img/2D.svg",
          "png": "https://deckofcardsapi.com/static/img/2D.png"
        },
        "value": "2",
        "suit": "DIAMONDS"
      },
      {
        "code": "4S",
        "image": "https://deckofcardsapi.com/static/img/4S.png",
        "images": {
          "svg": "https://deckofcardsapi.com/static/img/4S.svg",
          "png": "https://deckofcardsapi.com/static/img/4S.png"
        },
        "value": "4",
        "suit": "SPADES"
      },
      {
        "code": "3S",
        "image": "https://deckofcardsapi.com/static/img/3S.png",
        "images": {
          "svg": "https://deckofcardsapi.com/static/img/3S.svg",
          "png": "https://deckofcardsapi.com/static/img/3S.png"
        },
        "value": "3",
        "suit": "SPADES"
      },
      {
        "code": "2S",
        "image": "https://deckofcardsapi.com/static/img/2S.png",
        "images": {
          "svg": "https://deckofcardsapi.com/static/img/2S.svg",
          "png": "https://deckofcardsapi.com/static/img/2S.png"
        },
        "value": "2",
        "suit": "SPADES"
      },
      {
        "code": "3H",
        "image": "https://deckofcardsapi.com/static/img/3H.png",
        "images": {
          "svg": "https://deckofcardsapi.com/static/img/3H.svg",
          "png": "https://deckofcardsapi.com/static/img/3H.png"
        },
        "value": "3",
        "suit": "HEARTS"
      },
      {
        "code": "9S",
        "image": "https://deckofcardsapi.com/static/img/9S.png",
        "images": {
          "svg": "https://deckofcardsapi.com/static/img/9S.svg",
          "png": "https://deckofcardsapi.com/static/img/9S.png"
        },
        "value": "9",
        "suit": "SPADES"
      },
      {
        "code": "QH",
        "image": "https://deckofcardsapi.com/static/img/QH.png",
        "images": {
          "svg": "https://deckofcardsapi.com/static/img/QH.svg",
          "png": "https://deckofcardsapi.com/static/img/QH.png"
        },
        "value": "QUEEN",
        "suit": "HEARTS"
      },
      {
        "code": "KC",
        "image": "https://deckofcardsapi.com/static/img/KC.png",
        "images": {
          "svg": "https://deckofcardsapi.com/static/img/KC.svg",
          "png": "https://deckofcardsapi.com/static/img/KC.png"
        },
        "value": "KING",
        "suit": "CLUBS"
      },
      {
        "code": "JC",
        "image": "https://deckofcardsapi.com/static/img/JC.png",
        "images": {
          "svg": "https://deckofcardsapi.com/static/img/JC.svg",
          "png": "https://deckofcardsapi.com/static/img/JC.png"
        },
        "value": "JACK",
        "suit": "CLUBS"
      },
      {
        "code": "5H",
        "image": "https://deckofcardsapi.com/static/img/5H.png",
        "images": {
          "svg": "https://deckofcardsapi.com/static/img/5H.svg",
          "png": "https://deckofcardsapi.com/static/img/5H.png"
        },
        "value": "5",
        "suit": "HEARTS"
      },
      {
        "code": "KH",
        "image": "https://deckofcardsapi.com/static/img/KH.png",
        "images": {
          "svg": "https://deckofcardsapi.com/static/img/KH.svg",
          "png": "https://deckofcardsapi.com/static/img/KH.png"
        },
        "value": "KING",
        "suit": "HEARTS"
      },
      {
        "code": "2H",
        "image": "https://deckofcardsapi.com/static/img/2H.png",
        "images": {
          "svg": "https://deckofcardsapi.com/static/img/2H.svg",
          "png": "https://deckofcardsapi.com/static/img/2H.png"
        },
        "value": "2",
        "suit": "HEARTS"
      },
      {
        "code": "AH",
        "image": "https://deckofcardsapi.com/static/img/AH.png",
        "images": {
          "svg": "https://deckofcardsapi.com/static/img/AH.svg",
          "png": "https://deckofcardsapi.com/static/img/AH.png"
        },
        "value": "ACE",
        "suit": "HEARTS"
      },
      {
        "code": "8H",
        "image": "https://deckofcardsapi.com/static/img/8H.png",
        "images": {
          "svg": "https://deckofcardsapi.com/static/img/8H.svg",
          "png": "https://deckofcardsapi.com/static/img/8H.png"
        },
        "value": "8",
        "suit": "HEARTS"
      },
      {
        "code": "KS",
        "image": "https://deckofcardsapi.com/static/img/KS.png",
        "images": {
          "svg": "https://deckofcardsapi.com/static/img/KS.svg",
          "png": "https://deckofcardsapi.com/static/img/KS.png"
        },
        "value": "KING",
        "suit": "SPADES"
      },
      {
        "code": "7H",
        "image": "https://deckofcardsapi.com/static/img/7H.png",
        "images": {
          "svg": "https://deckofcardsapi.com/static/img/7H.svg",
          "png": "https://deckofcardsapi.com/static/img/7H.png"
        },
        "value": "7",
        "suit": "HEARTS"
      },
      {
        "code": "7S",
        "image": "https://deckofcardsapi.com/static/img/7S.png",
        "images": {
          "svg": "https://deckofcardsapi.com/static/img/7S.svg",
          "png": "https://deckofcardsapi.com/static/img/7S.png"
        },
        "value": "7",
        "suit": "SPADES"
      },
      {
        "code": "8D",
        "image": "https://deckofcardsapi.com/static/img/8D.png",
        "images": {
          "svg": "https://deckofcardsapi.com/static/img/8D.svg",
          "png": "https://deckofcardsapi.com/static/img/8D.png"
        },
        "value": "8",
        "suit": "DIAMONDS"
      },
      {
        "code": "7D",
        "image": "https://deckofcardsapi.com/static/img/7D.png",
        "images": {
          "svg": "https://deckofcardsapi.com/static/img/7D.svg",
          "png": "https://deckofcardsapi.com/static/img/7D.png"
        },
        "value": "7",
        "suit": "DIAMONDS"
      },
      {
        "code": "6S",
        "image": "https://deckofcardsapi.com/static/img/6S.png",
        "images": {
          "svg": "https://deckofcardsapi.com/static/img/6S.svg",
          "png": "https://deckofcardsapi.com/static/img/6S.png"
        },
        "value": "6",
        "suit": "SPADES"
      }
  ]

    return (
      <div>
        {cards.map((card, index) => (
          <Card data={card} key={`${index}-{card.code}`} />
        ))}
      </div>
    );
};

export default Hand;