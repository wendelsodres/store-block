import React, {useState} from 'react'
import {TimeSplit} from './typings/global'
import {tick} from './utils/time'

interface CountdownProps {
  targetDate: string
}
const DEFAULT_TARGET = (new Date('2020-04-24')).toISOString()

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({targetDate = DEFAULT_TARGET}) => {

  const [nomeVariavel, funcaoUse] = useState<TimeSplit> ({
    hours: '00',
    minutes: '00',
    seconds: '00'
  })

  tick(targetDate, funcaoUse)

  return (
    <div>
      <h1>Itelios - Faltam {`${nomeVariavel.hours}:${nomeVariavel.minutes}:${nomeVariavel.seconds}`} para entrega do modulo B2B</h1>
    </div>
  )
}

Countdown.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {
    targetDate: {
      title: 'Data final',
      description: 'Data final utilizada no contador',
      type: 'string',
      default: null,
    }
  },
}

export default Countdown
