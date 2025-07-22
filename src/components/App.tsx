import React, { useState } from 'react';
import MinhasCampanhas from './MinhasCampanhas';
import Dashboard from './Dashboard';
import CadastroBasico from './CadastroBasico';
import CadastroEndereco from './CadastroEndereco';
import CadastroOrganizacao from './CadastroOrganizacao';
import Contatos from './Contatos';
import Campanhas from './Campanhas';
import Automacoes from './Automacoes';

const contacts = [
    { email: 'pessoa@gmail.com', date: '12/06/2025' },
    { email: 'pessoa@gmail.com', date: '12/06/2025' },
    { email: 'pessoa@gmail.com', date: '12/06/2025' },
];

const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

function getDaysInMonth(month: number, year: number) {
    return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(month: number, year: number) {
    // Retorna 0 para segunda, 6 para domingo (ajustado para padrão brasileiro)
    let day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1;
}

const App: React.FC = () => {
    const [selectedMenu, setSelectedMenu] = useState('dashboard');
    const [cadastroStep, setCadastroStep] = useState(1);

    // Calendário
    const today = new Date();
    const [calendarMonth, setCalendarMonth] = useState(today.getMonth());
    const [calendarYear, setCalendarYear] = useState(today.getFullYear());

    const daysInMonth = getDaysInMonth(calendarMonth, calendarYear);
    const firstDay = getFirstDayOfWeek(calendarMonth, calendarYear);

    // Etapa 1: Cadastro básico
    if (cadastroStep === 1) {
        return <CadastroBasico onFinish={() => setCadastroStep(2)} />;
    }

    // Etapa 2: Cadastro endereço
    if (cadastroStep === 2) {
        return (
            <CadastroEndereco
                onBack={() => setCadastroStep(1)}
                onFinish={() => setCadastroStep(3)}
            />
        );
    }

    // Etapa 3: Cadastro organização
    if (cadastroStep === 3) {
        return (
            <CadastroOrganizacao
                onBack={() => setCadastroStep(2)}
                onFinish={() => setCadastroStep(4)}
            />
        );
    }

    return (
        <div
            style={{
                display: 'flex',
                height: '100vh',
                fontFamily: 'sans-serif',
                background: '#fafbfa',
            }}
        >
            {/* Sidebar */}
            <aside
                style={{
                    width: 240,
                    background: '#f8fdf6',
                    borderRight: '1px solid #eee',
                    padding: 32,
                    minHeight: '100vh'
                }}
            >
                <div
                    style={{
                        fontWeight: 700,
                        marginBottom: 40,
                        fontSize: 24,
                        letterSpacing: 1,
                        color: '#1a7f6b',
                    }}
                >
                    Brevo
                </div>
                <nav>
                    {/* Início */}
                    <div
                        style={{
                            padding: '12px 16px',
                            borderRadius: 8,
                            background: selectedMenu === 'dashboard' ? '#eaf6f3' : 'transparent',
                            color: selectedMenu === 'dashboard' ? '#1a7f6b' : '#222',
                            cursor: 'pointer',
                            marginBottom: 4,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10,
                            fontWeight: 500
                        }}
                        onClick={() => setSelectedMenu('dashboard')}
                    >
                        <span>🏠</span> Início
                    </div>
                    {/* Contatos */}
                    <div
                        style={{
                            padding: '12px 16px',
                            borderRadius: 8,
                            background: selectedMenu === 'contatos' ? '#d9fad9' : 'transparent',
                            color: selectedMenu === 'contatos' ? '#222' : '#222',
                            cursor: 'pointer',
                            marginBottom: 0,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10,
                            fontWeight: 500
                        }}
                        onClick={() => setSelectedMenu('contatos')}
                    >
                        <span style={{ fontSize: 20 }}>👥</span> Contatos
                    </div>
                    {/* Submenus de contatos */}
                    <div style={{ marginLeft: 36, marginTop: 2, marginBottom: 2, color: '#222', fontSize: 15 }}>
                        <div style={{ margin: '6px 0', cursor: 'pointer' }}>Listas</div>
                        <div style={{ margin: '6px 0', cursor: 'pointer' }}>Segmentos</div>
                        <div style={{ margin: '6px 0', cursor: 'pointer' }}>Empresas</div>
                        <div style={{ margin: '6px 0', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
                            Landing pages
                            <span style={{
                                background: '#ffb6d5',
                                color: '#a1004d',
                                borderRadius: '50%',
                                fontSize: 13,
                                padding: '2px 5px',
                                marginLeft: 2
                            }}>👑</span>
                        </div>
                        <div style={{ margin: '6px 0', cursor: 'pointer' }}>Formulários</div>
                        <div style={{ margin: '6px 0', cursor: 'pointer' }}>Configurações</div>
                    </div>
                    {/* Outros menus principais */}
                    <div
                        style={{
                            padding: '12px 16px',
                            borderRadius: 8,
                            background: selectedMenu === 'campanhas' ? '#eaf6f3' : 'transparent',
                            color: selectedMenu === 'campanhas' ? '#1a7f6b' : '#222',
                            cursor: 'pointer',
                            marginBottom: 4,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10,
                            fontWeight: 500
                        }}
                        onClick={() => setSelectedMenu('campanhas')}
                    >
                        <span>📨</span> Campanhas
                    </div>
                    <div
                        style={{
                            padding: '12px 16px',
                            borderRadius: 8,
                            background: selectedMenu === 'automacoes' ? '#eaf6f3' : 'transparent',
                            color: selectedMenu === 'automacoes' ? '#1a7f6b' : '#222',
                            cursor: 'pointer',
                            marginBottom: 4,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10,
                            fontWeight: 500
                        }}
                        onClick={() => setSelectedMenu('automacoes')}
                    >
                        <span>🤖</span> Automações
                    </div>
                    <div
                        style={{
                            padding: '12px 16px',
                            borderRadius: 8,
                            background: selectedMenu === 'transacional' ? '#eaf6f3' : 'transparent',
                            color: selectedMenu === 'transacional' ? '#1a7f6b' : '#222',
                            cursor: 'pointer',
                            marginBottom: 4,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10,
                            fontWeight: 500
                        }}
                        onClick={() => setSelectedMenu('transacional')}
                    >
                        <span>💼</span> Transacional
                    </div>
                    <div
                        style={{
                            padding: '12px 16px',
                            borderRadius: 8,
                            background: selectedMenu === 'conversations' ? '#eaf6f3' : 'transparent',
                            color: selectedMenu === 'conversations' ? '#1a7f6b' : '#222',
                            cursor: 'pointer',
                            marginBottom: 4,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10,
                            fontWeight: 500
                        }}
                        onClick={() => setSelectedMenu('conversations')}
                    >
                        <span>💬</span> Conversations
                    </div>
                    <div
                        style={{
                            padding: '12px 16px',
                            borderRadius: 8,
                            background: selectedMenu === 'oportunidades' ? '#eaf6f3' : 'transparent',
                            color: selectedMenu === 'oportunidades' ? '#1a7f6b' : '#222',
                            cursor: 'pointer',
                            marginBottom: 4,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10,
                            fontWeight: 500
                        }}
                        onClick={() => setSelectedMenu('oportunidades')}
                    >
                        <span>🎯</span> Oportunidades
                    </div>
                    <div
                        style={{
                            padding: '12px 16px',
                            borderRadius: 8,
                            background: selectedMenu === 'meetings' ? '#eaf6f3' : 'transparent',
                            color: selectedMenu === 'meetings' ? '#1a7f6b' : '#222',
                            cursor: 'pointer',
                            marginBottom: 4,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10,
                            fontWeight: 500
                        }}
                        onClick={() => setSelectedMenu('meetings')}
                    >
                        <span>🗓️</span> Meetings
                    </div>
                    <div
                        style={{
                            padding: '12px 16px',
                            borderRadius: 8,
                            background: selectedMenu === 'chamadas' ? '#eaf6f3' : 'transparent',
                            color: selectedMenu === 'chamadas' ? '#1a7f6b' : '#222',
                            cursor: 'pointer',
                            marginBottom: 4,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10,
                            fontWeight: 500
                        }}
                        onClick={() => setSelectedMenu('chamadas')}
                    >
                        <span>📞</span> Chamadas
                    </div>
                </nav>
            </aside>

            {/* Main Content */}
            <main style={{ flex: 1, padding: 0 }}>
                {selectedMenu === 'dashboard' && (
                    <>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '32px 40px 0 40px',
                            }}
                        >
                            <h1
                                style={{
                                    fontSize: 32,
                                    fontWeight: 700,
                                    margin: 0,
                                }}
                            >
                                Olá, Trash
                            </h1>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 24,
                                }}
                            >
                                <a
                                    href="#"
                                    style={{
                                        color: '#7b61ff',
                                        fontWeight: 500,
                                        textDecoration: 'underline',
                                        fontSize: 15,
                                    }}
                                >
                                    Personalizar página
                                </a>
                                <button
                                    style={{
                                        background: '#fff0f0',
                                        color: '#e14d4d',
                                        border: 'none',
                                        borderRadius: 8,
                                        padding: '10px 20px',
                                        fontWeight: 700,
                                        fontSize: 15,
                                        cursor: 'pointer',
                                    }}
                                >
                                    Fazer upgrade agora
                                </button>
                                <span style={{ fontSize: 20, color: '#888', cursor: 'pointer' }}>🔔</span>
                                <span style={{ fontSize: 20, color: '#888', cursor: 'pointer' }}>👤</span>
                                <span style={{ fontSize: 15, color: '#888' }}>saasdasda</span>
                            </div>
                        </div>
                        {/* Conteúdo principal */}
                        <div style={{ display: 'flex', gap: 32, padding: '32px 40px' }}>
                            {/* Calendário */}
                            <div
                                style={{
                                    background: '#fff',
                                    borderRadius: 16,
                                    padding: 24,
                                    minWidth: 260,
                                    boxShadow: '0 1px 4px #0001',
                                    height: 'fit-content',
                                }}
                            >
                                {/* Cabeçalho do calendário */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    marginBottom: 16
                                }}>
                                    <button
                                        onClick={() => {
                                            if (calendarMonth === 0) {
                                                setCalendarMonth(11);
                                                setCalendarYear(calendarYear - 1);
                                            } else {
                                                setCalendarMonth(calendarMonth - 1);
                                            }
                                        }}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            fontSize: 18,
                                            cursor: 'pointer',
                                            color: '#1a7f6b',
                                            padding: 4,
                                        }}
                                        aria-label="Mês anterior"
                                    >‹</button>
                                    <span style={{ fontWeight: 600, color: '#222', fontSize: 16 }}>
                                        {monthNames[calendarMonth]} {calendarYear}
                                    </span>
                                    <button
                                        onClick={() => {
                                            if (calendarMonth === 11) {
                                                setCalendarMonth(0);
                                                setCalendarYear(calendarYear + 1);
                                            } else {
                                                setCalendarMonth(calendarMonth + 1);
                                            }
                                        }}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            fontSize: 18,
                                            cursor: 'pointer',
                                            color: '#1a7f6b',
                                            padding: 4,
                                        }}
                                        aria-label="Próximo mês"
                                    >›</button>
                                </div>
                                {/* Seleção de mês e ano */}
                                <div style={{ display: 'flex', gap: 8, marginBottom: 8, justifyContent: 'center' }}>
                                    <select
                                        value={calendarMonth}
                                        onChange={e => setCalendarMonth(Number(e.target.value))}
                                        style={{
                                            borderRadius: 8,
                                            border: '1px solid #eaf6f3',
                                            padding: '2px 8px',
                                            fontSize: 14,
                                            color: '#1a7f6b',
                                            background: '#f7faf9'
                                        }}
                                    >
                                        {monthNames.map((name, idx) => (
                                            <option key={name} value={idx}>{name}</option>
                                        ))}
                                    </select>
                                    <select
                                        value={calendarYear}
                                        onChange={e => setCalendarYear(Number(e.target.value))}
                                        style={{
                                            borderRadius: 8,
                                            border: '1px solid #eaf6f3',
                                            padding: '2px 8px',
                                            fontSize: 14,
                                            color: '#1a7f6b',
                                            background: '#f7faf9'
                                        }}
                                    >
                                        {Array.from({ length: 5 }, (_, i) => calendarYear - 2 + i).map(year => (
                                            <option key={year} value={year}>{year}</option>
                                        ))}
                                    </select>
                                </div>
                                {/* Tabela do calendário */}
                                <table style={{ width: '100%', textAlign: 'center', color: '#888', fontSize: 15, borderCollapse: 'separate', borderSpacing: 4 }}>
                                    <thead>
                                        <tr>
                                            <th style={{ color: '#1a7f6b', fontWeight: 700 }}>seg</th>
                                            <th style={{ color: '#1a7f6b', fontWeight: 700 }}>ter</th>
                                            <th style={{ color: '#1a7f6b', fontWeight: 700 }}>qua</th>
                                            <th style={{ color: '#1a7f6b', fontWeight: 700 }}>qui</th>
                                            <th style={{ color: '#1a7f6b', fontWeight: 700 }}>sex</th>
                                            <th style={{ color: '#1a7f6b', fontWeight: 700 }}>sáb</th>
                                            <th style={{ color: '#1a7f6b', fontWeight: 700 }}>dom</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Array.from({ length: Math.ceil((daysInMonth + firstDay) / 7) }).map((_, weekIdx) => (
                                            <tr key={weekIdx}>
                                                {Array.from({ length: 7 }).map((_, dayIdx) => {
                                                    const dayNumber = weekIdx * 7 + dayIdx - firstDay + 1;
                                                    const isToday =
                                                        dayNumber === today.getDate() &&
                                                        calendarMonth === today.getMonth() &&
                                                        calendarYear === today.getFullYear();
                                                    return (
                                                        <td key={dayIdx}>
                                                            {dayNumber > 0 && dayNumber <= daysInMonth ? (
                                                                <div style={{
                                                                    width: 32,
                                                                    height: 32,
                                                                    lineHeight: '32px',
                                                                    borderRadius: '50%',
                                                                    margin: '0 auto',
                                                                    background: isToday ? '#eaf6f3' : 'none',
                                                                    color: isToday ? '#1a7f6b' : '#222',
                                                                    fontWeight: isToday ? 700 : 500,
                                                                    transition: 'background 0.2s'
                                                                }}>
                                                                    {dayNumber}
                                                                </div>
                                                            ) : null}
                                                        </td>
                                                    );
                                                })}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {/* Cards principais */}
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}>
                                {/* Linha superior: Comece a usar a Brevo */}
                                <div style={{ display: 'flex', gap: 24 }}>
                                    {/* Card 1 */}
                                    <div style={{
                                        background: '#fff',
                                        borderRadius: 16,
                                        padding: 24,
                                        flex: 1,
                                        boxShadow: '0 1px 4px #0001',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 24,
                                    }}>
                                        <div style={{
                                            fontSize: 60,
                                            color: '#1a7f6b',
                                            fontWeight: 700,
                                            marginRight: 16,
                                            minWidth: 60,
                                            textAlign: 'center'
                                        }}>1</div>
                                        <div>
                                            <div style={{ fontWeight: 700, color: '#1a7f6b', fontSize: 18, marginBottom: 8 }}>
                                                Adicione seus primeiros contatos
                                            </div>
                                            <div style={{ color: '#444', fontSize: 15, marginBottom: 16 }}>
                                                Você precisa de contatos para criar uma campanha. Crie sua base de dados de contatos ou use o assistente de onboarding da sua primeira campanha.
                                            </div>
                                            <button style={{
                                                background: '#eaf6f3',
                                                color: '#1a7f6b',
                                                border: 'none',
                                                borderRadius: 8,
                                                padding: '10px 20px',
                                                fontWeight: 700,
                                                fontSize: 15,
                                                cursor: 'pointer'
                                            }}>Importar seus contatos</button>
                                        </div>
                                    </div>
                                    {/* Card 2 */}
                                    <div style={{
                                        background: '#fff',
                                        borderRadius: 16,
                                        padding: 24,
                                        flex: 1,
                                        boxShadow: '0 1px 4px #0001',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 24,
                                    }}>
                                        <div style={{
                                            fontSize: 60,
                                            color: '#1a7f6b',
                                            fontWeight: 700,
                                            marginRight: 16,
                                            minWidth: 60,
                                            textAlign: 'center'
                                        }}>2</div>
                                        <div>
                                            <div style={{ fontWeight: 700, color: '#1a7f6b', fontSize: 18, marginBottom: 8 }}>
                                                Crie sua primeira campanha
                                            </div>
                                            <div style={{ color: '#444', fontSize: 15, marginBottom: 16 }}>
                                                É hora de ser criativo! Inspire-se com nosso assistente de redação.
                                            </div>
                                            <button style={{
                                                background: '#eaf6f3',
                                                color: '#1a7f6b',
                                                border: 'none',
                                                borderRadius: 8,
                                                padding: '10px 20px',
                                                fontWeight: 700,
                                                fontSize: 15,
                                                cursor: 'pointer'
                                            }}>Criar campanha</button>
                                        </div>
                                    </div>
                                </div>
                                {/* Linha inferior: cards secundários */}
                                <div style={{ display: 'flex', gap: 24 }}>
                                    <div style={{
                                        background: '#fff',
                                        borderRadius: 16,
                                        padding: 24,
                                        flex: 1,
                                        boxShadow: '0 1px 4px #0001'
                                    }}>
                                        <div style={{ fontWeight: 700, color: '#1a7f6b', fontSize: 16, marginBottom: 8 }}>
                                            Organize seus contatos para personalizar as mensagens
                                        </div>
                                        <div style={{ color: '#444', fontSize: 15 }}>
                                            Com segmentação e listas, crie campanhas altamente direcionadas com base no comportamento ou na demografia.
                                        </div>
                                    </div>
                                    <div style={{
                                        background: '#fff',
                                        borderRadius: 16,
                                        padding: 24,
                                        flex: 1,
                                        boxShadow: '0 1px 4px #0001'
                                    }}>
                                        <div style={{ fontWeight: 700, color: '#1a7f6b', fontSize: 16, marginBottom: 8 }}>
                                            Uso de seu plano
                                        </div>
                                        <div style={{ color: '#444', fontSize: 15 }}>
                                            E-mails<br />
                                            <span style={{ color: '#888', fontSize: 14 }}>300 restantes de 300 até 18/06/2025</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {selectedMenu === 'contatos' && (
                    <Contatos />
                )}
                {selectedMenu === 'campanhas' && (
                    <Campanhas />
                )}
                {selectedMenu === 'automacoes' && (
                    <Automacoes />
                )}
                {/* Adicione outros menus se quiser */}
            </main>
        </div>
		
    );
};

export default App;