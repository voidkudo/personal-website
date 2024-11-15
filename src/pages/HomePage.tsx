import { Box, Chip, Container, Divider, Typography } from "@mui/material"

const Skills = ["React",
  "TypeScript",
  "JavaScript",
  ".Net",
  "ASP.Net",
  "C#",
  "Android Studio",
  "Java",
  "SQL Server",
  "SQLITE",
  "Azure"]

const HomePage = () => {

  return (
    <Container sx={{ flex: 1 }}>
      <Typography
        variant="h2"
        sx={{ fontFamily: "UnifontEX", textAlign: "start", padding: "3rem 0" }}
      >
        Hello, my name is Toby.
      </Typography>
      <Typography
        variant="h4"
        component="p"
        sx={{ fontFamily: "UnifontEX", textAlign: "start" }}
      >
        I am a software developer with a strong background in leading multi-platform projects across web, mobile, and desktop.
        <br />
        <br />
        With experience designing high-performance solutions and mentoring teams, I focus on building secure, efficient applications that make a real impact.
        <br />
        <br />
        Based in Toronto, Canada. I'm passionate about continuous learning and creating innovative solutions in the tech world.
      </Typography>
      <Divider sx={{ margin: "5rem 0" }} />
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h3"
            sx={{ fontFamily: "UnifontEX", textAlign: "start" }}
          >
            Skills
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, padding: "2rem 0" }}>
            {
              Skills.map(skill => (
                <Chip key={skill} label={skill} sx={{ fontFamily: "UnifontEX", fontSize: "larger" }} />
              ))
            }
            <Chip label="etc..." sx={{ fontFamily: "UnifontEX", fontSize: "larger" }} />
          </Box>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h3"
            sx={{ fontFamily: "UnifontEX", textAlign: "start" }}
          >
            Highlights
          </Typography>
        </Box>
      </Box>
    </Container>
  )
}

export default HomePage