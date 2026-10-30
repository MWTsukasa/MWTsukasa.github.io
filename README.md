# Zhaofeng Si — academic homepage

A bilingual, responsive academic homepage for GitHub Pages. Built with plain HTML, CSS, and JavaScript, without a build step, analytics, or third-party font dependencies.

## Publish

The intended repository is `MWTsukasa/MWTsukasa.github.io` and the intended address is `https://mwtsukasa.github.io/`.

1. Upload all files in this directory to the repository root, preserving `assets/` and `.nojekyll`.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**, branch **main**, folder **/(root)**, then save.
4. GitHub will display the live address once deployment completes.

Official instructions: https://docs.github.com/en/pages/quickstart

## Edit

- `index.html`: biography, papers, experience, and service. English and Chinese text use `lang="en"` and `lang="zh-CN"` spans.
- `styles.css`: layout, colors, responsive rules, and print styling.
- `script.js`: language preference and publication filtering.
- `assets/favicon.svg`: the site's text-based icon.

Only publicly available papers are listed. Unpublished manuscript titles and details of ongoing methods are excluded. The CV button opens an email request; no CV PDF is published in this repository.

The 2027 ICASSP service entry and all other reviewing roles follow the CV supplied by the owner; conference years are not completion dates. Update these when your record changes.

## Preview locally

Run `python -m http.server 8767` in this directory, then open `http://127.0.0.1:8767/`.

No account, server-side code, or package installation is required to view or maintain the site.
