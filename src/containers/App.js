
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ p: 2 }}>
        <Stack
          sx={{ flexGrow: '1' }}
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Button variant="contained">Contained</Button>
          <Button variant="contained" disabled>
            Disabled
          </Button>
          <Button variant="contained" href="#contained-buttons">
            Link
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}

export default App;
