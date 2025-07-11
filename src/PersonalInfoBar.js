import React, { useState } from 'react';

function PersonalInfoBar() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');

  return (
    <div style={{
      backgroundColor: '#388E3C', // daha koyu yeşil
      padding: '20px 40px',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: '20px',
      color: '#fff',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <span style={{ fontWeight: 'bold', fontSize: '16px' }}>Kişisel Bilgiler:</span>

      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="İsim"
        style={inputStyle}
      />
      <input
        type="text"
        value={surname}
        onChange={e => setSurname(e.target.value)}
        placeholder="Soyisim"
        style={inputStyle}
      />
      <input
        type="number"
        value={age}
        onChange={e => setAge(e.target.value)}
        placeholder="Yaş"
        min="0"
        style={inputStyle}
      />
    </div>
  );
}

const inputStyle = {
  padding: '10px',
  fontSize: '14px',
  borderRadius: '6px',
  border: 'none',
  outline: 'none',
  width: '130px',
};

export default PersonalInfoBar;