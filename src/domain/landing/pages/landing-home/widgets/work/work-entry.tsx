'use client'

import { Button } from '@/domain/core/components/button'
import { cn } from '@/domain/core/utils/cn'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'
import { More } from './more'
import { Work } from './constants'

type WorkEntryProps = {
  work: Work
  reverse: boolean
}

export const WorkEntry: FC<WorkEntryProps> = ({ work, reverse }) => {
  const [isMore, setIsMore] = useState(false)

  return (
    <div className="flex flex-col max-w-3xl">
      <div
        className={cn(
          'flex flex-col w-full border-2',
          reverse ? 'sm:flex-row-reverse' : 'sm:flex-row',
        )}
      >
        <Image
          src={`/logos/${work.name}.png`}
          width={512}
          height={512}
          className={cn(
            'border-white',
            reverse ? 'sm:border-l-2' : 'sm:border-r-2',
            'border-b-2 sm:border-b-0',
            'w-full sm:max-w-fit h-full sm:h-[229px] lg:h-[205px]',
          )}
          alt={work.title}
        />
        <div className="flex flex-col gap-6 p-6">
          <div className="flex flex-col gap-2">
            <h4 className="text-2xl">{work.title}</h4>
            <p>{work.description}</p>
          </div>
          <div className="flex gap-6">
            <Button
              background={isMore ? 'white' : 'accent'}
              onClick={() => setIsMore(!isMore)}
            >
              More
            </Button>
            {work.website && (
              <Link href={work.website} target="_blank">
                <Button background="stroke">Website</Button>
              </Link>
            )}
            {work.code && (
              <Link href={work.code} target="_blank">
                <Button background="stroke">Code</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
      {isMore && <More work={work} />}
    </div>
  )
}
