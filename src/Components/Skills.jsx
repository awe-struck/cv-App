import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import '../styles/Skills.css'


function Skills({skills, setSkills}) {

    const [skillsInfo, setSkillsInfo] = useState(skills)

    const updateInputInfo = (evt) => {
        const {value} = evt.target
        setSkillsInfo(value) 
        setSkills(value)
    }

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: { xs: '25ch', sm: '50ch', md: '80ch' } },
                marginBottom: '15px'
            }}
            noValidate
            autoComplete="off"
        >
            <div className='skillSection'>
                <h2>SKILLS & TOOLS</h2>
                <TextField
                
                    id="outlined-multiline-static"
                    label="Skills"
                    placeholder='List any relevant skills, knowledge or tools'
                    name="skills"
                    multiline
                    rows={4}
                    value={skills}
                    onChange={updateInputInfo}
                />

            </div>
        </Box>
    )
}

export default Skills