# Quartz Theme: Ebullientworks

A digital garden theme for **[Quartz v4](https://quartz.jzhao.xyz)** ported directly from the popular **[Ebullientworks](https://github.com/ebullient/obsidian-theme-ebullientworks)** Obsidian theme.

Features distinctive handwriting typography (*Architects Daughter* for headings, tags, and callouts), rainbow progressive heading colors, and clean dark/light color balances.

---

## Setup & Installation

### Option 1: Direct File Copy (Simplest)

1. Clone or copy the theme files into your Quartz repository:
   ```bash
   git clone https://github.com/skc-coder/quartz-theme-ebullientworks.git /tmp/ebw-theme
   cp /tmp/ebw-theme/styles/ebullientworks.scss quartz/styles/
   ```

2. In your `quartz/styles/custom.scss`, import the stylesheet:
   ```scss
   @use "./ebullientworks.scss";
   ```

3. Update your `quartz.config.ts` with the Ebullientworks color tokens:
   ```ts
   // In quartz.config.ts -> configuration.theme:
   theme: {
     fontOrigin: "googleFonts",
     cdnCaching: true,
     typography: {
       header: "Architects Daughter",
       body: "Source Sans Pro",
       code: "IBM Plex Mono",
     },
     colors: {
       lightMode: {
         light: "#f8f8f8",
         lightgray: "#e5e5e5",
         gray: "#8c8c8c",
         darkgray: "#484848",
         dark: "#202020",
         secondary: "#6e40aa",
         tertiary: "#9d4ecc",
         highlight: "rgba(110, 64, 170, 0.12)",
         textHighlight: "#fff3a388",
       },
       darkMode: {
         light: "#1e1e1e",
         lightgray: "#282828",
         gray: "#808080",
         darkgray: "#cdcdcd",
         dark: "#f2f2f2",
         secondary: "#b388ff",
         tertiary: "#d1b3ff",
         highlight: "rgba(179, 136, 255, 0.15)",
         textHighlight: "#e5a70044",
       },
     },
   }
   ```

---

## Running the Code

To test your Quartz site with the Ebullientworks theme:

```bash
npx quartz build --serve
```

---

## Update & Run

To fetch the latest theme improvements and re-run your garden:

```bash
git pull origin main
npx quartz build --serve
```

---

## License & Credits

- Ported for Quartz by **skc-coder**.
- Original Obsidian theme created by **[ebullient](https://github.com/ebullient)** ([obsidian-theme-ebullientworks](https://github.com/ebullient/obsidian-theme-ebullientworks)).
- Licensed under [MIT](LICENSE).
