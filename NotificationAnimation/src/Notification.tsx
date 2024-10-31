import { AnimatePresence, motion } from "framer-motion";

const Notification = ({
    type,
    message,
}: {
    type: string | null;
    message: string | null;
}) => {
    return (
        <AnimatePresence>
            {type && (
                <motion.div
                    className={`absolute top-2 right-1 ${
                        type == "success" ? "bg-green-400" : "bg-red-400"
                    } rounded h-auto w-64 py-2 flex items-center justify-center`}
                    initial={{
                        y:-40,
                        opacity:0
                        
                    }}

                    animate={{
                        y:0,
                        opacity:1,
                        transition:{
                            duration:0.6,

                        }
                    }}

                    exit={{
                        y:-40,
                        opacity:0
                    }}

                >
                    {message?message:'No Message Provided'}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Notification;