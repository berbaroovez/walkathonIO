import * as Dialog from "@radix-ui/react-dialog";
import Button from "./Button/Button";
import { styled } from "../../stitches.config";
import { keyframes } from "@stitches/react";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Fieldset, InputField, Label } from "../InputField";

const IconButton = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 25,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "black",
  position: "absolute",
  top: 10,
  right: 10,

  "&:hover": { backgroundColor: "$walkLightGreen", cursor: "pointer" },
  "&:focus": { boxShadow: `0 0 0 2px $walkGreen` },
});
const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

const StyledOverlay = styled(Dialog.Overlay, {
  backgroundColor: "#5f5f5f",
  position: "fixed",
  inset: 0,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

const StyledContent = styled(Dialog.Content, {
  backgroundColor: "white",
  borderRadius: 6,
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "450px",
  maxHeight: "85vh",
  padding: 25,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  "&:focus": { outline: "none" },
});

const DialogTitle = styled(Dialog.Title, {
  fontSize: "$5",
  fontWeight: "bold",
  color: "black",
});

const DialogDescription = styled(Dialog.Description, {
  fontSize: "$2",
  color: "$grey",
});

const Module = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <Button type="red">New Walkathon</Button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <StyledOverlay />
      <StyledContent>
        <DialogTitle>New Walkathon</DialogTitle>
        <DialogDescription>Create a new walkathon event </DialogDescription>
        {/* <Dialog.Title>Walkathon Creation</Dialog.Title>
        <Dialog.Description />
        <Dialog.Close /> */}

        <Fieldset>
          <Label htmlFor="eventName">Event Name</Label>
          <InputField id="eventName" />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="username">Event Date</Label>
          <InputField id="username" defaultValue="@peduarte" />
        </Fieldset>

        <Dialog.Close asChild>
          <Button type="green">Create Event</Button>
        </Dialog.Close>
        <Dialog.Close asChild>
          <IconButton>
            <Cross2Icon />
          </IconButton>
        </Dialog.Close>
      </StyledContent>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Module;
