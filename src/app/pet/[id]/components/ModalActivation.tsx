import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
} from "@mui/material";
import Link from "next/link";

interface ModalActivationProps {
  isOpen: boolean;
}

export default function ModalActivation({ isOpen }: ModalActivationProps) {
  return (
    <div
      className={`fixed inset-0 bg-black/50 z-40 ${!isOpen ? "block" : "hidden"}`}
    >
      <Dialog open={!isOpen} maxWidth="sm" fullWidth>
        <DialogTitle className="text-center text-primary font-bold">
          Activación Pendiente
        </DialogTitle>
        <DialogContent>
          <div className="text-center space-y-4">
            <Typography variant="body1" className="mb-4">
              Tu mascota ya está registrada en nuestro sistema, pero necesitas
              completar el proceso de activación para acceder a todas las
              funcionalidades.
            </Typography>
            <Link href="/contact" passHref className="w-full mt-2">
              <Button variant="contained" color="primary" fullWidth>
                Contactar Soporte
              </Button>
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
