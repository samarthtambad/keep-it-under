# Keep It Under

An original two-player strategy card game I created that derives inspiration from Blackjack and Nim. The app is built using React.

## Game Rules

1. Pick a goal number (G: between 21 and 120) and pick the number of cards (N: between G/5 and 26) to be dealt to each player. Then start the game.
2. Each player is dealt (face up) N cards randomly picked from a deck of 52 cards.Each card has an associated value (2-10 have corresponding value, J/Q/K have value of 10 and ACE can have a value of 1 or 11). (Note: ACE will default to a value of 11 and will retroactively change its value to 1 if the total value exceeds G)
3. The first player will make the first move. Players take turns and play a card from their hand by dragging it from their hand to the game arena.
4. The total value of cards played cannot exceed the goal value (G). The player whose move raises the total value above G loses and the other player wins.

### Constraints

1. 21 <= G <= 120
2. G/5 <= N <= 26

## Building and running the App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
