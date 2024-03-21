import React from 'react'
import Details from './components/details/details'
import { Grid } from '@material-ui/core'
import useStyles from './ṣtyle'
import Main from './components/main/main'
function App() {
    const classes = useStyles()
  return (
    <div>
        <Grid className={classes.grid} container spacing={0} alignItems='center' justify='center' style={{height:'100vh'}}>
            <Grid item xs={12} sm={4}>
                <Details title="Income"/>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Main/>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Details title="Expanse"/>
            </Grid>
        </Grid>
    </div>
  )
} 

export default App