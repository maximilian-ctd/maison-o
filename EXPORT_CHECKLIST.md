# Shopify Theme Export Checklist

## ✅ Prüfung abgeschlossen

### Code-Qualität
- ✅ Keine Linter-Fehler gefunden
- ✅ Alle Liquid-Tags korrekt geschlossen
- ✅ JSON-Konfigurationsdateien sind gültig
- ✅ Console.log Statements für Production kommentiert

### Wichtige Dateien vorhanden
- ✅ `layout/theme.liquid` - Hauptlayout
- ✅ `sections/hero-maison.liquid` - Hero-Section mit Login & HeyFlow Modals
- ✅ `sections/header.liquid` - Header mit Logo & Hamburger-Menü
- ✅ `sections/footer.liquid` - Footer mit Links & Social Media
- ✅ `templates/index.liquid` - Homepage Template
- ✅ `assets/global.js` - Globales JavaScript
- ✅ `assets/base.css` - Basis-Styles
- ✅ `config/settings_schema.json` - Theme-Einstellungen

### Implementierte Features
1. **Hero-Section (hero-maison.liquid)**
   - Video-Hintergrund mit Overlay
   - Brand-Logo/Text zentriert
   - "ENTRÉE" Button mit Login-Modal
   - Concierge-Widget (rechts unten) mit Chat-Integration
   - "Sichern Sie sich Ihren exklusiven Platz" Button mit HeyFlow-Modal
   - Responsive Design

2. **Login-Modal**
   - Öffnet bei Klick auf "ENTRÉE"
   - E-Mail/Telefonnummer & Passwort Felder
   - "Passwort vergessen?" Link
   - Schließen per X, Hintergrund oder ESC

3. **HeyFlow-Modal**
   - Öffnet bei Klick auf "Sichern Sie sich Ihren exklusiven Platz"
   - Flow-ID: `OXukvFlXlOj4Om7gpATS`
   - Schließen per X, Hintergrund oder ESC

4. **Header**
   - Logo (Ô) mit Hamburger-Menü
   - Mobile Menü (ausklappbar)
   - Responsive Design

5. **Footer**
   - Links (Impressum, Datenschutz, AGB, etc.)
   - Social Media Icons (WhatsApp, Instagram)
   - Mobile: Ausklappbares Menü mit Hamburger-Icon
   - Desktop: Links immer sichtbar

### Vorbereitung für Export

#### Vor dem Export:
1. ✅ Console.log Statements kommentiert
2. ✅ Alle Dateien auf Syntax-Fehler geprüft
3. ✅ JSON-Dateien validiert

#### Export-Schritte:
1. Theme-Verzeichnis als ZIP komprimieren
2. In Shopify Admin → Online Store → Themes → Upload theme
3. Theme hochladen und aktivieren

#### Nach dem Export zu prüfen:
- [ ] Theme aktiviert und funktioniert
- [ ] Alle Bilder hochgeladen (Logo, Concierge-Bild)
- [ ] HeyFlow-Script lädt korrekt
- [ ] Login-Modal öffnet sich
- [ ] HeyFlow-Modal öffnet sich
- [ ] Concierge-Chat funktioniert
- [ ] Responsive Design auf Mobile/Tablet/Desktop
- [ ] Footer-Links funktionieren
- [ ] Social Media Links korrekt konfiguriert

### Bekannte Hinweise
- Console.log Statements sind für Debugging kommentiert (können bei Bedarf entfernt werden)
- HeyFlow-Script wird im `theme.liquid` geladen
- Sandbox-Dateien (`sandbox/`) sind für lokale Tests und müssen nicht exportiert werden

### Theme-Version
- Version: 1.0.0
- Name: Maison O
- Letzte Prüfung: $(date)

