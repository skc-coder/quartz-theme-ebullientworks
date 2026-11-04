// Theme configuration preset for Quartz v4 (quartz.config.ts)

export interface ThemeColors {
  light: string
  lightgray: string
  gray: string
  darkgray: string
  dark: string
  secondary: string
  tertiary: string
  highlight: string
  textHighlight: string
}

export interface EbullientworksTheme {
  fontOrigin: "googleFonts"
  cdnCaching: boolean
  typography: {
    header: string
    body: string
    code: string
  }
  colors: {
    lightMode: ThemeColors
    darkMode: ThemeColors
  }
}

export const ebullientworksTheme: EbullientworksTheme = {
  fontOrigin: "googleFonts",
  cdnCaching: true,
  typography: {
    header: "Architects Daughter",
    body: "Source Sans Pro",
    code: "IBM Plex Mono",
  },
  colors: {
    lightMode: {
      light: "#f8f8f8",             // Canvas background
      lightgray: "#e5e5e5",         // Borders, code background
      gray: "#8c8c8c",              // Muted secondary text
      darkgray: "#484848",          // Main body text
      dark: "#202020",              // High contrast titles
      secondary: "#6e40aa",         // Links and interactive accents
      tertiary: "#9d4ecc",          // Hover state
      highlight: "rgba(110, 64, 170, 0.12)",
      textHighlight: "#fff3a388",
    },
    darkMode: {
      light: "#1e1e1e",             // Main dark background
      lightgray: "#282828",         // Container & card borders
      gray: "#808080",              // Muted labels
      darkgray: "#cdcdcd",          // Main readable body text
      dark: "#f2f2f2",              // Main titles & high contrast
      secondary: "#b388ff",         // Vibrant link accents
      tertiary: "#d1b3ff",          // Hover state
      highlight: "rgba(179, 136, 255, 0.15)",
      textHighlight: "#e5a70044",
    },
  },
}

export default ebullientworksTheme
