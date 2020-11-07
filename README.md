# Background

<p align="center"><a target="_blank" href="https://dxu5.github.io/FinalFantasyVSMario/dist/"><img src="./dist/game_title.png" width=500px/></a></p>

FinalFantasyVSMario aims to provide a smooth, interactive, and challenging side-scroller game based on the popular title Super Mario by Nintendo. Players try to reach the end of the level, stomping and dodging enemies when they appear while trying not to lose all of their lives.

Highlights: One of the biggest highlights of the project is the modular approach to Object Oriented Programming that I employed. Monsters and Characters all inherit behaviors by adding behavior modules to their respective classes (ex: jumping, flying, collision). This allows for highly reusable classes and easily transferrable modules if I decide to create more enemies or characters.

FinalFantasyVSMario is built without any libraries, utilizing only vanilla JavaScript, HTML5 Canvas, and CSS3.

Checkout [Final Fantasy vs Mario Live](https://dxu5.github.io/FinalFantasyVSMario/dist/)!

# MVP

### 1. HTML Canvas setup, Game background rendering (1 Day)

- Displays HTML canvas on the page
- Create general structure of how game will run from start to finish
- Provides background interface for players as they run throughout the game

### 2. Character and Enemy Design (2 Days)

- Employs modular OOP design, allowing objects to inherit behaviors that help them perform actions
- Characters are rendered to the page and able to move around
- Characters are able to perform different actions (jump or collide) when it comes to different scenarios

### 3. Game Interface and bug squashing(2 Days)

- Users are able to hear and have sound playing throughout the game, as well as mute effects if need be
- Players are greeted with a welcome screen in which they can interact with
- Game run smoothly and interactions between objects are well designed

# Technologies and Technical Challenges

### Technologies:

- Javascript
- HTML5 Canvas
- CSS3

### Technical Challenges:

- Creating modular and inheritable Object Oriented Design
- Rendering and spawning sprites as main character moves to a specific section of the page
- Being able to apply state to a character and manipulating that state throughout the entirety of the application (Application-wide state)
