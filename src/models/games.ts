export type Game = {
    id: number;
    name: string;
    description: string;
}

export type GameConfiguration = {
    gameId: number;
    [key: string]: any;
}