import { motion } from 'framer-motion'
import { FC } from 'react'
import Tilt from 'react-tilt'

import { services } from '../constants'
import { IService } from '../constants/types'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'

const ServiceCard: FC<IService & { index: number }> = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        //@ts-ignore
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt="web-development" className="w-16 h-16 object-contain" />

        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
)

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a Frontend specialist with over 8 years of experience in the IT industry. My skills
        include designing and developing web and mobile applications using React and React Native,
        as well as designing user interfaces and user experiences. Throughout these years, I have
        been able to serve as a good liaison between Front teams and design, and form effective and
        coordinated teams to carry out large projects. Additionally, with the ability to manage and
        coordinate large and small teams using Agile and Scrum methodologies, I have formed
        effective and coordinated teams for carrying out large projects.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
