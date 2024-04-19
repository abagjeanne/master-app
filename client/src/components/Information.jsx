import React from 'react';

const Main = () => {
  return (
    <div>

      <div className="container py-4 py-xl-5">
        <div className="row mb-5">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
          <h2 className="display-6" style={{fontWeight:'bold'}}>Information</h2>
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
  );
};

export default Main;
