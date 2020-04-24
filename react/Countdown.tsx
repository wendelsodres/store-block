import React, {useState} from 'react'
import {TimeSplit} from './typings/global'
import {tick} from './utils/time'
import {useCssHandles} from 'vtex.css-handles'

interface CountdownProps {
  targetDate: string
}

const CSS_HANDLES = ['countdown']

const DEFAULT_TARGET = (new Date()).toISOString()

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({targetDate = DEFAULT_TARGET}) => {

  const [nomeVariavel, funcaoUse] = useState<TimeSplit> ({
    hours: '00',
    minutes: '00',
    seconds: '00'
  })

  const handles = useCssHandles(CSS_HANDLES)

  tick(targetDate, funcaoUse)

  return (
    <div>
      <h1 className={`${handles.countdown} t-heading-2 fw3 w-100 c-muted-1 db tc`}>Itelios - Faltam {`${nomeVariavel.hours}:${nomeVariavel.minutes}:${nomeVariavel.seconds}`} para entrega do modulo B2B</h1>
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
