// Demo: Search bar functionality
document.addEventListener("DOMContentLoaded", function () {
  // Search bar functionality
  const searchForm = document.getElementById('demoSearchForm');
  if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const city = document.getElementById('searchCity').value.trim();
      const blood = document.getElementById('searchBloodGroup').value;
      let msg = '';
      if (city && blood) {
        msg = `Showing results for <b>${blood}</b> blood group in <b>${city}</b>.`;
      } else if (city) {
        msg = `Showing all blood groups in <b>${city}</b>.`;
      } else if (blood) {
        msg = `Showing all cities for <b>${blood}</b> blood group.`;
      } else {
        msg = 'Please enter a city or select a blood group to search.';
      }
      document.getElementById('searchResult').innerHTML = msg;
    });
  }

  // Actions functionality with demo content for each button
  const findBtn = document.getElementById('findBloodBtn');
  const reqBtn = document.getElementById('requestBloodBtn');
  const donateBtn = document.getElementById('donateBloodBtn');
  const result = document.getElementById('demoActionResult');
  if (findBtn && result) {
    findBtn.onclick = function() {
      result.innerHTML = `
        <div style="background:#e3f2fd;padding:1.2rem 1rem;border-radius:8px;">
          <b>Find Blood</b><br>
          <ul style="margin:0.7rem 0 0 1.2rem;">
            <li>Donor: <b>Ravi Kumar</b> (O+), Jaipur, 2 km away</li>
            <li>Donor: <b>Priya Singh</b> (A+), Jaipur, 4 km away</li>
            <li>Donor: <b>Amit Patel</b> (B-), Jaipur, 5 km away</li>
          </ul>
          <div style="margin-top:0.7rem;color:#1976d2;">Contact donors directly or request a callback.</div>
        </div>
      `;
    };
  }
  if (reqBtn && result) {
    reqBtn.onclick = function() {
      result.innerHTML = `
        <div style="background:#fffde7;padding:1.2rem 1rem;border-radius:8px;">
          <b>Request Blood</b><br>
          <div style="margin:0.7rem 0;">
            <b>Status:</b> Your request for <span style="color:#b30000;">B+</span> blood is <b>broadcasted</b> to 15 nearby donors.
          </div>
          <ul style="margin:0.7rem 0 0 1.2rem;">
            <li>Estimated response time: <b>10 minutes</b></li>
            <li>Donors notified: Ravi Kumar, Priya Singh, Amit Patel</li>
          </ul>
          <div style="margin-top:0.7rem;color:#fbc02d;">You will be notified as soon as a donor responds.</div>
        </div>
      `;
    };
  }
  if (donateBtn && result) {
    donateBtn.onclick = function() {
      result.innerHTML = `
        <div style="background:#e8f5e9;padding:1.2rem 1rem;border-radius:8px;">
          <b>Donate Blood</b><br>
          <div style="margin:0.7rem 0;">
            <b>Thank you for your willingness to donate!</b>
          </div>
          <ul style="margin:0.7rem 0 0 1.2rem;">
            <li>Next camp: <b>Jaipur Blood Drive</b> on <b>25 Oct</b></li>
            <li>Last donation: <b>2 months ago</b></li>
            <li>Total donations: <b>3 times</b></li>
          </ul>
          <div style="margin-top:0.7rem;color:#43a047;">You are eligible to donate again. Register for the next camp!</div>
        </div>
      `;
    };
  }

  // Responsive: also handle sidebar nav clicks for Find/Request/Donate Blood
  function showDemoByName(name) {
    if (!result) return;
    if (name === 'Find Blood') findBtn.click();
    else if (name === 'Request Blood') reqBtn.click();
    else if (name === 'Donate Blood') donateBtn.click();
  }
  document.querySelectorAll('.sidebar nav ul li').forEach(li => {
    li.addEventListener('click', function() {
      const text = li.textContent.trim();
      showDemoByName(text);
    });
  });

  // Sidebar and panel buttons (demo content)
  const sidebarBtns = [
    { selector: '.sidebar li', name: 'Find Blood', content: `
      <div style="background:#e3f2fd;padding:1.2rem 1rem;border-radius:8px;">
        <b>Find Blood (Sidebar)</b><br>
        <ul style="margin:0.7rem 0 0 1.2rem;">
          <li>Donor: <b>Ravi Kumar</b> (O+), Jaipur, 2 km away</li>
          <li>Donor: <b>Priya Singh</b> (A+), Jaipur, 4 km away</li>
        </ul>
      </div>
    `},
    { selector: '.sidebar li:nth-child(2)', name: 'Request Blood', content: `
      <div style="background:#fffde7;padding:1.2rem 1rem;border-radius:8px;">
        <b>Request Blood (Sidebar)</b><br>
        <div style="margin:0.7rem 0;">
          <b>Status:</b> Request broadcasted to donors.
        </div>
      </div>
    `},
    { selector: '.sidebar li:nth-child(3)', name: 'Donate Blood', content: `
      <div style="background:#e8f5e9;padding:1.2rem 1rem;border-radius:8px;">
        <b>Donate Blood (Sidebar)</b><br>
        <div style="margin:0.7rem 0;">
          <b>Thank you for your willingness to donate!</b>
        </div>
      </div>
    `}
  ];
  // Attach demo for sidebar nav (except About/Feedback)
  document.querySelectorAll('.sidebar li').forEach((li, idx) => {
    if (idx < 3) {
      li.style.cursor = 'pointer';
      li.onclick = function() {
        result.innerHTML = sidebarBtns[idx].content;
      };
    }
  });

  // Request Panel button
  const broadcastBtn = document.querySelector('.broadcast-btn');
  if (broadcastBtn && result) {
    broadcastBtn.onclick = function() {
      result.innerHTML = `
        <div style="background:#fff3e0;padding:1.2rem 1rem;border-radius:8px;">
          <b>Broadcast Request</b><br>
          <div style="margin:0.7rem 0;">
            Your urgent blood request has been sent to all registered donors in your area.
          </div>
          <div style="margin-top:0.7rem;color:#b30000;">You will be notified when a donor responds.</div>
        </div>
      `;
    };
  }

  // Profile popup logic
  const avatar = document.getElementById('profileAvatar');
  const popup = document.getElementById('profilePopup');
  const closeBtn = document.getElementById('closeProfilePopup');
  if (avatar && popup && closeBtn) {
    function openProfile() {
      popup.classList.add('active');
    }
    function closeProfile() {
      popup.classList.remove('active');
    }
    avatar.addEventListener('click', openProfile);
    avatar.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') openProfile();
    });
    closeBtn.addEventListener('click', closeProfile);
    popup.addEventListener('click', function(e) {
      if (e.target === popup) closeProfile();
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeProfile();
    });
  }
});
