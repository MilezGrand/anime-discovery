export function clearDescription(description: string | undefined) {
  return description
    ? description
        .replace(/{.*?}/g, "")
        .replace(/\[.*?\]/g, "")
        .replace("[", "")
        .replace("]", "")
    : "Отсутствует";
}
