# AI Assistant Guidelines

This document contains guidelines and important information for AI assistants (Claude Code, GitHub Copilot, Cursor AI, etc.) working with this codebase.

## Project Overview

This is a Next.js application for a coliving community in Semkovo, built with:
- **Framework**: Next.js 14 with TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Clerk
- **Styling**: Tailwind CSS
- **Testing**: Playwright for E2E, Jest for unit tests
- **Code Quality**: Biome for formatting and linting

## Development Standards

### Commit Messages

**CRITICAL**: This project uses [Conventional Commits](https://www.conventionalcommits.org/) standard. All commits MUST follow this format:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Examples:**
- `feat: add user profile page`
- `fix: resolve authentication redirect issue`
- `docs: update API documentation`
- `refactor: simplify database queries`
- `test: add e2e tests for booking flow`
- `chore: update dependencies`

**Common types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Code Formatting and Linting

- **Primary tool**: Biome (replaces Prettier + ESLint for most cases)
- **Auto-formatting**: Enabled on save, paste, and type
- **Pre-commit hooks**: Automatically format and lint staged files
- **Manual formatting**: Run `npm run format` after making significant changes
- **Format check**: Run `npm run format:check` to verify formatting

### File and Code Conventions

- **Prefer editing existing files** over creating new ones unless absolutely necessary
- **Follow existing patterns** in the codebase for consistency
- **Check imports and dependencies** - don't assume libraries are available
- **Use absolute paths** for file operations (not relative paths)
- **No unnecessary comments** unless explicitly requested
- **Security**: Never expose or log secrets, API keys, or sensitive data

## Testing Requirements

### End-to-End Testing (Playwright)

- **Run tests**: `npm run e2e` or `npm run e2e:quick`
- **UI mode**: `npm run e2e:ui` (or `npm run e2e:ui:codespace` in Codespaces)
- **Browser dependencies**: Already installed in dev container
- **Test files**: Located in `tests/` directory
- **Always run tests** after significant changes to verify functionality

### Unit Testing (Jest)

- **Run tests**: `npm test` or `npm run test:watch`
- **Test files**: Co-located with components or in `__tests__` directories

## Database and Schema

- **ORM**: Prisma
- **Database**: PostgreSQL
- **Schema file**: `prisma/schema.prisma`
- **Migrations**: Run `npx prisma migrate dev` for development changes
- **Generate client**: Run `npx prisma generate` after schema changes
- **Database URL**: Configured via environment variables

## Authentication

- **Provider**: Clerk
- **Configuration**: Check existing Clerk setup before making auth-related changes
- **User management**: Follow existing patterns in the codebase
- **Protected routes**: Use Clerk's middleware and components

## Build and Deployment

- **Development**: `npm run dev`
- **Build**: `npm run build` (includes Prisma generation and database push)
- **Type checking**: `npm run typecheck`
- **Linting**: `npm run lint` or `npm run lint:fix`
- **Production**: Deployed on Vercel with Node.js 22

## Local Development (Non-Container Setup)

If not using the dev container, you'll need:

1. **Node.js 22** (check `.nvmrc` file)
2. **PostgreSQL** running locally
3. **Environment variables** - copy `.env.example` to `.env.local`
4. **Install dependencies**: `npm install`
5. **Database setup**: `npx prisma migrate dev`
6. **Playwright setup**: `npx playwright install-deps && npx playwright install`

## Important File Locations

- **Environment config**: `.env.example`, `.env.local`
- **Database schema**: `prisma/schema.prisma`
- **Tailwind config**: `tailwind.config.ts`
- **TypeScript config**: `tsconfig.json`
- **Biome config**: `biome.json`
- **Playwright config**: `playwright.config.ts`
- **Next.js config**: `next.config.js`

## What to Avoid

- **Don't create documentation files** unless explicitly requested
- **Don't add emojis** to code unless explicitly requested
- **Don't assume dependencies** are installed - check `package.json` first
- **Don't commit secrets** or sensitive information
- **Don't use deprecated patterns** - check existing code for current approaches
- **Don't skip tests** - always verify changes work with existing test suite

## Git Workflow

- **Main branch**: `main`
- **Feature branches**: Use descriptive names
- **Pre-commit hooks**: Automatically format and lint code
- **Conventional commits**: Required for all commits
- **Pull requests**: Will trigger CI checks for formatting, linting, and tests

## Environment Variables

Check `.env.example` for required environment variables. Common ones include:
- Database connection strings
- Clerk authentication keys
- Next.js configuration
- Any third-party service keys

## AI-Specific Recommendations

1. **After writing significant code**: Run `npm run format` to ensure Biome compliance
2. **Before suggesting changes**: Check existing patterns in similar files
3. **When adding dependencies**: Verify they're not already available in `package.json`
4. **For database changes**: Always generate Prisma client and consider migration needs
5. **When creating components**: Follow existing component structure and naming conventions
6. **For styling**: Use existing Tailwind classes and follow the design system

## Getting Help

- **Biome documentation**: https://biomejs.dev/
- **Conventional Commits**: https://www.conventionalcommits.org/
- **Prisma documentation**: https://www.prisma.io/docs
- **Playwright documentation**: https://playwright.dev/
- **Next.js documentation**: https://nextjs.org/docs
- **Clerk documentation**: https://clerk.com/docs