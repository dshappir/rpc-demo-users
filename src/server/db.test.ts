import { describe, it, expect, beforeEach } from 'vitest';
import { getAllUsers, addUser, reset } from './db.js';

describe('db', () => {
    beforeEach(() => {
        reset();
    });

    describe('getAllUsers', () => {
        it('should return all users', () => {
            const users = getAllUsers();
            expect(users).toBeInstanceOf(Array);
            expect(users.length).toBeGreaterThan(0);
            expect(users[0]).toHaveProperty('id');
            expect(users[0]).toHaveProperty('name');
            expect(users[0]).toHaveProperty('email');
        });
    });

    describe('addUser', () => {
        it('should add a new user with unique id', () => {
            const initialCount = getAllUsers().length;
            const newUser = addUser({ name: 'Test User', email: 'test@example.com' });
            expect(newUser).toHaveProperty('id');
            expect(newUser.name).toBe('Test User');
            expect(newUser.email).toBe('test@example.com');
            expect(getAllUsers().length).toBe(initialCount + 1);
        });
    });
});
