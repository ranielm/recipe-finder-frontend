export const apiBaseUrl = import.meta.env.VITE_API_URL;

export function getServerUrl(): string {
  return import.meta.env.VITE_API_URL || 'http://localhost:5173';
}
