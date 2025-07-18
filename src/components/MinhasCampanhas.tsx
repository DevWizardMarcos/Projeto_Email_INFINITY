import React, { useState, useEffect } from 'react';

const MinhasCampanhas: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [contacts, setContacts] = useState<{ id: number; name: string; email: string; group: string; created_at: string }[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/contacts')
      .then(res => res.json())
      .then(data => setContacts(data))
      .catch(err => console.error('Erro ao buscar contatos:', err));
  }, []);

  return (
    <div>
      <h1 style={{ color: '#24796b', fontWeight: 600, fontSize: 32, marginBottom: 0 }}>
        Editar Campanha
      </h1>
      <div style={{ color: '#888', marginBottom: 32, marginTop: 8 }}>
        Personalize sua campanha, do seu jeito!
      </div>
      <div style={{ display: 'flex', gap: 32 }}>
        {/* Coluna da esquerda */}
        <div style={{ flex: 1 }}>
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontWeight: 600, marginBottom: 4 }}>Título do Email</div>
            <input
              type="text"
              value="Marketing Digital - Teste🚀"
              style={{
                width: '100%',
                padding: 10,
                borderRadius: 8,
                border: '1px solid #ddd',
                fontSize: 16,
              }}
              readOnly
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontWeight: 600, marginBottom: 4 }}>Logotipo</div>
            <div
              style={{
                border: '1px dashed #bbb',
                borderRadius: 8,
                padding: 24,
                textAlign: 'center',
                color: '#888',
                background: '#fafbfa',
              }}
            >
              Logotipo.png
            </div>
          </div>
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontWeight: 600, marginBottom: 4 }}>Imagens</div>
            <div
              style={{
                border: '1px dashed #bbb',
                borderRadius: 8,
                padding: 24,
                textAlign: 'center',
                color: '#888',
                background: '#fafbfa',
              }}
            >
              ImagemEmail.png
            </div>
            <button
              style={{
                marginTop: 8,
                padding: '6px 18px',
                border: '1.5px solid #24796b',
                borderRadius: 8,
                background: '#fff',
                color: '#24796b',
                fontWeight: 500,
                fontSize: 16,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              + Adicionar Mais
            </button>
          </div>
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontWeight: 600, marginBottom: 4 }}>Textos</div>
            <textarea
              value="Esse é um teste de texto pra ver como vai ficar a prévia do email de marketing. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
              style={{
                width: '100%',
                minHeight: 60,
                borderRadius: 8,
                border: '1px solid #ddd',
                fontSize: 16,
                padding: 10,
              }}
              readOnly
            />
            <button
              style={{
                marginTop: 8,
                padding: '6px 18px',
                border: '1.5px solid #24796b',
                borderRadius: 8,
                background: '#fff',
                color: '#24796b',
                fontWeight: 500,
                fontSize: 16,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              + Adicionar Mais
            </button>
          </div>
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontWeight: 600, marginBottom: 4 }}>Botões</div>
            <input
              type="text"
              value="Adquirir Ingresso!"
              style={{
                width: '100%',
                padding: 10,
                borderRadius: 8,
                border: '1px solid #ddd',
                fontSize: 16,
                marginBottom: 8,
              }}
              readOnly
            />
            <input
              type="text"
              value="linkteste.com.br"
              style={{
                width: '100%',
                padding: 10,
                borderRadius: 8,
                border: '1px solid #ddd',
                fontSize: 16,
                marginBottom: 8,
              }}
              readOnly
            />
            <button
              style={{
                marginTop: 8,
                padding: '6px 18px',
                border: '1.5px solid #24796b',
                borderRadius: 8,
                background: '#fff',
                color: '#24796b',
                fontWeight: 500,
                fontSize: 16,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              + Adicionar Mais
            </button>
          </div>
        </div>
        {/* Coluna da direita */}
        <div style={{ flex: 1, background: '#fafbfa', borderRadius: 12, padding: 24 }}>
          <div style={{ fontWeight: 600, fontSize: 20, marginBottom: 8 }}>
            Prévia da Campanha
          </div>
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontWeight: 600 }}>Marketing Digital - Teste🚀</div>
            <div style={{ color: '#888', fontSize: 14 }}>Empresa &lt;email@empresa.com.br&gt;</div>
          </div>
          <div
            style={{
              background: '#e6f2f0',
              borderRadius: 8,
              padding: 24,
              textAlign: 'center',
              marginBottom: 16,
            }}
          >
            {/* Imagem fictícia */}
            <img
              src="https://dummyimage.com/400x120/cccccc/ffffff&text=Prévia+Imagem"
              alt="Prévia"
              style={{ width: '100%', borderRadius: 8, marginBottom: 16 }}
            />
            <div style={{ color: '#444', fontSize: 16, marginBottom: 16 }}>
              Esse é um teste de texto pra ver como vai ficar a prévia do email de marketing. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            </div>
            <button
              style={{
                background: '#00b3a4',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                padding: '12px 32px',
                fontWeight: 600,
                fontSize: 18,
                cursor: 'pointer',
              }}
            >
              Adquirir Ingresso!
            </button>
          </div>
          <div style={{ color: '#888', fontSize: 12, textAlign: 'center', marginTop: 16 }}>
            Se você não deseja mais receber esses emails, clique no botão abaixo<br />
            <span style={{ color: '#24796b', cursor: 'pointer', textDecoration: 'underline' }}>
              Cancelar Inscrição
            </span>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 32 }}>
        <button
          style={{
            background: '#24796b',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '12px 32px',
            fontWeight: 600,
            fontSize: 18,
            cursor: 'pointer',
            marginRight: 16,
          }}
          onClick={() => setShowModal(true)}
        >
          Publicar
        </button>
        <button
          style={{
            background: '#fff',
            color: '#24796b',
            border: '1.5px solid #24796b',
            borderRadius: 8,
            padding: '12px 32px',
            fontWeight: 600,
            fontSize: 18,
            cursor: 'pointer',
            marginRight: 16,
          }}
        >
          Salvar Rascunho
        </button>
        <span
          style={{
            color: '#00b3a4',
            cursor: 'pointer',
            fontWeight: 500,
            fontSize: 16,
            marginLeft: 16,
          }}
        >
          Enviar Teste
        </span>
      </div>
      {/* Modal */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.18)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: '#fff',
              borderRadius: 18,
              padding: 36,
              minWidth: 400,
              boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
              textAlign: 'center',
            }}
          >
            <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 8 }}>
              Escolha para quem deseja enviar a campanha <span style={{ color: '#24796b' }}>Marketing Digital - Teste🚀</span>
            </div>
            <select
              style={{
                width: '100%',
                padding: 12,
                borderRadius: 8,
                border: '1px solid #ddd',
                fontSize: 16,
                marginBottom: 24,
                marginTop: 16,
              }}
            >
              <option>Lista de Contatos - Todos</option>
              <option>Grupo 1</option>
              <option>Grupo 2</option>
            </select>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
              <button
                style={{
                  background: '#fff',
                  color: '#24796b',
                  border: '1.5px solid #24796b',
                  borderRadius: 8,
                  padding: '10px 32px',
                  fontWeight: 600,
                  fontSize: 16,
                  cursor: 'pointer',
                }}
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </button>
              <button
                style={{
                  background: '#00b3a4',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 8,
                  padding: '10px 32px',
                  fontWeight: 600,
                  fontSize: 16,
                  cursor: 'pointer',
                }}
                onClick={() => setShowModal(false)}
              >
                Enviar Campanha
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MinhasCampanhas;