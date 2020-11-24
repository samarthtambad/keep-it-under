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

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
