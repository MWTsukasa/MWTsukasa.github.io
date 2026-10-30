# Zhaofeng Si — academic homepage

A bilingual, responsive academic website for GitHub Pages. Built with plain HTML, CSS, and JavaScript, without a build step, analytics, or third-party font dependencies.

The layout follows the owner's reference, https://mingzhenhuang.com/experiences/: a white background, compact profile sidebar, and separate pages for publications and experience. The implementation is original; it does not copy that site's source, images, or personal content and does not depend on Jekyll or AcademicPages.

## Publish

The intended repository is `MWTsukasa/MWTsukasa.github.io` and the intended address is `https://mwtsukasa.github.io/`.

1. Upload all files in this directory to the repository root, preserving `assets/` and `.nojekyll`.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**, branch **main**, folder **/(root)**, then save.
4. GitHub will display the live address once deployment completes.

Official instructions: https://docs.github.com/en/pages/quickstart

## Edit

- `index.html`: biography, research overview, and news.
- `publications/index.html`: conference/workshop papers, journal articles, and public manuscripts.
- `experiences/index.html`: education, experience, projects, and reviewing service.
- English and Chinese text use `lang="en"` and `lang="zh-CN"` spans in all three pages.
- `styles.css`: layout, colors, responsive rules, and print styling.
- `script.js`: language preference, retained when moving between pages.
- `assets/favicon.svg`: the site's text-based icon.

Only publicly available papers are listed. Unpublished manuscript titles and details of ongoing methods are excluded. The CV button opens an email request; no CV PDF is published in this repository.

The 2027 ICASSP service entry and all other reviewing roles follow the CV supplied by the owner; conference years are not completion dates. Update these when your record changes.

## Preview locally

Run `python -m http.server 8767` in this directory, then open `http://127.0.0.1:8767/`.

No account, server-side code, or package installation is required to view or maintain the site.
