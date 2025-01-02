
function Footer() {
  return (
    <>
      <div className=" bg-slate-800 text-white flex justify-evenly items-center h-[10rem] relative bottom-[-1]">
        <div className=" ">
          <div className="flex justify-center font-bold text-red-600 ">
            <p className=" line-through text-2xl ">MyApp</p>
          </div>
          <div>MyApp</div>
        </div>
        <div>
          <div className="text-xl font-semibold text-yellow-50">Links</div>
          <div>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="text-xl font-semibold text-yellow-50">
            Social Media
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Footer