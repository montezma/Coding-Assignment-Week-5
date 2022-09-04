/*
Instructions: In VS Code, or an IDE of your choice, write the code that accomplishes the objectives listed below. 
Ensure that the code compiles and runs as directed. 
Take screenshots of the code and of the running program (make sure to get screenshots of all required functionality) and paste them in this document where instructed below. 
Create a new repository on GitHub for this week’s assignments and push this document, with your JavaScript project code, to the repository. 
Add the URL for this week’s repository to this document where instructed and submit this document to your instructor when complete.

Coding Steps:
1.	Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements.
a.	Use at least one array.
b.	Use at least two classes.
c.	Your menu should have the options to create, view, and delete elements.
*/


/*
My submission lets you organize your video games by developer.
Add a developer then select the developer and add games to that developer and add the release date of the game. 
*/


class Games {
    constructor(game, releaseDate) {
        this.releaseDate = releaseDate;
        this.game = game;
    }
    displayGame() {
        return `Game: ${this.game} Release Date: ${this.releaseDate}`;
    }
}

class Developer {
    constructor(devName) {
        this.devName = devName;
        this.game = [];
    }

    addDeveloper(games) {
        if (game instanceof Games) {
            this.game.push(games);
        } else { throw new Error(`Failed to add game to array`) }
    }
}

class Menu {
    constructor() {
        this.developer = [];
        this.developerSelected = null;
    }

    start() {
        let select = this.mainMenu();
        while (select != '0') {
            switch (select) {
                case '1':
                    this.addDeveloper()
                    break;
                case '2':
                    this.deleteDeveloper()
                    break;
                case '3':
                    this.viewDevelopers()
                    break;
                case '4':
                    this.viewAllDevelopers()
                    break;
                default:
                    select = '0';
            }
            select = this.mainMenu();
        }
        alert(`Goodbye!`);
    }
    mainMenu() {
        return prompt(`
         0) Close
         1) Add a game developer
         2) Delete a game developer
         3) View developers list of games
         4) View all game developers
         `)
    }
    gameOptions(showinfo) {
        return prompt(` 
         0) Back
         1) Add Game
         2) Delete Game
         Currernt Developer Selected : ${showinfo}
         `)
    }
    viewAllDevelopers() {
        let gameDev = '';
        for (let i = 0; i < this.developer.length; i++) {
            gameDev += i + ' - ' + this.developer[i].devName + '\n'
        }
        alert(gameDev);
    }
    addDeveloper() {
        let developer = prompt('New Developer Name');
        this.developer.push(new Developer(developer));
    }

    viewDevelopers() {
        let allDevsDisplay = ''
        for (let i = 0; i < this.developer.length; i++) {
            allDevsDisplay += i + ' - ' + this.developer[i].devName + '\n'
        }
        let index = prompt('Select a Developer to list' + '\n' +
            allDevsDisplay);
        if (index > -1 && index < this.developer.length) {
            this.developerSelected = this.developer[index];

            let dev = this.developerSelected.devName + '\n' + 'Current Games:' + '\n';
            for (let i = 0; i < this.developerSelected.game.length; i++) {
                dev += i + ' - ' + this.developerSelected.game[i].game + ' ' +
                    this.developerSelected.game[i].releaseDate
            }
            let Selected = this.gameOptions(dev);
            switch (Selected) {
                case '1':
                    this.createGame();
                    break;
                case '2':
                    this.deleteGame();
            }

        }
    }
    deleteDeveloper() {
        let allDevsDisplay = ''
        for (let i = 0; i < this.developer.length; i++) {
            allDevsDisplay += i + ' - ' + this.developer[i].devName + '\n'
        }
        let index = prompt(`Select which one to delete.` +
            '\n' + allDevsDisplay);
        if (index > -1 && index < this.developer.length) {
            this.developer.splice(index, 1);
        }
    }


    createGame() {
        let newGame = prompt(`Enter game name`);
        let newReleaseDate = prompt(`Enter the release date of the game`);
        this.developerSelected.game.push(new Games(newGame, newReleaseDate));
    }
    deleteGame() {
        let allGamesDisplay = ''
        for (let i = 0; i < this.developerSelected.game.length; i++) {
            allGamesDisplay += i + ' - ' +
                `${this.developerSelected.game[i].game} ${this.developerSelected.game[i].releaseDate}` + '\n'
        }
        let index = prompt(`Select the developer of the game to delete.` + '\n' + allGamesDisplay);
        if (index > -1 && index < this.developerSelected.game.length) {
            this.developerSelected.game.splice(index, 1);
        }
    }


}

let menu = new Menu();
menu.start(); 