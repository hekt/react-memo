const STORAGE_KEY = 'ff14IdMemos';

export function save(text: string): void {
  localStorage.setItem(STORAGE_KEY, load() + '\n' + text);
}

export function load(): string {
  return localStorage.getItem(STORAGE_KEY) || '';
}
