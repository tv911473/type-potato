import { Box, Button, Stack, TextField, Typography } from "@mui/material"
import { FormEvent, useState, useEffect } from "react"

export default function MyForm() {
  const [form, setForm] = useState({ username: "", password: "" })
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // console.log({
    //   username,
    //   password,
    // });
    console.log(form) // console.log -> useState
  }

  // useEffect -> kaivitub iga kord kui lisandub uus parameeter
  // useEffect(() => {
  //   console.log("Renders every time");
  // });

  // dependency list []
  useEffect(() => {
    console.log("Renders first time")
  }, [])

  // dependency list [username]
  // useEffect(() => {
  //   console.log("Renders first time username changes");
  // }, [username]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // iga kord kui uueneb form siis sailib ka eelmine form -> username sailib kui passwordi sisestada
    setForm(prevForm => ({
      ...prevForm,
      [event.target.name]: event.target.value,
    }))
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Stack gap={2}>
          <Typography
            variant="h3"
            sx={{ textAlign: "center", textTransform: "uppercase" }}
          >
            Login
          </Typography>
          <TextField
            name="username"
            label="Username"
            variant="outlined"
            // onChange={(event) => setUsername(event.target.value)}
            onChange={handleChange}
            // value={form.username}
          />
          <TextField
            name="password"
            label="Password"
            variant="outlined"
            // onChange={(event) => setPassword(event.target.value)}
            onChange={handleChange}
            // value={form.password}
          />
          <Button
            variant="contained"
            type="submit"
          >
            Login
          </Button>
        </Stack>
      </form>
    </Box>
  )
}
