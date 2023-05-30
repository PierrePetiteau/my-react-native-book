# Nativewind deep dive

## Limitations

- Cannot access css variables colors
- Need to use dark: modifier and deduplicate colors for dark theme
- Need to use clsx to compose className

## Items

- Fonts
- Typography
- Colors
- Theme & Design system
- ClassName composition
- Dark mode
- Responsive & breakpoints
- Device specific

## Tests

- Clone DaisyUI button using addComponent method from tailwindCSS plugin
  - Compose className using props and clsx ✅
  - Add animation on the button on press action ✅
  - Toggle dark theme on press action ✅
  - Add left and right elements ✅
  - Add loading variant ✅
  - Add custom font ✅

## Exploration

- What is PostCSS ✅
- What is tailwind ✅
- What is daisyUI ✅
- What is nativewind ✅
- How to create a modifier for first and last child ? ⏳

## PostCSS

It's a CSS conversion tool:

  1. Take css as entry
  2. Process it with javascript plugins
  3. Generate css output

It's highly customizable with plugins

  1. Autoprefixer
  2. CSSnano
  3. Stylelint
  4. PostCSS Preset Env
  5. PostCSS Import
  6. PostCSS Custom Properties:
  7. PostCSS Flexbox:

## Tailwind CSS

It's a utility-first CSS framework

  1. Take a configuration file as entry
  2. Generate utility class
  3. Purge unused CSS
  4. Generate CSS output

Tailwind CSS utilizes PostCSS as part of its build process, the utility classes defined in HTML or JSX code are transformed and expanded into the corresponding CSS styles using PostCSS plugins.

Tailwind CSS has a plugin ecosystem that extends its capabilities. Plugins allow you to add additional utility classes, components, or customizations to Tailwind CSS

## Daisy UI

It's a plugin for Tailwind CSS

It provides a library of ready-to-use components and styles.

## Nativewind

NativeWind uses Tailwind CSS as scripting language to create a universal styling system. Styled components can be shared between all React Native platforms, using the best style engine for that platform
