import Footer from "@/components/Footer";
import React from "react";

const Homepage = () => {
    const handleMenuClick = () => {
        alert("menu placeholder");
    };

    return (
        <div className="bg-[#EFEDEA] text-[#333333] font-serif">
            {/* ================= NAVBAR ================= */}
            <header className="fixed top-0 w-full z-50 px-10 py-6 flex justify-between items-center text-[#EFEDEA] mix-blend-difference">
                <button
                    onClick={handleMenuClick}
                    className="text-2xl"
                    aria-label="menu"
                >
                    &#9776;
                </button>

                <div className="tracking-[0.2em] text-xl sm:hidden">LOGO</div>

                <button className="px-12 py-2 border border-[#EFEDEA] uppercase tracking-wide hover:bg-[#EFEDEA] hover:text-[#134A5F] transition">
                    Book Now
                </button>
            </header>

            {/* ================= HERO ================= */}
            <section className="relative w-full h-screen">
                <img
                    src="/BGLDP.jpg"
                    alt="Hero background"
                    className="w-full h-full object-cover"
                />

                <div className="absolute left-16 top-2/3 text-[#EFEDEA] tracking-[0.1em]">
                    <p className="text-[140px] leading-none mb-4 opacity-30">S.</p>
                    <p className="text-lg opacity-80 leading-relaxed">
                        STAY SIMPLE. <br />
                        STAY COMFORTABLE. <br />
                        STAY IN THE HEART OF THE CITY.
                    </p>
                </div>
            </section>

            {/* ================= ABOUT ================= */}
            <section className="px-32 py-24 bg-[#ffff]">
                <div className="text-center">
                    <p className="text-4xl tracking-wider mb-10 text-[#958574]">
                        MonkeyDB UIIA Hotel Bangkok
                    </p>

                        <button className="border border-[#958574] px-19 py-3 text-xl tracking-wider text-[#6C5B5C] hover:bg-[#BBAF90] hover:border-transparent  hover:text-[#ffff] transition">
                            HOTEL DETAILS
                        </button>   
                    </div>
            </section>

            
            {/* ================= SKYLINE ================= */}
            <section className="px-16 py-20 bg-[#EFEDEA]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <img
                        src="/window.jpg"
                        alt="Skyline view"
                        className="w-full max-w-[700px] object-contain shadow-lg"
                    />

                    <div>
                        <h2 className="text-[40px] mb-8 tracking-wide border-b-2 border-[#C9B28C] text-[#1F295D]">
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

                        <button className="border border-[#C9B28C] px-22 py-2 text-s tracking-wider text-[#134A5F] hover:bg-[#6C5B5C] hover:border-transparent hover:text-[#EFEDEA] transition">
                            EXPLORE HIGHLIGHTS
                        </button>
                    </div>
                </div>
            </section>

            {/* ================= RESTAURANT ================= */}
            <section className="py-20 bg-[#ffff]">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="bg-[#E2DACC]/80 shadow-xl px-8 py-14 w-full md:w-3/5">
                        <p className="text-xl leading-relaxed mb-10 tracking-wide text-[#333333]">
                            Indulge in authentic flavors rooted in our heritage—
                            <br />
                            thoughtfully selected ingredients and inspired creations await to
                            delight your senses.
                        </p>

                        <h2 className="text-l font-semibold text-[#78350F] pt-3 tracking-wider border-t-2 border-[#BBAF90]">
                             Pad Thai 
                        </h2>
                    </div>

                    <div className="w-full md:w-2/5">
                        <img
                            src="/newpadthai.png"
                            alt="Pad Thai"
                            className="w-full h-full object-cover p-6"
                        />
                    </div>
                </div>
            </section>
            <section className="max-w-6xl mx-auto px-1 py-10">
                <div className="w-full max-w-7xl mx-auto py-12">
                    {/* BUTTONS */}
                    <div className="flex flex-col md:flex-row justify-evenly gap-14 mb-12">
                        <button className="px-20 py-3 text-[#5f5b54] shadow-xl border-gray-200 text-xl hover:bg-amber-900 hover:text-white transition">
                            Room Type
                        </button>

                        <button className="px-10 py-3 text-white bg-amber-900 shadow-xl text-xl hover:bg-white hover:text-[#696459] transition">
                            Local recommendations
                        </button>

                        <button className="px-20 py-3 text-[#5f5b54] shadow-xl border-gray-200 text-xl hover:bg-amber-900 hover:text-white transition">
                            Facilities
                        </button>
                    </div>

                    {/* IMAGES ROW */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
                        <img
                            src="/fclt.jpg"
                            alt="Facilities"
                            className="w-full h-65 object-cover"
                        />
                        <img
                            src="/localr.jpg"
                            alt="Local recommendations"
                            className="w-full h-65 object-cover"
                        />
                        <img
                            src="/rt.jpg"
                            alt="Room type"
                            className="w-full h-65 object-cover"
                        />
                    </div>

                    {/* CONTENT ROW */}
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-14">
                        {/* COLUMN 1 */}
                        <div className="text-m leading-relaxed text-gray-800 space-y-4">
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

                        {/* DIVIDER */}
                        <div className="hidden md:block w-px bg-[#ffff]" />

                        {/* COLUMN 2 */}
                        <div className="text-m text-gray-800">
                            <ul className="list-none pl-5 space-y-2">
                                <li>Rooftop Bar and cafe</li>
                                <li>Market</li>
                                <li>Local restaurants / Street food</li>
                                <li>Nightlife</li>
                                <li>Mall</li>
                            </ul>
                        </div>

                        {/* DIVIDER */}
                        <div className="hidden md:block w-px bg-[#ffff]" />

                        {/* COLUMN 3 */}
                        <div className="text-m text-gray-800">
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
            </section>

            {/* ================= GALLERY ================= */}
            <section className="min-h-screen bg-[#ffff] flex justify-center items-center py-20">
                <div className="bg-white shadow-lg w-3/4 overflow-hidden">
                    <div className="flex gap-4">
                        <img
                            src="/building.jpg"
                            alt="Building"
                            className="w-full object-cover"
                        />
                        <img
                            src="/pool.jpg"
                            alt="Pool"
                            className="w-full object-cover"
                        />
                        <img
                            src="/lobby.jpg"
                            alt="Lobby"
                            className="w-full object-cover"
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Homepage;
