import '../../styles/previewStyles/PreviewSkills.css'

export default function PreviewSkills({skills}) {
    return (
        
        <div className='skills-segment'>  
            <h2>Skills</h2>
            <hr />
            <p>{skills}</p>
        </div>
    )
}