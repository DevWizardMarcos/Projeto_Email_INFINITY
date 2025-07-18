import React, { useState } from 'react';
import MinhasCampanhas from './MinhasCampanhas';
import Dashboard from './Dashboard';

const contacts = [
	{ email: 'pessoa@gmail.com', date: '12/06/2025' },
	{ email: 'pessoa@gmail.com', date: '12/06/2025' },
	{ email: 'pessoa@gmail.com', date: '12/06/2025' },
];

const App: React.FC = () => {
	const [selectedMenu, setSelectedMenu] = useState('contatos');

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
					background: '#fff',
					borderRight: '1px solid #eee',
					padding: 32,
				}}
			>
				<div
					style={{
						fontWeight: 600,
						marginBottom: 40,
						fontSize: 14,
						letterSpacing: 1,
					}}
				>
					EMAIL MARKETING
				</div>
				<nav>
					<div
						style={{
							padding: '12px 16px',
							borderRadius: 8,
							background:
								selectedMenu === 'dashboard' ? '#eaf6f3' : 'transparent',
							color:
								selectedMenu === 'dashboard' ? '#1a3d36' : '#444',
							cursor: 'pointer',
							marginBottom: 8,
							display: 'flex',
							alignItems: 'center',
							gap: 8,
						}}
						onClick={() => setSelectedMenu('dashboard')}
					>
						<span>📈</span> Dashboard
					</div>
					<div
						style={{
							padding: '12px 16px',
							borderRadius: 8,
							background:
								selectedMenu === 'contatos' ? '#eaf6f3' : 'transparent',
							color:
								selectedMenu === 'contatos' ? '#1a3d36' : '#444',
							cursor: 'pointer',
							marginBottom: 8,
							display: 'flex',
							alignItems: 'center',
							gap: 8,
						}}
						onClick={() => setSelectedMenu('contatos')}
					>
						<span>👥</span> Lista de Contatos
					</div>
					<div
						style={{
							padding: '12px 16px',
							borderRadius: 8,
							background:
								selectedMenu === 'campanhas' ? '#eaf6f3' : 'transparent',
							color:
								selectedMenu === 'campanhas' ? '#1a3d36' : '#444',
							cursor: 'pointer',
							marginBottom: 8,
							display: 'flex',
							alignItems: 'center',
							gap: 8,
						}}
						onClick={() => setSelectedMenu('campanhas')}
					>
						<span>✉️</span> Minhas Campanhas
					</div>
					<div
						style={{
							padding: '12px 16px',
							borderRadius: 8,
							background:
								selectedMenu === 'automacoes' ? '#eaf6f3' : 'transparent',
							color:
								selectedMenu === 'automacoes' ? '#1a3d36' : '#444',
							cursor: 'pointer',
							marginBottom: 8,
							display: 'flex',
							alignItems: 'center',
							gap: 8,
						}}
						onClick={() => setSelectedMenu('automacoes')}
					>
						<span>⚙️</span> Automações
					</div>
				</nav>
			</aside>

			{/* Main Content */}
			<main style={{ flex: 1, padding: '48px 48px' }}>
				{selectedMenu === 'contatos' && (
					<>
						<h1
							style={{
								color: '#24796b',
								fontWeight: 600,
								fontSize: 36,
								marginBottom: 0,
							}}
						>
							Lista de Contatos
						</h1>
						<div
							style={{
								color: '#888',
								marginBottom: 32,
								marginTop: 8,
							}}
						>
							Veja as pessoas inscritas no seu e-mail e crie grupos de
							contatos!
						</div>
						<div
							style={{
								background: '#fafbfa',
								borderRadius: 10,
								padding: 0,
								width: 600,
							}}
						>
							<div
								style={{
									fontWeight: 600,
									fontSize: 20,
									marginBottom: 16,
								}}
							>
								Todas as Pessoas
							</div>
							<table
								style={{
									width: '100%',
									borderCollapse: 'collapse',
									background: '#f6f6f6',
									borderRadius: 8,
								}}
							>
								<thead>
									<tr
										style={{
											background: '#f6f6f6',
											color: '#444',
										}}
									>
										<th
											style={{
												padding: 12,
												textAlign: 'left',
												borderRadius: '8px 0 0 0',
											}}
										>
											<input type="checkbox" />
										</th>
										<th
											style={{
												padding: 12,
												textAlign: 'left',
											}}
										>
											Email
										</th>
										<th
											style={{
												padding: 12,
												textAlign: 'left',
												borderRadius: '0 8px 0 0',
											}}
										>
											Data de Inscrição
										</th>
									</tr>
								</thead>
								<tbody>
									{contacts.map((c, i) => (
										<tr
											key={i}
											style={{
												background: '#fff',
												borderBottom: '1px solid #eee',
											}}
										>
											<td style={{ padding: 12 }}>
												<input type="checkbox" />
											</td>
											<td style={{ padding: 12 }}>{c.email}</td>
											<td style={{ padding: 12 }}>{c.date}</td>
										</tr>
									))}
								</tbody>
							</table>
							<button
								style={{
									marginTop: 24,
									padding: '8px 24px',
									border: '1.5px solid #24796b',
									borderRadius: 8,
									background: '#fff',
									color: '#24796b',
									fontWeight: 500,
									fontSize: 18,
									cursor: 'pointer',
									display: 'flex',
									alignItems: 'center',
									gap: 8,
								}}
							>
								<span
									style={{
										fontSize: 22,
										marginRight: 4,
									}}
								>
									+
								</span>
								Criar Grupo
							</button>
						</div>
					</>
				)}
				{selectedMenu === 'campanhas' && (
					<MinhasCampanhas />
				)}
				{selectedMenu === 'dashboard' && (
					<Dashboard />
				)}
				{/* Adicione aqui outros menus, como campanhas, automações, etc */}
			</main>
		</div>
	);
};

export default App;