import { siteConfig } from '@/lib/config'

/**
 * 驱动版权
 * @returns
 */
export default function PoweredBy(props) {
  return (
    <div className={`inline text-sm font-serif ${props.className || ''}`}>
      <a
        className='underline justify-start'>
        多多留言给博主动力.
      </a>
    </div>
  )
}
