import React from 'react'
import { ListItem } from '../List'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { lightBlue } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    // color: theme.palette.text.secondary,
    color: 'black',
    backgroundColor: 'rgb(218, 219, 213)'
  },
  button: {
    padding: 50
  }
}))

function ViewHandyRequest ({
  service,
  description,
  status,
  uname,
  uemail,
  phoneNumber,
  Button
}) {
  const classes = useStyles()
  return (
    <ListItem>
      <Grid>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item md={8}>
              {/* <Paper className={classes.paper}> */}
              <h5>Name: {uname}</h5>
              <h5>Email: {uemail}</h5>
              <h5>PhoneNumber: {phoneNumber}</h5>
              <h5>Service: {service}</h5>
              <h5>Description: {description}</h5>
              <h5>Status: {status}</h5>
              <Grid>
              <Button className={classes.button}></Button>               
              </Grid>              
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </ListItem>
  )
}

export default ViewHandyRequest