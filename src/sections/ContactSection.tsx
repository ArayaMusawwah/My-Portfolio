import { forwardRef } from "react"
import MainLayout from "../layouts/MainLayout"
import { motion } from "framer-motion"

const ContactSection = forwardRef<HTMLDivElement>((props, ref) => {
  const item = {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
  }
  const parent = {
    initial: { x: "100%" },
    animate: { x: "0%", transition: { staggerChildren: 0.25 } }
  }

  return (
    <MainLayout
      imageClass="bg-[url('/3.jpg')]"
      center={false}
      ref={ref}
      {...props}
    >
      <h1 className="text-5xl font-bold">contact</h1>
      <motion.ul variants={parent} initial="initial" whileInView="animate">
        <motion.li variants={item}>1</motion.li>
        <motion.li variants={item}>1</motion.li>
        <motion.li variants={item}>1</motion.li>
        <motion.li variants={item}>1</motion.li>
        <motion.li variants={item}>1</motion.li>
        <motion.li variants={item}>1</motion.li>
        <motion.li variants={item}>1</motion.li>
      </motion.ul>
    </MainLayout>
  )
})

export default ContactSection
