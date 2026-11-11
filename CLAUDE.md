# techmatt.github.io

Matt Fisher's personal site: a Jekyll (GitHub Pages, Cayman theme) site. The front page,
`index.html`, is the publication list, and it is **generated**. Never edit the paper rows in
`index.html` by hand; change the data in `info/` and regenerate.

Local preview: `bundle exec jekyll serve`, then http://127.0.0.1:4000 (see `notes.txt`).

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

If `WebPageGenerator.cs` changes, the exe must be rebuilt (Visual Studio, `WebGenerator.sln`)
before `regenerate.ps1` sees the change.

## Conventions

- Commit messages in this repo are usually just `.`; only commit when asked.
- Line endings: no `.gitattributes`, `core.autocrlf=true`. Files are LF in the index and CRLF
  in the working tree; git warnings about LF/CRLF on `git diff` are expected noise.
- Unrelated work (e.g. `phonics-recorder.html`, `recipes.md`) is often uncommitted in the
  tree; leave it alone and stage only paper-related files.
