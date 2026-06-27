# Marketing Foundations — course website

This is the website for the **Marketing Foundations** course — a one-week, self-paced
course made of eight pages (a welcome page, six modules, and a capstone).

It's built with [Astro](https://astro.build) and the
[Starlight](https://starlight.astro.build) documentation theme. You get a sidebar,
search, "previous / next" buttons, and a phone-friendly layout for free — and, most
importantly, **every lesson is just a plain text file you can edit yourself.**

You do **not** need to be a developer to update the course. The three things you'll
most likely want to do — run it on your computer, edit a lesson, and publish it —
are all explained below in plain English.

---

## 1. How to run the site on your computer

You need [Node.js](https://nodejs.org) installed (the "LTS" version is fine). You only
do this part once.

Then, open the Terminal app, and run these two commands inside this project folder:

```bash
npm install      # downloads everything the site needs (only needed the first time)
npm run dev      # starts the site
```

After `npm run dev` finishes, it will print a web address — usually
**http://localhost:4321**. Open that in your browser and you'll see the site.

Leave that Terminal window running while you work. **When you save a change to any
lesson file, the site updates in your browser automatically** — no need to restart
anything. To stop the site, click the Terminal window and press `Ctrl + C`.

---

## 2. How to edit a module (change the course text)

All the course content lives in this folder:

```
src/content/docs/
```

There is **one file per page**:

| Page on the site            | File to edit                          |
|-----------------------------|---------------------------------------|
| Welcome (landing page)      | `src/content/docs/index.mdx`          |
| 1. Meet the product         | `src/content/docs/module-1.md`        |
| 2. How AI works             | `src/content/docs/module-2.md`        |
| 3. Reading metrics          | `src/content/docs/module-3.md`        |
| 4. Go-to-market             | `src/content/docs/module-4.md`        |
| 5. Platforms (X & LinkedIn) | `src/content/docs/module-5.md`        |
| 6. Copywriting              | `src/content/docs/module-6.md`        |
| Capstone                    | `src/content/docs/capstone.md`        |

**To change Module 3, for example:** open `src/content/docs/module-3.md` in any text
editor, edit the words, and save. If `npm run dev` is running, the site updates
instantly in your browser.

A few simple rules so nothing breaks:

- At the very top of each file there's a small block between two lines of `---`.
  That's called the **frontmatter**. The `title:` line is the page's heading and its
  sidebar label — you can change the title text, but keep the `title:` word and the
  `---` lines.
- Everything **below** the second `---` is the lesson itself, written in **Markdown**
  (a simple way to format text). `**bold**`, `### a heading`, `- a bullet`, and tables
  all work. You can mostly just type normal text.
- If you want to reorder pages or rename a sidebar label, that's set in
  `astro.config.mjs` (look for the `sidebar` list). The order of that list controls
  both the sidebar **and** the previous/next buttons.

---

## 3. How to fill in the placeholders in Module 1

Module 1 has three spots that are intentionally left blank for now. On the site they
show up as orange **"TODO — placeholder to fill in"** boxes, so they're easy to find.
They are in `src/content/docs/module-1.md`:

1. **The positioning line** — replace this text:

   ```
   `[POSITIONING — to be filled in]` *Gravity's one-line description goes here. Leave this as a placeholder for now; it's being finalized.*
   ```

   with Gravity's real one-line description.

2. **The live demo link** — replace `[Live demo link — to be added]` with the real
   link, like this:

   ```
   [Watch the live demo](https://your-demo-link-here)
   ```

3. **The Figma file link** — replace `[Figma file link — to be added]` with the real
   link in the same way:

   ```
   [Open the Figma file](https://your-figma-link-here)
   ```

Save the file and the page updates. Once a placeholder is filled in, you can also
remove the `:::caution[...]` and `:::` lines around it if you no longer want the
orange box.

---

## 4. How to deploy to Cloudflare Pages (publish it online)

[Cloudflare Pages](https://pages.cloudflare.com) hosts the site for free. The usual
flow:

1. Put this project in a Git repository (e.g. push it to GitHub).
2. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to
   Git**, and pick your repository.
3. When asked for build settings, use:
   - **Framework preset:** Astro (or "None" — the values below are what matter)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Click **Save and Deploy**. Cloudflare builds the site and gives you a public URL.

After that, **every time you push a change to your repository, Cloudflare rebuilds and
republishes automatically.** You edit a lesson, push it, and the live site updates a
minute later.

---

## Useful commands (reference)

| Command           | What it does                                              |
|-------------------|----------------------------------------------------------|
| `npm install`     | Installs dependencies (run once, first time only)        |
| `npm run dev`     | Runs the site locally for editing (auto-updates on save) |
| `npm run build`   | Builds the final site into the `dist/` folder            |
| `npm run preview` | Previews the built site exactly as it'll appear live     |
