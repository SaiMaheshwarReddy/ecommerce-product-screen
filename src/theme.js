import { extendTheme } from "@chakra-ui/react";



export const theme = extendTheme({
  colors: {
    brand: {
      100: "hsl(26, 100%, 55%)",
      900: "hsl(25, 100%, 94%)",
    },
    blue: {
      100: "hsl(220, 13%, 13%)",
      200: "hsl(219, 9%, 45%)",
      300: "hsl(220, 14%, 75%)",
      400: "hsl(223, 64%, 98%)",
    },
    white: {
      100: "hsl(0, 0%, 100%)",
    },
    black: {
      100: "hsl(0, 0%, 0%)",
    },
  },
  fonts: {
      heading: `'Kumbh Sans'`,
      body:  `'Kumbh Sans'`,
  }
});
