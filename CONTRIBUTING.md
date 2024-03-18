# Contributing

## Setting up your development environment

The recommended way to setup your development environment for this repo is to open it in a
[GitHub Codespace](https://github.com/features/codespaces).

Some of the benefits of using Codespaces for the IDE include:

- ensures that everyone contributing to the code has exactly the same local development configured
- ensures that the local development environment is documented via configuration as code
- allows anyone contributing to the code for the first time to get up and running quickly and easily

### Codespace requirements

Literally all you need is either:
- a web browser, or
- VS Code (recommended)

[Web browser Codespaces documentation](https://docs.github.com/en/codespaces/developing-in-a-codespace/developing-in-a-codespace?tool=webui#working-in-a-codespace-in-the-browser)

[VS Code Codespaces documentation](https://docs.github.com/en/codespaces/developing-in-a-codespace/developing-in-a-codespace?tool=vscode#working-in-a-codespace-in-vs-code)

All you need to do is click on the green `<> Code` dropdown button on the 
[GitHub repo page](https://github.com/tobyurff/coliving-semkovo),
and then choose: `Create codespace on main`.


### Running the app locally

The app is a [Next.js](https://nextjs.org/) website, built using
[TypeScript](https://nextjs.org/docs/pages/building-your-application/configuring/typescript).

The Codespace automatically starts the app's dev server on http://localhost:3000.

The dev server has [Fast Refresh](https://nextjs.org/docs/architecture/fast-refresh) enabled, meaning that when you
make changes to files, Next.js automatically applies the changes in the browser instantly, with no refresh needed.

[The dev server is started as a background process, using `nohup`](https://code.visualstudio.com/remote/advancedcontainers/start-processes#:~:text=In%20other%20cases%2C%20you%20may%20want%20to%20start%20up%20a%20process%20and%20leave%20it%20running.%20This%20can%20be%20accomplished%20by%20using%20nohup%20and%20putting%20the%20process%20into%20the%20background%20using%20%26.%20For%20example%3A). The dev server logs are output to the `nohup.out` file in the root directory.  As the dev servrer runs as a background process, it will stay running even if you close the terminal window.

To kill the dev server, you need to manually kill it by e.g. first searching for the process ID: `pgrep npm`,
and then killing the process: `kill -9 {REPLACE_THIS_WITH_PROCESS_ID}`.

If you do kill the dev server and then want to start it again, you can run it from your terminal window as per [the standard way](https://nextjs.org/docs/getting-started/installation#run-the-development-server) (`npm run dev`).



## Playwright (browser tests)

### Running the Playwright tests in VS Code

The Codespace comes with Playwright's VS Code extension already installed and configured.
To run the tests via the extension see the [Getting Started guide](https://playwright.dev/docs/getting-started-vscode)
and [the extension's documentation](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright).

### Running the Playwright tests from the command line

- `npx playwright test`

or via our wrapper script:

- `npm run e2e`

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

The Codespace comes with [Biome's VS Code extension](https://biomejs.dev/reference/vscode/)
already installed and configured.  It is setup to
[format on save](https://biomejs.dev/reference/vscode/#format-on-save).

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
