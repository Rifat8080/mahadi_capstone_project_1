const body = document.querySelector('.expandcard');
const projects = document.getElementById('projects');
const popUp = document.createElement('section');
const showButton = document.getElementsByClassName('popBtn');

const projectInfo = [
  {
    id: 0,
    header: 'Yochai Benkler',
    popupPhoto: 'Imgs/Recent works/1.jpg',
    content: 'Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    tools: 'Trainer',
  },
  {
    id: 1,
    header: 'Soh Yeong Noh',
    popupPhoto: 'Imgs/Recent works/2.jpg',
    content: 'Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    tools: 'Trainer',
  },
  {
    id: 2,
    header: 'James Taylor',
    popupPhoto: 'Imgs/Recent works/3.jpg',
    content: 'Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    tools: 'Trainer',
  },
  {
    id: 3,
    header: 'Adam Phillips',
    popupPhoto: 'Imgs/Recent works/4.jpg',
    content: 'Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    tools: 'Trainer',
  },
  {
    id: 4,
    header: 'John Deo',
    popupPhoto: 'Imgs/Recent works/5.jpg',
    content: 'Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    tools: 'Trainer',
  },
  {
    id: 5,
    header: 'Alex Costa',
    popupPhoto: 'Imgs/Recent works/6.jpg',
    content: 'Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    tools: 'Trainer',
  },
];

for (let i = 0; i < projectInfo.length; i += 1) {
  const card = document.createElement('div'); // to generate a new card for each project
  card.classList.add('card-body');
  let toolsHtml = '';
  for (let j = 0; j < projectInfo[i].tools.length; j += 1) {
    toolsHtml += `<p>${projectInfo[i].tools[j]}</p>`;
  }

  card.innerHTML = `

  <div class="card-main">
   <div class="card-box">
    <div class="card-img">
      <img src="${projectInfo[i].popupPhoto}" />
    </div>
    <div>
      <h2 class="card-header">${projectInfo[i].header}</h2>
      <div class="card-content">
        
        <p class="tools">
          ${toolsHtml}
        </p>
      </div>
    </div>
    </div>
    </div>
    
  `;

  projects.appendChild(card);
}
