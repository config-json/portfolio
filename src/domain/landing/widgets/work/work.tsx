import { WorkEntry } from './work-entry'
import { WORKS } from './constants'
import { HashedRoutes } from '../../utils/routes'

export const Work = () => {
  return (
    <div
      className="flex flex-col gap-12 items-center px-8 md:px-16"
      id={HashedRoutes.Work}
    >
      <h2 className="text-purple text-6xl font-semibold">Work</h2>
      {WORKS.map((work, index) => (
        <WorkEntry key={index} reverse={index % 2 !== 0} work={work} />
      ))}
    </div>
  )
}
