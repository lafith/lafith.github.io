# Repository Guidelines

## Project Structure & Module Organization
This repo is a static site built from Org-mode sources. Key paths:
- `content/` holds all source `.org` files (pages, posts, and sitemap inputs).
- `content/posts/` contains blog posts; `content/posts/drafts/` is excluded from publishing.
- `assets/` contains shared HTML fragments and site assets used during export.
- `public/` is the generated output directory.
- `build-site.el` contains the Emacs Lisp publish pipeline.

## Build, Test, and Development Commands
- `./build.sh` runs the site export via Emacs (`emacs -Q --script build-site.el`) and writes HTML to `public/`.
- In Emacs, `M-x httpd-serve-directory` previews the site at `http://localhost:8080` (requires `simple-httpd`).
- `BUILD.md` has a minimal checklist and prerequisites.

## Coding Style & Naming Conventions
- Org content: use clear top-level headings and keep metadata (`#+TITLE`, `#+OPTIONS`, etc.) near the top.
- Previews for sitemap rendering should be wrapped in:
  ```
  #+BEGIN_PREVIEW
  ...
  #+END_PREVIEW
  ```
- New page/post filenames should be lowercase and use hyphens (e.g., `content/posts/my-new-post.org`).
- Emacs Lisp in `build-site.el` follows standard Lisp conventions (2-space indent).

## Testing Guidelines
There is no automated test suite. Validate changes by:
- Running `./build.sh` and checking `public/` output.
- Visually inspecting the site in a local preview server.

## Commit & Pull Request Guidelines
- Recent commit messages are short and direct (e.g., “update css and index”). Keep messages concise and action-oriented.
- PRs should include: a brief summary, any relevant issue links, and screenshots for visual/layout changes.

## Configuration Notes
- Emacs dependencies are installed into `./.packages` by `build-site.el`.
- The publish pipeline uses `ox-publish`, `htmlize`, and `esxml`; ensure Emacs can fetch packages.
