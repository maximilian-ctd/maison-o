# Logo einfügen - Anleitung

## Logo-Datei hinzufügen

1. **Logo-Datei vorbereiten:**
   - Format: PNG (mit transparentem Hintergrund) oder SVG
   - Empfohlene Größe: Mindestens 1200px Breite für Desktop
   - Dateiname: z.B. `logo.png` oder `maison-o-logo.svg`

2. **Logo hochladen:**
   - Speichere die Logo-Datei im `sandbox/videos/` Ordner
   - Oder im `assets/` Ordner für Shopify

3. **In HTML einbinden:**
   - Öffne `hero-preview.html`
   - Passe den `src` im `<img>` Tag an:
   ```html
   <img src="logo.png" alt="MAISON Ô" class="hero-maison__brand-logo">
   ```

## Logo-Anforderungen

- **Format:** PNG (mit Alpha-Kanal) oder SVG empfohlen
- **Hintergrund:** Transparent für beste Ergebnisse
- **Auflösung:** Mindestens 1200px Breite für Retina-Displays
- **Dateigröße:** Möglichst komprimiert (unter 200KB)

## Logo-Größe anpassen

In der CSS-Datei kannst du die Logo-Größe anpassen:

```css
/* Desktop */
.hero-maison__brand-logo {
  max-width: 600px;  /* Anpassen nach Bedarf */
}

/* Tablet */
@media (max-width: 1023px) {
  .hero-maison__brand-logo {
    max-width: 400px;
  }
}

/* Mobile */
@media (max-width: 767px) {
  .hero-maison__brand-logo {
    max-width: 280px;
  }
}
```

## Logo-Position anpassen

Die vertikale Position des Logos kannst du über den `bottom` Wert ändern:

```css
.hero-maison__brand {
  bottom: 80px;  /* Abstand vom unteren Rand */
}
```

## Fallback

Falls das Logo nicht geladen werden kann, wird automatisch der Text "MAISON Ô" als Fallback angezeigt.


