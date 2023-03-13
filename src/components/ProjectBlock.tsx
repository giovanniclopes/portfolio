import { Link } from "react-router-dom";

interface ProjectBlock {
  linkURL: string;
  imgURL: string;
  imgALT?: string;
  title: string;
  description: string;
}

export default function ProjectBlock(props: ProjectBlock) {
  return (
    <div>
      <Link to={props.linkURL} target="_blank">
        <div className="grid grid-cols-2 transition-all group">
          <div>
            <img
              className="rounded-md transition-all group-hover:opacity-75"
              src={props.imgURL}
              alt={props.imgALT}
            />
          </div>
          <div className="flex flex-col gap-10 items-start justify-center px-5">
            <div className="flex flex-col gap-3">
              <h3 className="text-3xl font-bold">{props.title}</h3>
              <p className="text-lg">"{props.description}"</p>
            </div>
            <div>
              <button className="bg-red-500 rounded-md p-4 px-16 transition-all hover:opacity-75">
                Conhecer
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}