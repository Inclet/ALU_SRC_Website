import './styles/teamProfileCard.module.scss';
import Image from '../Image';

const srcLeaders = [{
    name: 'Nusone Perkins',
    role: 'President',
    profile: '/assets/ALU_logo.png'
},
{
    name: 'Alhaji Kargbo',
    role: 'Vice President',
    profile: '/assets/ALU_logo.png'
},
{
    name: 'Emmanuel Minja',
    role: 'Secretary',
    profile: '/assets/ALU_logo.png'
},
{
    name: 'Temitope Onenuga',
    role: 'Treasurer',
    profile: '/assets/ALU_logo.png'
},
{
    name: 'Temitope Onenuga',
    role: 'Treasurer',
    profile: '/assets/ALU_logo.png'
},
{
    name: 'Temitope Onenuga',
    role: 'Treasurer',
    profile: '/assets/ALU_logo.png'
}
]

const TeamProfileCards = () => {
    return  (
        <>
            {srcLeaders.map( (leader, index) => (
                <div className="card" key={index}>
                <Image imgsrc={leader.profile} alt="team_pp" className="teamProfile" />
                <div className="name">{leader.name}</div>
                <div className="role">{leader.role}</div>
                <div className="hr"/>
                <div className="social_icon_container">
                    <div><Image imgsrc="/assets/email.svg" alt="email_icon" className="social_icon" /></div>
                    <div><Image imgsrc="/assets/facebook.svg" alt="facebook_icon" className="social_icon" /></div>
                    <div><Image imgsrc="/assets/info.svg" alt="info_icon" className="social_icon" /></div>
                </div>
            </div>
            ))}
        </>
    )
}

export default TeamProfileCards;