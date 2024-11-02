import {motion} from 'framer-motion'
import { useRef, useState } from 'react'

import Notification from "./Notification";

const App = () => {


	const [isVisible, setIsVisible] = useState<string|null>(null)

	const [message,setMessage] = useState<string>('')

	const ref = useRef<HTMLInputElement>(null)

	function clickHandler(type:string){
		if (ref.current) {
			setMessage(ref.current.value)
			ref.current.value = ''
		}
		setIsVisible(type)
		
	}

	

	  
    return (
		<>
			<p className="text-white text-xl mb-5">Notification Trigger: </p>
			<label htmlFor="message" className="text-white text-md mb-1 block">Message:</label>
			<input ref={ref} className="mb-3 outline-none rounded p-1" type="text" id="message"  />
			<div className="flex gap-2">
			<motion.button onClick={() => clickHandler('success')} className="rounded bg-green-400 px-5 py-2 mb-20" whileHover={{
				scale: 1.06,
				backgroundColor: 'rgb(0,255,92)',
				transition:{
					duration:0.3,
					repeatType:'reverse',
					repeat:Infinity
				}
			}} > Success </motion.button>
			<motion.button onClick={() => clickHandler('error')} className="rounded bg-red-400 px-5 py-2 mb-20" whileHover={{
				scale: 1.06,
				backgroundColor: 'rgb(254,0,0)',
				transition:{
					duration:0.3,
					repeatType:'reverse',
					repeat:Infinity
				}
			}} > Error </motion.button>
			</div>

		 	
			<Notification type={isVisible} setIsVisible={setIsVisible} message={message} />

			

		</>
    );
};

export default App;
