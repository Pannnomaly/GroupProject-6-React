import UserCard from "./User-card";

export default function UserComponent() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center font-earn lg:flex-row lg:justify-center lg:items-stretch">
      <div className="w-[90%] lg:w-[25%] bg-(--color-main3) py-10 mt-10 lg:mb-10 gap-10 flex flex-col justify-center items-center text-(--color-main12)">
        <div className="w-full flex justify-end pr-10">
          <div className="flex justify-center items-center hover:bg-(--color-main2) transition duration-300 ease-in-out rounded-full object-cover aspect-square w-9">
            <a href="#">
              <img
                src="gear-settings.svg"
                alt="gear logo"
                width="30"
                height="30"
              />
            </a>
          </div>
        </div>
        <div className="w-[90%] flex flex-col justify-center items-center">
          <div>
            <img
              src="images/users-portrait.jpg"
              alt="User Portrait"
              width="175"
              height="175"
              className="rounded-full object-cover aspect-square shadow-(--box-shadow)"
            />
          </div>
          <div className="w-[90%] flex flex-col justify-center items-start mt-10 text-xl text-shadow-2xs">
            <p>
              <span className="font-semibold">First name: </span>
              <span className="ml-2">Jane</span>
            </p>
            <p className="mt-2">
              <span className="font-semibold">Last name: </span>
              <span className="ml-2">Doe</span>
            </p>
            <p className="mt-2">
              <span className="font-semibold">Email: </span>
              <span className="ml-2">Janedoe@gmail.com</span>
            </p>
            <p className="mt-5 text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore consequuntur itaque dolorem quae ab iure?
            </p>
          </div>
        </div>
      </div>
      <div className="w-[90%] lg:w-[65%] lg:p-5 bg-white lg:mt-10 mb-10 py-10 flex flex-col justify-center items-center">
        <div className="w-[80%] flex flex-col">
          <div>
            <p className="text-4xl text-black mt-5 font-bold text-shadow-2xs">
              Welcome, Jane Doe!
            </p>
          </div>

          <div className="mt-3 border border-solid border-(--color-main3) opacity-50"></div>
        </div>
        <div className="w-[80%] flex flex-col mt-3">
          <div className="mb-5">
            <h3 className="text-black text-xl font-semibold text-shadow-2xs">
              Booking History
            </h3>
          </div>
          <div className="md:flex md:flex-col md:gap-y-3">
            <UserCard
              imagePath="#"
              imageAlt="Image room 1"
              roomName="Room 1"
              checkIn="checkIn-1"
              duration="Duration-1"
              guests="Guest-1"
              price="1000"
            />
            <UserCard
              imagePath="#"
              imageAlt="Image room 2"
              roomName="Room 2"
              checkIn="checkIn-2"
              duration="Duration-2"
              guests="Guest-2"
              price="1500"
            />
          </div>
        </div>
        <div className="flex gap-x-10 mt-3">
          <div className="flex justify-center items-center w-8 bg-(--color-main3) rounded-full object-cover aspect-square shadow-(--box-shadow) hover:bg-(--color-main2) transition duration-300 ease-in-out cursor-pointer">
            <button className="cursor-pointer">
              <img
                src="arrow-forward-navigation.svg"
                alt="backward"
                width="25px"
                height="25px"
                className="scale-x-[-1]"
              />
            </button>
          </div>
          <div className="flex justify-center items-center w-8 bg-(--color-main3) rounded-full object-cover aspect-square shadow-(--box-shadow) hover:bg-(--color-main2) transition duration-300 ease-in-out cursor-pointer">
            <button className="cursor-pointer">
              <img
                src="arrow-forward-navigation.svg"
                alt="backward"
                width="25px"
                height="25px"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
