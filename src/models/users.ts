export type User = {
    id: string;
    name: string;
    email: string;
    age: number;
    location: string;
}

export type UserData = {
    userId: string;
    gamesPlayed: number;
    gamesWon: number;
    points: number
}

export type ErrorUserForm = {
    errorName: String
    errorEmail: String
    errorAge: String
    errorLocation: String
}

export type UserHeader = 'name' | 'email' | 'age' | 'location'