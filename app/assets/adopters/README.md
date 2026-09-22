# Nativewind adoption section assets

These third party marks identify the projects featured in `app/(home)/AdoptersSection.tsx`. They belong to their respective owners and are not part of the Nativewind visual identity. Their inclusion describes repository adoption; it does not imply endorsement, sponsorship, or a commercial relationship.

`provenance.json` records the official repository, pinned asset URL, original SHA256, shipped SHA256, verification time, transformations, and the dependency manifest establishing Nativewind usage. The section data in `app/(home)/adopters.json` records each manifest hash and the Nativewind dependency version. All ten selected projects were rechecked on September 21, 2026. The list comes from the existing filtered research, `top-twenty-products-verified.json`; selection order is retained, with no popularity claims on the public page.

## Presentation

Use original project colors. Use the supplied light and dark variants for Onyx, Karakeep, Polar, and gluestack UI. React Native Reusables supplies one favicon with black and white strokes selected through a color scheme media query; its two local variants retain those exact colors while selecting by the website theme. This also prevents the source favicon's global `path` rule from affecting other inline SVGs. PostHog is placed on a small white backing to preserve its dark body in both themes. App icons keep their own backgrounds.

SVG sources were parsed, active content and external references were checked, and the standard Karakeep SVG 1.1 DOCTYPE was removed without loading it. Geometry and colors were preserved. Raster assets are unchanged source bytes. Use this folder only for the adoption section; these are not Nativewind or NativewindUI assets.

Suna intentionally has no logo asset. Its selected repository now identifies the product as Kortix. The section retains the requested research name as plain text rather than putting a Kortix mark beside a Suna label. Revisit the public name and mark together if the shortlist is revised.

Official source provenance is established. Nativewind designers have not yet approved this section's composition or optical logo sizing.
