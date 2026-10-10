export function useSitePath(path = '/') {
  const baseURL = useRuntimeConfig().app.baseURL
  const normalized = path.startsWith('/') ? path.slice(1) : path
  return `${baseURL}${normalized}`.replace(/\/+/g, '/')
}
