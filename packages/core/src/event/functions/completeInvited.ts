import Invited from "../model/Invited";
import validateInvited from "./validateInvited";

export default function completeInvited(
  invited: Partial<Invited>
): Invited {
  const erros = validateInvited(invited);

  if (erros.length > 0) {
    throw new Error(erros.join("\n"));
  }

  const qtCompanions = invited.qtCompanions ?? 0;
  const hasCompanion =
    invited.hasCompanion &&
    invited.confirmed &&
    qtCompanions > 0;

  const invitedUpdated = {
    ...invited,
    qtCompanions: hasCompanion ? qtCompanions : 0,
    hasCompanion: hasCompanion,
  };

  return invitedUpdated as Invited;
}
