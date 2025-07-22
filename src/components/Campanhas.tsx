import React from 'react';

const tipos = [
    {
        nome: 'E-mail',
        cor: '#eaf6f3',
        icone: (
            <span style={{ fontSize: 36 }}>✉️</span>
        ),
    },
    {
        nome: 'SMS',
        cor: '#f3f3fd',
        icone: (
            <span style={{ fontSize: 36 }}>💬</span>
        ),
    },
    {
        nome: 'WhatsApp',
        cor: '#eafaf3',
        icone: (
            <span style={{ fontSize: 36 }}>🟢</span>
        ),
    },
    {
        nome: 'Push web',
        cor: '#faf7e6',
        icone: (
            <span style={{ fontSize: 36 }}>🔔</span>
        ),
    },
];

const Campanhas: React.FC = () => {
    return (
        <div style={{ flex: 1, background: '#fafbfa', minHeight: '100vh', padding: '0 40px' }}>
            {/* Breadcrumb */}
            <div style={{ color: '#888', fontSize: 15, marginTop: 32, marginBottom: 8 }}>
                Campanhas
            </div>
            {/* Título */}
            <h1 style={{ fontSize: 28, fontWeight: 700, margin: 0 }}>Campanhas</h1>
            {/* Subtítulo */}
            <div style={{
                textAlign: 'center',
                margin: '40px 0 24px 0',
                fontSize: 22,
                fontWeight: 600,
                color: '#222'
            }}>
                Seus clientes nunca estiveram tão próximos
            </div>
            <div style={{
                textAlign: 'center',
                color: '#444',
                fontSize: 16,
                marginBottom: 16
            }}>
                Não importa como você queira entrar em contato com seus clientes, temos o canal de marketing certo para você.<br />
                <b>Que tipo de campanha o senhor deseja criar?</b>
            </div>
            {/* Cards */}
            <div style={{
                display: 'flex',
                gap: 32,
                justifyContent: 'center',
                marginTop: 24
            }}>
                {tipos.map((tipo, idx) => (
                    <div key={idx} style={{
                        background: tipo.cor,
                        borderRadius: 16,
                        padding: '32px 36px',
                        minWidth: 160,
                        boxShadow: '0 1px 8px #0001',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        cursor: 'pointer',
                        border: '2px solid #fff',
                        transition: 'border 0.2s',
                    }}>
                        {tipo.icone}
                        <div style={{
                            marginTop: 18,
                            fontWeight: 700,
                            color: '#222',
                            fontSize: 18
                        }}>
                            {tipo.nome}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Campanhas;