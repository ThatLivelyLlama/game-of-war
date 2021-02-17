console.log("hello!");


let suitG = ["hearts", "spades", "clubs", "diamonds"]
let rankG = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
let scoreG = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

class Card {
    constructor(suit, rank, score) {
        this.suit = suit;
        this.rank = rank;
        this.score = score;
    }
}

class Player {
  constructor(name) {
    this.name = name;
    this.deck = []
  }
}

class Warzone {
  constructor(name) {
    this.name = name;
    this.players = [];
    this.deck = [];
  }
  enterPlayers(player) {
    this.players.push(player);
  }
  freshCards() {
    let deck = []
    for (let i = 0; i < suitG.length; i++) {
      for (let j = 0; j < rankG.length; j++){
        let card = new Card(suitG[i], rankG[j], scoreG[j])
        this.deck.push(card)   
      }
    }
  }
  shuffle() {
    for (let i = this.deck.length -1; i> 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
  }
  deal() {
    let split = Math.ceil(this.deck.length / 2);
    this.players[0].deck = this.deck.splice(0, split)
    this.players[1].deck = this.deck.splice(-split)
  }
  battle() {
    let rounds = 1;
    for (let i = 0; i < this.players[0].deck.length;) {
        console.log(`Round: ${rounds}`)
        console.log(`${this.players[0].name} has ${this.players[0].deck.length} cards left`)
        console.log(`${this.players[1].name} has ${this.players[1].deck.length} cards left`)
        console.log(`${this.players[0].name} played a ${this.players[0].deck[0].rank} of ${this.players[0].deck[0].suit}!`)
        console.log(`${this.players[1].name} played a ${this.players[1].deck[0].rank} of ${this.players[1].deck[0].suit}!`)
        rounds++
        if (this.players[0].deck.length === 0 || this.players[1].deck.length === 0) {
            if (this.players[0].deck.length === 0) {
                return console.log(`${this.players[0].name} Won!`)
            } else {
                return console.log(`${this.players[1].name} Won!`)
            }
        }  
        if (this.players[0].deck[0].score > this.players[1].deck[0].score) {

            this.players[0].deck.push(this.players[1].deck.splice(0,1)[0])
            this.players[0].deck.push(this.players[0].deck.splice(0,1)[0])
        } else if (this.players[0].deck[0].score < this.players[1].deck[0].score) {

            this.players[1].deck.push(this.players[0].deck.splice(0,1)[0])
            this.players[1].deck.push(this.players[1].deck.splice(0,1)[0])
        } else {
            console.log("WAR!")
          let k = 0
          if (this.players[0].deck.length === 0 || this.players[1].deck.length === 0) {
                if (this.players[0].deck.length === 0) {
                    return console.log(`${this.players[0].name} Won!`)
                } else {
                    return console.log(`${this.players[1].name} Won!`)
                }
            }  
          while (this.players[0].deck[k].score === this.players[1].deck[k].score) {
            if (this.players[1].deck.length <= 3 || this.players[0].deck.length <= 3) {
              if (this.players[1].deck.length <= 3) {
                return console.log(`${this.players[0].name} Won!`)
              } else {
                return console.log(`${this.players[1].name} Won!`)
              }
            }
            k+=4

            if (this.players[1].deck.length < 7 || this.players[0].deck.length < 7) {
                if (this.players[1].deck.length < 7) {
                    return console.log(`${this.players[0].name} Won!`)
                } else {
                    return console.log(`${this.players[1].name} Won!`)
                }
                                


            }
            console.log(`${this.players[0].name} played a ${this.players[0].deck[k].rank} of ${this.players[0].deck[k].suit}!`)
            console.log(`${this.players[1].name} played a ${this.players[1].deck[k].rank} of ${this.players[1].deck[k].suit}!`)
          }
          if (this.players[1].deck.length <= 3 || this.players[0].deck.length <= 3) {
            return 
          }
          if (this.players[0].deck[k].score > this.players[1].deck[k].score) {
              this.players[0].deck = this.players[0].deck.concat(this.players[1].deck.splice(0,k+1))
              this.players[0].deck = this.players[0].deck.concat(this.players[0].deck.splice(0,k+1))
          } else if (this.players[0].deck[k].score < this.players[1].deck[k].score) {
              this.players[1].deck = this.players[1].deck.concat(this.players[1].deck.splice(0,k+1))
              this.players[1].deck = this.players[1].deck.concat(this.players[0].deck.splice(0,k+1))
          }          
              
        }
        
    }
    if (this.players[0].deck.length === 0 || this.players[1].deck.length === 0) {
        if (this.players[0].deck.length === 0) {
            return console.log(`${this.players[0].name} Won!`)
        } else {
            return console.log(`${this.players[1].name} Won!`)
        }
    }

  }
}

let war = new Warzone("war");

let playerOneName = prompt("Player One's Name: ")
let playerTwoName = prompt("Player Two's Name: ")

let playerOne = new Player(playerOneName)
let playerTwo = new Player(playerTwoName)

war.enterPlayers(playerOne);
war.enterPlayers(playerTwo);

war.freshCards()
war.shuffle()
war.deal()
war.battle()










// function shuffle(deck) {
//     for (let i = deck.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         [deck[i], deck[j]] = [deck[j], deck[i]];
//       }
//     return(deck)
// }

// function FreshCards() {
//   let deck = []
//   for (let i = 0; i < suitG.length; i++) {
//     for (let j = 0; j < rankG.length; j++){
//       let card = new Card(suitG[i], rankG[j], scoreG[j])
//       deck.push(card)
//     }
//   }
//   return deck;
// }