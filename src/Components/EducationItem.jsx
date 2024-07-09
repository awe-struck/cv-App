import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import { useState } from 'react';

import '../styles/EducationItem.css'

export default function EducationItem({setEducation, removeEducationSection, educationItem}) {

    const [educationInfo, setEducationInfo] = useState(educationItem)
    const updateInputInfo = (evt) => {
        const { name, value } = evt.target;
        setEducationInfo({ ...educationInfo, [name]: value });
        setEducation((prevEdu) =>
          prevEdu.map((item) =>
            item.id === educationItem.id ? { ...item, [name]: value } : item
          )
        );
      };

    const handleRemoveExperience = (evt) => {
        removeEducationSection(educationItem.id)
    }

    return (
      <>
        <div className='educationInputs'>
          <div className="educationItems">
              <TextField
                  id="outlined-multiline-flexible"
                  label="School"
                  placeholder="School"
                  name="school"
                  value={educationItem.school}
                  onChange={updateInputInfo}
              />
              <TextField
                  id="outlined-multiline-flexible"
                  label="Degree"
                  placeholder="Degree"
                  name="degree"
                  value={educationItem.degree}
                  onChange={updateInputInfo}
              />
                  <TextField
                  id="outlined-multiline-flexible"
                  label="Location"
                  placeholder="Location"
                  name="location"
                  value={educationItem.location}
                  onChange={updateInputInfo}
              />
              

          </div>  
          <button
            onClick={(evt) => handleRemoveExperience(evt)}
          >
            <CloseTwoToneIcon/>
          </button>
        </div>
      </>
    );
}