import { styled } from "../../../stitches.config";

const Button = styled("button", {
  width: "$6",
  height: "$4",
  fontSize: "$3",

  border: "none",
  borderRadius: "$2",
  "&:hover": {
    cursor: "pointer",
  },

  variants: {
    type: {
      normal: {
        backgroundColor: "$gray",
        "&:hover": {
          backgroundColor: "$grayDark",
        },
      },
      red: {
        backgroundColor: "$red",
        "&:hover": {
          backgroundColor: "$redDark",
        },
      },
      green: {
        backgroundColor: "$walkLightGreen",
        "&:hover": {
          backgroundColor: "$walkGreen",
        },
      },
    },
  },

  defaultVariants: {
    type: "normal",
  },
});

export default Button;
