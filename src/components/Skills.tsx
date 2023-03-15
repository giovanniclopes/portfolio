import CssIcon from "../assets/icons/CssIcon";
import HtmlIcon from "../assets/icons/htmlIcon";
import JsIcon from "../assets/icons/JsIcon";
import WpIcon from "../assets/icons/wpIcon";
import SectionTitles from "./SectionTitles";
import SkillBox from "./SkillBlock";


export default function Skills() {
  return (
    <section id="skills" className="skills flex flex-col items-center justify-center gap-5 mt-8">
      <div className="my-5 mb-12">
        <SectionTitles title="Skills" />
      </div>
      <div className="flex flex-row gap-2 mbl:flex-col">
        <SkillBox title={"HTML"} icon={<HtmlIcon />} />
        <SkillBox title={"CSS"} icon={<CssIcon />} />
      </div>
      <div className="flex flex-row gap-2 mbl:flex-col">
        <SkillBox title={"JavaScript"} icon={<JsIcon /> } />
        <SkillBox title={"WordPress"} icon={<WpIcon />} />
      </div>
    </section>
  );
}
