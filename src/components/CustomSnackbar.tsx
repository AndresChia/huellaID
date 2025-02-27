import { Snackbar, Alert } from "@mui/material";
import { useState } from "react";

export interface SnackbarMessage {
  message: string;
  severity: "success" | "error" | "warning" | "info";
}

export const useCustomSnackbar = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState<SnackbarMessage>({
    message: "",
    severity: "success",
  });

  const showMessage = (newMessage: SnackbarMessage) => {
    setMessage(newMessage);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return {
    showMessage,
    SnackbarComponent: (
      <Snackbar
        open={open}
        autoHideDuration={message.severity === "error" ? 4000 : 2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity={message.severity}
          sx={{ width: "100%" }}
        >
          {message.message}
        </Alert>
      </Snackbar>
    ),
  };
};
