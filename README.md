# KITESNKULA

**Stesso vento. Teste diverse.**

An independent kitesurf community and a multilingual Jekyll website, with a collage-inspired editorial design. The site is hosted on **GitHub Pages**, not GitLab Pages.

## Website design

- A photographic hero with a real HTML headline and CTA.
- A violet community manifesto with the independent opossum/kite bar illustration.
- Destination cards, a section for Filippo and Simone, gallery and five community rules.
- Editable HTML text: no writing is embedded in the design images.
- Four languages: Italian (root, default), English (`/en/`), German (`/de/`), French (`/fr/`).
- A simple email CTA rather than a newsletter form without a backend.

Main editing locations:
- `_layouts/home.html`: page sections.
- `assets/css/kula.css`: responsive styling.
- `_data/trips.yml`: destination IDs and photographs.
- `_i18n/{it,en,de,fr}.yml`: translated copy.
- `assets/img/`: separately editable artwork and photographs.
- `_layouts/camp.html`: trip landing page.

The Oman card is explicitly an exploratory concept, **not** a confirmed bookable camp. Dates, capacity and prices should be added only after confirmation.

## Local development

Requires Ruby 3.3 and Bundler.

```bash
bundle install
bundle exec jekyll serve
```

Local URLs: `http://localhost:4000/` (Italian), `/en/`, `/de/`, `/fr/`.

## Automatic publishing: GitHub Pages

The workflow `.github/workflows/pages.yml` automatically builds and deploys on **each push to `master`**, and also supports manual execution through GitHub Actions.

It:

1. Installs Ruby/Jekyll and the required `jekyll-multiple-languages-plugin`.
2. Calls `actions/configure-pages@v5` to obtain the **real GitHub Pages domain and base path**, supporting repository-hosted and custom-domain sites.
3. Compiles Jekyll once, validates the IT/EN/DE/FR homepages, trips, CSS, JS and mascot.
4. Uploads the build with `actions/upload-pages-artifact@v4`.
5. Deploys with `actions/deploy-pages@v4` to the `github-pages` environment.

No GitLab repository, mirror, external token, or new secrets are needed.

**One-time GitHub setting:** Under **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source. The previous `pages build and deployment` workflow was managed automatically by GitHub for branch-based publishing; the custom Jekyll plugin requires our own build, so the source must be GitHub Actions. If this option is already selected, no change is needed.

Action run: [GitHub Actions workflows](https://github.com/fgaudenzi/kitesnkula/actions).

GitHub Pages URL is displayed in the successful deployment job; it will usually be `https://fgaudenzi.github.io/kitesnkula/` when no custom domain is configured.

## Before public launch

- Confirm the brand photographs, images permissions and final opossum mark.
- Check descriptions for unconfirmed trips, team bios and privacy wording.
- Verify all language links and the site on a mobile browser.

## Preserved older version

The earlier source remains available in the backup branch `backup/pre-redesign-2026-10-29` at commit `38895ff49b421de3a1c44d0e70ddd207fc5be784`.

See the existing project license.
