export class Animal {
    name: string;
    sound: string;
    
    constructor(name: string, sound: string) {
        this.name = name;
        this.sound = sound;
    }

    speak(message: string) {
        return `${message.replace(/ /g, ` ${this.sound} `)} ${this.sound}`;
    }
}