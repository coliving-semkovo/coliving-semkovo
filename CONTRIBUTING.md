# Contributing

## Setting up your development environment

You have two recommended options for setting up your development environment:

1. **GitHub Codespaces** (cloud-based, no local setup required)
2. **Dev Containers** (local development with Docker)

Both options provide:
- Exactly the same development environment for all contributors
- Pre-configured tools and dependencies
- Automatic database setup
- Development environment documented as code

### Option 1: GitHub Codespaces (Cloud Development)

The easiest way to get started is using [GitHub Codespaces](https://github.com/features/codespaces).

Benefits of using Codespaces:
- No local setup required
- Ensures that everyone contributing has exactly the same development environment
- Allows anyone to get up and running quickly and easily
- Environment variables are securely shared across Codespaces sessions (configured on https://github.com/coliving-semkovo/coliving-semkovo/settings/secrets/codespaces)

#### Codespace requirements

Literally all you need is either:
- a web browser, or
- VS Code (recommended)

[Web browser Codespaces documentation](https://docs.github.com/en/codespaces/developing-in-a-codespace/developing-in-a-codespace?tool=webui#working-in-a-codespace-in-the-browser)

[VS Code Codespaces documentation](https://docs.github.com/en/codespaces/developing-in-a-codespace/developing-in-a-codespace?tool=vscode#working-in-a-codespace-in-vs-code)

All you need to do is click on the green `<> Code` dropdown button on the 
[GitHub repo page](https://github.com/tobyurff/coliving-semkovo),
and then choose: `Create codespace on main`.

### Option 2: Dev Containers (Local Development)

If you prefer local development, you can use Dev Containers with VS Code or Cursor IDE.

#### Prerequisites

- **Docker Desktop**: Install and ensure it's running
- **VS Code** or **Cursor IDE** with the Dev Containers extension

#### Opening in Dev Container

1. Clone the repository locally
2. Open the project folder in VS Code or Cursor IDE
3. When prompted "Folder contains a Dev Container configuration file", click **"Reopen in Container"**
   
   Alternatively:
   - Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux)
   - Type and select **"Dev Containers: Reopen in Container"**

4. Wait for the container to build and initialize (first time setup takes a few minutes)

#### What Happens During Dev Container Setup

When the dev container starts for the first time, it automatically:

1. **Builds the Docker environment** with Node.js 20 (Bookworm) and PostgreSQL
2. **Installs all npm dependencies** (`npm install`)
3. **Sets up the PostgreSQL database** and runs Prisma migrations (`npx prisma migrate reset -f`)
4. **Installs Playwright browsers and system dependencies** for E2E testing (`sudo npx playwright install-deps && npx playwright install`)
5. **Installs Claude Code CLI** for AI-assisted development (`npm install -g @anthropic-ai/claude-code`)
6. **Configures your IDE** with recommended extensions:
   - GitHub Actions support
   - Playwright test runner
   - Biome formatter/linter
   - PostgreSQL client
   - Prisma ORM support

#### Database Configuration

PostgreSQL is automatically configured and running within the container:
- **Host**: `localhost` (within container) or `db` (service name)
- **Port**: `5432`
- **Database**: `postgres`
- **Username**: `postgres`
- **Password**: `postgres`

### Starting the Development Server

Once your environment is running (either Codespaces or Dev Container):

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Using Claude Code for AI-Assisted Development

Claude Code is automatically installed in the dev container and can help with:
- Writing and debugging code
- Understanding the codebase
- Running tests and fixing issues
- Refactoring and optimization

To use Claude Code, simply run `claude` in the terminal. For more information, visit the [Claude Code documentation](https://docs.anthropic.com/en/docs/claude-code).


## Playwright (browser tests)

### Running the Playwright tests in VS Code

The Codespace comes with Playwright's VS Code extension already installed and configured.
To run the tests via the extension see the [Getting Started guide](https://playwright.dev/docs/getting-started-vscode)
and [the extension's documentation](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright).

### Running the Playwright tests from the command line

- `npx playwright test`

or via our wrapper scripts:

- `npm run e2e` - Full test run with detailed reporter
- `npm run e2e:quick` - Quick test run with minimal output

### Running the Playwright tests in UI mode (in a Codespace)

Playwright's [UI mode is very powerful indeed](https://playwright.dev/docs/test-ui-mode), so it is important
that we can use this mode when working in a GitHub Codespace.  Fortunately, it is very easy to do so:

- `npx playwright test --ui-host=0.0.0.0`

or via our wrapper script:

- `npm run e2e:ui:codespace`

As per [the documentation](https://playwright.dev/docs/test-ui-mode#docker--github-codespaces) the port gets
forwarded automatically, so it is then just a case of clicking on the link that is shown in the terminal 
window that begins with http://0.0.0.0 - easy!


## Linting and formatting

We use [Biome](https://biomejs.dev/) as a unified tool for both linting and formatting. It's a 
next-generation [opinionated](https://biomejs.dev/formatter/option-philosophy/) formatter and linter.
It is extremely fast and by using one tool for both formatting and linting we avoid the
[conflicts](https://dev.to/studio_m_song/how-to-make-eslint-work-with-prettier-avoiding-conflicts-and-problems-57pi)
that can often arise when using Prettier and ESLint.

### Automatic Formatting

The development environment is configured for aggressive automatic formatting:

- **Format on Save**: Automatically formats when you save files
- **Format on Paste**: Formats code immediately when pasting
- **Format on Type**: Provides real-time formatting feedback
- **Auto-fix on Save**: Automatically fixes lint issues that can be auto-corrected
- **Pre-commit Hook**: Automatically formats staged files before commits

### Manual Formatting Commands

- `npm run format` - Format and auto-fix all files (recommended for Claude-written code)
- `npm run format:write` - Format all files without linting
- `npm run format:check` - Check formatting without making changes

### For AI-Generated Code

When using Claude Code or other AI tools, run `npm run format` after significant code changes to ensure everything adheres to our standards.

We also have a Biome CI check (a 
[Biome GitHub Action](https://biomejs.dev/recipes/continuous-integration/#github-actions)) that runs on all pushes and pull requests, to ensure that we are always fully compliant with Biome.

As we are using Biome, we do not use Prettier.

We have kept ESLint in place, because:

- Vercel invokes `next lint` which 
  [has a hard dependency on ESLint](https://github.com/vercel/next.js/discussions/59347#discussion-5933112).
- Biome and ESLint are largely compatible

(If we find that incompatibilities between Biome and ESLint do start appearing regularly enough to be annoying, we can
remove the ESLint rules and make it no-op - 
[we can't remove ESLint completely as Vercel/Next.js expect it to be there, currently](https://github.com/vercel/next.js/discussions/59347#discussion-5933112).)
