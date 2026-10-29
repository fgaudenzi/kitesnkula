# KITESNKULA · Same wind. Different weirdos.

A hand-made, editorial **Jekyll** website for a kitesurf community. The design is based on the approved collage mockup: immersive photo hero, purple opossum manifesto, destination cards, crew, photo stories, the five Kula rules, and a dark ending.

## Editable text, independent artwork

All wording is **HTML text** rendered with Liquid/Jekyll, not part of a baked website screenshot. Button labels, translations, names, trip descriptions and legal copy can be edited without touching any photos. Images are loaded as separate files.

- `_layouts/home.html`: the semantic HTML section structure.
- `assets/css/kula.css`: colors, editorial layout, typography, paper textures and mobile breakpoints.
- `assets/img/kula-mascot.svg`: newly drawn black-and-white opossum holding a kite bar (vector artwork).
- `assets/img/camp/oman-concept.svg`: original concept illustration for an unconfirmed trip, **not a factual photograph**.
- `assets/img/header.jpg`, `assets/img/team/*`, `assets/img/camp/*`: existing photos reused as editorial assets, replaceable later.
- `_data/trips.yml`: list of trips/ideas (ID + image).
- `_i18n/it.yml`, `en.yml`, `de.yml`, `fr.yml`: **fully translated, editable site copy** (JSON is valid YAML).
- `_layouts/camp.html`: localized /trips/ detail cards.

The imagery is independent; do not replace the hero with an image of the full mockup since that would make the words inaccessible, nonresponsive and non-translatable.

## Run locally

Requirements: Ruby 3.3+, Bundler, Jekyll 4.

```bash
bundle install
bundle exec jekyll serve
```

Open http://localhost:4000/ (IT), /en/ (EN), /de/ (DE) or /fr/ (FR).

Test a project-subdirectory Pages build:

```bash
JEKYLL_ENV=production bundle exec jekyll build --baseurl /kitesnkula
```

`jekyll-multiple-languages-plugin` puts the Italian homepage at the root and others under language subfolders. CSS/JS/images use `site.baseurl_root` so they are shared across translations.

## Publish automatically to **GitLab Pages** on GitHub master push

Two linked pipelines handle deployment:

1. **GitHub Actions**, `.github/workflows/gitlab-pages.yml`, automatically runs on every push to `master`. It builds Jekyll, validates all four languages, uploads a preview build artifact, then pushes the **same Git commit** to GitLab `master`.
2. **GitLab CI**, `.gitlab-ci.yml`, runs on GitLab `master`, determines GitLab Pages URL/subpath via `CI_PAGES_URL`, builds into `public/`, and publishes GitLab Pages.

### One-time configuration required on GitHub

In **GitHub → Settings → Secrets and variables → Actions**:

- Under **Variables**, add `GITLAB_REPOSITORY_URL` — the GitLab project's HTTPS clone URL (e.g. `https://gitlab.com/group/kitesnkula.git`).
- Under **Secrets**, add `GITLAB_PUSH_TOKEN` — a GitLab token with `write_repository` scope (the token must have permission to push to that project's `master` branch).

Make sure the GitLab project already exists with this repository's history, so a non-forced push to `master` succeeds. **No force pushes are performed** and the workflow will fail safely if GitLab has diverged. If an existing GitLab mirror is already syncing master, you may keep that mirror and omit the redundant GitHub-to-GitLab push job, but then the mirror is responsible for triggering GitLab CI.

The GitHub build step succeeds independently of the GitLab connection. The publish step intentionally returns a clear error until both settings have been configured.

### Verify after setup

- Push a small change to GitHub `master`.
- Check GitHub → **Actions** → **Build & publish KITESNKULA to GitLab Pages**.
- Check the GitLab project's **Build → Pipelines** for the Pages job.
- Open the actual GitLab Pages URL and check IT, EN, DE, FR and mobile navigation.

No real newsletter signup is displayed: the join CTA opens an email, avoiding a visually convincing but nonfunctional subscription form.

## Before public launch

- Verify that the hero and gallery pictures depict the intended brand and have rights for publishing.
- Review the team copy and final opossum logo.
- Confirm which future trips are genuinely planned. All dates, prices and capacity are intentionally marked **unconfirmed**.
- Update public contact details and review privacy notice based on actual hosting.

## Previous website

The pre-redesign Jekyll website is preserved at branch `backup/pre-redesign-2026-10-29`, commit `38895ff49b421de3a1c44d0e70ddd207fc5be784`.

This project retains the original repository license.
