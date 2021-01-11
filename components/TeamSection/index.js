import TeamProfileCard from '../common/TeamProfileCard';
import './styles/teamsection.module.scss';

const TeamSection = () => {
    return (
    <div className="teamSectionContainer">
        <div className="title">Meet your Representatives  for the 2020-21 SRC</div>
        <div className="subtitle">Making your time at ALU count</div>
        <div className="teamCardArea">
            <TeamProfileCard />
        </div>
    </div>)
}

export default TeamSection;