import { motion } from "framer-motion";


const StaggeredLoading = () => {


    const parentVariant = {
		'show': {
		  transition: {
			staggerChildren: 0.1, // main property for staggering the children and giving the duration gap of the number specified
		  }
		}
	  }
	  
	  const childVariant = {
		'show':{
			y:[0,15,0],
			transition: {
				duration:0.5,
				repeat:Infinity,
			repeatType: "loop" as const,
			}
		}
	  }

  return (
    <motion.div  variants={parentVariant} animate="show" className="flex">
			<motion.div variants={childVariant} className=" rounded-full bg-yellow-300 h-4 aspect-square m-2" ></motion.div>
			<motion.div variants={childVariant} className=" rounded-full bg-yellow-300 h-4 aspect-square m-2" ></motion.div>
			<motion.div variants={childVariant} className=" rounded-full bg-yellow-300 h-4 aspect-square m-2" ></motion.div>
			<motion.div variants={childVariant} className=" rounded-full bg-yellow-300 h-4 aspect-square m-2" ></motion.div>
			<motion.div variants={childVariant} className=" rounded-full bg-yellow-300 h-4 aspect-square m-2" ></motion.div>
 
        </motion.div>
  )
}

export default StaggeredLoading