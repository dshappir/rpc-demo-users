import { useState, useTransition } from 'react';
import { orpc } from '../api.js';

export function AddUserForm({ onUserAdded }: { onUserAdded?: () => void }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isPending, startTransition] = useTransition();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!name || !email) {
            return;
        }

        startTransition(async () => {
            try {
                await orpc.users.add({ name, email });
                setName('');
                setEmail('');
                onUserAdded?.();
            } catch (error) {
                console.error('Failed to add user:', error);
            }
        });
    }

    return (
        <div className="add-user-container">
            <h2>Add User</h2>
            <form onSubmit={handleSubmit} className="add-user-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={isPending}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isPending}
                        required
                    />
                </div>
                <button type="submit" disabled={isPending} className="submit-button">
                    {isPending ? 'Adding...' : 'Add User'}
                </button>
            </form>
        </div>
    );
}
