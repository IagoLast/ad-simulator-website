# Metadata Image Assets Todo

To complete the metadata setup for proper SEO and social media sharing, you need to create the following image files:

## Required Image Files

1. **Open Graph Image**
   - Path: `public/images/og_image.png`
   - Size: 1200x630px
   - Purpose: This image appears when sharing your site on social media platforms like Facebook, Twitter, LinkedIn, etc.
   - Content: Use the pixel art logo from the screenshot with text "AD SIMULATOR - Capture the flag in a map full of ads"

2. **Favicon**
   - Path: `public/favicon.ico`
   - Size: 16x16px, 32x32px, 48x48px (multi-size ICO file)
   - Purpose: The icon shown in browser tabs

3. **Apple Touch Icon**
   - Path: `public/apple-touch-icon.png`
   - Size: 180x180px
   - Purpose: Icon used when adding the website to home screen on iOS devices

4. **Android Chrome Icons**
   - Path: `public/android-chrome-192x192.png`
   - Size: 192x192px
   - Path: `public/android-chrome-512x512.png`
   - Size: 512x512px
   - Purpose: Icons used for Android devices and PWA support

## Design Guidelines

- Use the same pixel art style as shown in the AD SIMULATOR logo
- Keep the color scheme consistent (black background with green text for "SIMULATOR")
- Use transparency where appropriate for icons
- Make sure the small icons are still recognizable at their respective sizes

These files are referenced in:
- `app/layout.tsx` (metadata section)
- `public/site.webmanifest` (for PWA support)

Once these files are added, your site will have proper metadata for social media sharing and browser display.
