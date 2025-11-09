import { use, Suspense } from 'react';
import type { User } from '../../server/types.js';
import { orpc } from '../api.js';

export function UserList({ refreshKey }: { refreshKey: number }) {
    const allUsersPromise = orpc.users.getAll();

    return (
        <div className="user-list-container">
            <h2>Users</h2>
            <Suspense key={refreshKey} fallback={<div className="loading">Loading users...</div>}>
                <UserListContent allUsersPromise={allUsersPromise} />
            </Suspense>
        </div>
    );
}

function UserListContent({ allUsersPromise }: { allUsersPromise: Promise<User[]> }) {
    const allUsers = use(allUsersPromise);

    return (
        <ul className="user-list">
            {allUsers.map((user) => (
                <UserListItem key={user.id} user={user} />
            ))}
        </ul>
    );
}

function UserListItem({ user }: { user: User }) {
    return (
        <li className="user-item">
            <div className="user-info">
                <span className="user-name">{user.name}</span>
                <span className="user-email">{user.email}</span>
            </div>
        </li>
    );
}
