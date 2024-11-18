import { Container, Typography } from "@mui/material"

const ResumePage = () => {
  return (
    <Container sx={{ flex: 1, textAlign: "start", display: "flex", flexDirection: "column" }}>
      <Typography variant="h2" sx={{ padding: "3rem 0" }}>My Resume</Typography>
      <Typography variant="h5">Below is a preview of my resume. You can also download it for your reference!</Typography>
      <iframe src="https://drive.google.com/file/d/1xUcKjkTfglLN6MQ2aLNVPL3PU2YqN1Es/preview" style={{ flex: 1 }} allow="autoplay" />
    </Container>
  )
}

export default ResumePage