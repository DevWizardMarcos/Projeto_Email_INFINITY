import React from 'react';

const Automacoes: React.FC = () => {
    return (
        <div style={{
            flex: 1,
            minHeight: '100vh',
            background: '#18191a',
            color: '#fff',
            padding: 0
        }}>
            {/* Topo */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '18px 40px 18px 32px',
                borderBottom: '1px solid #222',
                background: '#18191a',
                position: 'sticky',
                top: 0,
                zIndex: 10
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <span style={{ fontWeight: 700, fontSize: 22, color: '#4ee488' }}>TrashGarden</span>
                    <span style={{
                        background: '#222',
                        color: '#4ee488',
                        borderRadius: 8,
                        padding: '4px 12px',
                        fontWeight: 600,
                        fontSize: 14,
                        marginLeft: 8
                    }}>Free plan</span>
                    <button style={{
                        background: '#222',
                        color: '#fff',
                        border: 'none',
                        borderRadius: 8,
                        padding: '6px 18px',
                        fontWeight: 700,
                        fontSize: 15,
                        marginLeft: 8,
                        cursor: 'pointer'
                    }}>Upgrade</button>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
                    <span style={{ fontSize: 20, color: '#fff', cursor: 'pointer' }}>⚙️</span>
                    <span style={{ fontSize: 20, color: '#fff', cursor: 'pointer' }}>🔔</span>
                    <span style={{ fontWeight: 600, color: '#fff', fontSize: 15 }}>
                        Trash Garden
                        <span style={{ display: 'block', fontSize: 13, color: '#aaa' }}>trashgarden3000@gmail.com</span>
                    </span>
                </div>
            </div>
            {/* Conteúdo */}
            <div style={{ maxWidth: 1100, margin: '40px auto', padding: 0 }}>
                <h1 style={{ color: '#fff', fontSize: 32, fontWeight: 700, marginBottom: 32 }}>Automations</h1>
                <div style={{
                    background: '#232526',
                    borderRadius: 16,
                    padding: 40,
                    display: 'flex',
                    gap: 40,
                    alignItems: 'center',
                    boxShadow: '0 2px 16px #0004'
                }}>
                    {/* Imagem ilustrativa */}
                    <div style={{
                        width: 220,
                        height: 320,
                        background: '#2d2f31',
                        borderRadius: 12,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <span style={{ fontSize: 80, color: '#4ee488' }}>🤖</span>
                    </div>
                    {/* Texto e ações */}
                    <div style={{ flex: 1 }}>
                        <h2 style={{ color: '#fff', fontSize: 24, fontWeight: 700, marginBottom: 18 }}>
                            Create your first automation
                        </h2>
                        <div style={{ color: '#ccc', fontSize: 16, marginBottom: 18 }}>
                            Set it up once, and let it do all the work! Build engagement with workflows that automatically send emails based on subscribers’ actions.
                        </div>
                        <ul style={{ color: '#bbb', fontSize: 15, marginBottom: 24, paddingLeft: 20 }}>
                            <li>Automate welcome emails, anniversaries, birthdays and more</li>
                            <li>Use link triggers to activate email workflows</li>
                            <li>Tag subscribers to create new groups and segments</li>
                            <li>Guide customers through every step of their journey</li>
                            <li>Sell more products with abandoned cart emails</li>
                        </ul>
                        <div style={{ display: 'flex', gap: 18 }}>
                            <button style={{
                                background: '#4ee488',
                                color: '#18191a',
                                border: 'none',
                                borderRadius: 8,
                                padding: '10px 28px',
                                fontWeight: 700,
                                fontSize: 16,
                                cursor: 'pointer'
                            }}>Create</button>
                            <button style={{
                                background: 'none',
                                color: '#fff',
                                border: 'none',
                                fontWeight: 500,
                                fontSize: 16,
                                cursor: 'pointer',
                                textDecoration: 'underline'
                            }}>Learn more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Automacoes;