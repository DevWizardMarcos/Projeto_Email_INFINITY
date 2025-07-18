import React, { useEffect, useState } from 'react';

type DashboardData = {
  campanhasFeitas: number;
  pessoasAlcancadas: number;
  taxaCliques: number[];
  outrosGraficos: number[];
  // Adicione outros campos conforme necessário
};

const Dashboard: React.FC = () => {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/dashboard')
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error('Erro ao buscar dados do dashboard:', err));
  }, []);

  if (!data) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1 style={{ color: '#24796b', fontWeight: 600, fontSize: 32, marginBottom: 0 }}>
        Dashboard
      </h1>
      <div style={{ color: '#888', marginBottom: 32, marginTop: 8 }}>
        Veja estatísticas sobre suas campanhas!
      </div>
      <div style={{ display: 'flex', gap: 24, marginBottom: 32 }}>
        <div style={{ flex: 1, background: '#f6f6f6', borderRadius: 10, padding: 24, textAlign: 'center' }}>
          <div style={{ fontSize: 32, fontWeight: 700 }}>{data.campanhasFeitas}</div>
          <div>Campanhas Feitas</div>
        </div>
        <div style={{ flex: 1, background: '#f6f6f6', borderRadius: 10, padding: 24, textAlign: 'center' }}>
          <div style={{ fontSize: 32, fontWeight: 700 }}>{data.pessoasAlcancadas}</div>
          <div>Pessoas Alcançadas</div>
        </div>
        <div style={{ flex: 1, background: '#f6f6f6', borderRadius: 10, padding: 24, textAlign: 'center' }}>
          <div style={{ fontSize: 32, fontWeight: 700 }}>{data.taxaCliques.reduce((a, b) => a + b, 0)}</div>
          <div>Taxa de Cliques</div>
        </div>
        <div style={{ flex: 1, background: '#f6f6f6', borderRadius: 10, padding: 24, textAlign: 'center' }}>
          <div style={{ fontSize: 32, fontWeight: 700 }}>{data.outrosGraficos.reduce((a, b) => a + b, 0)}</div>
          <div>Outros Gráficos Úteis</div>
        </div>
        <div style={{ flex: 1, background: '#f6f6f6', borderRadius: 10, padding: 24, textAlign: 'center' }}>
          <div style={{ fontSize: 32, fontWeight: 700 }}>?</div>
          <div>Outro Box</div>
        </div>
      </div>
      {}
    </div>
  );
};

export default Dashboard;