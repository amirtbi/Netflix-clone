import type { VuetifyOptions } from "vuetify";

const theme: VuetifyOptions["theme"] = {
  themes: {
    light: {
      dark: false,
      colors: {
        primary: "#C3973C",
        "on-primary": "#fff",
        secondary: "#7367F0",
        "on-secondary": "#fff",
        success: "#28C76F",
        "on-success": "#fff",
        info: "#00CFE8",
        "on-info": "#fff",
        warning: "#FF9F43",
        caution: " #FF9F43 ",
        "on-warning": "#fff",
        error: "#EA5455",
        background: "#F8F7FA",
        "on-background": "#4B465C",
        "on-surface": "#4B465C",
        "grey-50": "#FAFAFA",
        "grey-100": "#F5F5F5",
        "grey-200": "#EEEEEE",
        "grey-300": "#E0E0E0",
        "grey-400": "#BDBDBD",
        "grey-500": "#9E9E9E",
        "grey-600": "#757575",
        "grey-700": "#616161",
        "grey-800": "#424242",
        "grey-900": "#212121",
        "critical-color": "#FF0000",
        "high-color": "#FF4D00",
        "medium-color": "#FF6700",
        "low-color": "#FFA700",
        "perfect-scrollbar-thumb": "#DBDADE",
      },
    },
    dark: {
      dark: true,
      colors: {
        primary: "#C3973C",
        "on-primary": "#fff",
        secondary: "#292B7E",
        "on-secondary": "#fff",
        success: "#28C76F",
        "on-success": "#fff",
        info: "#00CFE8",
        "on-info": "#fff",
        warning: "#FF9F43",
        "on-warning": "#fff",
        error: "#EA5455",
        background: "#25293C",
        "on-background": "#CFD3EC",
        surface: "#2F3349",
        "on-surface": "#CFD3EC",
        "grey-50": "#26293A",
        "grey-100": "#2F3349",
        "grey-200": "#26293A",
        "grey-300": "#4A5072",
        "grey-400": "#5E6692",
        "grey-500": "#7983BB",
        "grey-600": "#AAB3DE",
        "grey-700": "#B6BEE3",
        "grey-800": "#CFD3EC",
        "grey-900": "#E7E9F6",
        "critical-color": "#FF0000",
        "high-color": "#FF4D00",
        "medium-color": "#FF6700",
        "low-color": "#FFA700",
        "perfect-scrollbar-thumb": "#4A5072",
      },
    },
  },
};

export default theme;
