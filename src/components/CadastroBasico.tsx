import React, { useState } from 'react';

interface CadastroBasicoProps {
    onFinish?: () => void;
}

const CadastroBasico: React.FC<CadastroBasicoProps> = ({ onFinish }) => {
    const [form, setForm] = useState({
        nome: '',
        sobrenome: '',
        empresa: '',
        site: '',
        semSite: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
            site: name === 'semSite' && checked ? '' : prev.site,
        }));
    };

    const isValid =
        form.nome.trim() &&
        form.sobrenome.trim() &&
        form.empresa.trim() &&
        (form.semSite || form.site.trim());

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isValid && onFinish) onFinish();
    };

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
                minWidth: 380, // diminui para caber melhor em telas menores
                maxWidth: 520, // aumentei um pouco para não cortar input
                width: '100%', // garante responsividade
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
                    fontSize: 36, // maior para destacar
                    marginBottom: 8,
                    lineHeight: 1.15
                }}>Vamos começar pelo básico.</h2>
                <p style={{
                    color: '#444',
                    marginBottom: 32,
                    fontSize: 16
                }}>
                    Primeiro, precisamos de algumas informações suas.
                </p>
                <form onSubmit={handleSubmit} style={{ minWidth: 0 }}>
                    <div style={{ display: 'flex', gap: 16, marginBottom: 20, flexWrap: 'wrap' }}>
                        <div style={{ flex: 1, minWidth: 0 }}>
                            <label style={{ fontWeight: 500, fontSize: 15, marginBottom: 4, display: 'block' }}>Nome *</label>
                            <input
                                type="text"
                                name="nome"
                                value={form.nome}
                                onChange={handleChange}
                                required
                                style={{
                                    width: '100%',
                                    minWidth: 0,
                                    padding: 10,
                                    borderRadius: 8,
                                    border: '1px solid #d1d5db',
                                    marginTop: 2,
                                    fontSize: 15,
                                    background: '#fafbfa'
                                }}
                            />
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                            <label style={{ fontWeight: 500, fontSize: 15, marginBottom: 4, display: 'block' }}>Sobrenome *</label>
                            <input
                                type="text"
                                name="sobrenome"
                                value={form.sobrenome}
                                onChange={handleChange}
                                required
                                style={{
                                    width: '100%',
                                    minWidth: 0,
                                    padding: 10,
                                    borderRadius: 8,
                                    border: '1px solid #d1d5db',
                                    marginTop: 2,
                                    fontSize: 15,
                                    background: '#fafbfa'
                                }}
                            />
                        </div>
                    </div>
                    <div style={{ marginBottom: 20 }}>
                        <label style={{ fontWeight: 500, fontSize: 15, marginBottom: 4, display: 'block' }}>Nome da empresa *</label>
                        <input
                            type="text"
                            name="empresa"
                            value={form.empresa}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                minWidth: 0,
                                padding: 10,
                                borderRadius: 8,
                                border: '1px solid #d1d5db',
                                marginTop: 2,
                                fontSize: 15,
                                background: '#fafbfa'
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: 8 }}>
                        <label style={{ fontWeight: 500, fontSize: 15, marginBottom: 4, display: 'block' }}>Site *</label>
                        <input
                            type="text"
                            name="site"
                            value={form.site}
                            onChange={handleChange}
                            disabled={form.semSite}
                            placeholder="Exemplo: www.meusite.com ou https://www.meusite.com/"
                            required={!form.semSite}
                            style={{
                                width: '100%',
                                minWidth: 0,
                                padding: 10,
                                borderRadius: 8,
                                border: '1px solid #d1d5db',
                                marginTop: 2,
                                fontSize: 15,
                                background: form.semSite ? '#eee' : '#fafbfa'
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: 28 }}>
                        <label style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            fontSize: 15,
                            userSelect: 'none',
                            cursor: 'pointer',
                            color: '#6c63ff',
                            fontWeight: 500
                        }}>
                            <input
                                type="checkbox"
                                name="semSite"
                                checked={form.semSite}
                                onChange={handleChange}
                                style={{ accentColor: '#6c63ff' }}
                            />
                            Não tenho um site
                        </label>
                    </div>
                    <button
                        type="submit"
                        disabled={!isValid}
                        style={{
                            background: '#222',
                            color: '#fff',
                            border: 'none',
                            borderRadius: 8,
                            padding: '12px 36px',
                            fontWeight: 600,
                            fontSize: 16,
                            cursor: isValid ? 'pointer' : 'not-allowed',
                            marginTop: 8,
                            opacity: isValid ? 1 : 0.6
                        }}
                    >
                        Continuar
                    </button>
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

export default CadastroBasico;