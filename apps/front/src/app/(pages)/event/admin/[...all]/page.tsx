"use client";

import DashboardEvent from "@/components/event/DashboardEvent";
import { Invited, Event, events } from "core";
import { use, useEffect, useState } from "react";

export default function AdminPage(props: any) {
    const params: any = use(props.params);

    const id = params.all[0];
    const [event, setEvent] = useState<Event | null>(null);
    const [password, setPassword] = useState<string | null>(params.all[1] ?? null);

    const confirmeds = event?.invited.filter((i) => i.confirmed) ?? [];
    const absents = event?.invited.filter((i) => !i.confirmed) ?? [];
    const total =
    confirmeds?.reduce((total: number, invited: Invited) => {
      return total + invited.qtCompanions + 1;
    }, 0) ?? 0;

    function loadEvent() {
        const event = events.find((ev) => ev.id === id && ev.password === password);
        setEvent(event ?? null);
      }
    
      useEffect(() => {
        loadEvent();
      }, [id, password]);
    return (
        <div className="flex flex-col items-center">
      {event ? (
        <DashboardEvent
          event={event}
          confirmeds={confirmeds}
          absents={absents}
          total={total}
        />
      ) : (
        <div>Ev</div>
      )}
    </div>
    )
}