import React from 'react'
import { Card,CardHeader,CardContent,Typography,Grid,Divider } from '@material-ui/core'
import usestyles from './style'
import Form from './form/form'
import List from './list/list'
function Main() {
    const classes = usestyles()
  return (
    <Card className={classes.root}>
        <CardHeader title="Expense Tracker" subheader="powered by speechly"/>
        <CardContent>
            <Typography align='center' varient="h5">
                Total Balance : $100
            </Typography> 
            <Typography variant='subtitle' style={{lineheight:'1.5rem',marginTop:'20px'}}>
                {/*infocard */}
                Try saying : Add income for $100 in category salary of Monday
            </Typography>
            <Divider>

            </Divider>
            {/* // to design a form */}
            <Form/>

        </CardContent>  
        <CardContent className={classes.cartContent}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <List/>
                </Grid>
            </Grid>
        </CardContent>  
    </Card>
  )
}

export default Main