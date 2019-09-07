import { Game } from './game';

export class Character {
    id: number;
    name: string;
    generalInformation: string;
    game?: Game;
}
