const STORAGE_KEYS = {
  session: 'medirec-demo-session',
  data: 'medirec-demo-data',
};

const USERS = [
  {
    id: 'cms',
    role: 'cms',
    name: 'Lerato Mokoena',
    org: 'Central Medical Stores',
    email: 'cms@medirec.demo',
    password: 'cms123',
  },
  {
    id: 'regional',
    role: 'regional',
    name: 'Thabo Kgosi',
    org: 'Southern Region Depot',
    email: 'regional@medirec.demo',
    password: 'regional123',
  },
  {
    id: 'facility',
    role: 'facility',
    name: 'Aisha Ramokgadi',
    org: 'Gaborone District Hospital',
    email: 'facility@medirec.demo',
    password: 'facility123',
  },
  {
    id: 'pharmacy',
    role: 'pharmacy',
    name: 'Keitumetse Dlamini',
    org: 'Gaborone District Hospital Pharmacy',
    email: 'pharmacy@medirec.demo',
    password: 'pharmacy123',
  },
];

const INITIAL_DATA = {
  orders: [
    {
      id: 'ORD-1042',
      medicine: 'Amoxicillin 250mg Capsule',
      unit: 'pack',
      quantityOrdered: 300,
      quantityAllocated: 0,
      quantityDispatched: 0,
      quantityReceived: 0,
      status: 'Submitted',
      createdAt: '2026-10-15T08:15:00',
      updatedAt: '2026-10-15T08:15:00',
      facility: 'Gaborone District Hospital',
      destination: 'Gaborone District Hospital',
      source: 'CMS',
      region: 'Southern Region',
      priority: 'High',
      notes: 'Pediatric ward stock nearing minimum threshold.',
      reference: 'REQ-2249',
    },
    {
      id: 'ORD-1050',
      medicine: 'Oxytocin Injection',
      unit: 'vial',
      quantityOrdered: 120,
      quantityAllocated: 120,
      quantityDispatched: 120,
      quantityReceived: 48,
      status: 'Received',
      createdAt: '2026-10-10T06:40:00',
      updatedAt: '2026-10-18T10:30:00',
      facility: 'Francistown Clinic',
      destination: 'Francistown Clinic',
      source: 'CMS',
      region: 'North East',
      priority: 'Critical',
      notes: 'Emergency obstetric supplies.',
      reference: 'REQ-2265',
    },
    {
      id: 'ORD-1054',
      medicine: 'Paracetamol 500mg',
      unit: 'tablet',
      quantityOrdered: 540,
      quantityAllocated: 540,
      quantityDispatched: 540,
      quantityReceived: 0,
      status: 'In Transit',
      createdAt: '2026-10-20T09:10:00',
      updatedAt: '2026-10-22T16:45:00',
      facility: 'Serowe Health Centre',
      destination: 'Serowe Health Centre',
      source: 'CMS',
      region: 'Central Region',
      priority: 'Normal',
      notes: 'Routine preventive stock replenishment.',
      reference: 'REQ-2290',
    },
    {
      id: 'ORD-1061',
      medicine: 'Insulin Glargine',
      unit: 'pen',
      quantityOrdered: 94,
      quantityAllocated: 0,
      quantityDispatched: 0,
      quantityReceived: 0,
      status: 'Under Review',
      createdAt: '2026-10-18T10:05:00',
      updatedAt: '2026-10-18T10:05:00',
      facility: 'Maun General Hospital',
      destination: 'Maun General Hospital',
      source: 'CMS',
      region: 'North West',
      priority: 'High',
      notes: 'Chronic disease management request.',
      reference: 'REQ-2312',
    },
    {
      id: 'ORD-1068',
      medicine: 'Ceftriaxone Injection',
      unit: 'vial',
      quantityOrdered: 200,
      quantityAllocated: 200,
      quantityDispatched: 200,
      quantityReceived: 120,
      status: 'Received',
      createdAt: '2026-10-09T07:30:00',
      updatedAt: '2026-10-21T15:10:00',
      facility: 'Kasane Clinic',
      destination: 'Kasane Clinic',
      source: 'CMS',
      region: 'Chobe',
      priority: 'High',
      notes: 'Priority infectious disease stock.',
      reference: 'REQ-2324',
    },
  ],
  stock: {
    cms: [
      { medicine: 'Amoxicillin 250mg Capsule', unit: 'pack', quantity: 780, location: 'Central Warehouse', status: 'Stable' },
      { medicine: 'Paracetamol 500mg', unit: 'tablet', quantity: 4200, location: 'Central Warehouse', status: 'Ready' },
      { medicine: 'Ceftriaxone Injection', unit: 'vial', quantity: 160, location: 'Distribution Cold Room', status: 'Low' },
      { medicine: 'Insulin Glargine', unit: 'pen', quantity: 240, location: 'Central Warehouse', status: 'Monitoring' },
      { medicine: 'Oxytocin Injection', unit: 'vial', quantity: 300, location: 'Central Warehouse', status: 'Ready' },
    ],
    regional: [
      { medicine: 'Amoxicillin 250mg Capsule', unit: 'pack', quantity: 320, location: 'Southern Region Depot', status: 'Stable' },
      { medicine: 'Paracetamol 500mg', unit: 'tablet', quantity: 1800, location: 'Southern Region Depot', status: 'Ready' },
      { medicine: 'Ceftriaxone Injection', unit: 'vial', quantity: 78, location: 'Southern Region Depot', status: 'Low' },
    ],
    facility: [
      { medicine: 'Amoxicillin 250mg Capsule', unit: 'pack', quantity: 92, location: 'Ward Store', status: 'Low' },
      { medicine: 'Paracetamol 500mg', unit: 'tablet', quantity: 640, location: 'Pharmacy', status: 'Ready' },
      { medicine: 'Ceftriaxone Injection', unit: 'vial', quantity: 36, location: 'Emergency Unit', status: 'Low' },
    ],
    pharmacy: [
      { medicine: 'Amoxicillin 250mg Capsule', unit: 'pack', quantity: 88, location: 'Pharmacy Dispensing Shelf', status: 'Low' },
      { medicine: 'Paracetamol 500mg', unit: 'tablet', quantity: 540, location: 'Pharmacy Dispensing Shelf', status: 'Ready' },
      { medicine: 'Ceftriaxone Injection', unit: 'vial', quantity: 18, location: 'Pharmacy Store', status: 'Low' },
    ],
  },
  movements: [
    {
      id: 'MVT-001',
      orderId: 'ORD-1042',
      medicine: 'Amoxicillin 250mg Capsule',
      quantity: 300,
      unit: 'pack',
      source: 'Gaborone District Hospital',
      destination: 'CMS',
      status: 'Submitted',
      timestamp: '2026-10-15T08:15:00',
      stakeholder: 'Facility',
      notes: 'Request submitted for paediatric ward restocking.',
    },
    {
      id: 'MVT-002',
      orderId: 'ORD-1050',
      medicine: 'Oxytocin Injection',
      quantity: 120,
      unit: 'vial',
      source: 'CMS',
      destination: 'Francistown Clinic',
      status: 'Dispatched',
      timestamp: '2026-10-17T12:00:00',
      stakeholder: 'CMS',
      notes: 'Dispatch prepared and confirmed.',
    },
    {
      id: 'MVT-003',
      orderId: 'ORD-1050',
      medicine: 'Oxytocin Injection',
      quantity: 48,
      unit: 'vial',
      source: 'Southern Region Depot',
      destination: 'Francistown Clinic',
      status: 'Received',
      timestamp: '2026-10-18T10:30:00',
      stakeholder: 'Regional Depot',
      notes: 'Partial receipt recorded due to packaging discrepancy.',
    },
    {
      id: 'MVT-004',
      orderId: 'ORD-1054',
      medicine: 'Paracetamol 500mg',
      quantity: 540,
      unit: 'tablet',
      source: 'CMS',
      destination: 'Serowe Health Centre',
      status: 'In Transit',
      timestamp: '2026-10-22T16:45:00',
      stakeholder: 'CMS',
      notes: 'Vehicle dispatch acknowledged; route in progress.',
    },
  ],
};

const STATUSES = [
  'Draft',
  'Submitted',
  'Under Review',
  'Allocated',
  'Dispatched',
  'In Transit',
  'Received',
  'Reconciled',
];

const app = document.getElementById('app');
const toastBox = document.getElementById('toast');

const state = {
  session: JSON.parse(localStorage.getItem(STORAGE_KEYS.session) || 'null'),
  data: JSON.parse(localStorage.getItem(STORAGE_KEYS.data) || JSON.stringify(INITIAL_DATA)),
};

function saveState() {
  localStorage.setItem(STORAGE_KEYS.data, JSON.stringify(state.data));
}

function saveSession() {
  localStorage.setItem(STORAGE_KEYS.session, JSON.stringify(state.session));
}

function showToast(message, type = 'success') {
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.textContent = message;
  toastBox.appendChild(el);
  setTimeout(() => el.remove(), 3200);
}

function formatDate(dateString) {
  if (!dateString) return '—';
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

function getRoleLabel(role) {
  const map = {
    cms: 'CMS',
    regional: 'Regional Depot',
    facility: 'Health Facility',
    pharmacy: 'Pharmacy / Dispensary',
  };
  return map[role] || role;
}

function getStatusClass(status) {
  const normalized = (status || '').toLowerCase().replace(/\s+/g, '-');
  return `status-${normalized}`;
}

function getNavItems(role) {
  const map = {
    cms: ['cms', 'regional', 'facility', 'pharmacy'],
    regional: ['regional', 'facility', 'pharmacy'],
    facility: ['facility', 'pharmacy'],
    pharmacy: ['pharmacy', 'facility'],
  };

  return map[role] || [role];
}

function routeToPath(path) {
  window.location.hash = path;
  renderApp();
}

function loginUser(email, password) {
  const user = USERS.find((entry) => entry.email === email && entry.password === password);

  if (!user) {
    showToast('Invalid demo credentials. Please use one of the sample stakeholder accounts.', 'error');
    return;
  }

  state.session = { email: user.email, role: user.role, name: user.name, org: user.org };
  saveSession();
  routeToPath(`/${user.role}`);
  showToast(`Welcome, ${user.name}.`, 'success');
}

function logoutUser() {
  state.session = null;
  localStorage.removeItem(STORAGE_KEYS.session);
  routeToPath('/login');
}

function routeGuard() {
  const path = window.location.hash.replace('#', '') || '/login';

  if (!state.session && path !== '/login') {
    window.location.hash = '/login';
    return '/login';
  }

  if (state.session && path === '/login') {
    return `/${state.session.role}`;
  }

  if (state.session) {
    const allowed = ['cms', 'regional', 'facility', 'pharmacy'];
    const current = path.split('/')[1];
    if (!allowed.includes(current) || current !== state.session.role) {
      return `/${state.session.role}`;
    }
  }

  return path;
}

function renderLogin() {
  const roleCards = USERS.map((user) => `
    <div class="role-card">
      <strong>${getRoleLabel(user.role)}</strong>
      <span>${user.org}</span>
      <span>${user.email}</span>
    </div>
  `).join('');

  app.innerHTML = `
    <div class="login-layout">
      <div class="login-card">
        <div class="login-hero">
          <div class="brand">
            <div class="brand-mark">M</div>
            <h1>Medirec</h1>
          </div>
          <h2>Distribution visibility for Botswana medicines.</h2>
          <p>Role-based coordination across CMS, regional depots, facilities, and pharmacy teams.</p>
        </div>
        <div class="login-panel">
          <h3>Demo stakeholder access</h3>
          <p class="small">Use the sample credentials below to test each role. This is a demo prototype with role-based route protection.</p>

          <div class="role-grid">${roleCards}</div>

          <form class="login-form" id="login-form">
            <div class="field">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" value="cms@medirec.demo" required />
            </div>
            <div class="field">
              <label for="password">Password</label>
              <input type="password" id="password" name="password" value="cms123" required />
            </div>
            <div class="form-actions">
              <button class="primary-btn" type="submit">Access dashboard</button>
            </div>
            <div class="inline-note">Demo accounts are intentionally visible for prototype testing; no privileged credentials are exposed in a production system.</div>
          </form>
        </div>
      </div>
    </div>
  `;

  const form = document.getElementById('login-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    loginUser(formData.get('email'), formData.get('password'));
  });
}

function renderUnauthorized() {
  app.innerHTML = `
    <div class="unauthorized">
      <div class="unauthorized-card">
        <h2>Access restricted</h2>
        <p>You are signed in as <strong>${getRoleLabel(state.session.role)}</strong> and cannot access this dashboard.</p>
        <button class="primary-btn" type="button" onclick="routeToPath('/${state.session.role}')">Return to my role dashboard</button>
      </div>
    </div>
  `;
}

function renderTopbar(role) {
  const user = state.session || {}; 
  return `
    <div class="topbar">
      <div class="brand">
        <div class="brand-mark">M</div>
        <h1>Medirec</h1>
      </div>
      <div class="user-chip">
        <span class="user-badge">${getRoleLabel(role)}</span>
        <span>${user.name || 'Demo User'} · ${user.org || 'Demo Org'}</span>
        <button class="secondary-btn" type="button" onclick="logoutUser()">Logout</button>
      </div>
    </div>
  `;
}

function renderNav(role) {
  const navItems = {
    cms: [
      { key: 'cms', label: 'CMS overview' },
      { key: 'regional', label: 'Regional view' },
      { key: 'facility', label: 'Facility view' },
      { key: 'pharmacy', label: 'Pharmacy view' },
    ],
    regional: [
      { key: 'regional', label: 'Regional overview' },
      { key: 'facility', label: 'Facility view' },
      { key: 'pharmacy', label: 'Pharmacy view' },
    ],
    facility: [
      { key: 'facility', label: 'Facility overview' },
      { key: 'pharmacy', label: 'Pharmacy view' },
    ],
    pharmacy: [
      { key: 'pharmacy', label: 'Pharmacy overview' },
      { key: 'facility', label: 'Facility view' },
    ],
  };

  const items = navItems[role] || [{ key: role, label: `${getRoleLabel(role)} overview` }];
  return `
    <nav class="role-nav">
      ${items.map((item) => `
        <button class="nav-item ${item.key === role ? 'active' : ''}" type="button" data-route="/${item.key}">${item.label}</button>
      `).join('')}
    </nav>
  `;
}

function renderKpis(role) {
  const orders = state.data.orders;
  const totalOrders = orders.length;
  const pending = orders.filter((order) => ['Submitted', 'Under Review', 'Allocated', 'Dispatched', 'In Transit'].includes(order.status)).length;
  const received = orders.filter((order) => ['Received', 'Reconciled'].includes(order.status)).length;
  const shortage = state.data.stock[role]?.filter((item) => item.status.toLowerCase().includes('low')).length || 0;

  const items = {
    cms: [
      { label: 'Stock lines', value: state.data.stock.cms.length, trend: 'Central visibility' },
      { label: 'Pending review', value: pending, trend: 'Awaiting allocation' },
      { label: 'Dispatches in progress', value: orders.filter((o) => ['Dispatched', 'In Transit'].includes(o.status)).length, trend: 'Active consignments' },
      { label: 'Low-stock alerts', value: shortage, trend: 'Requires action' },
    ],
    regional: [
      { label: 'Incoming consignments', value: orders.filter((o) => ['Allocated', 'Dispatched', 'In Transit'].includes(o.status)).length, trend: 'Regional queue' },
      { label: 'Expected deliveries', value: orders.filter((o) => ['Dispatched', 'In Transit'].includes(o.status)).length, trend: 'This month' },
      { label: 'Received', value: received, trend: 'Confirmed receipt' },
      { label: 'Alerts', value: shortage, trend: 'Regional monitoring' },
    ],
    facility: [
      { label: 'Orders submitted', value: orders.filter((o) => o.facility === 'Gaborone District Hospital').length, trend: 'Recently requested' },
      { label: 'Pending receipt', value: orders.filter((o) => o.facility === 'Gaborone District Hospital' && ['Allocated', 'Dispatched', 'In Transit'].includes(o.status)).length, trend: 'Awaiting confirmation' },
      { label: 'Stock at risk', value: shortage, trend: 'Low stock items' },
      { label: 'Reconciled orders', value: orders.filter((o) => o.facility === 'Gaborone District Hospital' && ['Received', 'Reconciled'].includes(o.status)).length, trend: 'Complete' },
    ],
    pharmacy: [
      { label: 'Medicine lines', value: state.data.stock.pharmacy.length, trend: 'Local records' },
      { label: 'Low stock', value: shortage, trend: 'Immediate attention' },
      { label: 'Incoming stock', value: orders.filter((o) => o.status === 'Dispatched' || o.status === 'In Transit').length, trend: 'Pending receipt' },
      { label: 'Recent updates', value: 6, trend: 'Today' },
    ],
  };

  return `
    <section class="kpi-grid">
      ${items[role].map((card) => `
        <article class="kpi-card">
          <div class="label">${card.label}</div>
          <div class="value">${card.value}</div>
          <div class="trend">${card.trend}</div>
        </article>
      `).join('')}
    </section>
  `;
}

function renderOrderTable(role, filterText = '') {
  const tableRows = state.data.orders
    .filter((order) => {
      if (!filterText) return true;
      const haystack = `${order.id} ${order.medicine} ${order.facility} ${order.status}`.toLowerCase();
      return haystack.includes(filterText.toLowerCase());
    })
    .slice(0, 8)
    .map((order) => `
      <tr>
        <td><strong>${order.id}</strong></td>
        <td>${order.medicine}</td>
        <td>${order.quantityOrdered}</td>
        <td>${order.facility}</td>
        <td><span class="badge ${getStatusClass(order.status)}">${order.status}</span></td>
        <td>${formatDate(order.updatedAt)}</td>
        <td>
          ${role === 'cms' ? `<button class="action-btn" data-action="allocate" data-order-id="${order.id}" type="button">Review</button>` : ''}
          ${role === 'facility' ? `<button class="action-btn" data-action="receipt" data-order-id="${order.id}" type="button">Receipt</button>` : ''}
          ${role === 'regional' ? `<button class="action-btn" data-action="regional-status" data-order-id="${order.id}" type="button">Update status</button>` : ''}
        </td>
      </tr>
    `)
    .join('');

  return `
    <div class="panel">
      <h3>Order queue</h3>
      <div class="field" style="margin-bottom:12px;">
        <label for="order-search">Search orders</label>
        <input id="order-search" type="text" placeholder="Search medicine or order reference" value="${filterText}" />
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Order</th>
              <th>Medicine</th>
              <th>Qty</th>
              <th>Facility</th>
              <th>Status</th>
              <th>Updated</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${tableRows || '<tr><td colspan="7"><div class="empty-state">No orders match this search.</div></td></tr>'}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderStockTable(role) {
  const stock = state.data.stock[role] || [];

  return `
    <div class="panel">
      <h3>${getRoleLabel(role)} stock records</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Medicine</th>
              <th>Qty</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${stock.map((item) => `
              <tr>
                <td>${item.medicine}</td>
                <td>${item.quantity} ${item.unit}</td>
                <td>${item.location}</td>
                <td><span class="badge ${getStatusClass(item.status)}">${item.status}</span></td>
              </tr>
            `).join('') || '<tr><td colspan="4"><div class="empty-state">No stock data available.</div></td></tr>'}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderAlerts(role) {
  const items = [
    { title: 'Delayed dispatch', detail: 'ORD-1054 remains in transit beyond expected handover window.', severity: 'Low stock' },
    { title: 'Stock at risk', detail: 'Ceftriaxone stock at the Southern Depot is below 80 units.', severity: 'Urgent' },
    { title: 'Receipt pending', detail: 'Facility receipt confirmation is awaiting pharmacy reconciliation.', severity: 'Review' },
  ];

  return `
    <div class="panel">
      <h3>Alerts and follow-up</h3>
      <ul class="alert-list">
        ${items.map((item) => `
          <li class="alert-item">
            <div>
              <strong>${item.title}</strong>
              <span>${item.detail}</span>
            </div>
            <span class="badge ${getStatusClass(item.severity)}">${item.severity}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `;
}

function renderHistory() {
  const movements = state.data.movements.slice(0, 5);

  return `
    <div class="panel">
      <h3>Movement history</h3>
      <ul class="history-list">
        ${movements.map((record) => `
          <li class="history-item">
            <div>
              <strong>${record.medicine}</strong>
              <span>${record.source} → ${record.destination}</span>
            </div>
            <div>
              <span>${record.quantity} ${record.unit}</span><br />
              <span class="badge ${getStatusClass(record.status)}">${record.status}</span>
            </div>
          </li>
        `).join('')}
      </ul>
    </div>
  `;
}

function renderCmsPage() {
  return `
    <div class="app-shell">
      ${renderTopbar('cms')}
      ${renderNav('cms')}
      <main class="page">
        <section class="hero">
          <h2>Central Medical Stores dashboard</h2>
          <p>Oversee stock allocation, confirm dispatches, and monitor distribution performance across regions and facilities.</p>
        </section>
        ${renderKpis('cms')}

        <div class="grid-two">
          ${renderOrderTable('cms')}
          ${renderAlerts('cms')}
        </div>

        <div class="grid-two">
          <div class="panel">
            <h3>Order allocation</h3>
            <form id="cms-allocation-form">
              <div class="form-grid">
                <div class="field">
                  <label for="cms-order">Order reference</label>
                  <select id="cms-order" name="orderId" required>
                    ${state.data.orders.map((order) => `<option value="${order.id}">${order.id} · ${order.medicine}</option>`).join('')}
                  </select>
                </div>
                <div class="field">
                  <label for="cms-qty">Allocated quantity</label>
                  <input id="cms-qty" name="quantity" type="number" min="1" value="120" required />
                </div>
              </div>
              <div class="form-actions">
                <button class="primary-btn" type="submit">Allocate stock</button>
              </div>
            </form>
          </div>

          <div class="panel">
            <h3>Dispatch preparation</h3>
            <form id="cms-dispatch-form">
              <div class="form-grid">
                <div class="field">
                  <label for="dispatch-order">Order reference</label>
                  <select id="dispatch-order" name="orderId">
                    ${state.data.orders.map((order) => `<option value="${order.id}">${order.id} · ${order.medicine}</option>`).join('')}
                  </select>
                </div>
                <div class="field">
                  <label for="dispatch-destination">Destination</label>
                  <input id="dispatch-destination" name="destination" value="Gaborone District Hospital" required />
                </div>
                <div class="field">
                  <label for="dispatch-ref">Dispatch reference</label>
                  <input id="dispatch-ref" name="reference" value="DSP-2091" required />
                </div>
              </div>
              <div class="form-actions">
                <button class="primary-btn" type="submit">Prepare & confirm dispatch</button>
              </div>
            </form>
          </div>
        </div>

        <div class="grid-two">
          ${renderStockTable('cms')}
          ${renderHistory()}
        </div>
      </main>
    </div>
  `;
}

function renderRegionalPage() {
  return `
    <div class="app-shell">
      ${renderTopbar('regional')}
      ${renderNav('regional')}
      <main class="page">
        <section class="hero">
          <h2>Southern Region Depot</h2>
          <p>Coordinate incoming consignments, confirm handovers, and monitor facility-level logistics and regional medicine movements.</p>
        </section>
        ${renderKpis('regional')}

        <div class="grid-two">
          ${renderOrderTable('regional')}
          ${renderAlerts('regional')}
        </div>

        <div class="grid-two">
          <div class="panel">
            <h3>Receipt confirmation</h3>
            <form id="regional-receipt-form">
              <div class="form-grid">
                <div class="field">
                  <label for="regional-order">Order reference</label>
                  <select id="regional-order" name="orderId">
                    ${state.data.orders.map((order) => `<option value="${order.id}">${order.id} · ${order.medicine}</option>`).join('')}
                  </select>
                </div>
                <div class="field">
                  <label for="regional-qty">Received quantity</label>
                  <input id="regional-qty" name="quantity" type="number" min="0" value="48" required />
                </div>
                <div class="field">
                  <label for="regional-discrepancy">Discrepancy</label>
                  <input id="regional-discrepancy" name="discrepancy" type="number" min="0" value="12" />
                </div>
              </div>
              <div class="form-actions">
                <button class="primary-btn" type="submit">Record receipt</button>
              </div>
            </form>
          </div>

          <div class="panel">
            <h3>Regional transfer overview</h3>
            <ul class="alert-list">
              <li class="alert-item">
                <div>
                  <strong>Stock transfer to Serowe</strong>
                  <span>Paracetamol 500mg moved from regional warehouse to central distribution line.</span>
                </div>
                <span class="badge status-allocated">Active</span>
              </li>
              <li class="alert-item">
                <div>
                  <strong>Delivery handover delayed</strong>
                  <span>Maun route delayed for 1.2 days; regional team notified.</span>
                </div>
                <span class="badge status-in-transit">Monitor</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="grid-two">
          ${renderStockTable('regional')}
          ${renderHistory()}
        </div>
      </main>
    </div>
  `;
}

function renderFacilityPage() {
  return `
    <div class="app-shell">
      ${renderTopbar('facility')}
      ${renderNav('facility')}
      <main class="page">
        <section class="hero">
          <h2>Gaborone District Hospital</h2>
          <p>Manage medicine ordering, receipt confirmation, facility stock visibility, and downstream supply follow-up.</p>
        </section>
        ${renderKpis('facility')}

        <div class="grid-two">
          <div class="panel">
            <h3>Submit medicine supply request</h3>
            <form id="facility-order-form">
              <div class="form-grid">
                <div class="field">
                  <label for="facility-medicine">Medicine</label>
                  <select id="facility-medicine" name="medicine" required>
                    <option>Amoxicillin 250mg Capsule</option>
                    <option>Paracetamol 500mg</option>
                    <option>Ceftriaxone Injection</option>
                    <option>Oxytocin Injection</option>
                    <option>Insulin Glargine</option>
                  </select>
                </div>
                <div class="field">
                  <label for="facility-qty">Quantity</label>
                  <input id="facility-qty" name="quantity" type="number" min="1" value="180" required />
                </div>
                <div class="field">
                  <label for="facility-priority">Priority</label>
                  <select id="facility-priority" name="priority">
                    <option>Normal</option>
                    <option>High</option>
                    <option>Critical</option>
                  </select>
                </div>
              </div>
              <div class="field" style="margin-top:14px;">
                <label for="facility-notes">Notes</label>
                <textarea id="facility-notes" name="notes">Restocking for pediatric ward and emergency unit.</textarea>
              </div>
              <div class="form-actions">
                <button class="primary-btn" type="submit">Submit order</button>
              </div>
            </form>
          </div>

          ${renderAlerts('facility')}
        </div>

        <div class="grid-two">
          ${renderOrderTable('facility')}
          <div class="panel">
            <h3>Receipt confirmation</h3>
            <form id="facility-receipt-form">
              <div class="form-grid">
                <div class="field">
                  <label for="facility-order">Order reference</label>
                  <select id="facility-order" name="orderId">
                    ${state.data.orders.map((order) => `<option value="${order.id}">${order.id} · ${order.medicine}</option>`).join('')}
                  </select>
                </div>
                <div class="field">
                  <label for="facility-received">Actual received</label>
                  <input id="facility-received" name="quantity" type="number" min="0" value="120" required />
                </div>
                <div class="field">
                  <label for="facility-shortage">Discrepancy</label>
                  <input id="facility-shortage" name="discrepancy" type="number" min="0" value="12" />
                </div>
              </div>
              <div class="form-actions">
                <button class="primary-btn" type="submit">Confirm receipt</button>
              </div>
            </form>
          </div>
        </div>

        <div class="grid-two">
          ${renderStockTable('facility')}
          ${renderHistory()}
        </div>
      </main>
    </div>
  `;
}

function renderPharmacyPage() {
  return `
    <div class="app-shell">
      ${renderTopbar('pharmacy')}
      ${renderNav('pharmacy')}
      <main class="page">
        <section class="hero">
          <h2>Hospital Pharmacy / Dispensing Unit</h2>
          <p>Verify medicine availability, flag stock discrepancies, and monitor incoming receipt records within the facility.</p>
        </section>
        ${renderKpis('pharmacy')}

        <div class="grid-two">
          <div class="panel">
            <h3>Medicine search and availability</h3>
            <div class="field">
              <label for="pharmacy-search">Search medicine</label>
              <input id="pharmacy-search" type="text" placeholder="e.g. Amoxicillin" />
            </div>
            <div class="table-wrap" style="margin-top:12px;">
              <table>
                <thead>
                  <tr>
                    <th>Medicine</th>
                    <th>Available qty</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  ${(state.data.stock.pharmacy || []).map((item) => `
                    <tr>
                      <td>${item.medicine}</td>
                      <td>${item.quantity} ${item.unit}</td>
                      <td><span class="badge ${getStatusClass(item.status)}">${item.status}</span></td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>

          ${renderAlerts('pharmacy')}
        </div>

        <div class="grid-two">
          <div class="panel">
            <h3>Local stock update</h3>
            <form id="pharmacy-stock-form">
              <div class="form-grid">
                <div class="field">
                  <label for="pharmacy-medicine">Medicine</label>
                  <select id="pharmacy-medicine" name="medicine">
                    ${(state.data.stock.pharmacy || []).map((item) => `<option value="${item.medicine}">${item.medicine}</option>`).join('')}
                  </select>
                </div>
                <div class="field">
                  <label for="pharmacy-qty">Adjusted quantity</label>
                  <input id="pharmacy-qty" name="quantity" type="number" min="0" value="120" required />
                </div>
              </div>
              <div class="form-actions">
                <button class="primary-btn" type="submit">Record local adjustment</button>
              </div>
            </form>
          </div>

          <div class="panel">
            <h3>Requests requiring attention</h3>
            <ul class="alert-list">
              <li class="alert-item">
                <div>
                  <strong>Amoxicillin discrepancy</strong>
                  <span>Recorded stock count differs from package count on shelf 2.</span>
                </div>
                <span class="badge status-low-stock">Report</span>
              </li>
              <li class="alert-item">
                <div>
                  <strong>Incoming stock review</strong>
                  <span>Confirm arrival of the next shipment for the pediatric ward.</span>
                </div>
                <span class="badge status-received">View</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="grid-two">
          ${renderStockTable('pharmacy')}
          ${renderHistory()}
        </div>
      </main>
    </div>
  `;
}

function updateStatus(orderId, nextStatus) {
  const order = state.data.orders.find((item) => item.id === orderId);
  if (!order) {
    showToast('Order not found.', 'error');
    return;
  }

  order.status = nextStatus;
  order.updatedAt = new Date().toISOString();
  saveState();
  renderApp();
}

function handleAllocateOrder(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const orderId = formData.get('orderId');
  const quantity = Number(formData.get('quantity'));

  const order = state.data.orders.find((item) => item.id === orderId);
  if (!order) {
    showToast('Order not found.', 'error');
    return;
  }

  if (!quantity || quantity <= 0 || quantity > order.quantityOrdered) {
    showToast('Allocation must be greater than zero and cannot exceed the ordered quantity.', 'error');
    return;
  }

  order.quantityAllocated = quantity;
  order.status = 'Allocated';
  order.updatedAt = new Date().toISOString();

  state.data.movements.unshift({
    id: `MVT-${Date.now()}`,
    orderId: order.id,
    medicine: order.medicine,
    quantity,
    unit: order.unit,
    source: 'CMS',
    destination: order.facility,
    status: 'Allocated',
    timestamp: new Date().toISOString(),
    stakeholder: 'CMS',
    notes: 'Manual allocation approved by central team.',
  });

  saveState();
  showToast(`Stock allocated for ${order.id}.`, 'success');
  renderApp();
}

function handleDispatch(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const orderId = formData.get('orderId');
  const destination = formData.get('destination');
  const reference = formData.get('reference');

  const order = state.data.orders.find((item) => item.id === orderId);
  if (!order) {
    showToast('Order not found.', 'error');
    return;
  }

  order.quantityDispatched = order.quantityAllocated || order.quantityOrdered;
  order.status = 'In Transit';
  order.reference = reference;
  order.destination = destination;
  order.updatedAt = new Date().toISOString();

  state.data.movements.unshift({
    id: `MVT-${Date.now()}`,
    orderId: order.id,
    medicine: order.medicine,
    quantity: order.quantityDispatched,
    unit: order.unit,
    source: 'CMS',
    destination,
    status: 'In Transit',
    timestamp: new Date().toISOString(),
    stakeholder: 'CMS',
    notes: `Dispatch confirmed with reference ${reference}.`,
  });

  saveState();
  showToast(`Dispatch confirmed for ${order.id}.`, 'success');
  renderApp();
}

function handleReceipt(event, role) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const orderId = formData.get('orderId');
  const quantity = Number(formData.get('quantity'));
  const discrepancy = Number(formData.get('discrepancy') || 0);

  const order = state.data.orders.find((item) => item.id === orderId);
  if (!order) {
    showToast('Order not found.', 'error');
    return;
  }

  if (!quantity && quantity !== 0) {
    showToast('Please enter a valid quantity.', 'error');
    return;
  }

  order.quantityReceived = quantity;
  order.status = discrepancy > 0 ? 'Received' : 'Reconciled';
  order.updatedAt = new Date().toISOString();

  state.data.movements.unshift({
    id: `MVT-${Date.now()}`,
    orderId: order.id,
    medicine: order.medicine,
    quantity,
    unit: order.unit,
    source: 'Regional Depot',
    destination: order.facility,
    status: order.status,
    timestamp: new Date().toISOString(),
    stakeholder: role === 'regional' ? 'Regional Depot' : 'Facility',
    notes: discrepancy > 0 ? `Partial receipt recorded with ${discrepancy} unit discrepancy.` : 'Receipt confirmed and reconciled.',
  });

  saveState();
  showToast(`Receipt recorded for ${order.id}.`, 'success');
  renderApp();
}

function handleFacilityOrder(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const medicine = formData.get('medicine');
  const quantity = Number(formData.get('quantity'));
  const priority = formData.get('priority');
  const notes = formData.get('notes') || '';

  if (!medicine || !quantity || quantity <= 0) {
    showToast('Enter a valid medicine quantity.', 'error');
    return;
  }

  const newOrder = {
    id: `ORD-${Math.floor(Math.random() * 9000) + 1000}`,
    medicine,
    unit: 'pack',
    quantityOrdered: quantity,
    quantityAllocated: 0,
    quantityDispatched: 0,
    quantityReceived: 0,
    status: 'Submitted',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    facility: 'Gaborone District Hospital',
    destination: 'Gaborone District Hospital',
    source: 'CMS',
    region: 'Southern Region',
    priority,
    notes,
    reference: `REQ-${Math.floor(Math.random() * 9000) + 1000}`,
  };

  state.data.orders.unshift(newOrder);
  state.data.movements.unshift({
    id: `MVT-${Date.now()}`,
    orderId: newOrder.id,
    medicine,
    quantity,
    unit: 'pack',
    source: 'Gaborone District Hospital',
    destination: 'CMS',
    status: 'Submitted',
    timestamp: new Date().toISOString(),
    stakeholder: 'Facility',
    notes: 'New supply request submitted by health facility.',
  });

  saveState();
  showToast(`Order ${newOrder.id} submitted successfully.`, 'success');
  renderApp();
}

function handlePharmacyUpdate(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const medicine = formData.get('medicine');
  const quantity = Number(formData.get('quantity'));

  if (!medicine || !quantity || quantity < 0) {
    showToast('Provide a valid medicine quantity.', 'error');
    return;
  }

  const stockItem = state.data.stock.pharmacy.find((item) => item.medicine === medicine);
  if (!stockItem) {
    showToast('Medicine not found in local pharmacy stock.', 'error');
    return;
  }

  stockItem.quantity = quantity;
  stockItem.status = quantity < 50 ? 'Low' : 'Ready';

  state.data.movements.unshift({
    id: `MVT-${Date.now()}`,
    orderId: 'PHARM-ADJ',
    medicine,
    quantity,
    unit: stockItem.unit,
    source: 'Pharmacy Dispensing Shelf',
    destination: 'Facility Pharmacy',
    status: 'Reconciled',
    timestamp: new Date().toISOString(),
    stakeholder: 'Pharmacy',
    notes: 'Local pharmacy stock record updated by authorised dispensary user.',
  });

  saveState();
  showToast(`${medicine} stock recorded successfully.`, 'success');
  renderApp();
}

function bindEvents() {
  const orderSearch = document.getElementById('order-search');
  if (orderSearch) {
    orderSearch.addEventListener('input', (event) => {
      const filter = event.target.value;
      const currentRole = state.session.role;
      if (currentRole === 'cms') {
        const page = renderCmsPage();
        app.innerHTML = page;
        const searchBox = document.getElementById('order-search');
        if (searchBox) searchBox.value = filter;
        bindEvents();
      }
    });
  }

  const navButtons = document.querySelectorAll('[data-route]');
  navButtons.forEach((btn) => {
    btn.addEventListener('click', () => routeToPath(btn.dataset.route));
  });

  const cmsAllocationForm = document.getElementById('cms-allocation-form');
  if (cmsAllocationForm) cmsAllocationForm.addEventListener('submit', handleAllocateOrder);

  const cmsDispatchForm = document.getElementById('cms-dispatch-form');
  if (cmsDispatchForm) cmsDispatchForm.addEventListener('submit', handleDispatch);

  const facilityOrderForm = document.getElementById('facility-order-form');
  if (facilityOrderForm) facilityOrderForm.addEventListener('submit', handleFacilityOrder);

  const facilityReceiptForm = document.getElementById('facility-receipt-form');
  if (facilityReceiptForm) facilityReceiptForm.addEventListener('submit', (event) => handleReceipt(event, 'facility'));

  const regionalReceiptForm = document.getElementById('regional-receipt-form');
  if (regionalReceiptForm) regionalReceiptForm.addEventListener('submit', (event) => handleReceipt(event, 'regional'));

  const pharmacyStockForm = document.getElementById('pharmacy-stock-form');
  if (pharmacyStockForm) pharmacyStockForm.addEventListener('submit', handlePharmacyUpdate);

  document.querySelectorAll('[data-action="allocate"]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const orderId = btn.getAttribute('data-order-id');
      const order = state.data.orders.find((item) => item.id === orderId);
      if (order) {
        const qty = Number(prompt(`Allocate quantity for ${order.id}:`, order.quantityOrdered));
        if (!Number.isNaN(qty) && qty > 0) {
          handleAllocateFromPrompt(orderId, qty);
        }
      }
    });
  });

  document.querySelectorAll('[data-action="receipt"]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const orderId = btn.getAttribute('data-order-id');
      const quantity = Number(prompt(`Confirm actual received quantity for ${orderId}:`, '120'));
      if (!Number.isNaN(quantity)) {
        const discrepancy = Number(prompt('Discrepancy amount (0 if none):', '0')) || 0;
        const fakeEvent = { preventDefault: () => {} , target: { elements: {} } };
        const form = document.createElement('form');
        const orderInput = document.createElement('input');
        orderInput.name = 'orderId';
        orderInput.value = orderId;
        form.appendChild(orderInput);
        const qtyInput = document.createElement('input');
        qtyInput.name = 'quantity';
        qtyInput.value = String(quantity);
        form.appendChild(qtyInput);
        const discrepancyInput = document.createElement('input');
        discrepancyInput.name = 'discrepancy';
        discrepancyInput.value = String(discrepancy);
        form.appendChild(discrepancyInput);
        fakeEvent.target = form;
        handleReceipt(fakeEvent, 'facility');
      }
    });
  });
}

function handleAllocateFromPrompt(orderId, quantity) {
  const order = state.data.orders.find((item) => item.id === orderId);
  if (!order) return;

  order.quantityAllocated = quantity;
  order.status = 'Allocated';
  order.updatedAt = new Date().toISOString();

  state.data.movements.unshift({
    id: `MVT-${Date.now()}`,
    orderId: order.id,
    medicine: order.medicine,
    quantity,
    unit: order.unit,
    source: 'CMS',
    destination: order.facility,
    status: 'Allocated',
    timestamp: new Date().toISOString(),
    stakeholder: 'CMS',
    notes: 'Central allocation confirmed.',
  });

  saveState();
  showToast(`Allocated ${quantity} units for ${order.id}.`, 'success');
  renderApp();
}

function renderApp() {
  const path = routeGuard();
  window.location.hash = path;

  if (!state.session && path === '/login') {
    renderLogin();
    return;
  }

  if (!state.session) {
    renderLogin();
    return;
  }

  const currentRole = path.split('/')[1];
  if (!currentRole || !['cms', 'regional', 'facility', 'pharmacy'].includes(currentRole)) {
    renderUnauthorized();
    return;
  }

  if (state.session.role !== currentRole) {
    renderUnauthorized();
    return;
  }

  if (currentRole === 'cms') {
    app.innerHTML = renderCmsPage();
  }
  if (currentRole === 'regional') {
    app.innerHTML = renderRegionalPage();
  }
  if (currentRole === 'facility') {
    app.innerHTML = renderFacilityPage();
  }
  if (currentRole === 'pharmacy') {
    app.innerHTML = renderPharmacyPage();
  }

  bindEvents();
}

window.addEventListener('hashchange', renderApp);
renderApp();

window.routeToPath = routeToPath;
window.logoutUser = logoutUser;

console.log('Medirec demo initialized');

const demoLink = document.createElement('script');
