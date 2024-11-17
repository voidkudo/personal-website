import { Box, Button, Card, CardActions, CardContent, Chip, Container, Divider, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const frontendSkills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Electron",
  "Android Studio",
  "Java",
  "Windows Forms",
  "HTML",
  "CSS",
]

const backendSkills = [
  ".Net",
  "ASP.Net",
  "C#",
  "Express.js",
  "Node.js",
  "Flask",
  "Django",
  "Python",
]

const databaseSkills = [
  "SQL Server",
  "SQLITE",
  "NoSQL",
  "Entity Framework",
  "ORM",
]

const otherSkills = [
  "Firebase",
  "Azure",
  "Git",
  "Jira",
]

const HomePage = () => {

  return (
    <Container sx={{ flex: 1, textAlign: "start" }}>
      <Typography
        variant="h2"
        sx={{ padding: "3rem 0" }}
      >
        Hello, my name is Toby.
      </Typography>
      <Typography
        variant="h4"
        component="p"
      >
        I am a full-stack software developer with a strong background in leading multi-platform projects across web, mobile, and desktop.<br />
        <br />
        With experience designing high-performance solutions and mentoring teams, I focus on building secure, efficient applications that make a real impact.<br />
        <br />
        Based in Toronto, Canada. I'm passionate about continuous learning and creating innovative solutions in the tech world.<br />
        <br />
      </Typography>
      <Typography variant="h5">Connect with me:</Typography>
      <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center", gap: 1, padding: "1rem 0" }}>
        <Button
          variant="contained"
          startIcon={<LinkedInIcon />}
          href="https://www.linkedin.com/in/tobyyeung/"
          target="_blank"
        >LindedIn</Button>
        <Button
          variant="contained"
          startIcon={<GitHubIcon />}
          href="https://github.com/voidkudo"
          target="_blank"
        >GitHub</Button>
      </Box>
      <Divider sx={{ margin: "5rem 0" }} />
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h3">Highlights</Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, padding: "2rem 0" }}>
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
                <Button href="https://grocery-price-tracker.pages.dev/" target="_blank">Visit Website</Button>
                <Button href="https://github.com/voidkudo/grocery-price-tracker" target="_blank">Source Code</Button>
              </CardActions>
            </Card>
            <Card variant="outlined" sx={{ width: "100%" }}>
              <CardContent>
                <Typography sx={{ color: "text.secondary" }}>
                  Certificate
                </Typography>
                <Typography variant="h5" sx={{ padding: "1rem 0" }}>
                  Microsoft Certified: DevOps Engineer Expert
                </Typography>
                <Typography>
                  This exam measures your ability to accomplish the following technical tasks:<br />
                  <ul>
                    <li>design and implement processes and communications</li>
                    <li>design and implement a source control strategy</li>
                    <li>design and implement build and release pipelines</li>
                    <li>develop a security and compliance plan</li>
                    <li>implement an instrumentation strategy</li>
                  </ul>
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, padding: "1rem 0" }}>
                  <Chip label="Cloud" />
                  <Chip label="Azure" />
                  <Chip label="AZ-400" />
                  <Chip label="DevOps" />
                </Box>
              </CardContent>
              <CardActions>
                <Button href="https://learn.microsoft.com/credentials/certifications/devops-engineer/" target="_blank">View Certification</Button>
                <Button href="https://learn.microsoft.com/api/credentials/share/en-us/TobyYeung-8289/294A9D30F21ABFB1?sharingId=78CB81D0FAF43F21" target="_blank">View Credential</Button>
              </CardActions>
            </Card>
          </Box>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h3">Skills</Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, padding: "2rem 0" }}>
            <Card variant="outlined" sx={{ width: "100%" }}>
              <CardContent>
                <Typography variant="h5" >Front-end</Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, padding: "2rem 0" }}>
                  {
                    frontendSkills.map(skill => (
                      <Chip key={skill} label={skill} sx={{ fontSize: "larger" }} />
                    ))
                  }
                </Box>
              </CardContent>
            </Card>
            <Card variant="outlined" sx={{ width: "100%" }}>
              <CardContent>
                <Typography variant="h5" >Back-end</Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, padding: "2rem 0" }}>
                  {
                    backendSkills.map(skill => (
                      <Chip key={skill} label={skill} sx={{ fontSize: "larger" }} />
                    ))
                  }
                </Box>
              </CardContent>
            </Card>
            <Card variant="outlined" sx={{ width: "100%" }}>
              <CardContent>
                <Typography variant="h5" >Database</Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, padding: "2rem 0" }}>
                  {
                    databaseSkills.map(skill => (
                      <Chip key={skill} label={skill} sx={{ fontSize: "larger" }} />
                    ))
                  }
                </Box>
              </CardContent>
            </Card>
            <Card variant="outlined" sx={{ width: "100%" }}>
              <CardContent>
                <Typography variant="h5" >Others</Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, padding: "2rem 0" }}>
                  {
                    otherSkills.map(skill => (
                      <Chip key={skill} label={skill} sx={{ fontSize: "larger" }} />
                    ))
                  }
                  <Chip label="and more..." sx={{ fontSize: "larger" }} />
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ margin: "5rem 0" }} />
    </Container>
  )
}

export default HomePage