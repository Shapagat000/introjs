document.querySelector('.features').addEventListener('click', function(){
    let features = document.querySelector('.features');
    features.innerHTML = `
    <div class="features" style="display: flex; flex-direction: column;">
    <p>Features</p>
    <div style="display: flex; flex-direction: row; gap: 10px; align-items: center;">
      <img src="icon-todo.svg">
      <p>ToDo List</p>
    </div>

    <div style="display: flex; flex-direction: row; gap: 10px; align-items: center;">
      <img src="icon-calendar.svg">
      <p>Calendar</p>
    </div>

    <div style="display: flex; flex-direction: row; gap: 10px; align-items: center;">
      <img src="icon-reminders.svg">
      <p>Reminders</p>
    </div>

    <div style="display: flex; flex-direction: row; gap: 10px; align-items: center;">
      <img src="icon-planning.svg" >
      <p>Planning</p>
    </div>
  </div>
    `;
})

document.querySelector('.company').addEventListener('click', function(){
    let company = document.querySelector('.company');

    company.innerHTML = `
    <div style="display: flex; flex-direction: column;">
    <p>Company</p>
    <p>History</p>
    <p>Our Team</p>
    <p>Blog</p>
  </div>
    `;
})

document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('.nav').classList.toggle('active');
})