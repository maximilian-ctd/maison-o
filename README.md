# Maison Ô Countdown - Shopify Theme

Ein modernes, responsives Shopify-Theme mit zeitgemäßem Design und Countdown-Funktionalität.

**Hinweis:** Dies ist eine Kopie des Maison O Themes für weitere Anpassungen.

## Struktur

```
maison-o/
├── assets/              # CSS, JavaScript und andere Assets
│   ├── base.css        # Basis-Styles
│   └── global.js       # Globales JavaScript
├── config/              # Theme-Konfiguration
│   ├── settings_data.json
│   ├── settings_schema.json
│   └── section_groups.json
├── layout/              # Layout-Dateien
│   └── theme.liquid     # Haupt-Layout
├── sections/            # Shopify Sections
│   ├── header.liquid
│   ├── footer.liquid
│   ├── hero.liquid
│   └── featured-collection.liquid
├── snippets/            # Wiederverwendbare Komponenten
│   ├── meta-tags.liquid
│   ├── product-card.liquid
│   └── pagination.liquid
└── templates/           # Seiten-Templates
    ├── index.liquid     # Homepage
    ├── product.liquid   # Produktseite
    └── collection.liquid # Kollektionsseite
```

## Features

- ✅ Modernes, responsives Design
- ✅ Mobile-First Ansatz
- ✅ Anpassbare Farben über Theme-Einstellungen
- ✅ Hero-Section mit Bild und Overlay
- ✅ Featured Collection Section
- ✅ Produktkarten mit Hover-Effekten
- ✅ Responsive Navigation mit Mobile-Menü
- ✅ Newsletter-Anmeldung im Footer
- ✅ SEO-optimiert mit Meta-Tags

## Installation

1. Laden Sie das Theme-Verzeichnis in Ihr Shopify-Store hoch
2. Gehen Sie zu **Online Store > Themes**
3. Klicken Sie auf **"Theme hochladen"**
4. Wählen Sie das `maison-o` Verzeichnis aus
5. Nach dem Upload können Sie das Theme aktivieren

## Konfiguration

### Theme-Einstellungen

Gehen Sie zu **Online Store > Themes > Customize**, um folgende Einstellungen anzupassen:

- **Farben**: Primärfarbe, Sekundärfarbe, Textfarbe, Hintergrundfarbe
- **Header**: Logo oder Logo-Text, Hauptmenü
- **Footer**: Über uns Text, Kontaktinformationen, Footer-Menü, Newsletter-Einstellungen

### Sections konfigurieren

#### Hero-Section
- Bild auswählen
- Überschrift und Text anpassen
- Button-Link setzen
- Bildhöhe und Overlay-Opazität anpassen

#### Featured Collection
- Kollektion auswählen
- Anzahl der Produkte festlegen
- Anzahl der Spalten (Desktop) einstellen

## Anpassungen

### Farben ändern

Farben können über die Theme-Einstellungen geändert werden oder direkt in `assets/base.css`:

```css
:root {
  --color-primary: #000000;
  --color-secondary: #ffffff;
  --color-text: #000000;
  --color-background: #ffffff;
}
```

### Schriftarten ändern

In `layout/theme.liquid` können Sie die Schriftarten anpassen. Standardmäßig werden System-Schriftarten verwendet.

## Browser-Unterstützung

- Chrome (letzte 2 Versionen)
- Firefox (letzte 2 Versionen)
- Safari (letzte 2 Versionen)
- Edge (letzte 2 Versionen)

## Entwicklung

Das Theme verwendet:
- Liquid-Templates für Shopify
- Vanilla CSS (keine Frameworks)
- Vanilla JavaScript (keine Bibliotheken)

## Theme-Vorschau

### Option 1: Statische HTML-Vorschau (Schnellstart)

Öffnen Sie die Datei `preview.html` direkt in Ihrem Browser, um eine visuelle Vorschau des Designs zu sehen:

```bash
open preview.html
```

Diese Vorschau zeigt das Design ohne Shopify-Funktionalität.

### Option 2: Lokale Entwicklung mit Shopify CLI (Empfohlen)

Für eine vollständige Vorschau mit allen Shopify-Features:

1. **Shopify CLI installieren:**
   ```bash
   npm install -g @shopify/cli @shopify/theme
   ```

2. **Mit Shopify Store verbinden:**
   ```bash
   cd maison-o
   shopify theme dev
   ```

3. **Oder Theme zu Store hochladen:**
   ```bash
   shopify theme push
   ```

Die CLI startet einen lokalen Entwicklungsserver und Sie können das Theme live im Browser sehen.

## Support

Bei Fragen oder Problemen wenden Sie sich bitte an Ihren Shopify-Entwickler.

## Lizenz

Dieses Theme wurde für Maison O erstellt.

