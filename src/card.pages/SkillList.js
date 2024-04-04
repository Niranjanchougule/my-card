import "./SkillList.scss";
import Skill from "./Skill";

function SkillList(props) {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪🏻" color="#123456" />
      <Skill skill="HTML+SCSS" emoji="💪🏻" color="orangered" />
      <Skill skill="JavaScript" emoji="💪🏻" color="yellow" />
      <Skill skill="Svelte" emoji="💪🏻" color="red" />
    </div>
  );
}
export default SkillList;
