# oRPC Users Demo

A demonstration project showcasing oRPC with end-to-end type safety for reading and updating user data.

## Features

- **Type-safe API**: Full TypeScript type safety from server to client
- **Modern React**: Uses React 19 features including `use`, transitions, and Suspense
- **In-memory Database**: Simulates a database with an in-memory array
- **User Management**: List all users and add new users

## Tech Stack

- **Vite**: Latest stable version for build tooling
- **Node.js**: v22
- **React**: v19
- **oRPC**: v1.10.4
- **Zod**: v4 for schema validation
- **TypeScript**: Latest stable with strict mode
- **Vitest**: For unit testing
- **ESLint & Prettier**: Code quality tools

## Getting Started

1. Install dependencies:

    ```bash
    npm install
    ```

2. Run the development server:

    ```bash
    npm run dev
    ```

3. Open your browser to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run test` - Run unit tests
- `npm run test:ui` - Run tests with UI

## Project Structure

```
src/
  ├── server/          # Server-side code
  │   ├── types.ts     # Zod schemas and TypeScript types
  │   ├── db.ts        # In-memory database simulation
  │   ├── router.ts    # oRPC router definition
  │   └── index.ts     # Server setup
  ├── client/          # Client-side code
  │   └── api.ts       # oRPC client with type safety
  ├── components/      # React components
  │   ├── UserList.tsx # User list component
  │   └── AddUserForm.tsx # Add user form
  ├── App.tsx          # Main app component
  └── main.tsx         # Application entry point
```

## Type Safety

The project demonstrates end-to-end type safety:

- Server types are defined using Zod schemas
- The `AppRouter` type is exported from the server
- The client imports and uses `AppRouter` for full type inference
- No `any` types are used anywhere in the codebase
