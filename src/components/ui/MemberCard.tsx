import { IconFlagFilled, IconMailFilled } from "@tabler/icons-react";
import AcademicIcon from "../../assets/academic-icon";

export default function Card({
  member,
}: {
  member: {
    image: string;
    name: string;
    role?: string;
    department?: string;
    email?: string;
  };
}) {
  return (
    <div className="relative flex flex-col justify-center shadow-md hover:shadow-lg items-center rounded-lg transition-shadow duration-300">
      <img
        src={member.image}
        alt={member.name}
        className="object-cover mb-20 w-full h-full rounded-t-sm rounded-b-xl"
      />
      <div className="absolute shadow-md hover:shadow-lg bottom-0 flex flex-col w-full justify-center p-[9px] text-center rounded-lg bg-white">
        <h3 className="text-lg xl:text-xl 2xl:text-2xl font-normal text-gray-800">
          {member.name}
        </h3>
        <div className="flex flex-row space-x-3 justify-start items-center">
          <IconFlagFilled className="w-5 h-5 xl:w-6 xl:h-6 text-feuce-primary" />
          <span className="text-sm xl:text-md 2xl:text-lg text-gray-600">
            {member.role}
          </span>
        </div>
        <div className="flex flex-row space-x-3 justify-start items-center">
          <AcademicIcon className="w-5 h-5 xl:w-6 xl:h-6 text-feuce-primary" />
          <span className="text-sm xl:text-md 2xl:text-lg text-gray-600">
            {member.department}
          </span>
        </div>
        <div className="flex flex-row space-x-3 justify-start items-center">
          <IconMailFilled className="w-5 h-5 xl:w-6 xl:h-6 text-feuce-primary" />
          <span className="text-sm xl:text-md 2xl:text-lg text-gray-600">
            {member.email}
          </span>
        </div>
      </div>
    </div>
  );
}
