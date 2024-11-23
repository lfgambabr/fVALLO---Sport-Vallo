import { Id } from "../../shared";
import Invited from "../model/Invited";

export default function createEmptyInvited(): Partial<Invited> {
  return {
    id: Id.new(),
    name: "",
    email: "",
    confirmed: true,
    hasCompanion: false,
    qtCompanions: 0,
  };
}
