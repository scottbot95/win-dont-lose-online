import Card from "./Card";
import Keeper from "./Keeper";

export default [
  new Card({
    title: "Get Crazy-Go-Nuts",
    description: "Play the top three cards of the deck, one at a time",
    flavor: "Play all thee at the same time would be stark-raving-mad-go-nuts.",
    isScary: true
  }),
  new Card({
    title: "Narcolepsy",
    description:
      "Pick a player. They miss a turn. You can take a keeper card from tin form of them or pass them a keeper card in form of you.",
    flavor: "Zzzzzzzzz…"
  }),
  new Card({
    title: "Strategic Retreat",
    description:
      "You lose, but in the next game you draw an extra card and go first.",
    flavor: "Run away! Run away! Keep running!"
  }),
  new Card({
    title: "The Ol' Switcheroo",
    description:
      "Choose one:\nTake a keeper from in front of a player into your hand and play another keeper card from your hand on that player,\n-or-\nTake a card from someone's hand and give them a different card from your hand, if you have one.",
    flavor: "Since it worked so well for Indiana Jones"
  }),
  new Keeper({
    title: "Hoarding",
    description:
      "If you ever have five or more keepers in front of you, you win!",
    flavor: "Hee hee. So many things!",
    points: 10
  }),
  new Keeper({
    title: "I'm Smart",
    description: "When this is played, draw a card",
    flavor: "I am so smart! S-m-r-t!",
    points: 10
  }),
  new Card({
    title: "Cards of Mass Destruction",
    description:
      'Each of your opponents discards a card from their hand. If no one discarded a card with "Scary" on the back, put this card back in your hand.',
    flavor: "This game is inspired by the game We Didn't Playtest This At All."
  }),
  new Keeper({
    title: "Fluffy Bunnies",
    description: "Each player gains 15 points",
    flavor: "So fluffy!",
    points: 15
  }),
  new Card({
    title: "Born Again",
    description:
      "Choose a player. That player discards their hand and all their keepers and draws three cards.",
    flavor: 'Can I get a "Hallelujah"?'
  }),
  new Card({
    title: "Brainstorming",
    description: "Draw two cards",
    flavor:
      "This would be the card with the least words, except for this boring flavour text."
  }),
  new Card({
    title: "Charity Case",
    description:
      "Each player must give you their choise of one of their keepers or a card from their hand",
    flavor: "A player can't choose not to play a card on their turn"
  }),
  new Card({
    title: "Eeyore",
    description: "You lose.",
    flavor: "Might as well not bother trying to win anyway"
  }),
  new Card({
    title: "Grabbers Always Prosper",
    description:
      "Either steal someone else's keeper from in front of them or grab a card from another player's hand and put it in yours. (You may look at the back of the player's hand, but not the front.)",
    flavor: "Yoink!"
  }),
  new Card({
    title: "It's a Mister Death",
    description:
      "Everyone throws rock, paper, or scissors. Anyone you beat loses",
    flavor: "He's come about the reaping"
  }),
  new Card({
    title: "Purge",
    description:
      "Chose an in-play keeper and discard it. Its owner draw a card. If there are no keepers in play, you draw a card instead.",
    flavor: "Remember, the object is to win, and not to lose"
  }),
  new Card({
    title: "Shock Therapy",
    description:
      "Choose a player. That player discards their hand and draws one card",
    flavor: "You don't need those pesky thoughts"
  }),
  new Card({
    title: "Supreme Nuclear Annihilation of Doom",
    description: "Everyone loses",
    flavor: "Muhahahahaha!",
    isScary: true
  }),
  new Card({
    title: "Double Take",
    description: "Take two turns after this one",
    flavor:
      "Do you have an account on boardgamegeek.com? Go rate Win, Don't Lose!"
  }),
  new Keeper({
    title: "LIVING in a VAN by the RIVER",
    description:
      "When this is played, discard your other keepers from in front of you. Players can't play keepers on you.",
    flavor: "Freakin' hippie"
  }),
  new Keeper({
    title: "Breakfast of Champions",
    description: "When this is played, take another turn after this one.",
    flavor: "Silly rabbit, foloow your nose to this. It's grrrreat!",
    points: 5
  }),
  new Keeper({
    title: "A Cunning Plan That Cannot Fail",
    description:
      "When this card is first played, it is worth 0 points. At the beginning of each of your following turns, this card's value goes up by 10 points.",
    flavor: "...in bed."
  }),
  new Keeper({
    title: "Daylight Saving Time",
    description:
      "Play order now goes counter-clockwise. If someone tries to take a turn when it's not their turn, they lose.",
    flavor: "Nobody ever knows whose turn it is in Newfoundland.",
    points: 10
  }),
  new Keeper({
    title: "Frozen in Carbonite",
    description:
      "You don't get a turn as long as you have this keeper in front of you.",
    flavor: "Seriously, Jedi Luke? Why do he and Leia have biblical names?",
    points: -5
  }),
  new Keeper({
    title: "Golden Eggs in a Basket",
    description:
      "When this is first played, it is worth zero points, and you discard any other keepers from in front of you and miss your next turn. After you discard your other keepers, this card is worth 24 points as long as it’s in front of someone.",
    flavor: "People who read flavour text are awesome",
    isScary: true
  }),
  new Keeper({
    title: "Rampaging Barbarians",
    description:
      "At the end of your turn, you lose. Then, pass this keeper to the player on your left",
    flavor:
      "Ever though the people of the Barbary Coast might resent the stereotype?",
    isScary: true
  }),
  new Keeper({
    title: "Shared Fate",
    description:
      "If you win or lose, so do the players on your immediate left and right",
    flavor: "Tell your friends about Win, Don't Lose!"
  }),
  new Card({
    title: "Turn, Turn, Turn",
    description:
      "Choose left or right. Each player with one or more keepers in front of them must pass one of them to the player on the side indicated. Players without any keepers must give one of the cards in their hand to the player on the side indicated.",
    flavor: "To every thing, there is a season. Even Barbarians"
  }),
  new Keeper({
    title: "Positive Outlook",
    description:
      "Any time you would draw cards, you may draw twice as many. Any time an opponent would discard cards from their hand, they discard twice as many.",
    flavor: "If you're losing, it must be because of your attitude!",
    points: 5
  }),
  new Keeper({
    title: "Psychic Network",
    description:
      "If a player says the name of another player, they must give that player a card from their hand.",
    flavor:
      'I hope no one plays this card who has a name like "card", "keeper" or "play."',
    points: 10
  }),
  new Keeper({
    title: "Rabbit of Cacrbannog",
    description:
      'Each turn, the player whose turn it is must say, "Run Away! Run Away!" If they forget, they lose. (This includes the turn when the card is played.)',
    flavor: "It's got a vicious streak a mile wide! Look at the bones!",
    points: -10
  }),
  new Keeper({
    title: "Solar Death Ray",
    description:
      "On each of your following turns, choose a player. That player loses.",
    flavor: '"Kick me."',
    points: 10,
    isScary: true
  }),
  new Keeper({
    title: "Someone Could Lose an Eye",
    description: "If a player points a finger, they lose",
    flavor: "This game has no relation to Win, Lose, or Banana.",
    points: -10
  }),
  new Keeper({
    title: "You're On Fire!",
    description:
      "At the end of your turn, you lsoe. Then, pass this keeper to the player on your right.",
    flavor: "This game has no relation to Win, Lose, or Banana.",
    points: -5
  }),
  new Keeper({
    title: "Aaaah! Clutter!",
    description:
      "This card is worth -5 points for every keeper in front of you, including this one.",
    flavor: "Check out boardgamegeek.com for Secret Strategy Tech!"
  }),
  new Keeper({
    title: "Dragon",
    description:
      "If this card is in fron of you at the end of your turn, you're eaten by a dragon! You lose.",
    flavor: "He just goes around burninating people and doesn't even care!",
    points: -10
  }),
  new Keeper({
    title: "Dunce Cap",
    description: "",
    flavor: "Go sit in the corner.",
    points: -15
  }),
  new Keeper({
    title: "The Pirates Who Don't Do Anything",
    description: "This card does nothing",
    flavor: "They just stay at home and lie around"
  }),
  new Keeper({
    title: "Kick in the Teetch",
    description: "When this card is played, discard a card from your hand.",
    flavor:
      "Players with no cards in their hand won't lose until it's their turn to play.",
    points: -10
  }),
  new Keeper({
    title: "Points!",
    description: "Thirteen!",
    flavor:
      "In playtesting, the fourteen point version was deemed horribly broken.",
    points: 13
  }),
  new Keeper({
    title: "Poor Self-Esteem",
    description: "YOu may not play this on other players",
    flavor: "I can't even win this dumb game...",
    points: -10
  }),
  new Keeper({
    title: "Super Brutal Point Doubling",
    description: "Your points are doubled",
    flavor: "if you get -50 or less points, you lose twice!",
    points: -5
  }),
  new Keeper({
    title: "Vengeful Nature",
    description: "If you lose, the player whose turn it is also loses",
    flavor:
      "Michael NErman has created many fine games, like Rabbits, Robot League and Sleepwalkers."
  }),
  new Keeper({
    title: "Working Overtime",
    description:
      "You don't draw a card at the end of your turn as long as you have this keeper in front of you",
    flavor: '"Scary" cards have a high likelihood of ending the game',
    points: -10
  }),
  new Keeper({
    title: "Sport Utility Point Doubling Card",
    description: "Everyone's points are doubled",
    flavor: "Mark Rosewater's right: doubling is fun.",
    points: 2.5
  }),
  new Keeper({
    title: "Super Extreme Point Doubling",
    description: "Your points are doubled.",
    flavor: "If you get 50 or more points, you win twice!",
    points: 2
  }),
  new Keeper({
    title: "Volcano Eruption",
    description:
      "At the end of each player’s turn, if that player has the least number of keepers or is tied for the least number of keepers, that player is buried in lava and loses.",
    flavor: "Yay! I'm last to be buried in lava!"
  }),
  new Keeper({
    title: "Waiting for Your Tax Return",
    description:
      "If you have this for three full turns, you win. (Your turns; not other people's, cheater.)",
    flavor: "Oddly, game design is not a lucrative career choice.",
    points: 10
  }),
  new Card({
    title: "Grab Bag",
    description:
      "Choose a player and reveal the top five cards of the deck. Play all revealed keepers on the chosen player.",
    flavor: "Just like at a birthday party, except scarier"
  }),
  new Keeper({
    title: "Tax Man",
    description:
      "If a player plays a keeper worth positive points, they must play it on you.",
    flavor: "I'm just a taxman, not <em>the</em> tax man."
  })
];
