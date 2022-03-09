export default function Header() {
  return (
    <div className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          ToDo List
        </a>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="main-nav" className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-link active">
                Accueil
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
