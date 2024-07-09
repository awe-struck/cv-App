import '../../styles/previewStyles/PreviewExperience.css'

export default function PreviewExperience({experience}) {
    return (
        
    <>
        <h2>Experience</h2>
        <hr />
          {experience.length === 0
            ? 'No Education History Added'
            : experience.map((item) => {
                return (
                  <div key={item.id}>
                    <div className="experience-segment">
                      <div>
                        <span className="company">{item.company}</span>
                        <div className="jobTitile">{item.jobTitle}</div>
                      </div>
                      <div className="date">{item.startDate} - {item.endDate} </div>    
                    </div>
                    <div className="roles">{item.responsibilites}</div> 
                  </div>   
                );
              })}
    </>
    )
}