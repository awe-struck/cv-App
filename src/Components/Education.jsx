import Box from '@mui/material/Box';
import List from '@mui/material/List';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import EducationItem from './EducationItem'
import '../styles/Education.css'

export default function Education({education, setEducation,addEducationSection,removeEducationSection}) {
    const handleAddEducation = (evt) => {
        evt.preventDefault()
        addEducationSection()
    }
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <h2> EDUCATION</h2>
            <div className='educationSection'>
                <div className='educationForm'>

           
                {education.length === 0 ? 
                    (<p>Click the Plus Button to add an education section</p>) : (
                            <List>
                                {education.map((educationItem) => {
                                    return (
                                        <EducationItem
                                        key={educationItem.id}
                                        educationItem={educationItem}
                                        setEducation={setEducation}
                                        removeEducationSection={removeEducationSection}
                                        />
                                    )
                                })}
                            </List>
                        
                    )
                }
                     </div>
                <button onClick={(evt) => handleAddEducation(evt)}>
                    <AddTwoToneIcon/>
                </button>
            </div> 
        </Box>
    );
}

