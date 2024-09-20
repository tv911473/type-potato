import { Box, Button, TextField } from "@mui/material"
import React, { useState } from "react"
import Stack from "@mui/material/Stack"

const ContactForm: React.FC = () => {
  const [email, setEmail] = useState<string>("")
  const [message, setMessage] = useState<string>("")

  const Submit = () => {
    console.log({ email })
    console.log({ message })
  }

  return (
    <Box
      sx={{ padding: 2, maxWidth: 400, margin: "auto", textAlign: "center" }}
    >
      <form
        className="form"
        onSubmit={e => e.preventDefault()}
      >
        <Stack spacing={2}>
          <TextField
            type="email"
            id="email"
            variant="outlined"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            id="text"
            variant="outlined"
            placeholder="Your message..."
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <Button
            name="send-button"
            variant="contained"
            type="button"
            onClick={Submit}
          >
            Send
          </Button>
        </Stack>
      </form>
    </Box>
  )
}

export default ContactForm
