import { useState, useEffect } from 'react';
import type { UserType } from '../../server/types.js';
import { orpc } from '../api.js';

export function UserList() {
    return (
        <div className="user-list-container">
            <h2>Users</h2>
            <UserListContent />
        </div>
    );
}

function UserListContent() {
    const [allUsers, setAllUsers] = useState<UserType[]>([]);

    useEffect(() => {
        let stop = false;

        async function updateUsers() {
            const stream = await orpc.users.stream();
            for await (const users of stream) {
                if (stop) {
                    break;
                }
                setAllUsers(users);
            }
        }

        updateUsers();

        return () => {
            stop = true;
        };
    }, []);

    return (
        <ul className="user-list">
            {allUsers.map((user) => (
                <UserListItem key={user.id} user={user} />
            ))}
        </ul>
    );
}

function UserListItem({ user }: { user: UserType }) {
    return (
        <li className="user-item">
            <div className="user-info">
                <span className="user-name">{user.name}</span>
                <span className="user-email">{user.email}</span>
            </div>
        </li>
    );
}
