import { motion } from 'framer-motion'
import { Tooltip } from '.'
import { technologies } from '../constants'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { textVariant } from '../utils/motion'

const Tech = () => {
  return (
    <div>
      <div className={`xs:min-h-[140px] sm:min-h-[180px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What technologies do I know?</p>
          <h2 className={styles.sectionHeadText}>Skills.</h2>
        </motion.div>
      </div>
      <div className={`flex flex-wrap gap-7`}>
        {technologies.map((technology) => (
          <div className="flex-1 flex items-center justify-center" key={technology.name}>
            <Tooltip message={technology.name}>
              <img className="w-[112px] h-[112px]" src={technology.icon} />
              {/* <BallCanvas icon={technology.icon} /> */}
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  )
  return (
    <div className="flex flex-row flex-wrap justify-center gap-16">
      {technologies.map((technology) => (
        <div key={technology.name}>
          <Tooltip message={technology.name}>
            <img className="w-[112px] h-[112px]" src={technology.icon} />
            {/* <BallCanvas icon={technology.icon} /> */}
          </Tooltip>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, '')
