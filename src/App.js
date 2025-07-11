import React from 'react';
import PersonalInfoBar from './PersonalInfoBar';
import LabValuesForm from './LabValuesForm';

function App() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Üst kısım: yeşil kişisel bilgiler barı */}
      <PersonalInfoBar />

      {/* Alt kısım: %50 sol - %50 sağ bölünmüş */}
      <div style={{ flex: 1, display: 'flex' }}>
        {/* Sol taraf: şimdilik boş */}
        <div style={{ width: '50%', backgroundColor: '#f5f5f5' }}></div>

        {/* Sağ taraf: kan değerleri */}
        <div style={{
          width: '50%',
          backgroundColor: '#ffffff',
          borderLeft: '1px solid #ccc',
          padding: '40px'
        }}>
          <LabValuesForm />
        </div>
      </div>
    </div>
  );
}

export default App;
