import type { User, UserData } from './types.js';

const initialUsers: User[] = [
    {
        id: '1',
        name: 'Alice Johnson',
        email: 'alice@example.com',
    },
    {
        id: '2',
        name: 'Bob Smith',
        email: 'bob@example.com',
    },
    {
        id: '3',
        name: 'Charlie Brown',
        email: 'charlie@example.com',
    },
] as const;

let users: User[];
let nextId: number;
reset();

export function getAllUsers(): User[] {
    return [...users];
}

export function addUser(data: UserData): User {
    const newUser: User = {
        id: String(nextId++),
        ...data,
    };
    users.push(newUser);
    return newUser;
}

export function reset(): void {
    users = [...initialUsers];
    nextId = users.length + 1;
}
