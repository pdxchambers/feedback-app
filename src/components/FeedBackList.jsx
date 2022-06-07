import { motion, AnimatePresence } from "framer-motion"
import FeedBackItem from "./FeedBackItem"
function FeedBackList({feedback, handleDelete}) {
    if(!feedback || feedback.length === 0) {
        return <p>No Feedback Yet.</p>
    }
    // return (
    //   <div className='feedback-list'>
    //     <AnimatePresence initial={false}>
    //       {feedback.map((item) => {
    //           <motion.div 
    //             key={item.id}
    //             initial={{ opacity: 0 }}
    //             animate={{ opacity: 1 }}
    //             exit={{ opacity: 0 }}
    //             // layout
    //           >
    //             <FeedBackItem key={item.id} item={item} handleDelete={handleDelete} />
    //           </motion.div>
    //       })}
    //      </AnimatePresence>
    //   </div>
    // )

  return (
    <div className='feedback-list'>
       {feedback.map((item) => {
           return <FeedBackItem key={item.id} item={item} handleDelete={handleDelete} />
       })}
    </div>
  )
}

export default FeedBackList