import '../../styles/previewStyles/PreviewEducation.css'

export default function PreviewEducation({education}) {
    return (
        <div className="cv-segment education">
          <h2>
            Education
          </h2>
          <hr />
          {education.length === 0
            ? 'No Education History Added'
            : education.map((item) => {
                return (
                  <div key={item.id} className="education-segment">
                    <div>
                      <p className="school">{item.school}</p>
                      <p className="degree">{item.degree}</p>
                    </div>
                    <p className="schoolLocation">{item.location}</p>
                   
                  </div>
                );
              })}
        </div>
      );
}
