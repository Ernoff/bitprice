import Link from 'next/link'

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a className="navbar-brand" >Bit Price</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link href="/"><a className="nav-link" >Home <span className="sr-only">(current)</span></a>
        </Link>
      </li>
      <li className="nav-item">
       <Link href="/about"><a className="nav-link">About</a></Link>
      </li>
    </ul>
   
  </div>
</nav>
);

export default Navbar

// <style jsx>{`
//     ul {
//       background: #333;
//       color:#fff;
//       list-style: none;
//       display: flex;
//     }
   
//     ul li {
//       font-size: 18px;
//       margin-right: 20px
//     }
//     `}
//   </style>