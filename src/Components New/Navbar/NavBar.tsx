export default function NavBar() {
  return (
    <>
      <div className="container-fluid  d-flex justify-content-between p-2 m-1">
        <div>
          <img src="#" alt="logo" />
        </div>
        <div className="nav nav gap-3 me-4">
          <div className=" nav-item nav-link text-dark">Home</div>
          <div className="nav nav-item">Store</div>
          <div className="nav nav-item">Cart</div>
          <div className="nav nav-item">Help</div>
        </div>
      </div>
    </>
  );
}
