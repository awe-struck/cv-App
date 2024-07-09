import { v4 as uuidv4 } from 'uuid'
import { useForm} from "react-hook-form"
import { useState, useEffect } from "react"


import Header from './Components/Header'
import PersonalInfo from "./Components/PersonalInfo"
import Skills from "./Components/Skills"
import Experience from "./Components/Experience"
import Education from "./Components/Education"
import PreviewResume from "./Components/preview/PreviewResume"
import './App.css'



function App() {
 
  // Toggle Button States
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  // const toggleValues = {isDarkMode, isPreviewMode}

  const changeColorMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const changePreviewMode = () => {
    setIsPreviewMode(!isPreviewMode)
  }

  // Personal Info Section
  const [personalInfo, setPersonalInfo] = useState(
    {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      location: '',
      website: '',
    }
)

  // Skill Section
  const [skills, setSkills] = useState('')

  // Experience Section 
  // Remove Experience Section
  const removeExperienceSection = (id) => {
    setExperience((prevExp)=> prevExp.filter(item=>item.id !== id))
  }

  // Add Experience Section
  const addExperienceSection = () => {
    setExperience((prevExp) => 
      [
        ...prevExp, 
        {
          id: uuidv4(),
          company: '',
          jobTitle: '',
          startDate: '',
          endDate: '',
          responsibilites:''
        }
      ])
  }

  const [experience, setExperience] = useState([
    {
      id: uuidv4(),
      company: '',
      jobTitle: '',
      startDate: '',
      endDate: '',
      responsibilites:''
    }
  ])

  // Education Section
  // Remove Education Section
  const removeEducationSection = (id) => {
    setEducation((prevEdu)=> prevEdu.filter(item=>item.id !== id))
  }
  // Add Education Section
  const addEducationSection = () => {
    setEducation((prevEdu) => [
        ...prevEdu, 
        {
          id: uuidv4(),
          school:'',
          degree:'',
          location:''
        }
      ])
  }


  const [education, setEducation] = useState([
    {
      id: uuidv4(),
      school:'',
      degree:'',
      location:''
    }
  ])

  // Print function
  const handlePrint = () => {
    window.print();
  };
  
//   <GeneralInfo 
//   toggleValues={toggleValues}
// />

const {register, control} = useForm()

  return (
    <div className={`resumeForm ${isDarkMode ? "darkMode": ""}`}>
        <Header 
          isDarkMode={isDarkMode} 
          isPreviewMode={isPreviewMode} 
          changeColorMode={changeColorMode} 
          changePreviewMode={changePreviewMode} 
          handlePrint={handlePrint}
        />

        {isPreviewMode ? (
            <PreviewResume
              personalInfo={personalInfo}
              skills={skills}
              experience={experience}
              education={education}
              
            />
          ) : (
            <div className='editForm'>
              <PersonalInfo
                personalInfo={personalInfo}
                setPersonalInfo={setPersonalInfo}
              />
              <Skills 
                skills={skills} 
                setSkills={setSkills}
              />
              <Experience 
                experience={experience}
                setExperience={setExperience}
                addExperienceSection={addExperienceSection}
                removeExperienceSection={removeExperienceSection}
                />
              <Education 
                education={education}
                setEducation={setEducation}
                addEducationSection={addEducationSection}
                removeEducationSection={removeEducationSection}
              />
            </div>
          )
        }
    </div>
  )
  
}

export default App
