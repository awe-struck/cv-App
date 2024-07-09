import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import { useState } from 'react';
import '../styles/ExperienceItem.css'

export default function ExperienceItem({  removeExperience, setExperience, experienceItem}) {
    const [experienceInfo, setExperienceInfo ] = useState(experienceItem)
    const updateInputInfo = (evt) => {
        const {name, value} = evt.target
        setExperienceInfo(prevInfo => (
            {...prevInfo, [name]: value}
        ))

        setExperience(prevExp =>
            prevExp.map(item => (item.id === experienceItem.id ? { ...item, [name]: value } : item))
          );
     }
 
    const handleRemoveExperience = (evt) => {
        evt.preventDefault()
        removeExperience(experienceItem.id);
    }

    return (
        <>
            <div className='experienceInputs'>
                <div className='experienceItems'>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Company"
                        placeholder="Company"
                        name="company"
                        value={experienceItem.company}
                        onChange={updateInputInfo}
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Job Title"
                        placeholder="Job Title"
                        name="jobTitle"
                        value={experienceItem.jobTitle}
                        onChange={updateInputInfo}
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Start Date"
                        placeholder="Start Date"
                        name="startDate"
                        value={experienceItem.startDate}
                        onChange={updateInputInfo}
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="End Date"
                        placeholder="End Date"
                        name="endDate"
                        value={experienceItem.endDate}
                        onChange={updateInputInfo}
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Responsibilites"
                        placeholder="Responsibilites"
                        name="responsibilites"
                        value={experienceItem.responsibilites}
                        onChange={updateInputInfo}
                    />
                </div>
                <button
                    onClick={(e) => handleRemoveExperience(e)}
                >
                    <CloseTwoToneIcon/>
                </button>
            </div>
        </>
    )
}