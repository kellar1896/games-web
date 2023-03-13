export type User = {
    id: number;
    name: string;
    email: string;
    age: number;
    location: String;
}

export type UserData = {
    userId: number;
    gamesPlayed: number;
    gamesWon: number;
    points: number
}

export type UserHeader = 'name' | 'email' | 'age' | 'location'