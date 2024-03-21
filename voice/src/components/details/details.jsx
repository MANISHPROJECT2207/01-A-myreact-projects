import React from 'react'
import {Card,CardHeader,CardContent,Typography} from '@material-ui/core'
import { Doughnut } from 'react-chartjs-2';
import useStyles from './style'
const Details = ({title}) => {
    const classes=useStyles()
  return (
    <Card className={(title === "Expanse") ? classes.expense : classes.income}>
        <CardHeader title={title}/>
        <CardContent>
            <Typography varient="h5">$50</Typography>
            {/* <Doughnut data="data" /> */}
        </CardContent>
    </Card>
  )
}

export default Details
