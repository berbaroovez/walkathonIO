import { styled } from "../stitches.config";

const InputField = styled("input", {
  all: "unset",
  width: "100%",
  flex: "1",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 10px",
  fontSize: 15,
  lineHeight: 1,
  color: "black",
  boxShadow: `0 0 0 1px $grayDark`,
  height: 35,
  border: `1px solid $gray`,
  "&:focus": {
    boxShadow: `0 0 0 2px $grayDark`,
    border: `1px solid $walkGreen`,
  },
});

const Fieldset = styled("fieldset", {
  all: "unset",
  display: "flex",
  gap: 20,
  alignItems: "center",
  marginBottom: 15,
});

const Label = styled("label", {
  fontSize: 15,
  color: "black",
  width: 90,
  textAlign: "right",
});
export { InputField, Fieldset, Label };
