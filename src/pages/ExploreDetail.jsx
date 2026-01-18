import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useOutletContext } from "react-router-dom";

export default function Explore ()
{
    const { logout, user} = useOutletContext();

    return (
        <div>
            <Navbar logout={logout} user={user}/>


            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-serif">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <motion.div
                                className="relative overflow-hidden"
                                whileHover="hover"
                                initial="rest"
                                animate="rest"
                            >
                                {/* IMAGE */}
                                <motion.img
                                    src="cityview.jpg"
                                    className="w-full h-[240px] md:h-[280px] object-cover"
                                    variants={{
                                        rest: { scale: 1 },
                                        hover: { scale: 1.1 },
                                    }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                />

                                {/* OVERLAY */}
                                <motion.div
                                    className="absolute inset-0 bg-black/40 flex items-center justify-center"
                                    variants={{
                                        rest: { opacity: 0 },
                                        hover: { opacity: 1 },
                                    }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                >
                                    {/* TEXT */}
                                    <motion.span
                                        className="text-white text-xl text-center tracking-widest uppercase"
                                        variants={{
                                            rest: { opacity: 0, scale: 0.9 },
                                            hover: { opacity: 1, scale: 1 },
                                        }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                    >
                                        City view
                                    </motion.span>
                                </motion.div>
                            </motion.div>
                    <div>
                        <h2 className="text-xl sm:text-[25px] mb-5 tracking-wide  text-[#1F295D] text-center md:text-left">
                            Wake up to the rhythm of the city
                        </h2>

                        <p className="text-[#6C5B5C] text-sm leading-relaxed mb-10 tracking-wide">
                           Enjoy panoramic city views right from your room, where soft daylight and evening lights create a calm yet inspiring atmosphere. Whether you’re starting your morning or unwinding after a long day, the city becomes part of your stay
                        </p>          
                    </div>
                </div>
            </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-serif bg-[#EFEDEA]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                     <div>
                        <h2 className="text-xl sm:text-[25px] mb-5 tracking-wide  text-[#1F295D] text-center md:text-left">
                           A peaceful escape above the city
                        </h2>

                        <p className="text-[#6C5B5C] text-sm leading-relaxed mb-10 tracking-wide">
                           Our rooftop swimming pool offers a serene space to relax, swim, and take in breathtaking skyline views. Day or night, it’s the perfect spot to slow down, refresh, and enjoy the city from a new perspective                        </p>          
                    </div>
                <motion.div
                                className="relative overflow-hidden"
                                whileHover="hover"
                                initial="rest"
                                animate="rest"
                            >
                                {/* IMAGE */}
                                <motion.img
                                    src="pool.jpg"
                                    className="w-full h-[240px] md:h-[280px] object-cover"
                                    variants={{
                                        rest: { scale: 1 },
                                        hover: { scale: 1.1 },
                                    }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                />

                                {/* OVERLAY */}
                                <motion.div
                                    className="absolute inset-0 bg-black/40 flex items-center justify-center"
                                    variants={{
                                        rest: { opacity: 0 },
                                        hover: { opacity: 1 },
                                    }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                >
                                    {/* TEXT */}
                                    <motion.span
                                        className="text-white text-xl text-center tracking-widest uppercase"
                                        variants={{
                                            rest: { opacity: 0, scale: 0.9 },
                                            hover: { opacity: 1, scale: 1 },
                                        }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                    >
                                        Rooftop Swimming Pool
                                    </motion.span>
                                </motion.div>
                            </motion.div>
                   
                </div>
            </section>


      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-serif">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <motion.div
                                className="relative overflow-hidden"
                                whileHover="hover"
                                initial="rest"
                                animate="rest"
                            >
                                {/* IMAGE */}
                                <motion.img
                                    src="location.jpg"
                                    className="w-full h-[240px] md:h-[280px] object-cover"
                                    variants={{
                                        rest: { scale: 1 },
                                        hover: { scale: 1.1 },
                                    }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                />

                                {/* OVERLAY */}
                                <motion.div
                                    className="absolute inset-0 bg-black/40 flex items-center justify-center"
                                    variants={{
                                        rest: { opacity: 0 },
                                        hover: { opacity: 1 },
                                    }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                >
                                    {/* TEXT */}
                                    <motion.span
                                        className="text-white text-xl text-center tracking-widest uppercase"
                                        variants={{
                                            rest: { opacity: 0, scale: 0.9 },
                                            hover: { opacity: 1, scale: 1 },
                                        }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                    >
                                        Prime Location
                                    </motion.span>
                                </motion.div>
                            </motion.div>
                    <div>
                        <h2 className="text-xl sm:text-[25px] mb-5 tracking-wide  text-[#1F295D] text-center md:text-left">
                            Stay close to everything that matters
                        </h2>

                        <p className="text-[#6C5B5C] text-sm leading-relaxed mb-10 tracking-wide">
                          Conveniently located near key attractions, dining spots, and transportation—perfect for both business and leisure travelers               </p>          
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

