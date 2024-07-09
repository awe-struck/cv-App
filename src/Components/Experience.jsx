import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ExperienceItem from './ExperienceItem';
import '../styles/Experience.css'

export default function Experience({experience, setExperience, addExperienceSection, removeExperienceSection}) {
  const handleAddExperience = (evt) => {
    evt.preventDefault()
    addExperienceSection();
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
            <h2 className="title">WORK EXPERIENCE</h2>
          <div className="experienceSection">
            {experience.length === 0 ? (
              <p>click plus to add a segment</p>
            ) : (
                <List>
                  {experience.map((experienceItem) => {
                    return (
                      <ExperienceItem
                      key={experienceItem.id}
                      experienceItem={experienceItem} 
                      setExperience={setExperience}
                      removeExperience={removeExperienceSection}
                      />
                      
                    );
                  })}
                </List>
            )}
            <button
              onClick={(evt) => handleAddExperience(evt)}
            >
              <AddTwoToneIcon/>
            </button>
          </div>
      </Box>
  )
}
