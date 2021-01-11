import './styles/actionCard.module.scss';
import Image from '../Image';

const actions = [{
    icon: '/assets/idea.svg',
    title: 'Share your thoughts',
},
{
    icon: '/assets/sports.svg',
    title: 'Sports Activities',
},
{
    icon: '/assets/volunteer.svg',
    title: '#I ♥ Volunteering',
}
]

const ActionCard = () => {
    return (
        <>
        {actions.map((action, index) => (
            <div className={`action_card bg_${index}`} key={index}>
                <div>
                    <Image imgsrc={action.icon} alt="action_icon" className="action_icon" />
                </div>
                <div className="action_title">{action.title}</div>
            </div>))}
        </>
    )
}

export default ActionCard;