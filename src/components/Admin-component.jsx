export default function AdminComponent() {
  return (
    <div className="flex flex-row font-earn">
      <div>This is aside bar</div>
      <main className="w-screen flex flex-col justify-center items-center">
        <div className="w-[95%] flex justify-between items-center bg-(--color-main3) text-(--color-main12) p-3 rounded-t-md">
          <div>
            <h2 className="text-4xl font-bold">Profile</h2>
          </div>
          <div className="flex justify-center items-center hover:bg-(--color-main2) rounded-full object-cover aspect-square w-9">
            <a href="#">
              <img
                src="images/gear-settings.svg"
                alt="gear logo"
                width="35px"
                height="35px"
              />
            </a>
          </div>
        </div>
        <div className="w-[95%] flex justify-center bg-(--color-main5) rounded-b-md">
          <div className="w-full px-3 flex flex-col justify-center items-center">
            <div className="w-[90%] m-15 bg-(--color-main4) rounded-md">
              <div className="w-full mt-5">
                <h3 className="text-2xl font-semibold ml-5">Profile Card</h3>
              </div>
              <div className="w-full flex flex-col items-center mt-5">
                <div>
                  <img
                    src="images/users-portrait.jpg"
                    alt="admin portrait"
                    width="150px"
                    height="150px"
                    className="rounded-full object-cover aspect-square shadow-(--box-shadow)"
                  />
                </div>
                <div className="w-full flex flex-col items-center mt-3">
                  <div>
                    <p className="text-xl font-semibold">Admin Pann</p>
                  </div>
                  <div>
                    <p className="text-lg">Admin</p>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col items-center mt-5">
                <div className="w-full flex flex-col ml-10">
                  <div>
                    <p className="text-xl font-semibold">Position</p>
                  </div>
                  <div>
                    <p className="text-lg">Admin</p>
                  </div>
                </div>
                <div className="w-full flex flex-col mt-3 ml-10">
                  <div>
                    <p className="text-xl font-semibold">Phone</p>
                  </div>
                  <div>
                    <p className="text-lg">084-444-4444</p>
                  </div>
                </div>
                <div className="w-full flex flex-col mt-3 mb-5 ml-10">
                  <div>
                    <p className="text-xl font-semibold">Check In-Out</p>
                  </div>
                  <div>
                    <p className="text-lg">No Data</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-3 flex flex-col justify-center items-center">
            <div className="w-[90%] h-full m-15 bg-(--color-main4) flex flex-col justify-between rounded-md">
              <div>
                <div className="w-full mt-5">
                  <p className="text-2xl font-semibold ml-5">
                    Additional Information
                  </p>
                </div>
                <div className="w-full mt-5 ml-5">
                  <div>
                    <p className="text-xl font-semibold">users.Id</p>
                  </div>
                  <div>
                    <p className="text-lg">1</p>
                  </div>
                </div>
                <div className="w-full mt-5 ml-5">
                  <div>
                    <p className="text-xl font-semibold">createdAt</p>
                  </div>
                  <div>
                    <p className="text-lg">2023-09-14 00:00:00</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mb-5 mr-5">
                <a href="admin-dashboard.html">
                  <button className="px-6 py-4 bg-(--color-main3) hover:bg-(--color-main2) rounded-xl cursor-pointer">
                    Close
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
