<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Medirec | Pharmacy Dashboard</title>
    <style>
      :root { --bg:#edf4f2; --panel:#fff; --border:#dfe9e6; --text:#12372f; --muted:#5d706c; --primary:#225f54; --primary-soft:#dfeee9; --success:#2d7d55; --success-soft:#e5f5ea; --warning:#9d6c1a; --warning-soft:#f9efda; --accent:#d98d3d; --accent-soft:#f9efe1; --danger:#b4483d; --danger-soft:#fbe9e5; }
      * { box-sizing:border-box; }
      body { margin:0; font-family:Arial, Helvetica, sans-serif; background: var(--bg); color: var(--text); }
      a { color:inherit; text-decoration:none; }
      .topbar { display:flex; justify-content:space-between; align-items:center; background:var(--panel); border-bottom:1px solid var(--border); padding:18px 28px; }
      .brand { display:flex; align-items:center; gap:12px; }
      .brand-mark { width:42px; height:42px; border-radius:12px; display:grid; place-items:center; color:white; font-weight:700; background: linear-gradient(135deg, var(--primary), #316a62); }
      .user { display:flex; align-items:center; gap:14px; }
      .badge { border-radius:999px; padding:6px 10px; font-size:0.72rem; letter-spacing:0.06em; text-transform:uppercase; font-weight:700; }
      .role-badge { background: var(--primary-soft); color: var(--primary); }
      .logout { border:1px solid var(--border); border-radius:10px; background:#f1f3f2; padding:10px 14px; font-weight:700; cursor:pointer; }
      .nav { display:flex; gap:10px; padding:18px 28px 0; flex-wrap:wrap; }
      .nav a { background:var(--panel); border:1px solid var(--border); border-radius:10px; padding:9px 14px; }
      .nav a.active { background: var(--primary-soft); color:var(--primary); }
      .page { padding:24px 28px 40px; }
      .hero { background:var(--panel); border:1px solid var(--border); border-radius:20px; padding:22px 24px; box-shadow:0 14px 36px rgba(13,28,24,0.06); margin-bottom:18px; }
      .hero h2 { margin:0 0 8px; }
      .hero p { margin:0; color:var(--muted); }
      .stats { display:grid; grid-template-columns: repeat(auto-fit, minmax(180px,1fr)); gap:16px; margin-bottom:18px; }
      .stat { background:var(--panel); border:1px solid var(--border); border-radius:18px; padding:18px; }
      .stat-label { color:var(--muted); font-size:0.75rem; text-transform:uppercase; letter-spacing:0.08em; }
      .stat-value { font-size:1.9rem; font-weight:700; margin:8px 0 5px; }
      .stat-note { color:var(--success); font-size:0.88rem; }
      .grid { display:grid; grid-template-columns: 1.25fr 1fr; gap:18px; margin-bottom:18px; }
      .panel { background:var(--panel); border:1px solid var(--border); border-radius:18px; padding:18px; }
      .panel h3 { margin:0 0 12px; }
      .field-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:14px; }
      .field { display:grid; gap:8px; }
      label { font-size:0.8rem; color:var(--muted); font-weight:700; }
      input, select, button { font:inherit; }
      input, select { width:100%; padding:10px 12px; border:1px solid var(--border); border-radius:10px; background:#fbfdfc; }
      button.action { border:none; border-radius:10px; padding:10px 14px; background:var(--primary); color:white; font-weight:700; cursor:pointer; }
      table { width:100%; border-collapse: collapse; }
      th, td { border-bottom:1px solid var(--border); padding:10px 8px; text-align:left; }
      th { color:var(--muted); text-transform:uppercase; letter-spacing:0.06em; font-size:0.76rem; }
      .status { display:inline-flex; padding:5px 9px; border-radius:999px; font-size:0.7rem; font-weight:700; letter-spacing:0.04em; text-transform:uppercase; }
      .status-low-stock { background:var(--warning-soft); color:var(--warning); }
      .status-ready { background:var(--success-soft); color:var(--success); }
      .status-urgent { background:var(--danger-soft); color:var(--danger); }
      .status-reconciled { background:#eaf8ef; color:#2d7d56; }
      .list { list-style:none; margin:0; padding:0; display:grid; gap:12px; }
      .list li { border:1px solid var(--border); border-radius:12px; padding:12px; display:flex; justify-content:space-between; gap:12px; background: var(--panel); }
      @media (max-width:860px){ .grid{grid-template-columns:1fr;} .topbar{flex-direction:column; align-items:flex-start; gap:12px;} }
    </style>
  </head>
  <body>
    <div class="topbar">
      <div class="brand">
        <div class="brand-mark">M</div>
        <div><strong>Medirec</strong></div>
      </div>
      <div class="user">
        <span class="badge role-badge">Pharmacy</span>
        <span id="userName">Loading...</span>
        <button class="logout" onclick="logoutUser()">Logout</button>
      </div>
    </div>
    <nav class="nav">
      <a href="cms.html">CMS overview</a>
      <a href="regional.html">Regional view</a>
      <a href="facility.html">Facility view</a>
      <a class="active" href="pharmacy.html">Pharmacy view</a>
    </nav>
    <main class="page">
      <section class="hero">
        <h2>Hospital Pharmacy / Dispensing Unit</h2>
        <p>Review medicine availability, record local stock adjustments, and flag discrepancies for downstream facility stock continuity.</p>
      </section>
      <section class="stats" id="stats"></section>
      <div class="grid">
        <section class="panel" id="stockPanel"></section>
        <section class="panel" id="alertsPanel"></section>
      </div>
      <div class="grid">
        <section class="panel" id="updatePanel"></section>
        <section class="panel" id="requestsPanel"></section>
      </div>
      <div class="grid">
        <section class="panel" id="historyPanel"></section>
      </div>
    </main>

    <script>
      function requireSession() {
        const session = JSON.parse(localStorage.getItem('medirec-demo-session') || 'null');
        if (!session || session.role !== 'pharmacy') {
          window.location.href = 'index.html';
          return null;
        }
        return session;
      }
      function logoutUser() { localStorage.removeItem('medirec-demo-session'); window.location.href='index.html'; }
      function defaultData() {
        return {
          stock: {
            pharmacy: [
              { medicine:'Amoxicillin 250mg Capsule', unit:'pack', quantity:88, location:'Pharmacy Shelf', status:'Low' },
              { medicine:'Paracetamol 500mg', unit:'tablet', quantity:540, location:'Dispensing Shelf', status:'Ready' },
              { medicine:'Ceftriaxone Injection', unit:'vial', quantity:18, location:'Pharmacy Store', status:'Low' }
            ]
          },
          movements: [
            { medicine:'Amoxicillin 250mg Capsule', quantity:88, unit:'pack', source:'Pharmacy Shelf', destination:'Dispensing Unit', status:'Reconciled', stakeholder:'Pharmacy' },
            { medicine:'Paracetamol 500mg', quantity:540, unit:'tablet', source:'Pharmacy Receiving', destination:'Dispensing Shelf', status:'Ready', stakeholder:'Pharmacy' }
          ]
        };
      }
      function getData() { return JSON.parse(localStorage.getItem('medirec-demo-data') || 'null') || defaultData(); }
      function setData(data) { localStorage.setItem('medirec-demo-data', JSON.stringify(data)); }
      function renderStatus(status){ const key = (status||'').toLowerCase().replace(/\s+/g,'-'); return `<span class="status status-${key}">${status}</span>`; }
      function renderStats(data) {
        const lowStock = data.stock.pharmacy.filter(item => item.status === 'Low').length;
        const meds = data.stock.pharmacy.length;
        const incoming = 2;
        document.getElementById('stats').innerHTML = `
          <div class="stat"><div class="stat-label">Medicine lines</div><div class="stat-value">${meds}</div><div class="stat-note">Local records</div></div>
          <div class="stat"><div class="stat-label">Low stock</div><div class="stat-value">${lowStock}</div><div class="stat-note">Immediate attention</div></div>
          <div class="stat"><div class="stat-label">Incoming stock</div><div class="stat-value">${incoming}</div><div class="stat-note">Pending review</div></div>
          <div class="stat"><div class="stat-label">Recent updates</div><div class="stat-value">6</div><div class="stat-note">This week</div></div>
        `;
      }
      function renderStock(data) {
        const rows = data.stock.pharmacy.map(item => `
          <tr><td>${item.medicine}</td><td>${item.quantity} ${item.unit}</td><td>${item.location}</td><td><span class="status status-${item.status === 'Low' ? 'low-stock' : 'ready'}">${item.status}</span></td></tr>
        `).join('');
        document.getElementById('stockPanel').innerHTML = `
          <h3>Medicine availability</h3>
          <table><thead><tr><th>Medicine</th><th>Qty</th><th>Location</th><th>Status</th></tr></thead><tbody>${rows}</tbody></table>
        `;
      }
      function renderAlerts() {
        document.getElementById('alertsPanel').innerHTML = `
          <h3>Alerts & notifications</h3>
          <ul class="list">
            <li><div><strong>Amoxicillin discrepancy</strong><div>Box count differs from shelf record by 6 packs.</div></div><span class="status status-low-stock">Report</span></li>
            <li><div><strong>Incoming stock review</strong><div>Confirm arrival of the next pediatric shipment.</div></div><span class="status status-urgent">Action</span></li>
          </ul>
        `;
      }
      function renderUpdatePanel(data) {
        const options = data.stock.pharmacy.map(item => `<option value="${item.medicine}">${item.medicine}</option>`).join('');
        document.getElementById('updatePanel').innerHTML = `
          <h3>Local stock update</h3>
          <form id="stockForm">
            <div class="field-grid">
              <div class="field"><label>Medicine</label><select name="medicine">${options}</select></div>
              <div class="field"><label>Adjusted quantity</label><input type="number" name="quantity" value="120" /></div>
            </div>
            <div style="margin-top:14px;"><button class="action" type="submit">Record update</button></div>
          </form>
        `;
      }
      function renderRequestsPanel() {
        document.getElementById('requestsPanel').innerHTML = `
          <h3>Requests requiring attention</h3>
          <ul class="list">
            <li><div><strong>Dispensing shelf replenishment</strong><div>Paracetamol needs review for next dispensing cycle.</div></div><span class="status status-ready">View</span></li>
            <li><div><strong>Low stock escalation</strong><div>Ceftriaxone supply below target; escalate to central team.</div></div><span class="status status-low-stock">Flag</span></li>
          </ul>
        `;
      }
      function renderHistory(data) {
        const rows = data.movements.slice(0,5).map(item => `
          <li><div><strong>${item.medicine}</strong><div>${item.source} → ${item.destination}</div></div><div>${item.quantity} ${item.unit}<br>${renderStatus(item.status)}</div></li>
        `).join('');
        document.getElementById('historyPanel').innerHTML = `
          <h3>Stock movement history</h3>
          <ul class="list">${rows}</ul>
        `;
      }
      function initPage() {
        const session = requireSession();
        if (!session) return;
        document.getElementById('userName').textContent = `${session.name} · ${session.org}`;
        const data = getData();
        renderStats(data);
        renderStock(data);
        renderAlerts();
        renderUpdatePanel(data);
        renderRequestsPanel();
        renderHistory(data);

        document.getElementById('stockForm').addEventListener('submit', function (e) {
          e.preventDefault();
          const form = new FormData(e.target);
          const medicine = form.get('medicine');
          const quantity = Number(form.get('quantity'));
          const item = data.stock.pharmacy.find(entry => entry.medicine === medicine);
          if (!item) return;
          item.quantity = quantity;
          item.status = quantity < 50 ? 'Low' : 'Ready';
          data.movements.unshift({ medicine, quantity, unit: item.unit, source:'Pharmacy Store', destination:'Dispensing Unit', status:'Reconciled', stakeholder:'Pharmacy' });
          setData(data);
          alert('Local stock record updated.');
          window.location.reload();
        });
      }
      initPage();
    </script>
  </body>
</html>


