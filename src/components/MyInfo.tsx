import { Box, Grid2, Stack, Typography } from "@mui/material"
import Paper from "@mui/material/Paper"
import { styled } from "@mui/material/styles"
import React from "react"

interface Properties {
  name: string
  hobbies: string[]
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}))

const MyInfo: React.FC<Properties> = ({ name, hobbies }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Grid2
        container
        spacing={{ xs: 20, md: 30 }}
        columns={{ xs: 4, sm: 12 }}
      >
        <Stack spacing={2}>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", textTransform: "uppercase" }}
          >
            {name}
          </Typography>
          <Item>
            <Typography variant="h6">Hobbies:</Typography>
          </Item>
          <Grid2
            container
            spacing={2}
          >
            {hobbies.map((hobby, index) => (
              <Grid2 key={index}>
                <Item>{hobby}</Item>
              </Grid2>
            ))}
          </Grid2>
        </Stack>
      </Grid2>
    </Box>
  )
}
export default MyInfo
