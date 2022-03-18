import { motion } from "framer-motion"
import Link from "next/link"

export default function Test(){
    return(
        <motion.div exit={{opacity: 0}}>
            <h1>Test page</h1>
            <Link href='/'>Back to home page</Link>
        </motion.div>
    )
}