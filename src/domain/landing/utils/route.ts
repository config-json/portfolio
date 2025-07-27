import { createRoutes } from 'typesafe-routes'

export enum HashedRoutes {
  Work = 'work',
}

export const routes = () =>
  createRoutes({
    links: {
      path: ['links'],
    },
  })

export const makeHashedRoute = (route: HashedRoutes) => {
  return `/#${route}`
}

export const makeTwitterLink = (username: string) => {
  return `https://x.com/${username}`
}

export const makeGithubLink = (username: string) => {
  return `https://github.com/${username}`
}
