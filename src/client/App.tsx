import { UserList } from './components/UserList.js';
import { AddUserForm } from './components/AddUserForm.js';

export function App() {
    return (
        <div className="app">
            <header className="app-header">
                <h1>User Management</h1>
            </header>
            <main className="app-main">
                <UserList />
                <AddUserForm />
            </main>
        </div>
    );
}
