import { useState } from "react"
import { Slider, Box, TextField, Button, Typography } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles';
import { EnergySavingsLeaf } from "@mui/icons-material";

const Widget = styled('div')(({ theme }) => ({
    padding: 20,
    paddingBottom: 0,
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
    const [totalSum, setTotalSum] = useState(0)

    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }

    const handleSliderChange = (_, value) => {
        setNewValue(value);
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setNewFormValues((pre) => ({
                ...pre,
                [name]: value
        }))
        setSubmitted(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let { amount, year } = newFormValues
        const divident = newValue / 100 + 1 
        
        for (let i=0; i<year; i++){
            amount = amount * divident
        }
        setTotalSum(parseInt(amount))
        setSubmitted(true)
    }

    const handleFocus = (event) => {
        event.target.select()
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Widget>
                <form onSubmit={handleSubmit}>
                    <Box sx={{ width: '100%' }}>
                        <Box component='div' sx={{width: '100%'}}>
                            <TextField 
                                className="formValues" 
                                id="investment"
                                label='Alkusijoitus'
                                name="amount"
                                variant='standard' 
                                value={newFormValues.amount}
                                onChange={handleChange}
                                onFocus={handleFocus}
                            />
                            <TextField
                                className="formValues"
                                id="years"
                                label='Sijousaika (vuotta)'
                                variant="standard"
                                name="year"
                                value={newFormValues.year}
                                onChange={handleChange}
                                onFocus={handleFocus}
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
                            <Typography variant='h4' sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2}}>
                                {submitted ? `${totalSum.toLocaleString()}€` : `${totalSum.toLocaleString()}€`}
                            </Typography>
                        </Box>
                    </Box>
                </form>
            </Widget>
        </Box>
    );
}