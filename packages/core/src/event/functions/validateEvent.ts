import Event from "../model/Event";

export default function validateEvent(event: Partial<Event>): string[] {
  const erros: string[] = [];

  if (!event.alias) {
    erros.push("Alias é obrigatório");
  }

  if (!event.name) {
    erros.push("Nome é obrigatório");
  }

  if (!event.description) {
    erros.push("Descrição é obrigatória");
  }

  if (!event.date) {
    erros.push("Data é obrigatória");
  }

  if (!event.location) {
    erros.push("Local é obrigatório");
  }

  return erros;
}
