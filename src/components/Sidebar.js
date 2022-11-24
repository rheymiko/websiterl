import Kirchoff from "./Kirchoff";

function Sidebar(params) {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
            Hello
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <a className="mx-auto">Simulasi Rangkaian Listrik</a>
            </li>
            <li className="hidden">
              <a>Hukum Ohm</a>
            </li>
            <li className="hidden">
              <a>Hukum Kirchoff</a>
            </li>
            <li>
              <a>Hukum Kirchoff</a>
            </li>
          </ul>
        </div>
        <div className="drawer-content">
          <Kirchoff />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
