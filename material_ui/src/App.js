import { useState } from 'react';

import Button from '@material-ui/core/Button'
import { ButtonGroup } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import { FormControlLabel } from '@material-ui/core';
import { TextField } from '@material-ui/core';

import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles';
import { orange, green } from '@material-ui/core/colors';
import 'fontsource-roboto'

import { Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import { IconButton } from '@material-ui/core';

import './App.css';


const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '5px 30px',
    marginBottom: 15
  }
})

const theme = createTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 15,
    }
  },
  palette:{
    primary: {
      main: orange[500],
    },
    // secondary: {
    //   main: green[400]
    // }
  }
})

function ButtonStyle() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

function CheckboxExample() {
  const [checked, setChecked] = useState(true)

  return (
    <FormControlLabel 
      control={
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          icon={<DeleteIcon />}
          checkedIcon={<SaveIcon />}
          inputProps={{
            'aria-label': 'secondary-checkbox'
          }}
        />
      }
      label='Testing Checkbox'
    />

      
  );
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='lg'>
        <div className='App'>
          <header className='App-header'>
            <AppBar color='secondary'>
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant='h6'>
                  MUI Themeing
                </Typography>
              </Toolbar>
            </AppBar>
            <Typography variant='h2' component='div'> 
              Welcome to MUI
            </Typography>
            <Typography variant='subtitle1'> 
              Learn how to use Material UI
            </Typography>
            <ButtonStyle />
            <Grid container spacing={2} justify='center'>
              <Grid item xs={3} sm={6}>
                <Paper style={{height:75, width:'100%'}}/>
              </Grid>
              <Grid item xs={4} sm={6}>
                <Paper style={{height:75, width:'100%'}}/>
              </Grid>
              <Grid item xs={3} lg={12}>
                <Paper style={{height:75, width:'100%'}}/>
              </Grid>

            </Grid>
            

            <TextField
              variant='filled'
              color='secondary'
              type='email'
              label='The Email'
              value='test@test.com'
            />
            <CheckboxExample />
            <ButtonGroup>
              <Button
                startIcon={<SaveIcon />}
                // endIcon={<SaveIcon />}
                // onClick={() => alert('Saved')}
                variant='contained'
                color='primary'
                size='large'
                // style={{
                //   fontSize: 24
                // }}
                >
                Save
              </Button>
              <Button
                startIcon={<DeleteIcon />}
                variant='contained'
                color='secondary'
                size='large'>
                Discard
              </Button>

            </ButtonGroup>
              
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
