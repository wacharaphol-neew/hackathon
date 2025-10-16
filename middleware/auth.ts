export default defineNuxtRouteMiddleware((to) => {
  if (process.server) return
  const { status } = useAuth()
  if (status.value !== 'authenticated') {
    const callback = encodeURIComponent(to.fullPath)
    return navigateTo(`/login?callbackUrl=${callback}`)
  }
})

