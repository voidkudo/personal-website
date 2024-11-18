import { Box, Button, Card, CardActions, CardContent, Chip, Container, Divider, Typography } from "@mui/material"
import Grid from "@mui/material/Grid2"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const AboutPage = () => {
  return (
    <Container sx={{ flex: 1, textAlign: "start" }}>
      <Typography variant="h2" sx={{ padding: "3rem 0" }}>About Me</Typography>
      <Typography
        variant="h4"
        component="p">
        Hi, I'm Toby!<br />
        <br />
        Born and raised in the vibrant city of Hong Kong, I recently relocated to Toronto, Canada, to embrace new opportunities and challenges in the tech industry.<br/>
        <br />
        With over 2 years of experience in software development, I specialize in creating scalable, user-friendly applications that solve real-world problems.<br />
        <br />
        My tech journey began when I discovered my love for coding in high school. Since then, I've honed my skills through hands-on projects and professional roles, such as my time at Million Tech Development Ltd., where I spearheaded multi-platform projects and mentored a team of developers.<br />
        <br />
        My recent move to Toronto has opened up exciting opportunities to contribute to a dynamic and diverse tech community while expanding my expertise in full-stack development and cloud-based solutions.<br />
        <br />
        Growing up in Hong Kong, I was exposed to a fast-paced, innovation-driven environment that shaped my work ethic and problem-solving approach.<br/>
        <br />
        Moving to Toronto has introduced me to new perspectives, diverse cultures, and inspiring ideas that continue to fuel my passion for learning and creativity.<br/>
        <br/>
        When I'm not coding, I enjoy long-distance running, which helps me clear my mind, stay focused, and find inspiration for tackling complex challenges in my work.<br />
        <br />
      </Typography>
      <Typography variant="h5">Connect and learn more about me:</Typography>
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
      <Typography variant="h3">Education</Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: { xs: "center", md: "start" }, alignItems: "center", textAlign: { xs: "center", md: "start" }, padding: "2rem 0" }}>
        <img src="/CityU_logo.svg" height="128px" />
        <Box sx={{ padding: { xs: "1rem 0", md: "0 2rem" } }}>
          <Typography variant="h4">City University of Hong Kong</Typography>
          <Typography variant="h5">Bachelor of Engineering in Information Engineering</Typography>
          <Typography variant="h6">
            Sep 2018 - Jun 2022<br />
            GPA: 3.37 / 4.30
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ margin: "5rem 0" }} />
      <Typography variant="h3">Certificates</Typography>
      <Grid container spacing={1} sx={{ padding: "2rem 0" }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card variant="outlined" sx={{ width: "100%" }}>
            <CardContent>
              <Typography sx={{ color: "text.secondary" }}>
                Certificate
              </Typography>
              <Typography variant="h5" sx={{ padding: "1rem 0" }}>
                Microsoft Certified: DevOps Engineer Expert
              </Typography>
              <Typography>
                Skills measured:<br />
                <ul>
                  <li>Design and implement processes and communications</li>
                  <li>Design and implement a source control strategy</li>
                  <li>Design and implement build and release pipelines</li>
                  <li>Develop a security and compliance plan</li>
                  <li>Implement an instrumentation strategy</li>
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
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card variant="outlined" sx={{ width: "100%" }}>
            <CardContent>
              <Typography sx={{ color: "text.secondary" }}>
                Certificate
              </Typography>
              <Typography variant="h5" sx={{ padding: "1rem 0" }}>
                Microsoft Certified: Azure Developer Associate
              </Typography>
              <Typography>
                Skills measured:<br />
                <ul>
                  <li>Develop Azure compute solutions</li>
                  <li>Develop for Azure storage</li>
                  <li>Implement Azure security</li>
                  <li>Monitor, troubleshoot, and optimize Azure solutions</li>
                  <li>Connect to and consume Azure services and third-party services</li>
                </ul>
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, padding: "1rem 0" }}>
                <Chip label="Cloud" />
                <Chip label="Azure" />
                <Chip label="AZ-204" />
                <Chip label="Developer" />
              </Box>
            </CardContent>
            <CardActions>
              <Button href="https://learn.microsoft.com/credentials/certifications/azure-developer/" target="_blank">View Certification</Button>
              <Button href="https://learn.microsoft.com/api/credentials/share/en-us/TobyYeung-8289/52E7D71FACCE7C7E?sharingId=78CB81D0FAF43F21" target="_blank">View Credential</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

    </Container>
  )
}

export default AboutPage