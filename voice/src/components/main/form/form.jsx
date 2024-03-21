import React from 'react'
import usestyle from './style'
import { TextField,Typography,Grid,Button,FormControl,InputLabel,Select,MenuItem } from '@material-ui/core'
function Form() {
    const classes = usestyle()
  return (
    <Grid  container spacing={2} className={classes.form}>
        <Grid  item xs={12}>
            <Typography align='center' variant="subtitle2" gutterBottom>
                ...
            </Typography>
        </Grid>
        <Grid item xs={6}>
            <FormControl  fullWidth className={classes.inputBox}>
                <InputLabel>
                    Type
                </InputLabel>
                <Select>
                    <MenuItem value="Income">
                        Income
                    </MenuItem>
                    <MenuItem value="Expense">
                        Expense
                    </MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6}>
            <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select>
                <MenuItem value="business">
                        Business
                    </MenuItem>
                    <MenuItem value="salary">
                        Salary
                    </MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6}>
            <TextField type='number'  label='Amount' fullWidth/>
        </Grid>
        <Grid item xs={6}>
            <TextField type='date'  label='Date' fullWidth/>
        </Grid>
        <Button className={classes.button} variant='outlined' color='primary' fullWidth>Create</Button>
    </Grid>
  )
}

export default Form