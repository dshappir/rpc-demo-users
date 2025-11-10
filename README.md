# oRPC Users Demo

A demonstration project showcasing oRPC with end-to-end type safety for reading and updating user data.

## Features

- **Type-safe API**: Full TypeScript type safety from server to client
- **Modern React**: Uses React 19 features including `use`, transitions, and Suspense
- **In-memory Database**: Simulates a database with an in-memory array
- **User Management**: List all users and add new users

## Tech Stack

- **Vite**: ^6.0.0 for build tooling
- **Node.js**: v22 (managed via nvm)
- **React**: ^19.0.0
- **oRPC**: ^1.10.4
- **Zod**: ^4.0.0 for schema validation
- **TypeScript**: ^5.6.0 with strict mode
- **Vitest**: ^2.0.0 for unit testing
- **ESLint**: ^9.0.0 & **Prettier**: ^3.3.0 for code quality

## Getting Started

1. Ensure you're using Node.js v22 (via nvm):

    ```bash
    nvm use
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the development servers (client and server):

    ```bash
    npm run dev
    ```

    This starts both:
    - Client dev server on `http://localhost:5173`
    - Server API on `http://localhost:3000`

4. Open your browser to `http://localhost:5173`

## Available Scripts

### Development

- `npm run dev` - Start both client and server development servers
- `npm run dev:client` - Start only the client development server (Vite)
- `npm run dev:server` - Start only the server development server (with watch)

### Building

- `npm run build` - Build client for production (TypeScript + Vite)
- `npm run build:server` - Build server for production (TypeScript)

### Running Production Builds

- `npm run start:server` - Run the built server
- `npm run preview` - Preview production client build
- `npm run preview:all` - Preview both client and server production builds

### Code Quality

- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

### Testing

- `npm run test` - Run unit tests
- `npm run test:ui` - Run tests with UI

## Project Structure

```
src/
  ├── server/          # Server-side code
  │   ├── types.ts     # Zod schemas and TypeScript types
  │   ├── db.ts        # In-memory database simulation
  │   ├── db.test.ts   # Database unit tests
  │   ├── router.ts    # oRPC router definition
  │   └── index.ts     # Server setup
  └── client/          # Client-side code
      ├── api.ts       # oRPC client with type safety
      ├── App.tsx      # Main app component
      ├── main.tsx     # Application entry point
      ├── index.css    # Global styles
      └── components/  # React components
          ├── UserList.tsx    # User list component
          └── AddUserForm.tsx # Add user form
```

## Type Safety

The project demonstrates end-to-end type safety:

- Server types are defined using Zod schemas
- The `RouterType` type is exported from the server router
- The client imports and uses `RouterType` for full type inference
- No `any` types are used anywhere in the codebase

## License

MIT License - see [LICENSE](LICENSE) file for details.
