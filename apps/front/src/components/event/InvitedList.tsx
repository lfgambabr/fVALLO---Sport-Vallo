import { Invited } from "core";
import InvitedItem from "./InvitedItem";

export interface InvitedListProps {
  inviteds: Invited[];
}

export default function InvitedList(props: InvitedListProps) {
  return (
    <div>
      <ul className="flex flex-col gap-2">
        {props.inviteds.map((invited) => (
          <InvitedItem key={invited.id} invited={invited} />
        ))}
      </ul>
    </div>
  );
}
