import React from 'react'
import { motion } from "framer-motion"

function Chat({aiResponse }) {
  return (
    
    <
    // initial={{ opacity: 0, y:200 }}
    // animate={{ opacity: 1, y:0 }}
    // transition={{duration: 1}}
    >
    {/* mobile */}
    <div
    // initial={{ opacity: 0, y:100 }}
    // animate={{ opacity: 1, y:0 }}
    // transition={{duration: 1}}
    className="absolute text-white lg:hidden top-[400px] press-font  position-center-x w-[300px] h-[200px] bg-purple-black z-50 p-5 rounded-xl overflow-y-scroll text-center overflow-x-hidden " >
            {aiResponse}
    </div>

    <div
    // initial={{ opacity: 0, y:200 }}
    // animate={{ opacity: 1, y:0 }}
    // transition={{duration: 1}}
    className="absolute scrollbar-thin pb-10 scrollbar-thumb-purple scrollbar-track-gray-700 text-white hidden lg:flex top-[30px] max-h-[700px] press-font right-10 w-[400px] h-auto  bg-purple-black z-50 p-5 rounded-xl overflow-y-scroll  overflow-x-hidden " >
            {aiResponse}
    </div>
    </>
  )
}

export default Chat