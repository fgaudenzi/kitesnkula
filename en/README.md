#  KITESNKULA

[![template button](https://img.shields.io/badge/Generate_theme_from_template-2ea44f)][generate]
[![Featured on Jekyll-Themes.com](https://img.shields.io/badge/featured%20on-JekyllThemes-red.svg)](https://jekyll-themes.com/agency-jekyll-theme/)

## Preview - click for live demo

[![screenshot](/screenshot.PNG)][demo-page]

## Warning

> :warning: **Notice for those using legacy Formspree contact forms:** :warning:
>
> [#11](https://github.com/raviriley/agency-jekyll-theme/pull/11) updated this theme to use the [new Formspree structure](https://help.formspree.io/hc/en-us/articles/360017735154-How-to-prevent-spam). 

## About

This website is based on the [Agency Bootstrap theme](https://startbootstrap.com/themes/agency/), converted to a gem-based Jekyll theme with GitHub Pages support.

I also added a lot of new features that go beyond the original theme's capabilities:

- GitHub Pages support
- [template repo][template] to get up and running in minutes
- contact form functionality powered by [Formspree.io](https://formspree.io)
- multiple language support (currently English, Spanish, & German)
- custom pages
- 404 page
- legal/Privacy Policy page
- Google Analytics support
- Markdown support
- custom images
- logo support (instead of just title text)
- automatically updating copyright years
- custom navigation bar, even without the header image(s)
- customizable footer
- custom accent color and dark/light colors
- horizontal scrolling support for client section
<!--
- custom colors with automatic gradient generation (coming soon)
- site title logo text font customization (coming soon)
- horizontal scrolling support for portfolio section (coming soon)
- about section (different from the timeline) -->

The Jekyll structure of this theme includes:

- `_portfolio` files - what generate the portfolio grid. YAML front matter handles all the details
- the `page` layout allows custom pages, as seen in the legal and 404 pages
- `sitetext.yml` enables complete customization of all site text
- `navigation.yml` enables fully customizable navigation
- `style.yml` enables fully customizable colors, background images, and other style-related things


## Installation



#### 1. Clone the repo

Replace the contents of your `_config.yml` file with the sample [\_config.yml](https://raw.githubusercontent.com/raviriley/agency-jekyll-theme/master/_config.yml).

Install the gem with:

```sh
$ bundle add jekyll-agency
```

Or manually.

1. Add this line to your Jekyll site's `Gemfile`:
   ```ruby
   gem "jekyll-agency"
   ```
2. Then execute:
   ```sh
   $ bundle install
   ```



## Contributing

This project is intended to be a welcoming space for collaboration. If you have an idea, suggestion, feature request, etc., feel free to open an issue or pull request.

For bug reports, follow the provided template.

#### Improvements - Up for Grabs

- [x] multiple language support thanks to [@rbenitezpagan](https://github.com/rbenitezpagan)
  - [x] Spanish thanks to [@rbenitezpagan](https://github.com/rbenitezpagan)
  - [x] German thanks to [@bkfirmen](https://github.com/bkfirmen)
  - [ ] Chinese
  - [ ] Arabic
  - [ ] etc
- [ ] customizable background coloring for each section

## Development

To set up your environment to develop this theme, clone this repo or your fork.

```sh
$ git clone https://github.com/fgaudenz/kitesnkula.git
$ cd kitesnkula
```

Then run:

```sh
$ bundle install
```

To test the theme, run this. (Using the `--trace` flag for verbose errors.)

```sh
$ bundle exec jekyll serve --trace
```

Then open your browser at:

- http://localhost:4000

Add pages, documents, data, etc. like normal to test the theme's contents. As you make modifications, your site will regenerate and you should see the changes in the browser after a refresh.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).


[demo-page]: https://raviriley.github.io/agency-jekyll-theme-starter/
[template]: https://github.com/raviriley/agency-jekyll-theme-starter
[generate]: https://github.com/raviriley/agency-jekyll-theme-starter/generate
