# KITESNKULA

An independent kitesurf community: **stesso vento, teste diverse**.

This site is a Jekyll 4 project, reworked as an editorial community website, with Italian (default), English, German and French translations.

## Site content

- **Home:** community manifesto, destinations, crew, photographs, values and contact.
- **Trips:** detail cards generated from `_data/trips.yml` and translated copy.
- **Crew:** Filippo and Simone, using the existing images.
- **Privacy:** localized informational page. Review before launch.
- **Contact:** email links to `info@kitesnkula.com`; no nonfunctional signup forms.

All dates, prices and availability are deliberately unpublished until confirmed. Replace the existing photos with final approved images when available. The opossum is an original simplified SVG placeholder for the final brand logo.

## Edit content

- `_i18n/{it,en,de,fr}.yml`: complete translated copy in YAML-compatible JSON syntax.
- `_data/trips.yml`: trip IDs and images; for each new ID add translations in all four files under `kula.destinations`.
- `_layouts/home.html`, `_layouts/camp.html`: Jekyll/Liquid markup.
- `assets/css/kula.css`: complete responsive styling.
- `assets/img/`: photos and mascot.

The `jekyll-multiple-languages-plugin` builds root `/` for Italian, plus `/en/`, `/de/`, and `/fr/`. Language navigation uses `site.baseurl_root`; translated links use `relative_url`; shared assets are always referenced through `site.baseurl_root`.

## Development

Requires Ruby 3.3, Bundler and Jekyll dependencies.

```bash
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000/` and check all four languages.

To emulate deployment below a project subpath:

```bash
bundle exec jekyll build --destination _site --baseurl /kitesnkula
```

## GitLab Pages

The `.gitlab-ci.yml` pipeline builds the site into `public/` and checks all four homepages. It derives its project path from `CI_PAGES_URL`, so it supports both root-domain and project-path Pages URLs. The job runs on the **default branch of the GitLab repository**.

**Important:** this repository is on GitHub. GitLab Pages does not build directly from GitHub; the code must also be present in a GitLab project (for example via GitLab repository mirroring, or a remote push). Set up/verify that connection in GitLab before expecting an automatic deployment.

Before going live:
1. Update the email, photos, destination information and public-facing brand assets.
2. Review privacy text and hosting settings with the actual GitLab deployment.
3. Confirm GitLab mirror, Pages pipeline, domain and HTTPS.
4. Test navigation on desktop and mobile and all four languages.

## History

The pre-redesign state of GitHub `master` is preserved in branch `backup/pre-redesign-2026-10-29` (commit `38895ff49b421de3a1c44d0e70ddd207fc5be784`).

Licensed under the existing repository license.
