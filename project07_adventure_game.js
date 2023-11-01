"use strict";
class AdventureGame {
    constructor() {
        this.scenes = [];
        // Load game scenes from data (e.g., JSON file or hardcoded)
        this.loadScenes();
        this.currentSceneId = 'start';
    }
    loadScenes() {
        // Load game scenes and choices here (e.g., from a JSON file)
        this.scenes.push({
            id: 'start',
            text: 'You find yourself in a dark forest. What do you do?',
            choices: [
                { text: 'Go deeper into the forest', nextScene: 'forest' },
                { text: 'Leave the forest', nextScene: 'exit' },
            ],
        });
        // Add more scenes and choices...
    }
    getCurrentScene() {
        return this.scenes.find((scene) => scene.id === this.currentSceneId);
    }
    makeChoice(choiceIndex) {
        const currentScene = this.getCurrentScene();
        if (currentScene && choiceIndex >= 0 && choiceIndex < currentScene.choices.length) {
            const nextSceneId = currentScene.choices[choiceIndex].nextScene;
            this.currentSceneId = nextSceneId;
        }
    }
}
// Example usage:
const game = new AdventureGame();
// Display the current scene and choices
const currentScene = game.getCurrentScene();
if (currentScene) {
    console.log(currentScene.text);
    currentScene.choices.forEach((choice, index) => {
        console.log(`${index + 1}. ${choice.text}`);
    });
}
// Simulate player choice (e.g., choose the first choice)
game.makeChoice(0);
