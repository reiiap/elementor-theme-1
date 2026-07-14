# Serenara Studio Luxury Wedding Invitation Template

A completely original Elementor Pro wedding invitation template with a black, ivory, and gold editorial style. The template is built with Elementor Containers/Flexbox and WeddingPress-compatible shortcode placeholders.

## Files

- `elementor-template.json` — importable Elementor page template.
- `assets/images/` — original SVG placeholder art for cover and couple imagery.
- `assets/icons/` — original Serenara monogram placeholder icon.

## Requirements

- WordPress
- Elementor Pro with Flexbox Containers enabled
- WeddingPress
- Optional fonts: Cormorant Garamond and Plus Jakarta Sans

## Import into Elementor

1. In WordPress Admin, go to **Templates → Saved Templates**.
2. Select **Import Templates**.
3. Upload `elementor-template.json`.
4. Insert the imported template into a page that uses **Elementor Canvas** or another full-width layout.
5. Confirm each major section appears in the Navigator as a numbered container: Loading Screen, Opening Cover, Hero, Bride & Groom, Countdown, Event Information, Google Maps, Love Story Timeline, Gallery, Video, Live Streaming, Wedding Gift, RSVP, Guest Book, and Footer.

## WeddingPress setup

The template uses replaceable placeholders and shortcode widgets rather than hardcoded wedding data. Replace these placeholders with WeddingPress fields, dynamic tags, or your preferred WeddingPress shortcode configuration:

- `{{bride_name}}`
- `{{groom_name}}`
- `{{event_date}}`
- `{{event_time}}`
- `{{venue}}`
- `{{maps}}`
- `{{gallery}}`
- `{{music}}`
- `{{gift}}`
- `{{rsvp}}`
- `{{guest_name}}`

WeddingPress compatibility placeholders are included for Invitation, Countdown, RSVP, Guest Book, Gift, Audio MP3, QR Code, and Maps. If your WeddingPress installation uses different shortcode names or attributes, open each Elementor **Shortcode** widget and update the shortcode while keeping the surrounding container design.

## Replace images

1. Upload final optimized WebP/JPEG images to **Media Library**.
2. Open the page in Elementor.
3. Replace the image URL in these widgets:
   - Opening Cover background
   - Bride Card image
   - Groom Card image
   - Gallery shortcode/content
4. Keep images compressed and use Elementor's lazy loading settings for best Lighthouse results.

## Replace fonts

1. Go to **Elementor → Site Settings → Global Fonts**.
2. Set heading/serif typography to **Cormorant Garamond**.
3. Set body/sans typography to **Plus Jakarta Sans**.
4. If the fonts are not available, add them through Elementor custom fonts or your theme font loader.

## Replace colors

1. Go to **Elementor → Site Settings → Global Colors**.
2. Use these design tokens as the default palette:
   - Black: `#090807`
   - Ivory: `#F7F1E8`
   - Muted Ivory: `#C9BFB0`
   - Gold Accent: `#C6A15B`
3. The root container also defines matching CSS variables for consistent section styling.

## Performance notes

- Built with Containers only; no Inner Section widget.
- Uses minimal widgets and shortcodes to reduce DOM size.
- Uses rem-based spacing in the template settings.
- Image widgets are configured for lazy loading.
- Replace SVG placeholders with optimized production images before launch.
