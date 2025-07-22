import React, { useState } from 'react';

const contatosFake = [
    {
        nome: 'trashgarden3000@gmail.com',
        inscrito: ['E-mail', 'SMS'],
        email: 'trashgarden3000@gmail.com',
        ultimaAlt: '18/06/2025',
    },
];

const Contatos: React.FC = () => {
    const [showModal, setShowModal] = useState<'adicionar' | 'importar' | null>(null);
    const [contatoSelecionado, setContatoSelecionado] = useState<typeof contatosFake[0] | null>(null);

    return (
        <div style={{ flex: 1, background: '#fafbfa', minHeight: '100vh' }}>
            {/* Topo */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '32px 40px 0 40px'
            }}>
                <div>
                    <h1 style={{ fontSize: 28, fontWeight: 700, margin: 0 }}>Contatos</h1>
                    <div style={{ color: '#444', fontSize: 15, marginTop: 8 }}>
                        Este é seu banco de dados de contatos. Nele você pode ver, organizar e gerenciar contatos, individualmente ou em grupo.
                    </div>
                </div>
                <div style={{ display: 'flex', gap: 12 }}>
                    <button
                        onClick={() => setShowModal('adicionar')}
                        style={{
                            background: '#111',
                            color: '#fff',
                            border: 'none',
                            borderRadius: 8,
                            padding: '10px 20px',
                            fontWeight: 700,
                            fontSize: 15,
                            cursor: 'pointer',
                            boxShadow: '0 2px 8px #0001'
                        }}
                    >
                        Adicionar contatos
                    </button>
                    <button
                        onClick={() => setShowModal('importar')}
                        style={{
                            background: '#fff',
                            color: '#111',
                            border: '1.5px solid #111',
                            borderRadius: 8,
                            padding: '10px 20px',
                            fontWeight: 700,
                            fontSize: 15,
                            cursor: 'pointer',
                            boxShadow: '0 2px 8px #0001'
                        }}
                    >
                        Importar contatos
                    </button>
                </div>
            </div>
            {/* Barra de ações */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '24px 40px 0 40px'
            }}>
                <button style={{
                    background: '#fff',
                    color: '#222',
                    border: '1px solid #e5e7eb',
                    borderRadius: 8,
                    padding: '8px 16px',
                    fontWeight: 500,
                    fontSize: 15,
                    cursor: 'pointer',
                    boxShadow: '0 1px 4px #0001'
                }}>Carregar uma lista ou um segmento</button>
                <button style={{
                    background: '#fff',
                    color: '#222',
                    border: '1px solid #e5e7eb',
                    borderRadius: 8,
                    padding: '8px 16px',
                    fontWeight: 500,
                    fontSize: 15,
                    cursor: 'pointer',
                    boxShadow: '0 1px 4px #0001'
                }}>Usar modelo de segmento</button>
                <button style={{
                    background: '#fff',
                    color: '#222',
                    border: '1px solid #e5e7eb',
                    borderRadius: 8,
                    padding: '8px 16px',
                    fontWeight: 500,
                    fontSize: 15,
                    cursor: 'pointer',
                    boxShadow: '0 1px 4px #0001',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4
                }}>
                    Adicionar filtro
                    <span style={{
                        display: 'inline-block',
                        fontSize: 14,
                        marginLeft: 2,
                        transform: 'translateY(1px)'
                    }}>▼</span>
                </button>
                <a href="#" style={{
                    color: '#7b61ff',
                    fontWeight: 500,
                    textDecoration: 'underline',
                    fontSize: 15,
                    marginLeft: 8
                }}>Personalizar colunas</a>
                <input
                    type="text"
                    placeholder="Pesquisar por nome, e-mail, número de telefone..."
                    style={{
                        marginLeft: 'auto',
                        borderRadius: 8,
                        border: '1px solid #e5e7eb',
                        padding: '8px 16px',
                        fontSize: 15,
                        width: 280,
                        background: '#fff',
                        boxShadow: '0 1px 4px #0001'
                    }}
                />
            </div>
            {/* Tabela */}
            <div style={{
                background: '#fff',
                borderRadius: 16,
                margin: '24px 40px',
                boxShadow: '0 1px 8px #0001',
                overflowX: 'auto'
            }}>
                <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, fontSize: 15 }}>
                    <thead>
                        <tr style={{ background: '#fafbfa', color: '#444', textAlign: 'left', letterSpacing: 1 }}>
                            <th style={{ padding: '12px 8px', fontWeight: 700, fontSize: 13, textTransform: 'uppercase' }}>
                                <input type="checkbox" />
                            </th>
                            <th style={{ padding: '12px 8px', fontWeight: 700, fontSize: 13, textTransform: 'uppercase' }}>Contato</th>
                            <th style={{ padding: '12px 8px', fontWeight: 700, fontSize: 13, textTransform: 'uppercase' }}>Inscrito</th>
                            <th style={{ padding: '12px 8px', fontWeight: 700, fontSize: 13, textTransform: 'uppercase' }}>E-mail</th>
                            <th style={{ padding: '12px 8px', fontWeight: 700, fontSize: 13, textTransform: 'uppercase' }}>Última alt...</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contatosFake.map((c, idx) => (
                            <tr key={idx} style={{
                                borderTop: '1px solid #f0f0f0',
                                borderRadius: 12,
                                background: idx % 2 === 0 ? '#fff' : '#fafbfa'
                            }}>
                                <td style={{ padding: '12px 8px' }}>
                                    <input type="checkbox" />
                                </td>
                                <td style={{ padding: '12px 8px', color: '#1a7f6b', fontWeight: 500 }}>
                                    <span
                                        style={{ color: '#1a7f6b', textDecoration: 'underline', cursor: 'pointer' }}
                                        onClick={() => setContatoSelecionado(c)}
                                    >
                                        {c.nome}
                                    </span>
                                </td>
                                <td style={{ padding: '12px 8px' }}>
                                    {c.inscrito.map((tipo, i) => (
                                        <span key={i} style={{
                                            background: tipo === 'E-mail' ? '#eaf6f3' : '#f3eafd',
                                            color: tipo === 'E-mail' ? '#1a7f6b' : '#7b61ff',
                                            borderRadius: 8,
                                            padding: '2px 10px',
                                            fontSize: 13,
                                            fontWeight: 600,
                                            marginRight: 6,
                                            display: 'inline-block'
                                        }}>{tipo}</span>
                                    ))}
                                </td>
                                <td style={{ padding: '12px 8px', color: '#222' }}>{c.email}</td>
                                <td style={{ padding: '12px 8px', color: '#222' }}>{c.ultimaAlt}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* Paginação */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px'
                }}>
                    <span style={{ color: '#888', fontSize: 14 }}>1 contato + 0 contato anônimo</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <select style={{
                            borderRadius: 8,
                            border: '1px solid #eaf6f3',
                            padding: '2px 8px',
                            fontSize: 14,
                            color: '#1a7f6b',
                            background: '#f7faf9'
                        }}>
                            <option>20</option>
                            <option>50</option>
                            <option>100</option>
                        </select>
                        <span style={{ color: '#888', fontSize: 14 }}>Linhas por página</span>
                        <span style={{ color: '#888', fontSize: 14 }}>1-1 of 1</span>
                        <button style={{
                            background: 'none',
                            border: 'none',
                            color: '#888',
                            fontSize: 18,
                            cursor: 'pointer'
                        }}>{'<'}</button>
                        <button style={{
                            background: 'none',
                            border: 'none',
                            color: '#888',
                            fontSize: 18,
                            cursor: 'pointer'
                        }}>{'>'}</button>
                    </div>
                </div>
            </div>
            {/* Modal adicionar/importar */}
            {showModal && (
                <div style={{
                    position: 'fixed',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: 'rgba(0,0,0,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000
                }}>
                    <div style={{
                        background: '#fff',
                        borderRadius: 16,
                        padding: 32,
                        minWidth: 340,
                        minHeight: 180,
                        boxShadow: '0 2px 16px #0002',
                        position: 'relative'
                    }}>
                        <button
                            onClick={() => setShowModal(null)}
                            style={{
                                position: 'absolute',
                                top: 12,
                                right: 16,
                                background: 'none',
                                border: 'none',
                                fontSize: 22,
                                color: '#888',
                                cursor: 'pointer'
                            }}
                        >×</button>
                        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>
                            {showModal === 'adicionar' ? 'Adicionar contatos' : 'Importar contatos'}
                        </h2>
                        <div style={{ color: '#444', fontSize: 15 }}>
                            {showModal === 'adicionar'
                                ? 'Aqui você pode adicionar manualmente um novo contato.'
                                : 'Aqui você pode importar contatos de um arquivo ou serviço.'}
                        </div>
                    </div>
                </div>
            )}
            {/* Modal detalhes do contato */}
            {contatoSelecionado && (
                <div style={{
                    position: 'fixed',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: 'rgba(0,0,0,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000
                }}>
                    <div style={{
                        background: '#fff',
                        borderRadius: 16,
                        padding: 32,
                        minWidth: 340,
                        minHeight: 180,
                        boxShadow: '0 2px 16px #0002',
                        position: 'relative'
                    }}>
                        <button
                            onClick={() => setContatoSelecionado(null)}
                            style={{
                                position: 'absolute',
                                top: 12,
                                right: 16,
                                background: 'none',
                                border: 'none',
                                fontSize: 22,
                                color: '#888',
                                cursor: 'pointer'
                            }}
                        >×</button>
                        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>
                            Detalhes do contato
                        </h2>
                        <div style={{ color: '#444', fontSize: 15, marginBottom: 8 }}>
                            <b>Nome:</b> {contatoSelecionado.nome}
                        </div>
                        <div style={{ color: '#444', fontSize: 15, marginBottom: 8 }}>
                            <b>E-mail:</b> {contatoSelecionado.email}
                        </div>
                        <div style={{ color: '#444', fontSize: 15, marginBottom: 8 }}>
                            <b>Inscrito:</b> {contatoSelecionado.inscrito.join(', ')}
                        </div>
                        <div style={{ color: '#444', fontSize: 15 }}>
                            <b>Última alteração:</b> {contatoSelecionado.ultimaAlt}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contatos;