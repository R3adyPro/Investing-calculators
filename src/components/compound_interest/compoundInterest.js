import { useState } from "react"
import { Slider, Box, TextField, Button, Typography } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles';

const Widget = styled('div')(({ theme }) => ({
    padding: 20,
    borderRadius: 10,
    width: 343,
    maxWidth: '100%',
    margin: 'auto',
    position: 'relative',
    zIndex: 1,
    backgroundColor: 'white',
    overflow: 'hidden',
}));

export default function CompoundInterest() {

    const [newValue, setNewValue] = useState(8)
    const [newFormValues, setNewFormValues] = useState({amount: '', year: ''})
    const [submitted, setSubmitted] = useState(false)
    let value = 0


    const handleSliderChange = (_, value) => {
        setNewValue(value);
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setNewFormValues((pre) => ({
                ...pre,
                [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setSubmitted(true)
    }

    const handleFocus = (event) => {
        event.target.select()
    }

    return(
        <Box sx={{width: '100%'}}>
            <Widget>
                <form onSubmit={handleSubmit}>
                    <Box sx={{width: '100%'}}>
                        <Box component='form' sx={{width: '100%'}}>
                            <TextField 
                                className="formValues" 
                                id="investment"
                                label='Summa'
                                name="amount"
                                variant='standard' 
                                value={newFormValues.amount}
                                onChange={handleChange}
                                onFocus={handleFocus}
                            />
                            <TextField
                                className="formValues"
                                id="years"
                                label='Vuosi'
                                variant="standard"
                                name="year"
                                value={newFormValues.year}
                                onChange={handleChange}
                            />
                        </Box>
                        <Box sx={{paddingTop:1.5, paddingBottom: 1.5}}>
                            <Slider
                                aria-label="Return"
                                defaultValue={8}
                                value={newValue}
                                step={1}
                                min={0}
                                max={50}
                                valueLabelDisplay="auto"
                                onChange={handleSliderChange}
                                className="interestSlider"
                            />
                        </Box>
                        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Button variant='contained' size='large' type="submit">Laske</Button>
                        </Box>
                        <Box>
                            <Typography variant='h2'>
                                {submitted ? value : value}
                            </Typography>
                        </Box>
                    </Box>
                </form>
            </Widget>
        </Box>
    )
}