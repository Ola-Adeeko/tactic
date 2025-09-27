"use client";

import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

const customConfig = {
  ...defaultConfig,
  theme: {
    ...defaultConfig.theme,
    tokens: {
      ...defaultConfig?.theme?.tokens,
      colors: {
        ...defaultConfig?.theme?.tokens?.colors,
        primary: {
          value: "#ffffff",
        },
        secondary: {
          value: "#f7f7f7",
        },
        sidebarActive: {
          value: "#e9f5f7",
        },
        sidebarActiveText: {
          value: "#75c5c1",
        },
        primaryText: {
          value: "#464b50",
        },
        primaryBorder: {
          value: "#CDD6E9",
        },
        secondaryBorder: {
          value: "#EEF1F9",
        },
        tertiaryBorder: {
          value: "#CDD6E933",
        },
        indigoPrimaryColor: {
          value: "#41245F",
        },
        aquaPrimaryColor: {
          value: "#75C5C1",
        },
        tealSwitchSection: {
          value: "#E9F5F7",
        },

        sidebarIcon: {
          value: "#7988A9",
        },
        switchTrack: {
          value: "#BAC1CC",
        },
        switchTrackDisabled: {
          value: "#E1E0E1",
        },
        todoBackground: {
          value: "#F9F3FF",
        },
        todoIcon: {
          value: "#CFB7E8",
        },
        inProgressBackground: {
          value: "#FBF4E4",
        },
        inProgressIcon: {
          value: "#F6BE38",
        },
        completedBackground: {
          value: "#E9F5F7",
        },
        completedIcon: {
          value: "#75C5C1",
        },
        cardIcon: {
          value: "#BAC1CC",
        },
        headerText: {
          value: "#1A1C1E",
        },
        priorityUrgent: {
          value: "#FF515D",
        },
        priorityImportant: {
          value: "#F6BE38",
        },
        priorityMedium: {
          value: "#75C5C1",
        },
        priorityLow: {
          value: "#BAC1CC",
        },
        paginationActive: {
          value: "#75C5C1",
        },
        paginationHover: {
          value: "#F5F5F5",
        },
      },
    },
  },
};

const system = createSystem(customConfig);

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
