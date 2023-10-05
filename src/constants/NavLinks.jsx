export const NavLinks = [
  {
    Logo: "InterviewX",
    style: {
      flexGrow: 1,
      component: "div",
      maxWidth: "50%",
      fontSize: "20px",
    },
  },
  {
    Links: [
      {
        id: 1,
        title: "Home",
        linkRef: "/",
        style: {
          color: "primary.main",
          marginRight: "20px",
          "&.MuiButtonBase-root:hover": {
            bgcolor: "transparent",
          },
        },
      },
      {
        id: 2,
        title: "Contact",
        linkRef: "/about",
        style: {
          color: "primary.main",
          marginRight: "20px",
          "&.MuiButtonBase-root:hover": {
            bgcolor: "transparent",
          },
        },
      },
      {
        id: 3,
        title: "About",
        linkRef: "/contact",
        style: {
          color: "primary.main",
          marginRight: "20px",
          "&.MuiButtonBase-root:hover": {
            bgcolor: "transparent",
          },
        },
      },
      {
        id: 4,
        title: "Sign Up",
        linkRef: "/signUp",
        style: {
          bgcolor: "primary.main",
          color: "white",
          borderRadius: "10px",
          padding: "8px",
          "&.MuiButtonBase-root:hover": {
            bgcolor: "primary.main",
          },
        },
      },
    ],
  },
];
