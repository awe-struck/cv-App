import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import '../styles/PersonalInfo.css'


function PersonalInfo({personalInfo, setPersonalInfo}) {
    const [info, setInfo] = useState(personalInfo)

    const updateInputInfo = (evt) => {
        const {name, value} = evt.target
        
        setInfo(prevInfo => (
            {...prevInfo, [name]: value}
            
        ))

        setPersonalInfo(prevPersonalInfo => (
            {...prevPersonalInfo, [name]: value}
        ))
        
    }

    return (
                <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                    marginBottom: '15px'
                }}
                noValidate
                autoComplete="off"
                >
                    <h2>GENERAL INFO</h2>
                <div className='personalInfoSection'>
                    <div className='personalInfoInputs'>
                        <TextField
                            id="outlined-multiline-flexible"
                            name="firstName"
                            label="First Name"
                            placeholder="First Name"
                            value={personalInfo.firstName}
                            onChange={updateInputInfo} 
                        />
                        <TextField
                            id="outlined-multiline-flexible"
                            name="lastName"
                            label="Last Name"
                            placeholder="Last Name"
                            value={personalInfo.lastName}
                            onChange={updateInputInfo}    
                        />
                        <TextField
                            id="outlined-multiline-flexible"
                            name="email"
                            label="Email"
                            placeholder="Email"
                            value={personalInfo.email}
                            onChange={updateInputInfo} 
                        />
                        <TextField
                            id="outlined-multiline-flexible"
                            name="phone"
                            label="Phone Number"
                            placeholder="Phone Number"
                            value={personalInfo.phone}
                            onChange={updateInputInfo} 
                        />
                        <TextField
                            id="outlined-multiline-flexible"
                            name="location"
                            label="Location"
                            placeholder="Location"
                            value={personalInfo.location}
                            onChange={updateInputInfo} 
                        />
                        <TextField
                            id="outlined-multiline-flexible"
                            name="website"
                            label="Website"
                            placeholder="Website" 
                            value={personalInfo.website}
                            onChange={updateInputInfo} 
                        />
                    </div>
                </div>
            </Box>

    )
}

export default PersonalInfo