---
title: useColorScheme()
---

useColorScheme() provides access to the devices color scheme.

| Value             | Description                                                                                            |
| ----------------- | ------------------------------------------------------------------------------------------------------ |
| colorScheme       | The current device colorScheme                                                                         |
| setColorScheme    | Override the current colorScheme with a different scheme (accepted values are `light`/`dark`/`system`) |
| toggleColorScheme | Toggle the color scheme between `light` and `dark`                                                     |

<Callout type="warn" title="CAUTION">
`setColorScheme` and `toggleColorScheme` require `darkMode: "class"` in your Tailwind config. They will throw an error if `darkMode` is set to `"media"` (the default). See the [Tailwind CSS dark mode docs](https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually) for setup instructions.
</Callout>

```tsx
import { useColorScheme } from "nativewind";
import { Text } from "react-native";

function MyComponent() {
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <Text
      onPress={() => setColorScheme(colorScheme === "light" ? "dark" : "light")}
    >
      {`The color scheme is ${colorScheme}`}
    </Text>
  );
}
```

Nativewind v4.2.7 handles the React Native Appearance `unspecified` value internally. Continue using `setColorScheme("system")` with the v4 Nativewind hook to restore system preference; the v5 direct Appearance recipe is a separate API.
