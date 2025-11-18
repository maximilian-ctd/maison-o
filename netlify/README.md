# Maison Ô - Netlify Deployment

Diese statischen HTML-Dateien können direkt auf Netlify gehostet werden.

## Dateien

- `datenschutz.html` - Datenschutzerklärung
- `impressum.html` - Impressum
- `index.html` - Startseite (optional, falls benötigt)

## Deployment auf Netlify

### Option 1: Drag & Drop

1. Gehe zu [Netlify Drop](https://app.netlify.com/drop)
2. Ziehe den `netlify` Ordner in das Browser-Fenster
3. Netlify erstellt automatisch eine URL für deine Website

### Option 2: Netlify CLI

```bash
# Installation der Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deployment
cd netlify
netlify deploy --prod
```

### Option 3: Git Integration

1. Erstelle ein Git-Repository
2. Lade die Dateien hoch
3. Verbinde das Repository mit Netlify
4. Netlify baut automatisch bei jedem Push

## Anpassungen

### Kontaktdaten anpassen

In beiden HTML-Dateien findest du Platzhalter wie:
- `[Ihr Name]`
- `[Ihre Adresse]`
- `[Ihre Telefonnummer]`
- `[Ihre E-Mail-Adresse]`

Diese müssen durch deine tatsächlichen Daten ersetzt werden.

### Links anpassen

- Header-Links: Passe die `href`-Attribute in den `<a>`-Tags an
- Footer-Links: Die Links zu Impressum und Datenschutz sind bereits korrekt gesetzt

### Hosting-Informationen

In `datenschutz.html` ist der Hosting-Anbieter auf "Netlify" gesetzt. Falls du einen anderen Anbieter verwendest, passe dies entsprechend an.

## Custom Domain

Nach dem Deployment kannst du in den Netlify-Einstellungen eine Custom Domain hinzufügen.

## SSL/HTTPS

Netlify stellt automatisch SSL-Zertifikate bereit. Deine Website ist standardmäßig über HTTPS erreichbar.

