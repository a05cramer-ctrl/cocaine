# Coke - React + Vite + TypeScript

Ett modernt React-projekt byggt med Vite och TypeScript.

## Kom igång

### Installera beroenden

```bash
npm install
```

### Starta utvecklingsserver

```bash
npm run dev
```

Öppna [http://localhost:5173](http://localhost:5173) i din webbläsare för att se applikationen.

### Bygg för produktion

```bash
npm run build
```

De byggda filerna kommer att finnas i `dist`-mappen.

### Förhandsgranska produktionsbyggnad

```bash
npm run preview
```

## Teknologier

- **React 18** - UI-bibliotek
- **Vite** - Byggverktyg och utvecklingsserver
- **TypeScript** - Typad JavaScript
- **ESLint** - Kodkvalitet och linting

## Projektstruktur

```
├── src/
│   ├── App.tsx          # Huvudkomponent
│   ├── App.css          # App-stilar
│   ├── main.tsx         # Applikationsingångspunkt
│   ├── index.css        # Globala stilar
│   └── vite-env.d.ts    # Vite-typer
├── index.html           # HTML-mall
├── vite.config.ts       # Vite-konfiguration
├── tsconfig.json        # TypeScript-konfiguration
└── package.json         # Projektberoenden
```

## Utveckling

Redigera filerna i `src/`-mappen. Ändringar kommer automatiskt att reflekteras i webbläsaren tack vare Vites Hot Module Replacement (HMR).
