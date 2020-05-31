const STORAGE_KEY = "ff14IdMemos";

export function append(text: string): string {
  const current = load();
  localStorage.setItem(STORAGE_KEY, `${current}\n${text}`);
  return current;
}

export function save(text: string): void {
  localStorage.setItem(STORAGE_KEY, text);
}

export function load(): string {
  return localStorage.getItem(STORAGE_KEY) || "";
}
