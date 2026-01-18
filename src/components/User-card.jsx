export default function UserCard({ imagePath, imageAlt, roomName, checkIn, duration, guests, price }) {
  return (
    <div className="flex items-center gap-x-10 p-3 hover:bg-(--color-main3) border-b-2 mb-2 text-shadow-2xs transition duration-300 ease-in-out">
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
          <p className="text-2xl  text-black font-semibold ">{roomName ? roomName : "Room data"}</p>
        </div>
        <div>
          <span className="font-semibold text-lg text-black">Check in: </span>
          <span className="text-black">{checkIn ? checkIn : "Today"}</span>
        </div>
        <div>
          <span className="font-semibold text-lg text-black">Duration: </span>
          <span className="text-black">{duration ? duration : "Short"}</span>
        </div>
        <div>
          <span className="font-semibold text-lg text-black ">Guests: </span>
          <span className="text-black">{guests ? guests : "0"}</span>
        </div>
        <div>
          <p className="font-semibold text-lg text-black ">$ {price ? price : "0"} USD</p>
        </div>
      </div>
    </div>
  );
}
