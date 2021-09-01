# Rock Paper Scissors
Rock Paper Scissors game built for the August 2021 mintbean.io Hiring Hackathon.

![Alt landing page](/public/readmeImages/landingpage.png)

## For users
Users are able to input their name and select the number of rounds in a match. An image will be fetched from robohash.org using the name as a query.

![Alt Player Input Form](/public/readmeImages/playerform.png )
![Alt Game page after user input](/public/readmeImages/firstRound.png)

Your opponent is Computer-San who relies on RNGesus to chose their move. Each round can result in a win, a loss, or a tie.

![Alt Loss screen](/public/readmeImages/lost.png)

The Match winner is decided by whomever has the highest score at either the end of all rounds or if winning becomes mathematically impossible for either the player or Computer-San, tied games with no winner are possible. At the end of a game the user will be presented with the final scoreboard and prompted to play again. If they choose to play again their username will be automatically added to the form with a new button allowing them to edit it.
![Alt Tie screen](/public/readmeImages/finalTie.png)
![Alt User form with saved user](/public/readmeImages/formWithSaveUser.png)

This app is installable on mobile and can work offline.

## For Developers
Rock Paper Scissors is a Progressive Web Application built with NextJS (create-next-app), Redux Toolkit, next-pwa, and typescript. 

Redux usage is limited to game logic only and other pages rely on local state if any is used. 

The components folder contains the Header and Nav components along with the game folder. This folder contains all components used in the game itself and funnels through the game.component.tsx file before being passed up to the game.tsx page itself.

CSS files, aside from global.css, are scoped to each page and are imported with the 'module' syntax - comments are present in each file to assist in locating relevant styling for a given component.

robohash.org is used for character animations and unique images are fetched based on the http query used to fetch it. (e.g. https://robohash.org/unique_image). 

### To install and run
use "npm install" and "npm run dev"

### To report issues
https://github.com/Spiritusanti/HackathonProject/issues

# Contributors
1. Jacob McCracken - @Spiritusanti(https://github.com/Spiritusanti)/https://www.linkedin.com/in/jacob-mccracken/


# License - MIT
