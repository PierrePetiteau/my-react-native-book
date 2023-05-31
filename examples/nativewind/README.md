# Nativewind deep dive

https://github.com/PierrePetiteau/my-react-native-book/assets/104726314/7a149872-f7b3-4a3e-a34f-3c88ac606e38

## Ressources

- [Documentation v2 (stable)](https://www.nativewind.dev/)
- [Documentation v3 (next)](https://next.nativewind.dev/)
- [Github v3 PR](https://github.com/marklawlor/nativewind/issues/308)
- [Github repo](https://github.com/marklawlor/nativewind)
- [Discussion v3 paused - project moving to expo](https://github.com/marklawlor/nativewind/issues/464)

## TLDR nativewind v2 (@stable)

### v2 Advantages

- `useTailwind` hook - retrieve style value from className
- `dark:` modifier - override style on dark scheme
- `clsx` package - compose className for complex components with huge amount of variants
- Possibility to add custom plugin
- `xs:` `sm:` `md:` modifiers - breakpoint specific styling support
- `ios:` `android:` `web:` modifiers - platform specific styling support
- `tailwindcss` power - simplify a lot the styling logic

### v2 Limitations

- No way to update theme dynamically (minor)
- Need to duplicate all theme values for dark theme (minor)
- Need to kill server & reset cache each time we modify `tailwind.config.js` (minor)
- Need to replace `clsx` by custom helper when trying to compose a value instead of className (minor)

## TLDR nativewind v3 (@next)

### v3 Advantages

- `styled()` method - create a component with variant props
- `--css-variables` - updating variables make possible dynamic themes
- No need to duplicate all alternatives theme values

### v3 Limitations & blockers

- Seem like there is issue with EAS (high)
- No way to retrieve value from className (medium)
- `dark:` modifier unavailable (medium)
- `color/opacity` syntax broken (medium)

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
