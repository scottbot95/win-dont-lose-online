# Win Don't Lose Online

[Redux](src/redux/README.md)

## Overview

This project is an online recreation of the fantastic card game
[Win Don't Lose](https://boardgamegeek.com/boardgame/101872/win-dont-lose). It is currently a work is progress and, as such, anything is subject to change.

## Usage

### Installation

To install necessary packages, run `npm install` (optionally `-D` for development packages).

### Testing

Tests are setup using the mocha framework. To run tests, simply run `npm test`

### Starting the dev server

This project is currently implemented to use the webpack-dev-server. To start this, either globally install the dev server with `npm install -g webpack-dev-server` then start it with `webpack-dev-server` or simple run `npm run build` after installing the dev dependencies

## Status

| Task                  | Status      | Notes                                                |
| --------------------- | ----------- | ---------------------------------------------------- |
| Basic Card Components | Complete    |
| Game Board Components | In Progress |
| Basic Game Mechanics  | Not Started | Simple things like dynamic player, drawing, and such |
| Card Mechanics        | Not Started |
| Improve README        | In Progress |

## Card Components

These components directly handle rendering and interating with the cards themselves.

### Card

A component represneting a single card

| Prop Name  | Type     | Description                                  |
| ---------- | -------- | -------------------------------------------- |
| card       | object   | An object containing the data about the card |
| selectCard | function | Callback to be called when a card is clicked |

### CardList

A component representing a collection of cards. A `CardList` can either display the cards in a line, or can overlay them on top of each other.

| Prop Name  | Type     | Description                                                           |
| ---------- | -------- | --------------------------------------------------------------------- |
| cards      | object[] | An array of card data to display to the user                          |
| selectCard | function | A callback to be called with the selected card when a card is clicked |
| spread     | boolean  | Whether or not to display the cards in a fanned out pattern           |
| faceDown   | boolean  | A flag dictating whether the cards should be displayed face down      |

### CardPile

**This may be merged into the [CardList](#CardList) in the future**

A component representing a pile of cards in a stack. Will only allow card selection form top of the pile

| Prop Name  | Type     | Description                                                                 |
| ---------- | -------- | --------------------------------------------------------------------------- |
| cards      | object[] | An array of card data to display to the user                                |
| selectCard | function | A callback to be called with the selected card when the top card is clicked |
| faceDown   | boolean  | A flag dictating whether the cards should be displayed face down            |

## Game Board Components

These components combine card components to form the game board and handle the changing game state.

### Player

A component representing a player. Displays their name, current points, current keepers, and hand.
The hand is displayed face down unless the `me` prop is given

| Name     | Type     | Description                                                   |
| -------- | -------- | ------------------------------------------------------------- |
| player   | object   | An object containing information about the player             |
| cards    | object[] | An array of the cards currently in the players hand           |
| keepers  | object[] | An array of cards currently played as keepers for this player |
| playCard | function | A callback function to be called when a card is clicked       |
| me       | boolean  | Whether or not this player is the one whose machine we're on  |
| style    | object   | A style object to apply to containing div                     |

### GameBoard

A component representing the entire game board and it's current state.
This component handles all the state and state changes related to the state of the game itself.

| Prop name | Type     | Description                                                  |
| --------- | -------- | ------------------------------------------------------------ |
| players   | object[] | An array of objects containing the static player information |

## Helper Components

These components are helpers for other components to make certain repetative tasks easier

### Circle Container

Displays all children aligned around a circle.
Will optionally rotate children to be aligned with the tanget of the circle at that point.

| Prop Name  | Type          | Description                                                                               | Default             |
| ---------- | ------------- | ----------------------------------------------------------------------------------------- | ------------------- |
| alpha      | number        | The angle between adjecent elements.                                                      | 360 / `numChildren` |
| radius     | number        | The radius of the circle to be used (measured in pixels)                                  | 100                 |
| radiusH    | number        | An override for the radius in the horizontal direction                                    | `undefined`         |
| radiusV    | number        | An override for the radius in the vertical direction                                      | `undefined`         |
| center     | number[0,1]   | The center point of the items in the circle                                               | 0.5                 |
| startAngle | number[0,360] | The angle the center point will be based at                                               | 90                  |
| rotate     | string        | One of `'none'` or `'tanget'`. Determines the post-positioning rotation of child elements | `'none'`            |
