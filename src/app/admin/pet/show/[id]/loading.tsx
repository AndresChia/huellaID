import { Box, Container, Paper, Skeleton, Grid2 } from "@mui/material";

export default function Loading() {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Skeleton variant="text" width={300} height={60} />
        <Paper sx={{ p: 3 }}>
          <Grid2 container spacing={3}>
            <Grid2 size={{ xs: 12, sm: 12 }}>
              <Skeleton variant="rectangular" width={150} height={150} />
            </Grid2>
            {[...Array(8)].map((_, index) => (
              <Grid2 size={{ xs: 12, sm: 6 }} key={index}>
                <Skeleton variant="text" width={120} height={24} />
                <Skeleton variant="text" width={200} height={24} />
              </Grid2>
            ))}
          </Grid2>
        </Paper>
        <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
          <Skeleton variant="rectangular" width={120} height={36} />
          <Skeleton variant="rectangular" width={120} height={36} />
        </Box>
      </Box>
    </Container>
  );
}
