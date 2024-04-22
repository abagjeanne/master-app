import React from 'react';
// import telegramQR from './path/to/telegramQR.jpg';
// import wechatQR from './path/to/wechatQR.jpg';
// import messengerQR from './path/to/messengerQR.jpg';
// import viberQR from './path/to/viberQR.jpg';

const ContactCard = ({ Name, Position, Number, profile, altText, telegramQR, wechatQR, messengerQR, viberQR}) => {
  return (
    <div className="col hover-effect">
      <div className="text-center">
        <img className="rounded-circle" src={profile} width="120px" height="120px" alt={altText} />
      </div>
      <p style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '1px', textAlign: 'center' }}>{Name}</p>
      <p style={{ textAlign: 'center' }}>{Position}</p>
      <p style={{ marginBottom: '0px', textAlign: 'center' }}><strong>Contact Number/s:</strong></p>
      <p style={{ textAlign: 'center' }}>{Number}</p>
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
                <td className="text-center" style={{ width: '180.703px' }}><img src={telegramQR} style={{ width: '150px', height: '150px' }} alt="Telegram QR Code" /></td>
                <td className="text-center"><img src={wechatQR} style={{ width: '150px', height: '150px' }} alt="WeChat QR Code" /></td>
              </tr>
              <tr>
                <td className="text-center" style={{ width: '180.703px', fontWeight: 'bold' }}>Messenger</td>
                <td className="text-center" style={{ fontWeight: 'bold' }}>Viber</td>
              </tr>
              <tr>
                <td className="text-center" style={{ width: '180.703px' }}><img src={messengerQR} style={{ width: '150px', height: '150px' }} alt="Messenger QR Code" /></td>
                <td className="text-center"><img src={viberQR} style={{ width: '150px', height: '150px' }} alt="Viber QR Code" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
