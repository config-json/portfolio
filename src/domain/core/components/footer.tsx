import { HashedRoutes, makeHashedRoute, routes } from '@/domain/landing/utils/route'
import Link from 'next/link'
import { renderPath } from 'typesafe-routes'

export const Footer = () => {
  return (
    <div className="flex flex-col gap-4 px-6 pb-8 items-center">
      <h4 className="text-2xl font-bold">
        config<span className="text-accent">.json</span>
      </h4>
      <div className="flex gap-8">
        <Link href={renderPath(routes().links, {})}>Links</Link>
        <Link href={makeHashedRoute(HashedRoutes.Work)}>Work</Link>
      </div>
    </div>
  )
}
