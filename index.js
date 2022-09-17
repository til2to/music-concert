const sideBar = document.querySelector('#sidebar');
const openSideBarBtn = document.querySelector('.navbar-toggler');
const closeSideBarBtn = document.querySelector('.close-btn');
const featuredListContainer = document.querySelector('.speakers-list');

// Open and Close Nav Menu On Small Screens
openSideBarBtn.addEventListener('click', () => {
  sideBar.style.display = 'block';
});

closeSideBarBtn.addEventListener('click', () => {
  sideBar.style.display = 'none';
});

// Speakers Array
const speakers = [
  {
    img: 'assets/users/100_1.jpg',
    name: 'Yochai Benkler',
    profession: 'Berkman Professor of Entrepreneurial Legal Studies atHarvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006',
  },
  {
    img: 'assets/users/100_3.jpg',
    name: 'Yochai Benkler',
    profession: 'Berkman Professor of Entrepreneurial Legal Studies atHarvard Law School',
    description: 'Kilname Chon helped bring the Internet to Asia and is an outspoken advocate for the open web and digital commons.',
  },
  {
    img: 'assets/users/100_2.jpg',
    name: 'SohYeong Noh',
    profession: 'Director of Art Centre Nabi and a board member of CC Korea',
    description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities and the arts.',
  },
  {
    img: 'assets/users/100_4.jpg',
    name: 'Julia Leda',
    profession: 'President of Young Pirates of Europe',
    description: 'European ingetration political democracy and participation of youth through online as her major condem',
  },
  {
    img: 'assets/users/100_7.jpg',
    name: 'Lila Tretikov',
    profession: 'Director of Art Centre Nabi and a board member of CC Korea',
    description: 'Lila Tretikov is the European ingetration political democracy and participation of youth through online as her major condem',
  },
  {
    img: 'assets/users/100_6.jpg',
    name: 'Ryan Becker',
    profession: 'Music Coordinator',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, voluptatem.',
  },
];

speakers.forEach((speaker) => {
  featuredListContainer.innerHTML += `<div class="col-lg-6 col-sm-12 col-12">
  <div class="card speaker-card">
    <div class="card-body d-flex align-items-center">
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-5 col-5">
          <img src="${speaker.img}" width="100%" alt="" />
        </div>
        <div class="col-lg-8 col-sm-7 col-7">
          <div class="profile-info">
            <h5 class="font-weight-boldest">${speaker.name}</h5>
            <span class="d-block font-italic orange-text"
              >${speaker.profession}</span
            >
            <span class="speaker-line"></span>
            <p>
              ${speaker.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
});
