import React from 'react'

const Main = () => {

  return(
    <div>
      <div className="container py-4 py-xl-5" style={{ marginBottom: "-100px" }}>
        <div className="row mb-5">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h2 style={{ fontSize: "27px" }}>Welcome to the GDS Group of Companies</h2>
            <p className="w-lg-50" style={{ fontSize: "13px" }}>Work from Home Resources Site</p>
            <p className="w-lg-50" style={{ fontSize: "15px" }}>This website composed of various options and resources for our staff/employees under the GDS Group of Companies to access Company Resources at the comfort of their homes for Work From Home, Hybrid, and On-Site office works.</p>
          </div>
        </div>
      </div>
      <div className="container py-4 py-xl-5">
        <div className="row mb-5">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h2 style={{ fontSize: "27px" }}>COMPANIES</h2>
          </div>
        </div>
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
          <div className="col">
            <div className="p-4"><span className="badge rounded-pill bg-primary mb-2">Companies</span>
              <div className="row" style={{ textAlign: "center" }}>
                <div className="col" style={{ marginTop: "5px", marginBottom: "5px" }}><a href="#"><img src="assets/img/3.png" style={{ width: "280px", textAlign: "left" }} alt="GDS Capital Incorporated" /></a></div>
              </div>
              <p style={{ textAlign: "center", fontWeight: "bold", fontSize: "18px" }}>GDS CAPITAL INCORPORATED</p>
            </div>
          </div>
          {/* Repeat similar structure for other companies */}
        </div>
      </div>
      <div className="container py-4 py-xl-5">
        <div className="row mb-5">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h2 style={{ fontSize: "27px" }}>LINKS</h2>
          </div>
        </div>
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
          <div className="col">
            <div className="p-4"><span className="badge rounded-pill bg-primary mb-2">Links</span><a href="#">
                <h4>Synology Servers Access Links</h4>
              </a>
              <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
              <div className="d-flex"><img className="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" alt="Placeholder" />
                <div>
                  <p className="fw-bold mb-0">Jan Wilbert See</p>
                  <p className="text-muted mb-0">04/01/2024</p>
                </div>
              </div>
            </div>
          </div>
          {/* Repeat similar structure for other links */}
        </div>
      </div>
      <div className="container py-4 py-xl-5">
        <div className="row mb-5">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h2 style={{ fontSize: "27px" }}>INFORMATION</h2>
          </div>
        </div>
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
          <div className="col">
            <div className="p-4"><span className="badge rounded-pill bg-primary mb-2">Information</span><a href="#">
                <h4>How to Link Shared Network Files via RaiDrive (Windows)</h4>
              </a>
              <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
              <div className="d-flex"><img className="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" alt="Placeholder" />
                <div>
                  <p className="fw-bold mb-0">Prinze Joshua Valloso</p>
                  <p className="text-muted mb-0">04/01/2024</p>
                </div>
              </div>
            </div>
          </div>
          {/* Repeat similar structure for other information */}
        </div>
      </div>
    </div>
  )
}

export default Main;