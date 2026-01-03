export default function UserCard({
  imagePath,
  imageAlt,
  roomName,
  checkIn,
  duration,
  guests,
  price,
}) {
  return (
    <div className="flex flex-col justify-center items-center gap-x-10 gap-y-3 p-3 hover:bg-(--color-main4) transition duration-300 ease-in-out">
      <div>
        <img
          src={imagePath}
          alt={imageAlt}
          width="200px"
          height="200px"
          className="shadow-(--box-shadow)"
        />
      </div>
      <div className="flex flex-col gap-y-0.5 pr-13">
        <div>
          <p className="text-2xl font-semibold">
            {roomName ? roomName : "Room data"}
          </p>
        </div>
        <div>
          <span className="font-semibold text-lg">Check in: </span>
          <span>{checkIn ? checkIn : "Today"}</span>
        </div>
        <div>
          <span className="font-semibold text-lg">Duration: </span>
          <span>{duration ? duration : "Short"}</span>
        </div>
        <div>
          <span className="font-semibold text-lg">Guests: </span>
          <span>{guests ? guests : "0"}</span>
        </div>
        <div>
          <p className="font-semibold text-lg">$ {price ? price : "0"} USD</p>
        </div>
      </div>
    </div>
  );
}
