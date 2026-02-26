# Repository Guidelines

## Project Structure & Module Organization
- Source: `src/` (entry: `src/index.js`, app shell: `src/App.js`).
- UI: `src/components/` (+ `styles/` for `styled-components` theme/globals).
- Assets: `src/assets/` (images, PDFs); data: `src/data/`.
- Tests: colocated as `*.test.js` (e.g., `src/App.test.js`); Jest setup in `src/setupTests.js`.
- Public static files: `public/` (HTML, icons, `_redirects`). Build output: `build/`.
- Utility scripts: `scripts/` (e.g., `scripts/read-pdf.js`).

## Build, Test, and Development Commands
- `npm start`: Run local dev server (CRA, port 3000) with linting.
- `npm run build`: Production build to `build/` (minified, hashed assets).
- `npm test`: Jest in watch mode with React Testing Library.
- `npm test -- --coverage`: Show coverage summary.
- `node scripts/read-pdf.js <path>`: Extract text from a PDF (example: `node scripts/read-pdf.js src/MohamedHanif_CV_Job.pdf`).

## Coding Style & Naming Conventions
- Indentation: 2 spaces; semicolons required; single quotes in JS.
- Components: PascalCase filenames (e.g., `Header.js`, `ProjectCard.js`).
- Variables/functions/hooks: camelCase; constants UPPER_SNAKE_CASE.
- Assets: place under `src/assets/`; prefer lowercase-hyphen names. Keep existing filenames stable.
- Linting: CRA ESLint config (`react-app`, `react-app/jest`). Styles via `styled-components`; theme tokens in `components/styles/Theme.js`.

## Testing Guidelines
- Frameworks: Jest + React Testing Library.
- Location/naming: `Component.test.js` next to the component under test.
- Expectations: Focus on behavior and accessible queries (`getByRole`, `getByText`).
- Run locally: `npm test`; add `--coverage` before PRs touching critical UI.

## Commit & Pull Request Guidelines
- Commits: Imperative, concise subject (<50 chars), e.g., "Add projects grid layout". Use body for rationale. Reference issues (`#123`) when applicable.
- PRs: Clear description, screenshots/GIFs for UI changes, linked issue, checklist (builds locally, tests pass, no console errors).
- Branch names: `feature/…`, `fix/…`, or `chore/…` reflecting scope.

## Deployment & Configuration
- Hosting: AWS Amplify (`amplify.yml`) runs `npm ci` then `npm run build`; artifacts from `build/` are published.
- Headers: PDF and favicon headers set via `amplify.yml`. When adding PDFs, verify they open inline.
- Secrets: Do not commit secrets. If env vars are added, prefix with `REACT_APP_` and configure securely in Amplify.

