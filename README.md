# Keep It Under
A card game I created that derives inspiration from Blackjack and Nim.

## Rules of the game
1. The first player picks a goal number (G) that serves as the threshold for the sum of values of cards played so far.
2. The second player picks the number of cards (N) that will be distributed to each player.
3. Each game will consist of two rounds where each player will get to play first.
4. Each player is dealt (face up) N cards randomly picked from a deck of 52 cards (standard playing cards). Each card has an associated value (2-10 have corresponding value, J/Q/K have value of 10 and A can have a value of 1 or 10).
5. The players take turns and play a card from their hand. The total value of cards played cannot exceed G. 
6. The first player who gets the total to exactly G wins. A player loses if he/she gets the total to exceed G in which case the other player wins by default.

### Constraints
1. 21 <= G <= 340
2. G/5 <= N <= 26

## TODO
