import { Box, Button, Card, CardActions, CardContent, Chip, Container, Typography } from "@mui/material"
import Grid from "@mui/material/Grid2"

const ProjectPage = () => {
  return (
    <Container sx={{ flex: 1, textAlign: "start" }}>
      <Typography variant="h2" sx={{ padding: "3rem 0" }}>My Portfolio</Typography>
      <Typography variant="h5">Here's a collection of projects that highlight my skills in full-stack development, problem-solving, and creating impactful solutions.</Typography>
      <Grid container spacing={1} sx={{ padding: "2rem 0" }}>
        <Grid size={{ xs: 12, md: 6 }} >
          <Card variant="outlined" sx={{ width: "100%" }}>
            <CardContent>
              <Typography sx={{ color: "text.secondary" }}>
                Side Project
              </Typography>
              <Typography variant="h5" sx={{ padding: "1rem 0" }}>
                Grocery Price Tracker
              </Typography>
              <Typography>
                A web app that allows users to record and track grocery price history over time, optimizing their shopping experience.
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, padding: "1rem 0" }}>
                <Chip label="React" />
                <Chip label="TypeScript" />
                <Chip label="Firebase" />
                <Chip label="React" />
              </Box>
            </CardContent>
            <CardActions>
              <Button href="https://grocery-price-tracker.pages.dev/" target="_blank">Live Demo</Button>
              <Button href="https://github.com/voidkudo/grocery-price-tracker" target="_blank">GitHub Repo</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} >
          <Card variant="outlined" sx={{ width: "100%" }}>
            <CardContent>
              <Typography sx={{ color: "text.secondary" }}>
                Work Project
              </Typography>
              <Typography variant="h5" sx={{ padding: "1rem 0" }}>
                Self-service Retail Kiosk
              </Typography>
              <Typography>
                Developed a versatile self-service kiosk solution designed to streamline retail operations and enhance customer experiences.
                </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, padding: "1rem 0" }}>
                <Chip label="React" />
                <Chip label="TypeScript" />
                <Chip label="Electron" />
                <Chip label=".Net" />
                <Chip label="C#" />
                <Chip label="Payment API" />
              </Box>
            </CardContent>
            <CardActions>
              <Button href="https://milliontech.com/media/%e3%80%90capital%e8%b3%87%e6%9c%ac%e9%9b%9c%e8%aa%8c%e3%80%91%e8%bf%8e%e6%8e%a5%e6%97%85%e9%81%8a%e6%a5%ad%e5%be%a9%e7%94%a6-%e5%bb%9f%e5%ae%87%e9%80%b2%e8%a1%8c%e5%82%b3%e7%b5%b1%e8%88%87%e7%a7%91/" target="_blank">
                Details
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} >
          <Card variant="outlined" sx={{ width: "100%" }}>
            <CardContent>
              <Typography sx={{ color: "text.secondary" }}>
                Work Project
              </Typography>
              <Typography variant="h5" sx={{ padding: "1rem 0" }}>
                Store Handheld System
              </Typography>
              <Typography>
              Developed a Store Handheld System to streamline inventory management processes, combining an Android application for frontline users and a server program for backend operations.<br/>
              <br/>
              This system is designed to improve efficiency in stock-related tasks while maintaining seamless integration with external databases and APIs.
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, padding: "1rem 0" }}>
                <Chip label="Android Studio" />
                <Chip label="Java" />
                <Chip label=".Net" />
                <Chip label="API Endpoints" />
                <Chip label="Windows Forms" />
                <Chip label="C#" />
                <Chip label="SQL Server" />
                <Chip label="Middleware" />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container >
  )
}

export default ProjectPage