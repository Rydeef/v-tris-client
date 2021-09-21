declare module "styled-components" {
  export interface DefaultTheme {
    body: {
      primary: string;
    };
    menu: {
      primary: string;
      easyAccent: string;
      accent: string;
      secondary: string;
    };
    text: {
      primary: string;
      opacity: string;
      secondary: string;
    };
    workspace: {
      primary: string;
      todo: string;
      inprogress: string;
      review: string;
      complete: string;
    };
  }
}

export const themes = {
  light: {
    body: {
      primary: "#E5E5E5",
    },
    menu: {
      primary: "#FFFFFF",
      easyAccent: "#FBEBFF",
      accent: "#7D069B",
      secondary: "#F1F1F1",
    },
    text: {
      primary: "#0B172A",
      opacity: "#A0A0A0",
      secondary: "#7D069B",
    },
    workspace: {
      primary: "#F1F1F1",
      todo: "#ED0CFD",
      inprogress: "#003CFF",
      review: "#FF9900",
      complete: "#00FF19",
    },
  },
  dark: {
    body: {
      primary: "#1E2330",
    },
    menu: {
      primary: "#1E2330",
      easyAccent: "#4D0061",
      accent: "#7D069B",
      secondary: "#2C2E38",
    },
    text: {
      primary: "#FFFFFF",
      opacity: "#A0A0A0",
      secondary: "#7D069B",
    },
    workspace: {
      primary: "#2C2E38",
      todo: "#ED0CFD",
      inprogress: "#003CFF",
      review: "#FF9900",
      complete: "#00FF19",
    },
  },
};
