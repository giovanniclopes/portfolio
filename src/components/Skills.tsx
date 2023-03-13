import CssIcon from "../assets/icons/CssIcon";
import HtmlIcon from "../assets/icons/htmlIcon";
import JsIcon from "../assets/icons/JsIcon";
import WpIcon from "../assets/icons/wpIcon";
import SkillBox from "./SkillBlock";


export default function Skills() {
  return (
    <section id="#skills" className="flex flex-col items-center justify-center gap-5 mt-8">
      <div>
        <h2 className="text-5xl text-red-500 font-bold">Skills</h2>
      </div>
      <div className="flex flex-row gap-2">
        <SkillBox title={"HTML"} icon={<HtmlIcon />} />
        <SkillBox title={"CSS"} icon={<CssIcon />} />
      </div>
      <div className="flex flex-row gap-2">
        <SkillBox title={"JavaScript"} icon={<JsIcon /> } />
        <SkillBox title={"WordPress"} icon={<WpIcon />} />
      </div>
    </section>
  );
}
