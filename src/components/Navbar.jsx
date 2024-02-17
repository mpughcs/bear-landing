import bear_logo from '../assets/images/bear.png';

export default function NavBar() {
  return (<div className="navbar bg-base-100">
    <div className="flex">
      <div className='w-[45px]'>

        <img src={bear_logo} alt='bear logo' />

      </div>

      <a className="btn btn-ghost text-4xl font-Pacifico">Bear</a>
    </div>
    <div className="flex-none font-Poppins">
      <ul className="menu menu-horizontal px-1">
        <li><a className=''>About</a></li>
        <li>
          <details>
            <summary>
              More
            </summary>
            <ul className="p-2 bg-base-100 rounded-t-none w-[190px]">
              <li><a>Link 1</a></li>
              <li><a>Link 2</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>);
}

