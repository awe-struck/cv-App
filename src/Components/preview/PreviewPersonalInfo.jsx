import '../../styles/previewStyles/PreviewPersonalInfo.css'

export default function PreviewPersonalInfo({personalInfo}) {
        return (
            
        <div>
            {personalInfo.legnth == 0 ? (
                <p>No General Infomation to display</p>) : (
                    <>
                        <p id="name">{personalInfo.firstName} {personalInfo.lastName}</p>
                        <span id='email'>{personalInfo.email} | </span>
                        <span id='phone'>{personalInfo.phone} | </span>
                        <span id='location'>{personalInfo.location} | </span>
                        <span id='website'>{personalInfo.website}</span>
                        <hr />
                    </>
                )
            }

        </div>
        )
}


