import Footer from "@/components/Footer";
import React from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const Homepage = () => {
    const handleMenuClick = () => {
        alert("menu placeholder");
    };

    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1.5], [1, 2.15]);

    // สำหรับ pop-up
    const [showWelcome, setShowWelcome] = useState(false);

    useEffect(() => {
        setShowWelcome(true);
    }, []);

    return (

        <div>
        <AnimatePresence>
  {showWelcome && (
    <motion.div
      className="fixed inset-0 z-[999] bg-black/50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-[#EFEDEA] px-10 py-12  shadow-2xl text-center max-w-md mx-4 font-serif"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <h2 className="text-2xl tracking-widest mb-4 text-[#1F295D]">
          Welcome to Sleepy Monkey 
        </h2>

        <p className="text-[#333333] leading-relaxed mb-6">
          From the moment you arrive, you are welcomed with warmth, comfort, and a gentle sense of ease🍃 <br />
    
        </p>

        <button
          onClick={() => setShowWelcome(false)}
          className="mt-2 px-8 py-2 border border-[#958574] tracking-wider text-sm hover:bg-[#78350F] hover:text-white transition"
        >
          I'm ready
        </button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

        <div className="bg-[#EFEDEA] text-[#333333] font-serif">
            {/* ================= NAVBAR ================= */}
            <header className="fixed top-0 w-full z-50 px-4 sm:px-6 md:px-10 py-6 flex justify-between items-center text-[#EFEDEA] mix-blend-difference">
                <button
                    onClick={handleMenuClick}
                    className="text-2xl"
                    aria-label="menu"
                >
                    &#9776;
                </button>

                <a href="/">
                    <img
                        src="/hotel-logo.png"
                        alt="Hotel Logo"
                        className="h-10"
                    />
                </a>

                <Link to="roomdetail">
                    <button className="px-6 py-2 sm:px-8 md:px-12 border border-[#EFEDEA] uppercase tracking-wide hover:bg-[#EFEDEA] hover:text-[#134A5F] transition text-sm sm:text-base">
                        Book Now
                    </button>
                </Link>
            </header>

            {/* ================= HERO ================= */}
            <section className="relative w-full h-screen overflow-hidden">
                {/* Background Image */}
                <motion.img
                    src="/BGLDP.jpg"
                    alt="Hero background"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ scale }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Text */}
                <motion.div
                    className="  absolute  left-6 bottom-2 sm:left-10  md:left-16 md:bottom-32   text-[#EFEDEA]  tracking-[0.1em]  max-w-xl  z-10"
                    style={{ scale }}
                >
                    <p
                        className="text-5xl sm:text-6xl md:text-8xl lg:text-[140px] leading-none  mb-4 opacity-30 "
                    >
                        S.
                    </p>

                    <p className="text-sm md:text-lg opacity-80 leading-relaxed">
                        STAY SIMPLE. <br />
                        STAY COMFORTABLE. <br />
                        STAY IN THE HEART OF THE CITY.

                    </p>

                </motion.div>
            </section>

            {/* ================= ABOUT ================= */}
            <section className="px-8 sm:px-16 md:px-32 py-16 sm:py-20 md:py-24 bg-[#ffff]">
                <div className="text-center">
                    <p className="text-2xl sm:text-3xl md:text-4xl tracking-wider mb-5 text-[#958574]">
                        Sleepy Monkey Hotel Bangkok   </p>
                    <p className="text:xl sm:text-xl md:text-xl tracking-wider mb-10 text-[#958574]">
                        Surrounded by the city, we welcome you into a softer, calmer place to rest and feel at home </p>
                    <Link to="roomdetail">
                        <button className="border border-[#958574] px-8 sm:px-12 md:px-20 py-2 text-sm sm:text-xl tracking-wider text-[#6C5B5C] hover:bg-[#BBAF90] hover:border-transparent  hover:text-[#ffff] transition">
                            HOTEL DETAILS
                        </button>
                    </Link>
                </div>
            </section>


            {/* ================= SKYLINE ================= */}
            <section className="px-4 sm:px-8 md:px-16 py-16 sm:py-20 bg-[#EFEDEA]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

                    {/* <motion.img
      src="/window.jpg"
      className="w-full aspect-[4/3] md:aspect-[11/10] object-contain shadow-lg"
     initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false , amount: 0.3 }}
    /> */}

                    <motion.div
                        className="overflow-hidden rounded-lg"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <motion.img
                            src="/window.jpg"
                            className="w-full aspect-[4/3] md:aspect-[11/10] object-contain shadow-lg"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        />
                    </motion.div>
                    <div>
                        <h2 className="text-3xl sm:text-[40px] mb-8 tracking-wide border-b-2 border-[#C9B28C] text-[#1F295D] text-center md:text-left">
                            Skyline Comfort
                        </h2>

                        <p className="text-[#6C5B5C] leading-relaxed mb-10 tracking-wide">
                            Leave the noise behind and immerse yourself in a serene city view.
                            <br />
                            From gentle morning sunlight to calming evening skies,
                            <br />
                            our space offers a simple sanctuary infused with the quiet charm of
                            urban life.
                        </p>

                        <div className="text-center md:text-left">
                            <Link to="explore">
                                <button className="border border-[#C9B28C] px-8 sm:px-12 md:px-20 py-2 text-sm sm:text-base tracking-wider text-[#134A5F] hover:bg-[#6C5B5C] hover:border-transparent hover:text-[#EFEDEA] transition">
                                    EXPLORE HIGHLIGHTS
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= RESTAURANT ================= */}
            <section className="py-16 sm:py-20 bg-[#ffff]">
                <div className="flex flex-col md:flex-row items-center">

                    {/* TEXT — slide จากซ้าย */}
                    <motion.div
                        className="bg-[#E2DACC]/80 shadow-xl px-8 py-14 w-full md:w-3/5 text-center md:text-left"
                        initial={{ opacity: 0, x: -80, filter: "blur(6px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <p className="text-lg sm:text-xl leading-relaxed mb-10 tracking-wide text-[#333333]">
                            Indulge in authentic flavors rooted in our heritage—
                            <br />
                            thoughtfully selected ingredients and inspired creations await to
                            delight your senses.
                        </p>

                        <h2 className="text-l font-semibold text-[#78350F] pt-3 tracking-wider border-t-2 border-[#BBAF90]">
                            Pad Thai
                        </h2>
                    </motion.div>

                    {/* IMAGE — slide จากขวา */}
                    <div className="w-full md:w-2/5">
                        <motion.img
                            src="/newpadthai.png"
                            className="w-full h-[300px] md:h-full object-cover"
                            initial={{ opacity: 0, x: 80, filter: "blur(6px)" }}
                            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.3 }}
                        />
                    </div>

                </div>
            </section>
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="w-full max-w-7xl mx-auto py-12">
                    {/* BUTTONS */}
                    <div className="flex flex-col md:flex-row justify-evenly gap-8 md:gap-14 mb-12">
                        <button className="px-20 py-3 text-[#5f5b54] shadow-xl border-gray-200 text-lg sm:text-xl hover:bg-amber-900 hover:text-white transition">
                            Room Type
                        </button>

                        <button className="px-8 py-3 text-white bg-amber-900 shadow-xl text-lg sm:text-xl hover:bg-white hover:text-[#696459] transition">
                            Local recommendations
                        </button>

                        <button className="px-20 py-3 text-[#5f5b54] shadow-xl border-gray-200 text-lg sm:text-xl hover:bg-amber-900 hover:text-white transition">
                            Facilities
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                        {/* Column 1: Room Type */}
                        <div>
                            {/* <img
                                src="/rt.jpg"
                                alt="Room type"
                                className="w-full h-64 object-cover mb-4"
                            /> */}

                            {/* ตอนซูมรูปขึ้นอย่างเดียว */}
                            {/* <motion.div
                                className="overflow-hidden"
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                <motion.img
                                    src="/rt.jpg"
                                    className="w-full h-[240px] md:h-[280px] object-cover mb-4"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                />
                            </motion.div> */}
                            <motion.div
                                className="relative overflow-hidden"
                                whileHover="hover"
                                initial="rest"
                                animate="rest"
                            >
                                {/* IMAGE */}
                                <motion.img
                                    src="/rt.jpg"
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
                                        Designed for rest, styled for comfort
                                    </motion.span>
                                </motion.div>
                            </motion.div>

                            <div className="text-m leading-relaxed  mt-6 text-gray-800 space-y-4">
                                <p>
                                    <span className="font-semibold">Single Room</span> — A cozy room with
                                    one bed, perfect for solo travelers who want privacy and comfort.
                                </p>
                                <p>
                                    <span className="font-semibold">Double / Twin Room</span> — Ideal for
                                    two guests, available with either one double bed or two single beds.
                                </p>
                                <p>
                                    <span className="font-semibold">Family Room</span> — A larger room
                                    designed for small groups or families, with extra space and multiple
                                    beds.
                                </p>
                            </div>
                        </div>

                        {/* Column 2: Local recommendations */}
                        <div>

                            <motion.div
                                className="relative overflow-hidden"
                                whileHover="hover"
                                initial="rest"
                                animate="rest"
                            >
                                {/* IMAGE */}
                                <motion.img
                                    src="/localr.jpg"
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
                                        Hidden gems around every corner
                                    </motion.span>
                                </motion.div>
                            </motion.div>


                            <div className="text-m text-gray-800 mt-6">
                                <ul className="list-none pl-5 space-y-2">
                                    <li>Rooftop Bar and cafe</li>
                                    <li>Market</li>
                                    <li>Local restaurants / Street food</li>
                                    <li>Nightlife</li>
                                    <li>Mall</li>
                                </ul>
                            </div>
                        </div>

                        {/* Column 3: Facilities */}
                        <div>


                            <motion.div
                                className="relative overflow-hidden"
                                whileHover="hover"
                                initial="rest"
                                animate="rest"
                            >
                                {/* IMAGE */}
                                <motion.img
                                    src="/fclt.jpg"
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
                                        Everything you need, nothing you don’t
                                    </motion.span>
                                </motion.div>
                            </motion.div>

                            <div className="text-m text-gray-800  mt-6">
                                <ol className="list-none pl-5 space-y-2">
                                    <li>Internet / Free Wi-Fi access</li>
                                    <li>Continental Breakfast</li>
                                    <li>Coffee, Tea, Snacks all day everyday</li>
                                    <li>Terracing & Activities</li>
                                    <li>Laundry / Drying Facilities</li>
                                    <li>CCTV with 24 Hours Monitor</li>
                                    <li>Electronic Keycard Access</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= GALLERY ================= */}
            <section className="min-h-screen bg-[#ffff] flex justify-center items-center py-30 px-5 sm:px-6 lg:px-8">
                <div className="bg-white shadow-lg w-full max-w-7xl overflow-hidden">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* <img
                            src="/building.jpg"
                            alt="Building"
                            className="w-full h-140 object-cover"
                        />
                        <img
                            src="/pool.jpg"
                            alt="Pool"
                            className="w-full h-140 object-cover"
                        />
                        <img
                            src="/lobby.jpg"
                            alt="Lobby"
                            className="w-full h-140 object-cover"
                        />
                          <img
                            src="/door.jpg"
                            alt="Lobby"
                            className="w-full h-140 object-cover"
                        /> */}

                        <motion.div
                            className="overflow-hidden"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            <motion.img
                                src="/building.jpg"
                                className="w-full h-140 object-cover"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            />
                        </motion.div>

                        <motion.div
                            className="overflow-hidden"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            <motion.img
                                src="/pool.jpg"
                                className="w-full h-140 object-cover"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            />
                        </motion.div>

                        <motion.div
                            className="overflow-hidden  "
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            <motion.img
                                src="/lobby.jpg"
                                className="w-full h-140 object-cover"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            />
                        </motion.div>


                        <motion.div
                            className="overflow-hidden "
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            <motion.img
                                src="/door.jpg"
                                className="w-full h-140 object-cover"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            />
                        </motion.div>


                    </div>
                </div>
            </section>
            <Footer />
        </div>
        </div>
    );
};

export default Homepage;