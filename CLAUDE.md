# techmatt.github.io

Matt Fisher's personal site: a Jekyll (GitHub Pages, Cayman theme) site. The front page,
`index.html`, is the publication list, and it is **generated**. Never edit the paper rows in
`index.html` by hand; change the data in `info/` and regenerate.

Local preview: `bundle exec jekyll serve`, then http://127.0.0.1:4000 (see `notes.txt`).
Ruby and Bundler were not installed on this machine as of 2026-11, so a Jekyll build can't be
run locally; see "Styling" below for how to preview CSS changes without it.
GitHub Pages uses the legacy branch build (`master`, `/`) with GitHub's own gem versions, so
`Gemfile.lock` is gitignored on purpose: a committed lock went stale and drew dozens of
Dependabot alerts without affecting the live site. Don't commit it again.

## Layout

- `info/papers/<id>.txt`: one file per paper, `key=value` lines.
- `info/authors/<key>.txt`: `name=` and `website=` (`website=unknown` means no link). Some
  authors use short keys (`matt`, `difan`, `cherry`, `peiying`, `nissim`, `sid`, `vova`,
  `yifan`, `vikas`, ...); newer ones use the full name as the key (`Jing Liao.txt`).
- `info/paperOrder.txt`: paper ids in display order, newest first. Only listed papers appear.
- `info/bibs/<id>.txt`: optional BibTeX; adds a "bib" link if present.
- `pdfs/<id>.pdf`: the paper PDF ("pdf" link). `pdfs/<id>Supplemental.pdf` if `supp=` is set.
- `thumbnails/<id>.png`: the row image.
- `info/publicationsHTMLHeader.txt` / `Footer.txt`: wrap the generated rows in `index.html`.
- `generator/`: the C# WinForms generator (`WebPageGenerator.cs`), compiled to
  `generator/bin/Debug/WebGenerator.exe`. It writes `index.html` and `CV.html` (gitignored).

## Adding a new paper

1. Pick an id (camelCase by convention, e.g. `duetSVG`; the user's own choice wins, e.g.
   `VectorArk`). Add it to the top of `info/paperOrder.txt` (the user often does this step).
2. Get the metadata from arXiv. Fetch the abs page with `curl` and read the
   `citation_title` / `citation_author` meta tags and the `Comments:` cell (venue, project page).
   Prefer this over a summarizing web fetch, which can invent fields.
3. Write `info/papers/<id>.txt`:
   ```
   title=<exact title>
   authors=<comma-separated author keys, no spaces after commas, in paper order>
   conference=<e.g. CVPR 2026; "ArXiv 2026" if not yet accepted>
   arxiv=https://arxiv.org/abs/<number>
   project=<project page; if there is none, repeat the arXiv URL>
   ```
   Optional keys: `code=`, `video=`, `supp=` (any value). The title links to `project`, or to
   `pdfs/<id>.pdf` if there is no project.
4. Authors: before creating a file, grep `info/authors/` for each author (case-insensitive,
   first and last name), and reuse an existing key (`matt` is Matthew Fisher). Watch for
   near-duplicates such as `Henry Shafer`/`HenrySchafer`. For a new author, create
   `info/authors/<Full Name>.txt` with `name=<Full Name>` and `website=unknown`, unless a
   homepage is known. (The generator also auto-creates blank files for unknown keys.)
   To find websites, search the web and propose candidates for the user to confirm. Good
   targets: a personal or GitHub Pages site, Google Scholar, a university or Adobe Research
   page. Do not use LinkedIn: the user doesn't want it linked. If nothing good turns up,
   leave `website=unknown`.
5. PDF: `curl -sL https://arxiv.org/pdf/<number> -o pdfs/<id>.pdf`.
6. Thumbnail: crop the teaser figure (usually Figure 1 on page 1) to `thumbnails/<id>.png`,
   about 900-1000 px wide. PyMuPDF is not installed globally; install it into a scratch dir
   with `pip install --target <scratch>/pylib pymupdf` and render with
   `page.get_pixmap(dpi=150, clip=pymupdf.Rect(...))` (clip in PDF points). Look at the
   result before using it.
7. Regenerate: `powershell.exe -NoProfile -ExecutionPolicy Bypass -File generator\regenerate.ps1`
   (Windows PowerShell 5.1, not pwsh 7: the exe targets .NET Framework; from Git Bash, write
   the path as `generator/regenerate.ps1`, since bash eats the backslash). Then check
   `git diff index.html`: it should add exactly one row for the new paper.
8. Updating a paper later (e.g. arXiv to a venue): edit `conference=` and regenerate.
   `CV.html` expands venue acronyms via a list in `WebPageGenerator.cs`.

`generator/bin` is gitignored, so the exe exists only where it has been built. On a fresh
clone, or if `WebPageGenerator.cs` changes, build it first (Visual Studio,
`generator/WebGenerator.sln`, Debug) before running `regenerate.ps1`.

## Styling

- All site CSS is `_sass/jekyll-theme-cayman.scss`, which overrides the Cayman theme's main
  stylesheet (normalize, rouge and `variables` still come from the theme gem). Pages compiles
  it to `/assets/css/style.css`; there is no local `assets/css`.
- Breakpoints come from the theme's mixins: `small` is up to 42em (672px), `medium` 42-64em,
  `large` 64em and up. The user likes the `large` (full-screen landscape monitor) layout as it
  is; keep changes for narrow screens inside `small` / `medium`.
- The header nav buttons (`.btn`) and the photo + bio table (`table.bio`, in
  `_layouts/default.html`, shown on pages with `showbio: true`) have phone-specific rules.
  Publication rows (`.rTableRow`, `.rTableCellA/B`) become stacked blocks on `small`.
- Previewing without Jekyll: download the live page and `style.css`, add
  `<base href="https://techmatt.github.io/">`, and inject a `<style>` that mirrors the SCSS
  change (including undoing any removed rules). Screenshot with headless Chrome
  (`C:\Program Files\Google\Chrome\Application\chrome.exe --headless=new --screenshot`).
  **Headless Chrome won't make its window narrower than about 500px**: a `--window-size=375,...`
  screenshot is a cropped ~500px render and looks like horizontal overflow when there is none.
  For phone widths, load the page in an `<iframe width="375">` inside a wrapper page.
- After pushing, check the build with `gh api repos/techmatt/techmatt.github.io/pages/builds/latest`
  and confirm the live `style.css` contains the new rules.

## Git, pushing, and GitHub

- `origin` is SSH (`git@github.com:...`). The user's SSH key is not available to Claude's
  shell, so `git push` fails with "Permission denied (publickey)". The `gh` CLI is logged in,
  so push once over HTTPS without changing any config:
  ```
  U=https://github.com/techmatt/techmatt.github.io.git
  git -c credential.helper= -c 'credential.helper=!gh auth git-credential' push $U master
  git -c credential.helper= -c 'credential.helper=!gh auth git-credential' fetch $U master:refs/remotes/origin/master
  ```
  The fetch keeps the local `origin/master` up to date, so `git status` doesn't report the
  branch as ahead.
- Dependabot: the 62 alerts from the old `Gemfile.lock` were dismissed as `not_used` on
  2026-11-11. Dependabot did not close them by itself after the file was removed. If they
  return, it means a lock file got committed again.

## Conventions

- Commit messages in this repo are usually just `.`; only commit when asked. Descriptive
  messages are fine for commits Claude makes.
- Line endings: no `.gitattributes`, `core.autocrlf=true`. Files are LF in the index and CRLF
  in the working tree; git warnings about LF/CRLF on `git diff` are expected noise.
- Unrelated work (e.g. `phonics-recorder.html`, `recipes.md`) is often uncommitted in the
  tree; leave it alone and stage only the files for the task at hand.
- Scratch work (downloads, render scripts, screenshots) belongs in the session scratchpad,
  not in the repo.
