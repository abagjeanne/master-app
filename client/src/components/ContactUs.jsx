import React from 'react';

const Contact = () => {
  return (
    <div>
      <div className="container py-4 py-xl-5">
        <div className="row mb-5">
          <div className="col-md-8 col-xl-10 text-center mx-auto">
            <h2 style={{ fontSize: '27px' }}>Got Problems/Concerns?</h2>
            <p className="w-lg-50" style={{ fontSize: '15px' }}>Please contact our IT Team with their given contact numbers and/or Social Media QR Codes presented here.</p>
          </div>
        </div>
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
          <div className="col">
              <div className="text-center"><img className="rounded-circle" src="assets/img/prof%20pic.jpg" width="120px" height="120px" alt="Profile" /></div>
              <p style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '1px', textAlign: 'center' }}>Jan Wilbert P. See</p>
              <p style={{ textAlign: 'center' }}>IT Head</p>
              <p style={{ marginBottom: '0px', textAlign: 'center' }}><strong>Contact Number/s:</strong></p>
              <p style={{ textAlign: 'center' }}>0917 541 9891 / 0995 251 1442</p>
              <div>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr></tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center" style={{ width: '180.703px', fontWeight: 'bold' }}>Telegram</td>
                        <td className="text-center" style={{ fontWeight: 'bold' }}>WeChat</td>
                      </tr>
                      <tr>
                        <td className="text-center" style={{ width: '180.703px' }}><img src="assets/img/qr%20code%20sample.png" style={{ width: '150px', height: '150px' }} alt="Telegram QR Code" /></td>
                        <td className="text-center"><img src="assets/img/qr%20code%20sample.png" style={{ width: '150px', height: '150px' }} alt="WeChat QR Code" /></td>
                      </tr>
                      <tr>
                        <td className="text-center" style={{ width: '180.703px', fontWeight: 'bold' }}>Messenger</td>
                        <td className="text-center" style={{ fontWeight: 'bold' }}>Viber</td>
                      </tr>
                      <tr>
                        <td className="text-center" style={{ width: '180.703px' }}><img src="assets/img/qr%20code%20sample.png" style={{ width: '150px', height: '150px' }} alt="Messenger QR Code" /></td>
                        <td className="text-center"><img src="assets/img/qr%20code%20sample.png" style={{ width: '150px', height: '150px' }} alt="Viber QR Code" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
          </div>
          {/* Repeat the above structure for other IT team members */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
