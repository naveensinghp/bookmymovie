export const CITY = {
    country:"coimbatore"
} 


export const WEEKS = [
    {
        
    }
]

export const SEATSET = [
    {
      id: '001',
      label: 'Available',
      color: '#48a748',
    },
    {
      id: '002',
      label: 'Filing Fast',
      color: '#dd932b',
    },
    {
      id: '003',
      label: 'Sold Out',
      color: '#e7352f',
    },
    {
      id: '004',
      label: 'Lapsed',
      color: '#837a7a',
    },
  ];

export const availableShowTime = [
    {
        id: 1,
        showtime: '11.20 AM',
        language: 'English'
    }, 
    {
        id: 2,
        showtime: '13.20 AM',
        language: 'English'
    }
]

export const movieTheatres = [
    // {
    //     id: 1,
    //     name: "INOX Prozone Mall,Saravanampatty, Sathy Road Coimbatore",
    //     subtitle:"PVR INOX Limited., 1st Floor, Prozone Mall, Saravanampatty, Sathy Road, Coimbatore - 641035, Tamil Nadu",
    //     kms:"50"
    // },
    {
        id: 2,
        name: "PVR Brookefields Mall Coimbatore",
        subtitle:"4th Floor,Brookefields Mall, 641001",
        kms:"50"
    },
]  

export const dummyShowTime = [
    {
        day: 'Today',
        date: "26",
        week: 'Mon',
        morningshow: '10.00 AM',
        movierunning: true,
        noonshow: '02.00 PM'
    },
    {
        day: 'Tomorrow',
        date: "27",
        week: 'Tues',
        morningshow: '10.00 AM',
        movierunning: true,
        noonshow: '02.00 PM'
    },
    {
        day: 'Mon',
        date: "01",
        week: 'Tues',
        morningshow: '10.00 AM',
        movierunning: true,
        noonshow: '02.00 PM'
    },
    {
        day: 'Tue',
        date: "02",
        week: 'Tues',
        movierunning: false,
        morningshow: '10.00 AM',
        noonshow: '02.00 PM'
    },
    {
        day: 'Fri',
        date: "03",
        week: 'Tues',
        movierunning: false,
        morningshow: '10.00 AM',
        noonshow: '02.00 PM'
    },
];

let test = [];

for(let i = 0; i < 20; i++){
 test.push(i);
}
export const seatNumber = [
    {
        id:1,
        seat: "a",
        seatno: ['1','2','3','4','5','6','7','8','9','10','11',' 12','13','14','15','16','17','18','19','20']
    },
    {
        id:2,
        seat: "b",
        seatno: ['1','2','3','4','5','6','7','8','NULL','NULL','9','10','12','13','14','15','16','17']
    },
    {
        id:3,
        seat: "C",
        seatno: ['1','2','3','4','5','6','7','8','NULL','NULL','9','10','12','13','14','15','16','17']
    },
    {
        id:4,
        seat: "D",
        seatno: ['1','2','3','4','5','6','7','8','NULL','NULL','9','10','12','13','14','15','16','17']
    },
    {
        id:5,
        seat: "E",
        seatno: ['1','2','3','4','5','6','7','8','NULL','NULL','9','10','12','13','14','15','16','17']
    }
]

export const alphabets = ['A','B','C','D','E','F','G'];


export const getMoviePosters = [
    {
        id: 1,
        img: 'assets/movie1.jpg',
        title: "Extaction 2"
    },
    {
        id: 2,
        img: 'assets/movie2.jpg',
        title: "Fast and Furious"
    },
    {
        id: 3,
        img: 'assets/movie3.jpg',
        title: "Batman"
    }
]

export const nowShowingMovie = [
    {
        id: 1,
        movieName: "Kunfu Panda",
        movieRunningLanguage: ["Tamil","Hinid","Telegu"],
        newRelease: false,
        releaseDate: "Fri Sept 14",
        moviePoster: "assets/kufu1.webp",
        likesCount: 30,
        genre: "Adventure",
        language: 'Hindi'
    },
    {
        id: 2,
        movieName: "One Pieces",
        movieRunningLanguage: ["Tamil","Hinid","Telegu"],
        moviePoster: "assets/onepiece.jpg",
        newRelease: true,
        releaseDate: "Fri Nov 14",
        likesCount: 60,
        genre: "Drama",
        language: 'Tamil'
    },
    {
        id: 3,
        movieName: "One Pieces",
        movieRunningLanguage: ["Tamil","Hinid","Telegu"],
        moviePoster: "assets/onepiece.jpg",
        newRelease: true,
        releaseDate: "Fri Dec 14",
        likesCount: 20,
        genre: "Drama",
        language: 'Tamil'
    },
    {
        id: 4,
        movieName: "One Pieces",
        movieRunningLanguage: ["Tamil","Hinid","Telegu"],
        moviePoster: "assets/onepiece.jpg",
        newRelease: true,
        releaseDate: "Fri Sept 14",
        likesCount: 10,
        genre: "Drama",
        language: 'Tamil'
    },
    {
        id: 5,
        movieName: "One Pieces",
        movieRunningLanguage: ["Tamil","Hinid","Telegu"],
        moviePoster: "assets/leo.jpg",
        newRelease: false,
        releaseDate: "Fri Sept 14",
        likesCount: 40,
        genre: "Drama",
        language: 'Tamil'
    },
    {
        id: 6,
        movieName: "One Pieces",
        movieRunningLanguage: ["Tamil","Hinid","Telegu"],
        moviePoster: "assets/onepiece.jpg",
        newRelease: true,
        releaseDate: "Fri Nov 20",
        likesCount: 30,
        genre: "Drama",
        language: 'Tamil'
    },
    {
        id: 7,
        movieName: "One Pieces",
        movieRunningLanguage: ["Tamil","Hinid","Telegu"],
        moviePoster: "assets/onepiece.jpg",
        newRelease: true,
        releaseDate: "Fri Sept 14",
        likesCount: 30,
        genre: "Drama",
        language: 'Tamil'
    },
    {
        id: 8,
        movieName: "One Pieces",
        movieRunningLanguage: ["Tamil","Hinid","Telegu"],
        moviePoster: "assets/onepiece.jpg",
        newRelease: true,
        releaseDate: "Fri Sept 14",
        likesCount: 30,
        genre: "Drama",
        language: 'Tamil'
    },
    
];