import PreviewPersonalInfo from './PreviewPersonalInfo';
import PreviewSkills from './PreviewSkills';
import PreviewExperience from './PreviewExperience';
import PreviewEducation from './PreviewEducation';
import '../../styles/previewStyles/PreviewResume.css'

import Box from '@mui/material/Box';

export default function PreviewResume({ personalInfo, skills, experience, education }) {
    return  (
        <div className="cv-preview-container">

            <PreviewPersonalInfo personalInfo={personalInfo} />
            <PreviewSkills skills={skills} />
            <PreviewExperience experience={experience} />
            <PreviewEducation education={education} />
        </div>
    )

}
