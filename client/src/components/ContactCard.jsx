import React from 'react';

const ContactCard = ({ Name, Position, Number, profile, altText, telegramQR, wechatQR, viberQR }) => {
  return (
    <div className="card p-2 col">
      <div className="text-center">
        <img className="rounded-circle" src={profile} width="120px" height="120px" alt={altText} />
      </div>
      <p style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '5px', textAlign: 'center' }}>{Name}</p>
      <p style={{ textAlign: 'center', marginBottom: '10px' }}>{Position}</p>
      <p style={{ marginBottom: '5px', textAlign: 'center', fontWeight: 'bold' }}>Contact Number/s:</p>
      <p style={{ textAlign: 'center', marginBottom: '20px' }}>{Number}</p>

      <div className="row justify-content-around">
        {/* Telegram QR */}
        {telegramQR &&
          <div className="col text-center">
            <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>Telegram</p>
            <img className='img-hover' src={telegramQR} alt="Telegram QR Code" />
          </div>
        }

        {/* WeChat QR */}
        {wechatQR &&
          <div className="col text-center">
            <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>WeChat</p>
            <img className='img-hover' src={wechatQR} alt="WeChat QR Code" />
          </div>
        }
        {/* Viber QR */}
        {viberQR &&
          <div className="col text-center">
            <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>Viber</p>
            <img className='img-hover' src={viberQR}  alt="Viber QR Code" />
          </div>
        }
      </div>

    </div>
  );
};

export default ContactCard;
