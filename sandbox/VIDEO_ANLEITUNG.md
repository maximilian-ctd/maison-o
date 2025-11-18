# Video einfügen - Anleitung

## Option 1: Lokales Video (empfohlen für Testing)

1. **Erstelle den Videos-Ordner:**
   ```bash
   mkdir -p sandbox/videos
   ```

2. **Lade dein Video hoch:**
   - Benenne es z.B. `hero-video.mp4`
   - Stelle sicher, dass es im Format MP4 ist

3. **Aktiviere die Video-Quelle in `hero-preview.html`:**
   ```html
   <!-- Entferne die Kommentare und füge deinen Dateinamen ein -->
   <source src="videos/hero-video.mp4" type="video/mp4">
   ```

4. **Öffne die HTML-Datei im Browser:**
   - Das Video sollte automatisch abspielen

## Option 2: Externe URL

1. **Hole die direkte Video-URL:**
   - Von einem CDN (z.B. Cloudflare, AWS S3)
   - Von einem Video-Hosting-Service
   - Wichtig: Muss eine direkte MP4-URL sein (nicht YouTube/Vimeo Embed-URL)

2. **Füge die URL in `hero-preview.html` ein:**
   ```html
   <!-- Entferne die Kommentare und füge deine URL ein -->
   <source src="https://deine-video-url.com/video.mp4" type="video/mp4">
   ```

## Option 3: YouTube/Vimeo Video

Für YouTube/Vimeo Videos benötigst du einen anderen Ansatz:

1. **Verwende einen Service wie:**
   - [YouTube to MP4 Converter](https://www.y2mate.com/)
   - Lade das Video herunter und verwende Option 1

2. **Oder verwende einen iframe (nicht empfohlen für Hintergrund-Video):**
   ```html
   <iframe 
     src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID"
     frameborder="0"
     allow="autoplay; encrypted-media"
   ></iframe>
   ```

## Video-Anforderungen

- **Format:** MP4 (H.264 Codec empfohlen)
- **Auflösung:** Mindestens 1920x1080 für Desktop
- **Dateigröße:** Möglichst komprimiert (unter 10MB für schnelles Laden)
- **Aspect Ratio:** 16:9 funktioniert am besten

## Troubleshooting

**Video wird nicht angezeigt:**
- Prüfe die Dateipfade (relativ zur HTML-Datei)
- Öffne die Browser-Konsole (F12) für Fehlermeldungen
- Stelle sicher, dass das Video im MP4-Format ist

**Video spielt nicht automatisch ab:**
- Browser blockieren manchmal Autoplay
- Stelle sicher, dass `muted` Attribut vorhanden ist
- Prüfe Browser-Einstellungen

**CORS-Fehler bei externer URL:**
- Der Server muss CORS-Header erlauben
- Verwende stattdessen lokales Video für Testing


