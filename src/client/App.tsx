import { useState } from 'react';
import { UserList } from './components/UserList.js';
import { AddUserForm } from './components/AddUserForm.js';

export function App() {
    const [refreshKey, setRefreshKey] = useState(0);

    function handleUserAdded() {
        setRefreshKey((prev) => prev + 1);
    }

    return (
        <div className="app">
            <header className="app-header">
                <h1>User Management</h1>
            </header>
            <main className="app-main">
                <UserList refreshKey={refreshKey} />
                <AddUserForm onUserAdded={handleUserAdded} />
            </main>
        </div>
    );
}
