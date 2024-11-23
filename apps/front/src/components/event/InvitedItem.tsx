import { Invited } from "core";

export interface InvitedItemProps {
  invited: Invited;
}

export default function InvitedItem(props: InvitedItemProps) {
  return (
    <li className="flex justify-between bg-black rounded-md px-6 py-3 border border-zinc-800 text-zinc-400">
      <div className="flex flex-col">
        <span className="text-xl font-bold">{props.invited.name}</span>
        <span className="text-sm">{props.invited.email}</span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-sm">Acompanhantes</span>
        <span className="text-xl font-bold">
          {props.invited.qtCompanions}
        </span>
      </div>
    </li>
  );
}
