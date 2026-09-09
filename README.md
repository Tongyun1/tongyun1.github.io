# Mingming Zhang — Academic Homepage

Source for [tongyun1.github.io](https://tongyun1.github.io/), the bilingual academic homepage of Mingming Zhang (张明鸣).

## Content

- Research profile and recent news
- Accepted and under-review publications
- Open-source and applied projects
- Curriculum vitae
- English/Chinese and light/dark appearance controls

Publication and project content is maintained in `_data/publications.yml` and `_data/projects.yml`. Titles and technical details for under-review work are intentionally withheld during anonymous review.

## Local development

The production site is built with the GitHub Pages Jekyll environment.

```bash
bundle install
bundle exec jekyll serve
```

JavaScript is intentionally dependency-light. Rebuild the minified bundle after editing `assets/js/_main.js`:

```bash
npm install
npm run build:js
```

## Deployment

GitHub Pages publishes the `master` branch. The validation workflow performs a strict Jekyll build on pull requests and updates to `master`.
