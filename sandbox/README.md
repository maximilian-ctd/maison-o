# Design Sandbox - Maison Ô

Diese Sandbox dient zum Testen und Anpassen des Designs aus Figma, bevor wir es ins Shopify Theme integrieren.

## 📁 Dateien

- `header-preview.html` - Header Design Preview

## 🚀 Verwendung

### Header Preview öffnen

1. Öffne die Datei `header-preview.html` direkt im Browser:
   ```bash
   open sandbox/header-preview.html
   ```
   
   Oder doppelklicke auf die Datei im Finder.

2. Die Seite zeigt:
   - Den aktuellen Header mit allen Elementen
   - Sticky Header Verhalten beim Scrollen
   - Mobile Menu Funktionalität
   - Responsive Breakpoints

## ✏️ Design anpassen

### Werte aus Figma Dev Mode eintragen

1. Öffne Figma im Dev Mode
2. Wähle die Header-Elemente aus
3. Kopiere die CSS-Werte aus dem rechten Panel
4. Trage sie in die `<style>` Sektion der HTML-Datei ein

### Beispiel: Page Title anpassen

```css
.header__page-title {
  font-size: 1.4rem;        /* Aus Figma: Font Size */
  font-weight: 400;         /* Aus Figma: Font Weight */
  letter-spacing: 0.05em;   /* Aus Figma: Letter Spacing */
  color: #000000;           /* Aus Figma: Fill Color */
}
```

### Beispiel: Farben anpassen

```css
:root {
  --color-primary: #8B0000;    /* Primärfarbe aus Figma */
  --color-text: #000000;        /* Textfarbe aus Figma */
  --color-background: #ffffff;   /* Hintergrundfarbe aus Figma */
}
```

## 🔄 Workflow

1. **Design in Figma analysieren**
   - Dev Mode aktivieren
   - Werte notieren

2. **In Sandbox testen**
   - Werte in `header-preview.html` eintragen
   - Im Browser prüfen
   - Anpassungen vornehmen

3. **Ins Shopify Theme übernehmen**
   - Getestete Werte in `sections/header.liquid` übertragen
   - In Shopify Theme Editor prüfen

## 📝 Notizen

- Alle Änderungen in der Sandbox sind lokal und beeinflussen das Shopify Theme nicht
- Die Sandbox verwendet die gleiche HTML-Struktur wie das Shopify Theme
- CSS-Klassen entsprechen denen im Shopify Theme

## 🎨 Nächste Schritte

Nach dem Testen der Header-Sandbox können wir weitere Sandboxen erstellen für:
- Hero Section
- Welcome Section
- Footer
- Product Cards
- etc.


