import Footer from "@/components/Footer";

export default function Homepage ()
{
    console.log("Homepage here");
      return (
    <div className="text-[#333] bg-white font-serif">
      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 w-full z-50 px-10 py-6 flex justify-between items-center text-white mix-blend-difference">
        <button
          onClick={handleMenuClick}
          className="text-2xl"
          aria-label="menu"
        >
          &#9776;
        </button>

        <div className="tracking-[0.2em] text-xl sm:hidden">LOGO</div>

        <button className="px-8 py-2 border text-white uppercase tracking-wide hover:bg-white hover:text-amber-900 transition">
          Book Now
        </button>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative w-full h-screen">
        <img
          src="/images/BGLDP.jpg"
          alt="Hero"
          className="w-full h-full object-cover"
        />

        <div className="absolute left-16 top-2/3 text-white tracking-[0.1em] leading-relaxed">
          <p className="text-[140px] leading-none mb-4 opacity-30">S.</p>
          <p className="text-lg opacity-70">
            STAY SIMPLE. <br />
            STAY COMFORTABLE. <br />
            STAY IN THE HEART OF THE CITY.
          </p>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="px-32 py-24">
        <div className="text-center">
          <p className="text-4xl tracking-wider mb-10 text-[#958574]">
            MonkeyDB UIIA Hotel Bangkok
          </p>

          <button className="border border-[#dfdfdf] px-8 py-2 text-xl tracking-wider hover:bg-[#bbaf90] hover:text-white transition">
            HOTEL DETAILS
          </button>
        </div>
      </section>

      {/* ================= SKYLINE ================= */}
      <section className="px-16 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <img
            src="/images/window.jpg"
            alt="Window view"
            className="w-full max-w-[700px] h-auto object-contain shadow-lg"
          />

          <div>
            <h2 className="text-[40px] mb-8 tracking-wide border-b-2">
              Skyline Comfort
            </h2>

            <p className="text-[#958574] leading-relaxed mb-10 tracking-wide">
              Leave the noise behind and immerse yourself in a serene city view.
              <br />
              From gentle morning sunlight to calming evening skies,
              <br />
              our space offers a simple sanctuary infused with the quiet charm of
              urban life.
            </p>

            <button className="border border-[#dfdfdf] px-8 py-2 text-xs tracking-wider hover:bg-[#958574] hover:text-white transition">
              EXPLORE HIGHLIGHTS
            </button>
          </div>
        </div>
      </section>

      {/* ================= RESTAURANT ================= */}
      <section className="py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="bg-[#d3c6b1]/70 shadow-xl px-6 py-12 w-full md:w-3/5">
            <p className="text-xl leading-relaxed mb-10 tracking-wide text-[#444242]">
              Indulge in authentic flavors rooted in our heritage—
              <br />
              thoughtfully selected ingredients and inspired creations await to
              delight your senses.
            </p>

            <h2 className="text-sm text-[#6d6767] pt-3 tracking-wider border-t-2 border-white">
              - Pad Thai -
            </h2>
          </div>

          <div className="w-full md:w-2/5">
            <img
              src="/images/newpadthaiclr.png"
              alt="Pad Thai"
              className="w-full h-full object-cover p-6"
            />
          </div>
        </div>
      </section>

      {/* ================= ROOMS / FACILITIES ================= */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-evenly gap-8 mb-12">
          <button className="px-20 py-3 shadow-xl text-xl hover:bg-amber-900 hover:text-white transition">
            Room Type
          </button>
          <button className="px-10 py-3 bg-amber-900 text-white shadow-xl text-xl hover:bg-white hover:text-[#696459] transition">
            Local recommendations
          </button>
          <button className="px-20 py-3 shadow-xl text-xl hover:bg-amber-900 hover:text-white transition">
            Facilities
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <img src="/images/fclt.jpg" className="w-full object-cover" />
          <img src="/images/localr.jpg" className="w-full object-cover" />
          <img src="/images/rt.jpg" className="w-full object-cover" />
        </div>
      </section>
    </div>
    </Footer>
  );
};

export default Homepage;