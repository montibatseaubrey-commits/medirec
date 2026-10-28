* {
  box-sizing: border-box;
}

:root {
  --bg: #f3f6f5;
  --panel: #ffffff;
  --panel-alt: #eef5f2;
  --border: #dfe8e3;
  --text: #15342d;
  --subtle: #5d726d;
  --primary: #1d5b4f;
  --primary-soft: #dfeee8;
  --accent: #d98d3d;
  --accent-soft: #f8efe4;
  --danger: #b33f2f;
  --danger-soft: #fbe8e5;
  --warning: #a26b17;
  --warning-soft: #f9f0d9;
  --success: #2d7a4a;
  --success-soft: #e4f5e9;
  --shadow: 0 12px 28px rgba(15, 26, 24, 0.08);
  --radius: 18px;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background: var(--bg);
  color: var(--text);
}

button,
input,
select,
textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

#toast {
  position: fixed;
  right: 22px;
  bottom: 22px;
  max-width: 360px;
  z-index: 1000;
}

.toast {
  background: var(--panel);
  border: 1px solid var(--border);
  border-left: 5px solid var(--primary);
  box-shadow: var(--shadow);
  border-radius: 12px;
  padding: 12px 14px;
  margin-top: 10px;
  color: var(--text);
}

.toast.error {
  border-left-color: var(--danger);
}

.toast.success {
  border-left-color: var(--success);
}

.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.topbar {
  background: var(--panel);
  border-bottom: 1px solid var(--border);
  padding: 18px 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--primary), #3e7b65);
  color: white;
  font-weight: 700;
}

.brand h1 {
  margin: 0;
  font-size: 1.15rem;
}

.user-chip {
  display: flex;
  align-items: center;
  gap: 12px;
}

.user-badge {
  background: var(--primary-soft);
  color: var(--primary);
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.logout-btn,
.primary-btn,
.secondary-btn,
.action-btn,
.link-btn {
  border: none;
  border-radius: 10px;
  padding: 10px 14px;
  font-weight: 600;
  transition: transform 0.15s ease, opacity 0.15s ease;
}

.primary-btn {
  background: var(--primary);
  color: white;
}

.secondary-btn {
  background: var(--panel-alt);
  color: var(--text);
  border: 1px solid var(--border);
}

.action-btn {
  background: var(--primary-soft);
  color: var(--primary);
}

.link-btn {
  background: transparent;
  color: var(--primary);
  padding-left: 0;
  padding-right: 0;
}

button:hover {
  transform: translateY(-1px);
}

.role-nav {
  display: flex;
  gap: 10px;
  padding: 16px 28px 0;
  flex-wrap: wrap;
}

.nav-item {
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 9px 14px;
  color: var(--text);
  font-weight: 600;
}

.nav-item.active {
  background: var(--primary-soft);
  color: var(--primary);
  border-color: rgba(29, 91, 79, 0.2);
}

.page {
  padding: 24px 28px 32px;
}

.hero {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 22px 24px;
  margin-bottom: 22px;
}

.hero h2 {
  margin: 0 0 6px;
  font-size: clamp(1.7rem, 2vw, 2.3rem);
}

.hero p {
  margin: 0;
  color: var(--subtle);
}

.kpi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
  margin-bottom: 22px;
}

.kpi-card {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 18px 18px 16px;
}

.kpi-card .label {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--subtle);
  margin-bottom: 10px;
}

.kpi-card .value {
  font-size: 1.9rem;
  font-weight: 700;
  margin-bottom: 6px;
}

.kpi-card .trend {
  font-size: 0.9rem;
  color: var(--success);
}

.grid-two {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 18px;
  margin-bottom: 18px;
}

.panel {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 20px 20px 16px;
}

.panel h3 {
  margin: 0 0 14px;
  font-size: 1.1rem;
}

.table-wrap {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  text-align: left;
  padding: 10px 10px;
  border-bottom: 1px solid var(--border);
  vertical-align: top;
}

th {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--subtle);
}

.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.status-draft { background: #edf1f1; color: #4e5b59; }
.status-submitted { background: #eaf0ff; color: #2a4a88; }
.status-under-review { background: #f4ebff; color: #604d9a; }
.status-allocated { background: var(--primary-soft); color: var(--primary); }
.status-dispatched { background: #e8f2ff; color: #28579e; }
.status-in-transit { background: var(--accent-soft); color: var(--warning); }
.status-received { background: var(--success-soft); color: var(--success); }
.status-reconciled { background: #e8faf0; color: #227356; }
.status-urgent { background: var(--danger-soft); color: var(--danger); }
.status-low-stock { background: var(--warning-soft); color: var(--warning); }

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 14px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.field label {
  font-size: 0.8rem;
  color: var(--subtle);
  font-weight: 600;
}

.field input,
.field select,
.field textarea {
  border: 1px solid var(--border);
  background: #f9fbfa;
  border-radius: 10px;
  padding: 10px 12px;
  color: var(--text);
}

.field textarea {
  min-height: 86px;
  resize: vertical;
}

.form-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
}

.alert-list,
.history-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 12px;
}

.alert-item,
.history-item {
  border: 1px solid var(--border);
  border-radius: 12px;
  background: #f9fbfa;
  padding: 12px 14px;
  display: flex;
  justify-content: space-between;
  gap: 12px;
}

.alert-item strong,
.history-item strong {
  display: block;
  margin-bottom: 4px;
}

.empty-state {
  border: 1px dashed var(--border);
  border-radius: 12px;
  padding: 18px;
  color: var(--subtle);
  background: #fafdff;
}

.login-layout {
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: linear-gradient(180deg, #eff7f4, #f7faf9);
  padding: 32px 20px;
}

.login-card {
  width: min(1120px, 100%);
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 26px;
  box-shadow: var(--shadow);
  display: grid;
  grid-template-columns: 1.1fr 1.3fr;
  overflow: hidden;
}

.login-hero {
  background: linear-gradient(180deg, var(--primary), #234e48);
  color: white;
  padding: 36px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.login-hero .brand-mark {
  background: rgba(255, 255, 255, 0.14);
  width: 56px;
  height: 56px;
  border: 1px solid rgba(255,255,255,0.2);
}

.login-hero h2 {
  margin-top: 18px;
  font-size: clamp(2rem, 3vw, 2.7rem);
}

.login-hero p {
  color: rgba(255,255,255,0.8);
  margin-top: 8px;
}

.login-panel {
  padding: 32px 28px;
}

.login-panel h3 {
  margin: 0 0 10px;
  font-size: 1.7rem;
}

.login-panel .small {
  color: var(--subtle);
  margin-bottom: 18px;
}

.role-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(180px, 1fr));
  gap: 12px;
  margin: 18px 0 24px;
}

.role-card {
  border: 1px solid var(--border);
  background: var(--panel-alt);
  border-radius: 14px;
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.role-card strong {
  font-size: 0.94rem;
}

.role-card span {
  color: var(--subtle);
  font-size: 0.78rem;
}

.login-form {
  display: grid;
  gap: 14px;
}

.inline-note {
  color: var(--subtle);
  font-size: 0.82rem;
}

.unauthorized {
  min-height: 60vh;
  display: grid;
  place-items: center;
  padding: 30px;
}

.unauthorized-card {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 32px 28px;
  max-width: 520px;
  text-align: center;
}

.unauthorized-card h2 {
  margin-top: 0;
}

.hidden {
  display: none !important;
}

@media (max-width: 900px) {
  .login-card,
  .grid-two {
    grid-template-columns: 1fr;
  }

  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .role-nav {
    padding-top: 10px;
  }
}

@media (max-width: 620px) {
  .page,
  .role-nav,
  .topbar {
    padding-left: 16px;
    padding-right: 16px;
  }

  .role-grid {
    grid-template-columns: 1fr;
  }

  .kpi-grid {
    grid-template-columns: 1fr 1fr;
  }
}
