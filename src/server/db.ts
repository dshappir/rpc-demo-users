import type { UserType, UserDataType } from './types.js';

const initialUsers: UserType[] = [
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

let users: UserType[];
let nextId: number;
reset();

export function getAllUsers(): UserType[] {
    return [...users];
}

export function addUser(data: UserDataType): UserType {
    const newUser: UserType = {
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
