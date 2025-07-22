import React, { useState } from 'react';

interface CadastroEnderecoProps {
    onBack: () => void;
    onFinish: () => void;
}

const CadastroEndereco: React.FC<CadastroEnderecoProps> = ({ onBack, onFinish }) => {
    const [form, setForm] = useState({
        endereco: '',
        cep: '',
        cidade: '',
        pais: 'Brazil',
    });

    const [touched, setTouched] = useState<{[k: string]: boolean}>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
        setTouched(prev => ({ ...prev, [e.target.name]: true }));
    };

    const isValid = form.endereco && form.cep && form.cidade && form.pais;

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
                }}>Agora, algumas informações sobre a sua empresa</h2>
                <p style={{
                    color: '#444',
                    marginBottom: 32,
                    fontSize: 16
                }}>
                    Ainda não tem um endereço para a sua empresa? Insira o endereço de e-mail que quer usar para seu formulário comercial.
                </p>
                <form onSubmit={e => { e.preventDefault(); if (isValid) onFinish(); }}>
                    <div style={{ marginBottom: 18 }}>
                        <label style={{ fontWeight: 500, fontSize: 15, marginBottom: 4, display: 'block' }}>Endereço *</label>
                        <input
                            type="text"
                            name="endereco"
                            value={form.endereco}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            style={{
                                width: '100%',
                                padding: 14,
                                borderRadius: 16,
                                border: '1px solid #e2e5e9',
                                marginTop: 2,
                                fontSize: 16,
                                background: '#fafbfa',
                                outline: 'none'
                            }}
                        />
                    </div>
                    <div style={{ display: 'flex', gap: 16, marginBottom: 18 }}>
                        <div style={{ flex: 1 }}>
                            <label style={{ fontWeight: 500, fontSize: 15, marginBottom: 4, display: 'block' }}>CEP *</label>
                            <input
                                type="text"
                                name="cep"
                                value={form.cep}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                                style={{
                                    width: '100%',
                                    padding: 14,
                                    borderRadius: 16,
                                    border: '1px solid #e2e5e9',
                                    marginTop: 2,
                                    fontSize: 16,
                                    background: '#fafbfa',
                                    outline: 'none'
                                }}
                            />
                        </div>
                        <div style={{ flex: 1 }}>
                            <label style={{ fontWeight: 500, fontSize: 15, marginBottom: 4, display: 'block' }}>Cidade *</label>
                            <input
                                type="text"
                                name="cidade"
                                value={form.cidade}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                                style={{
                                    width: '100%',
                                    padding: 14,
                                    borderRadius: 16,
                                    border: '1px solid #e2e5e9',
                                    marginTop: 2,
                                    fontSize: 16,
                                    background: '#fafbfa',
                                    outline: 'none'
                                }}
                            />
                        </div>
                    </div>
                    <div style={{ marginBottom: 28 }}>
                        <label style={{ fontWeight: 500, fontSize: 15, marginBottom: 4, display: 'block' }}>País *</label>
                        <select
                            name="pais"
                            value={form.pais}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            style={{
                                width: '100%',
                                padding: 14,
                                borderRadius: 16,
                                border: '1px solid #e2e5e9',
                                marginTop: 2,
                                fontSize: 16,
                                background: '#fafbfa',
                                outline: 'none'
                            }}
                        >
                            <option value="Brazil">Brazil</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Angola">Angola</option>
                            <option value="Moçambique">Moçambique</option>
                            <option value="Outro">Outro</option>
                        </select>
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
                                background: '#222',
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

export default CadastroEndereco;