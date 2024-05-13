import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function dateFormatter(date: string) {
  return formatDistanceToNow(new Date(date), { locale: ptBR });
}
