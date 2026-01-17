export default function UserCard({ imagePath, imageAlt, roomName, checkIn, duration, guests, price }) {
  return (
    <div className="flex items-center gap-x-10 p-3 hover:bg-main6 hover:text-white border-b-2 mb-2 transition duration-300 ease-in-out">
      <div>
        <img
          src={imagePath}
          alt={imageAlt}
          width="150px"
          height="150px"
          className="shadow-(--box-shadow)"
        />
      </div>
      <div className="flex flex-col gap-y-0.5 mt-8 ">
        <div>
          <p className="text-2xl  text-main7 font-semibold ">{roomName ? roomName : "Room data"}</p>
        </div>
        <div>
          <span className="font-semibold text-lg text-[#484848] group-hover:text-white transition-colors">Check in: </span>
          <span className="text-main6 group-hover:text-white transition-colors">{checkIn ? checkIn : "Today"}</span>
        </div>
        <div>
          <span className="font-semibold text-lg text-[#484848] group-hover:text-white transition-colors">Duration: </span>
          <span className="text-main6 group-hover:text-white transition-colors">{duration ? duration : "Short"}</span>
        </div>
        <div>
          <span className="font-semibold text-lg text-[#484848] group-hover:text-white transition-colors">Guests: </span>
          <span className="text-main6 group-hover:text-white transition-colors">{guests ? guests : "0"}</span>
        </div>
        <div>
          <p className="font-semibold text-lg text-[#484848] group-hover:text-white transition-colors">$ {price ? price : "0"} USD</p>
        </div>
      </div>
    </div>
  );
}
