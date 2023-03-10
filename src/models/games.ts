export type Game = {
    id: number;
    name: string;
    description: string;
    creationDate: string;
}

export type GameConfiguration = {
    gameId: number;
    [key: string]: any;
}

export type GameHeader = 'id' | 'name' | 'description' | 'creationDate'