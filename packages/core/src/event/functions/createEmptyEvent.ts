import { Id } from "../../shared";
import Event from "../model/Event"

export default function createEmptyEvent(): Partial<Event>  {
    return {
        id: Id.new(),
        name: "",
        description: "",
        location: "",
    }
}