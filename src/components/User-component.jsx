import UserCard from "./User-card";
import UserCardMobile from "./User-card-mobile";

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
          <div className="flex flex-col justify-center items-center">
            <div>
              <img
                src="images/users-portrait.jpg"
                alt="User Portrait"
                width="150"
                height="150"
                className="rounded-full object-cover aspect-square shadow-(--box-shadow)"
              />
            </div>
            <div className="mt-5">
              <p className="text-4xl font-bold">Jane Doe</p>
            </div>
            <div className="mt-10">
              <p className="text-2xl font-semibold">Identity Verification</p>
            </div>
            <div className="mt-5 w-3/4">
              <p className="text-xl text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
                fugiat unde expedita recusandae est exercitationem placeat vero
                at, sint quaerat.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[90%] lg:w-[65%] lg:p-5 bg-(--color-main5) lg:mt-10 mb-10 py-10 flex flex-col justify-center items-center">
          <div className="w-[80%] flex flex-col">
            <div>
              <p className="text-4xl font-bold">Hello, Jane Doe</p>
            </div>
            <div>
              <p className="text-xl font-medium mt-5">Joined in 2021</p>
            </div>
            <div className="mt-3 border border-solid border-black opacity-50">
              
            </div>
          </div>
          <div className="w-[80%] flex flex-col mt-3">
            <div className="mb-5">
              <h3 className="text-xl font-semibold">Booking History</h3>
            </div>
            <div className="hidden md:flex md:flex-col md:gap-y-3">
              <UserCard imagePath="#" imageAlt="Image room 1" roomName="Room 1" checkIn="checkIn-1" duration="Duration-1" guests="Guest-1" price="1000"/>
              <UserCard imagePath="#" imageAlt="Image room 2" roomName="Room 2" checkIn="checkIn-2" duration="Duration-2" guests="Guest-2" price="1500"/>
            </div>
            <div className="flex flex-col gap-y-3 md:hidden lg:hidden">
              <UserCardMobile imagePath="#" imageAlt="Image room 1" roomName="Room 1" checkIn="checkIn-1" duration="Duration-1" guests="Guest-1" price="1000"/>
              <UserCardMobile imagePath="#" imageAlt="Image room 2" roomName="Room 2" checkIn="checkIn-2" duration="Duration-2" guests="Guest-2" price="1500"/>
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
