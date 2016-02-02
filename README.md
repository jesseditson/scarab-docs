# Scarab Docs

**Basics:**

This is a small website for scarab documentation, fittingly built as a scarab app.

It uses the `marked` library to automatically generate views based on docs written in markdown.

To edit the docs, edit the files in the `markdown` folder, and run `npm run generate-views` to generate the handlebars partials.

Any files added to the markdown/sections folder will automatically be rendered in alphabetical order. As such, you should prefix each file with a number so it will show up in the right section.

Navigation is automatically generated based on the name of these files.

Running:

- `scarab start`
- `scarab logs`

This will run the app at http://socialcode.dev (assuming you've run `scarab hosts`), and reload on changes.

To regenerate markdown files on save, run `npm run watch-markdown`
