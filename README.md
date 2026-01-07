# Relationship Test - AdonisJS 6 Application

This is a test project to explore database relationships in AdonisJS 6.

## Setup and Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment:**
   - Copy `.env.example` to `.env` (if available)
   - Configure your database settings in the `.env` file

3. **Run database migrations:**
   ```bash
   node ace migration:run
   ```

4. **Seed the database:**
   ```bash
   node ace db:seed
   ```
   
   This will populate the database with:
   - 3 roles: admin, user, and inactive
   - 4 clients: 3 with user accounts and 1 without
   - 3 users with different roles assigned

## Running the Application

### Development Mode (with Hot Module Replacement):
```bash
npm run dev
```

### Production Mode:
```bash
npm run build
npm start
```

## Current Issue

There is a problem with the `index` method in the [ClientsController](app/controllers/clients_controller.ts#L8-L14). The method attempts to query clients with nested relationship filters using `whereHas` for both the `user` and `role` relationships, but this may not be working as expected with the current model setup and relationship definitions.
