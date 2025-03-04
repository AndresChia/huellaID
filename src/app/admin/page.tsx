import { ProtectedRoute } from "@/components/providers/ProtectedRoute";
import { Box, Container, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

import PetsTable from "./components/PetsTable";

export default function AdminDashboard() {
  const t = useTranslations();

  return (
    <ProtectedRoute>
      <Container maxWidth="lg">
        <Box className="" sx={{ mt: 4, mb: 4 }}>
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom className="text-primary">
              {t("admin.dashboard.welcome")}
            </Typography>
            <Typography className="text-primary" sx={{ mb: 4 }}>
              {t("admin.dashboard.description")}
            </Typography>
            <PetsTable />
          </Box>
        </Box>
      </Container>
    </ProtectedRoute>
  );
}
