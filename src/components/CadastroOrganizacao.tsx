import React, { useState } from 'react';

interface CadastroOrganizacaoProps {
    onBack: () => void;
    onFinish: () => void;
}

const CadastroOrganizacao: React.FC<CadastroOrganizacaoProps> = ({ onBack, onFinish }) => {
    const [form, setForm] = useState({
        equipe: '',
        contatos: '',
        vendeOnline: '',
        receberNovidades: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: type === 'checkbox'
                ? (e.target as HTMLInputElement).checked
                : value,
        }));
    };

    const isValid =
        form.equipe &&
        form.contatos &&
        form.vendeOnline !== '';

    return (
        <div style={{
            display: 'flex',
            minHeight: '100vh',
            fontFamily: 'Inter, Arial, sans-serif',
            background: '#fff'
        }}>
            {/* Lado esquerdo: formulário */}
            <div style={{
                flex: 1,
                background: '#fff',
                padding: '0 0 0 56px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                borderRight: '1px solid #f0f0f0',
                minWidth: 420,
                maxWidth: 540
            }}>
                {/* Logo */}
                <div style={{ marginBottom: 32 }}>
                    <span style={{
                        color: '#1a7f6b',
                        fontWeight: 700,
                        fontSize: 24,
                        letterSpacing: 1
                    }}>Brevo</span>
                </div>
                {/* Título */}
                <h2 style={{
                    color: '#222',
                    fontWeight: 700,
                    fontSize: 32,
                    marginBottom: 8,
                    lineHeight: 1.15
                }}>Conte-nos sobre o sua organização</h2>
                <p style={{
                    color: '#444',
                    marginBottom: 32,
                    fontSize: 16
                }}>
                    Suas respostas nos ajudarão a recomendar o melhor plano para apoiar seus esforços de marketing.
                </p>
                <form onSubmit={e => { e.preventDefault(); if (isValid) onFinish(); }}>
                    <div style={{ marginBottom: 18 }}>
                        <label style={{ fontWeight: 500, fontSize: 15, marginBottom: 4, display: 'block' }}>
                            Quantas pessoas trabalham em sua equipe? <span style={{ color: '#7b61ff' }}>*</span>
                        </label>
                        <select
                            name="equipe"
                            value={form.equipe}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: 14,
                                borderRadius: 16,
                                border: '1.5px solid #7b61ff',
                                marginTop: 2,
                                fontSize: 16,
                                background: '#fafbfa',
                                outline: 'none'
                            }}
                        >
                            <option value="">Selecione</option>
                            <option value="1-5">1-5</option>
                            <option value="6-20">6-20</option>
                            <option value="21-50">21-50</option>
                            <option value="51+">51 ou mais</option>
                        </select>
                    </div>
                    <div style={{ marginBottom: 18 }}>
                        <label style={{ fontWeight: 500, fontSize: 15, marginBottom: 4, display: 'block' }}>
                            Quantos contatos você precisa ter? <span style={{ color: '#7b61ff' }}>*</span>
                        </label>
                        <select
                            name="contatos"
                            value={form.contatos}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: 14,
                                borderRadius: 16,
                                border: '1.5px solid #7b61ff',
                                marginTop: 2,
                                fontSize: 16,
                                background: '#fafbfa',
                                outline: 'none'
                            }}
                        >
                            <option value="">Selecione</option>
                            <option value="até 500">até 500</option>
                            <option value="501-2000">501-2000</option>
                            <option value="2001-10000">2001-10000</option>
                            <option value="10001+">10001 ou mais</option>
                        </select>
                    </div>
                    <div style={{ marginBottom: 18 }}>
                        <label style={{ fontWeight: 500, fontSize: 15, marginBottom: 4, display: 'block' }}>
                            Você vende online?
                        </label>
                        <div style={{ display: 'flex', gap: 24, marginTop: 4 }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 15 }}>
                                <input
                                    type="radio"
                                    name="vendeOnline"
                                    value="sim"
                                    checked={form.vendeOnline === 'sim'}
                                    onChange={handleChange}
                                    style={{ accentColor: '#7b61ff' }}
                                />
                                sim
                            </label>
                            <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 15 }}>
                                <input
                                    type="radio"
                                    name="vendeOnline"
                                    value="nao"
                                    checked={form.vendeOnline === 'nao'}
                                    onChange={handleChange}
                                    style={{ accentColor: '#7b61ff' }}
                                />
                                não
                            </label>
                        </div>
                    </div>
                    <div style={{ marginBottom: 28 }}>
                        <label style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            fontSize: 15,
                            userSelect: 'none',
                            cursor: 'pointer',
                            color: '#444',
                            fontWeight: 400
                        }}>
                            <input
                                type="checkbox"
                                name="receberNovidades"
                                checked={form.receberNovidades}
                                onChange={handleChange}
                                style={{ accentColor: '#7b61ff' }}
                            />
                            Não quero receber atualizações de produtos, dicas de marketing ou conteúdo promocional da Brevo. Para saber mais sobre como processamos dados pessoais, leia a&nbsp;
                            <a href="#" style={{ color: '#7b61ff', textDecoration: 'underline' }}>Política de Privacidade</a>.
                        </label>
                    </div>
                    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                        <button
                            type="button"
                            onClick={onBack}
                            style={{
                                background: 'none',
                                color: '#7b61ff',
                                border: 'none',
                                fontWeight: 500,
                                fontSize: 16,
                                cursor: 'pointer',
                                textDecoration: 'underline'
                            }}
                        >
                            Voltar
                        </button>
                        <button
                            type="submit"
                            disabled={!isValid}
                            style={{
                                background: '#bdbdbd',
                                color: '#fff',
                                border: 'none',
                                borderRadius: 8,
                                padding: '14px 36px',
                                fontWeight: 700,
                                fontSize: 18,
                                cursor: isValid ? 'pointer' : 'not-allowed',
                                marginLeft: 'auto',
                                opacity: isValid ? 1 : 0.6
                            }}
                        >
                            Continuar
                        </button>
                    </div>
                </form>
            </div>
            {/* Lado direito: ilustração */}
            <div style={{
                flex: 1,
                background: '#fdfcf7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh'
            }}>
                {/* Ilustração SVG */}
                <div style={{ maxWidth: 340, width: '100%' }}>
                    <svg width="100%" height="220" viewBox="0 0 340 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="60" y="60" width="220" height="100" rx="12" fill="#fff" stroke="#e5e7eb" strokeWidth="2"/>
                        <rect x="80" y="80" width="60" height="12" rx="6" fill="#eaf6f3"/>
                        <rect x="80" y="100" width="180" height="12" rx="6" fill="#eaf6f3"/>
                        <rect x="80" y="120" width="120" height="12" rx="6" fill="#eaf6f3"/>
                        {/* Círculos coloridos */}
                        <circle cx="60" cy="60" r="28" stroke="#6c63ff" strokeWidth="2" fill="none"/>
                        <circle cx="280" cy="60" r="28" stroke="#ff8c42" strokeWidth="2" fill="none"/>
                        <circle cx="60" cy="160" r="28" stroke="#ff5e7e" strokeWidth="2" fill="none"/>
                        <circle cx="280" cy="160" r="28" stroke="#1a7f6b" strokeWidth="2" fill="none"/>
                        {/* Ícones dentro dos círculos */}
                        <text x="52" y="67" fontSize="22" fill="#6c63ff">✉️</text>
                        <text x="272" y="67" fontSize="22" fill="#ff8c42">👤</text>
                        <text x="52" y="167" fontSize="22" fill="#ff5e7e">💬</text>
                        <text x="272" y="167" fontSize="22" fill="#1a7f6b">✈️</text>
                        {/* Imagem central (simulação) */}
                        <rect x="150" y="90" width="60" height="40" rx="6" fill="#e5e7eb"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default CadastroOrganizacao;