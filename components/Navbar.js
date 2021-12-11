import Link from 'next/link'
const Navbar = () => (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
  <Link href="/"><a className="navbar-brand">CPCR Wiki</a></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
      <li className="nav-item">
          <Link href="http://10.35.1.110:5000/#/inicio"><a className="nav-link" >Plataforma</a></Link>
        </li>
        <li className="nav-item">
          <Link href="/blog"><a className="nav-link" >Sistemas</a></Link>
        </li>
        <li className="nav-item">
        <Link href="/github"><a className="nav-link" >OpenFin</a></Link>
        </li>
        <li className="nav-item">
        <Link href="/github"><a className="nav-link" >PLD</a></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
)

export default Navbar;