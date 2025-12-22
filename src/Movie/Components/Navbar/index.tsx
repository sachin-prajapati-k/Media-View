import "./index.css";

export default function NavBar() {
  return (
    <>
      <div className="container-fluid bg-purple-custom d-flex flex-wrap-sm  align-items-center justify-content-between h-100 p-3 ">
        <div className="site-brand align-items-center d-flex gap-2">
          <div>Logo</div>
          <div className="brand-name">BrandName</div>
        </div>
        <div className=" gap-2 row  me-4 ">
          <div className="nav-item col-auto  btn-round">
            <a href="www.google.com" target="blank" className="nav-link">
              Home
            </a>
          </div>
          <div className="nav-item col-auto btn-round">
            <a href="www.google.com" className="nav-link">
              Songs
            </a>
          </div>
          <div className="nav-item col-auto  btn-round">
            <a href="www.google.com" className="nav-link">
              Web Series
            </a>
          </div>
          <div className="nav-item col-auto  btn-round">
            <a href="www.google.com" className="nav-link">
              TV Shows
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
