import Invited from "../model/Invited";

export default function validateInvited(
  invited: Partial<Invited>
): string[] {
  const erros: string[] = [];

  if (!invited.name) {
    erros.push("Nome é obrigatório");
  }

  if (!invited.email) {
    erros.push("E-mail é obrigatório");
  }

  return erros;
}
