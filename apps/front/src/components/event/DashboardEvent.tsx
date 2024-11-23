import { Invited, Event } from "core";
import InfoEvent from "./InfoEvent";
import AccessQrCode from "./AccessQrCode";
import Stat from "../shared/stat";
import InvitedList from "./InvitedList";

export interface DashboardEventProps {
  event: Event;
  confirmeds: Invited[];
  absents: Invited[];
  total: number;
}

export default function DashboardEvent(props: DashboardEventProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 self-stretch">
        <InfoEvent event={props.event} className="flex-1" />
        <AccessQrCode event={props.event} />
      </div>
      <div className="grid grid-cols-3 gap-6 mt-4">
        <Stat
          text="Expectativa de Convidados:"
          value={props.event.expectedAudience}
          image="/icones/convidados.svg"
        />
        <Stat
          text="Confirmações:"
          value={props.confirmeds.length}
          image="/icones/confirmados.svg"
        />
        <Stat
          text="Total Confirmado:"
          value={props.total}
          image="/icones/acompanhantes.svg"
        />

        
      <button className="button blue self-end mt-12">
        <span>Atualizar Lista de Convidados</span>
      </button>

      <span className="flex py-2 text-xl font-bold">
        Convidados que confimaram PRESENÇA
      </span>
      <InvitedList inviteds={props.confirmeds} />

      <span className="flex py-2 text-xl font-bold">
        Convidados que confirmaram AUSÊNCIA
      </span>
      <InvitedList inviteds={props.absents} />
      </div>
    </div>
  );
}
