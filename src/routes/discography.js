const express = require('express');
const router = express.Router();

const albums = {
  recent: [
    {
      id: "okjaanu2017",
      title: "OK Jaanu (2017)",
      url: "https://open.spotify.com/album/2QWIScpFDJp5e5YwqaENYl",
      youtube: "https://www.youtube.com/playlist?list=PLV7B5F6F7C7E1A1E4",
      appleMusic: "https://music.apple.com/in/album/ok-jaanu-original-motion-picture-soundtrack/1188250403",
      wikipedia: "https://en.wikipedia.org/wiki/OK_Jaanu",
      awards: [],
      leadActors: ["Aditya Roy Kapur", "Shraddha Kapoor"],
      lyricists: ["Gulzar"],
      singers: ["Arijit Singh", "Jonita Gandhi", "Shashaa Tirupati"],
      label: "Sony Music India"
    },
    {
      id: "mom2017",
      title: "Mom (2017)",
      url: "https://open.spotify.com/album/6v7r3aMc2SGIN1qNbfXDnI",
      youtube: "https://www.youtube.com/playlist?list=PLV7B5F6F7C7E1A1E5",
      appleMusic: "https://music.apple.com/in/album/mom-original-motion-picture-soundtrack/1256461432",
      wikipedia: "https://en.wikipedia.org/wiki/Mom_(2017_film)",
      awards: [],
      leadActors: ["Sridevi", "Nawazuddin Siddiqui", "Akshaye Khanna"],
      lyricists: ["Irshad Kamil"],
      singers: ["A. R. Rahman", "Shashaa Tirupati", "Jonita Gandhi"],
      label: "Zee Music Company"
    },
    {
      id: "rockstar2011",
      title: "Rockstar (2011)",
      url: "https://open.spotify.com/album/0QeI79sp1v5I549kgCIZuB",
      youtube: "https://www.youtube.com/playlist?list=PLV7B5F6F7C7E1A1E6",
      appleMusic: "https://music.apple.com/in/album/rockstar-original-motion-picture-soundtrack/474435701",
      wikipedia: "https://en.wikipedia.org/wiki/Rockstar_(2011_film)",
      awards: ["Filmfare Award for Best Music Director", "IIFA Award for Best Music Director"],
      leadActors: ["Ranbir Kapoor", "Nargis Fakhri"],
      lyricists: ["Irshad Kamil"],
      singers: ["Mohit Chauhan", "Harshdeep Kaur", "A. R. Rahman"],
      label: "T-Series"
    },
    {
      id: "raavan2010",
      title: "Raavan (2010)",
      url: "https://open.spotify.com/album/2v3zRr7hP6hN9F6nQwD6eG",
      youtube: "https://www.youtube.com/playlist?list=PLV7B5F6F7C7E1A1E7",
      appleMusic: "https://music.apple.com/in/album/raavan-original-motion-picture-soundtrack/372210282",
      wikipedia: "https://en.wikipedia.org/wiki/Raavan_(2010_film)",
      awards: [],
      leadActors: ["Abhishek Bachchan", "Aishwarya Rai Bachchan"],
      lyricists: ["Gulzar"],
      singers: ["A. R. Rahman", "Reena Bhardwaj", "Karthik"],
      label: "T-Series"
    },
    {
      id: "127hours2010",
      title: "127 Hours (2010)",
      url: "https://open.spotify.com/album/5vBpIxm1o5bK0ZgkYkq7vQ",
      youtube: "https://www.youtube.com/playlist?list=PLV7B5F6F7C7E1A1E8",
      appleMusic: "https://music.apple.com/in/album/127-hours-music-from-the-motion-picture/400835502",
      wikipedia: "https://en.wikipedia.org/wiki/127_Hours",
      awards: ["Academy Award Nomination for Best Original Score", "Golden Globe Nomination for Best Original Score"],
      leadActors: ["James Franco"],
      lyricists: ["A. R. Rahman"],
      singers: ["Dido", "A. R. Rahman"],
      label: "Interscope Records"
    }
  ],
  hindi: [
    {
      id: "rojahindi1992",
      title: "Roja (Hindi, 1992)",
      url: "https://open.spotify.com/album/1ZGi5uQhQeFk6e7iT730cd",
      youtube: "https://www.youtube.com/playlist?list=PLV7B5F6F7C7E1A1E9",
      appleMusic: "https://music.apple.com/in/album/roja-hindi/1440827472",
      wikipedia: "https://en.wikipedia.org/wiki/Roja_(soundtrack)",
      awards: ["National Film Award for Best Music Direction"],
      leadActors: ["Arvind Swamy", "Madhoo"],
      lyricists: ["P. K. Mishra"],
      singers: ["Hariharan", "S. P. Balasubrahmanyam", "K. S. Chithra"],
      label: "Sony Music India"
    },
    {
      id: "bombayhindi1995",
      title: "Bombay (Hindi, 1995)",
      url: "https://open.spotify.com/album/6Qn6eI2GJpF6v0x5Yucs5D",
      youtube: "https://www.youtube.com/playlist?list=PLV7B5F6F7C7E1A1EA",
      appleMusic: "https://music.apple.com/in/album/bombay-hindi/1440827473",
      wikipedia: "https://en.wikipedia.org/wiki/Bombay_(soundtrack)",
      awards: ["Filmfare Award for Best Music Director"],
      leadActors: ["Arvind Swamy", "Manisha Koirala"],
      lyricists: ["Mehboob"],
      singers: ["Hariharan", "K. S. Chithra", "Kavita Krishnamurthy"],
      label: "Magnasound"
    },
    {
      id: "rangeela1995",
      title: "Rangeela (1995)",
      url: "https://open.spotify.com/album/3QyQn2ATqNnSxPbbGr3HdWu3",
      youtube: "https://www.youtube.com/playlist?list=PLV7B5F6F7C7E1A1EB",
      appleMusic: "https://music.apple.com/in/album/rangeela/1440827474",
      wikipedia: "https://en.wikipedia.org/wiki/Rangeela_(soundtrack)",
      awards: ["Filmfare Award for Best Music Director"],
      leadActors: ["Aamir Khan", "Urmila Matondkar", "Jackie Shroff"],
      lyricists: ["Mehboob"],
      singers: ["Asha Bhosle", "Hariharan", "Shweta Shetty"],
      label: "Tips"
    },
    {
      id: "taal1999",
      title: "Taal (1999)",
      url: "https://open.spotify.com/album/3QyQn2ATqNnSxPbbGr3HdWu",
      youtube: "https://www.youtube.com/playlist?list=PLV7B5F6F7C7E1A1EC",
      appleMusic: "https://music.apple.com/in/album/taal/1440827475",
      wikipedia: "https://en.wikipedia.org/wiki/Taal_(soundtrack)",
      awards: ["Filmfare Award for Best Music Director"],
      leadActors: ["Anil Kapoor", "Aishwarya Rai Bachchan", "Akshaye Khanna"],
      lyricists: ["Anand Bakshi"],
      singers: ["Alka Yagnik", "Udit Narayan", "Hariharan"],
      label: "T-Series"
    },
    {
      id: "lagaan2001",
      title: "Lagaan (2001)",
      url: "https://open.spotify.com/album/3QyQn2ATqNnSxPbbGr3HdWu",
      youtube: "https://www.youtube.com/playlist?list=PLV7B5F6F7C7E1A1ED",
      appleMusic: "https://music.apple.com/in/album/lagaan/1440827476",
      wikipedia: "https://en.wikipedia.org/wiki/Lagaan_(soundtrack)",
      awards: ["Academy Award Nomination for Best Original Score", "Filmfare Award for Best Music Director"],
      leadActors: ["Aamir Khan", "Gracy Singh"],
      lyricists: ["Javed Akhtar"],
      singers: ["Udit Narayan", "Alka Yagnik", "Sukhwinder Singh"],
      label: "Sony Music India"
    },
    {
      id: "guru2007",
      title: "Guru (2007)",
      url: "https://open.spotify.com/album/2QWIScpFDJp5e5YwqaENYl",
      youtube: "https://www.youtube.com/playlist?list=PLV7B5F6F7C7E1A1EE",
      appleMusic: "https://music.apple.com/in/album/guru/1440827477",
      wikipedia: "https://en.wikipedia.org/wiki/Guru_(soundtrack)",
      awards: ["Filmfare Award for Best Music Director"],
      leadActors: ["Abhishek Bachchan", "Aishwarya Rai Bachchan"],
      lyricists: ["Gulzar"],
      singers: ["Shreya Ghoshal", "Hariharan", "Sukhwinder Singh"],
      label: "Sony Music India"
    },
    {
      id: "delhi62009",
      title: "Delhi-6 (2009)",
      url: "https://open.spotify.com/album/0QeI79sp1v5I549kgCIZuB",
      youtube: "https://www.youtube.com/playlist?list=PLV7B5F6F7C7E1A1EF",
      appleMusic: "https://music.apple.com/in/album/delhi-6/1440827478",
      wikipedia: "https://en.wikipedia.org/wiki/Delhi-6_(soundtrack)",
      awards: ["Filmfare Award for Best Music Director"],
      leadActors: ["Abhishek Bachchan", "Sonam Kapoor"],
      lyricists: ["Prasoon Joshi"],
      singers: ["Mohit Chauhan", "Shreya Ghoshal", "Rekha Bhardwaj"],
      label: "T-Series"
    },
    {
      id: "jodhaaakbar2008",
      title: "Jodhaa Akbar (2008)",
      url: "https://open.spotify.com/album/6Qn6eI2GJpF6v0x5Yucs5D",
      youtube: "https://www.youtube.com/playlist?list=PLV7B5F6F7C7E1A1EG",
      appleMusic: "https://music.apple.com/in/album/jodhaa-akbar/1440827479",
      wikipedia: "https://en.wikipedia.org/wiki/Jodhaa_Akbar_(soundtrack)",
      awards: ["Filmfare Award for Best Music Director"],
      leadActors: ["Hrithik Roshan", "Aishwarya Rai Bachchan"],
      lyricists: ["Javed Akhtar"],
      singers: ["Javed Ali", "Sonu Nigam", "A. R. Rahman"],
      label: "UTV Music"
    }
  ],
  tamil: [
    {
      id: "roja1992",
      title: "Roja (1992)",
      url: "https://open.spotify.com/album/1ZGi5uQhQeFk6e7iT730cd",
      youtube: "https://www.youtube.com/playlist?list=PLV7B5F6F7C7E1A1EH",
      appleMusic: "https://music.apple.com/in/album/roja-tamil/1440827480",
      wikipedia: "https://en.wikipedia.org/wiki/Roja_(soundtrack)",
      awards: ["National Film Award for Best Music Direction"],
      leadActors: ["Arvind Swamy", "Madhoo"],
      lyricists: ["Vairamuthu"],
      singers: ["S. P. Balasubrahmanyam", "K. S. Chithra"],
      label: "Sony Music India"
    },
    {
      id: "gentleman1993",
      title: "Gentleman (1993)",
      url: "https://open.spotify.com/album/1wYgkYyqSCDtnznuaCG2KC",
      youtube: "https://www.youtube.com/playlist?list=PLV7B5F6F7C7E1A1EI",
      appleMusic: "https://music.apple.com/in/album/gentleman/1440827481",
      wikipedia: "https://en.wikipedia.org/wiki/Gentleman_(soundtrack)",
      awards: ["Filmfare Award for Best Music Director – Tamil"],
      leadActors: ["Arjun Sarja", "Madhubala"],
      lyricists: ["Vairamuthu"],
      singers: ["S. P. Balasubrahmanyam", "Mano", "K. S. Chithra"],
      label: "Lahari Music"
    },
    {
      id: "bombay1995",
      title: "Bombay (1995)",
      url: "https://open.spotify.com/album/6Qn6eI2GJpF6v0x5Yucs5D",
      youtube: "https://www.youtube.com/playlist?list=PLV7B5F6F7C7E1A1EJ",
      appleMusic: "https://music.apple.com/in/album/bombay-tamil/1440827482",
      wikipedia: "https://en.wikipedia.org/wiki/Bombay_(soundtrack)",
      awards: ["Filmfare Award for Best Music Director – Tamil"],
      leadActors: ["Arvind Swamy", "Manisha Koirala"],
      lyricists: ["Vairamuthu"],
      singers: ["Hariharan", "K. S. Chithra", "Kavita Krishnamurthy"],
      label: "Magnasound"
    },
    {
      id: "jeans1998",
      title: "Jeans (1998)",
      url: "https://open.spotify.com/album/0w8VnXW0fvkYlCYwH14r2S",
      youtube: "https://www.youtube.com/playlist?list=PLV7B5F6F7C7E1A1EK",
      appleMusic: "https://music.apple.com/in/album/jeans/1440827483",
      wikipedia: "https://en.wikipedia.org/wiki/Jeans_(soundtrack)",
      awards: ["Filmfare Award for Best Music Director – Tamil"],
      leadActors: ["Prashanth", "Aishwarya Rai Bachchan"],
      lyricists: ["Vairamuthu"],
      singers: ["Nithyasree Mahadevan", "Hariharan", "S. P. Balasubrahmanyam"],
      label: "An Ak Audio"
    },
    {
      id: "alaipayuthey2000",
      title: "Alaipayuthey (2000)",
      url: "https://open.spotify.com/album/6nVbQxkQwZ5qX6Ch12HaxJ",
      youtube: "https://www.youtube.com/playlist?list=PLV7B5F6F7C7E1A1EL",
      appleMusic: "https://music.apple.com/in/album/alaipayuthey/1440827484",
      wikipedia: "https://en.wikipedia.org/wiki/Alaipayuthey_(soundtrack)",
      awards: ["Filmfare Award for Best Music Director – Tamil"],
      leadActors: ["R. Madhavan", "Shalini"],
      lyricists: ["Vairamuthu"],
      singers: ["Hariharan", "Sadhana Sargam", "Karthik"],
      label: "Sony Music India"
    },
    {
      id: "kandukondain2000",
      title: "Kandukondain Kandukondain (2000)",
      url: "https://open.spotify.com/album/2wQ4R2tQeMgsQUK91tILbp",
      youtube: "https://www.youtube.com/playlist?list=PLV7B5F6F7C7E1A1EM",
      appleMusic: "https://music.apple.com/in/album/kandukondain-kandukondain/1440827485",
      wikipedia: "https://en.wikipedia.org/wiki/Kandukondain_Kandukondain_(soundtrack)",
      awards: ["Filmfare Award for Best Music Director – Tamil"],
      leadActors: ["Mammootty", "Ajith Kumar", "Tabu", "Aishwarya Rai Bachchan"],
      lyricists: ["Vairamuthu"],
      singers: ["Shankar Mahadevan", "K. S. Chithra", "Hariharan"],
      label: "An Ak Audio"
    },
    {
      id: "sivaji2007",
      title: "Sivaji (2007)",
      url: "https://open.spotify.com/album/5kQ7cH9vDOMkMt2rt7NmBG",
      youtube: "https://www.youtube.com/playlist?list=PLV7B5F6F7C7E1A1EN",
      appleMusic: "https://music.apple.com/in/album/sivaji/1440827486",
      wikipedia: "https://en.wikipedia.org/wiki/Sivaji_(soundtrack)",
      awards: ["Filmfare Award for Best Music Director – Tamil"],
      leadActors: ["Rajinikanth", "Shriya Saran"],
      lyricists: ["Vairamuthu"],
      singers: ["S. P. Balasubrahmanyam", "Hariharan", "Udit Narayan"],
      label: "AVM Audio"
    }
  ],
    movies: [
    {
      id: "slumdog2008",
      title: "Slumdog Millionaire (2008)",
      url: "https://open.spotify.com/album/3QyQn2ATqNnSxPbbGr3HdWu",
      youtube: "https://www.youtube.com/playlist?list=PLV7B5F6F7C7E1A1EO",
      appleMusic: "https://music.apple.com/in/album/slumdog-millionaire-music-from-the-motion-picture/303702743",
      wikipedia: "https://en.wikipedia.org/wiki/Slumdog_Millionaire_(soundtrack)",
      awards: ["Academy Award for Best Original Score", "Golden Globe Award for Best Original Score", "BAFTA Award for Best Film Music"],
      leadActors: ["Dev Patel", "Freida Pinto"],
      lyricists: ["Gulzar"],
      singers: ["Sukhwinder Singh", "M.I.A.", "A. R. Rahman"],
      label: "Interscope Records"
    },
    {
      id: "127hours2010movie",
      title: "127 Hours (2010)",
      url: "https://open.spotify.com/album/5vBpIxm1o5bK0ZgkYkq7vQ",
      youtube: "https://www.youtube.com/playlist?list=PLV7B5F6F7C7E1A1EP",
      appleMusic: "https://music.apple.com/in/album/127-hours-music-from-the-motion-picture/400835502",
      wikipedia: "https://en.wikipedia.org/wiki/127_Hours:_Music_from_the_Motion_Picture",
      awards: ["Academy Award Nomination for Best Original Score", "Golden Globe Nomination for Best Original Score"],
      leadActors: ["James Franco"],
      lyricists: ["A. R. Rahman"],
      singers: ["Dido", "A. R. Rahman"],
      label: "Interscope Records"
    },
    {
      id: "raavan2010movie",
      title: "Raavan (2010)",
      url: "https://open.spotify.com/album/2v3zRr7hP6hN9F6nQwD6eG",
      youtube: "https://www.youtube.com/playlist?list=PLV7B5F6F7C7E1A1EQ",
      appleMusic: "https://music.apple.com/in/album/raavan-original-motion-picture-soundtrack/372210282",
      wikipedia: "https://en.wikipedia.org/wiki/Raavan_(soundtrack)",
      awards: [],
      leadActors: ["Abhishek Bachchan", "Aishwarya Rai Bachchan"],
      lyricists: ["Gulzar"],
      singers: ["A. R. Rahman", "Reena Bhardwaj", "Karthik"],
      label: "T-Series"
    },
    {
      id: "rockstar2011movie",
      title: "Rockstar (2011)",
      url: "https://open.spotify.com/album/0QeI79sp1v5I549kgCIZuB",
      youtube: "https://www.youtube.com/playlist?list=PLV7B5F6F7C7E1A1ER",
      appleMusic: "https://music.apple.com/in/album/rockstar-original-motion-picture-soundtrack/474435701",
      wikipedia: "https://en.wikipedia.org/wiki/Rockstar_(soundtrack)",
      awards: ["Filmfare Award for Best Music Director", "IIFA Award for Best Music Director"],
      leadActors: ["Ranbir Kapoor", "Nargis Fakhri"],
      lyricists: ["Irshad Kamil"],
      singers: ["Mohit Chauhan", "Harshdeep Kaur", "A. R. Rahman"],
      label: "T-Series"
    },
    {
      id: "okjaanu2017movie",
      title: "OK Jaanu (2017)",
      url: "https://open.spotify.com/album/2QWIScpFDJp5e5YwqaENYl",
      youtube: "https://www.youtube.com/playlist?list=PLV7B5F6F7C7E1A1ES",
      appleMusic: "https://music.apple.com/in/album/ok-jaanu-original-motion-picture-soundtrack/1188250403",
      wikipedia: "https://en.wikipedia.org/wiki/OK_Jaanu",
      awards: [],
      leadActors: ["Aditya Roy Kapur", "Shraddha Kapoor"],
      lyricists: ["Gulzar"],
      singers: ["Arijit Singh", "Jonita Gandhi", "Shashaa Tirupati"],
      label: "Sony Music India"
    },
    {
      id: "mom2017movie",
      title: "Mom (2017)",
      url: "https://open.spotify.com/album/6v7r3aMc2SGIN1qNbfXDnI",
      youtube: "https://www.youtube.com/playlist?list=PLV7B5F6F7C7E1A1ET",
      appleMusic: "https://music.apple.com/in/album/mom-original-motion-picture-soundtrack/1256461432",
      wikipedia: "https://en.wikipedia.org/wiki/Mom_(2017_film)",
      awards: [],
      leadActors: ["Sridevi", "Nawazuddin Siddiqui", "Akshaye Khanna"],
      lyricists: ["Irshad Kamil"],
      singers: ["A. R. Rahman", "Shashaa Tirupati", "Jonita Gandhi"],
      label: "Zee Music Company"
    }
  ],
  independent: [
    {
      id: "vandemataram1997",
      title: "Vande Mataram (1997)",
      url: "https://open.spotify.com/album/3QyQn2ATqNnSxPbbGr3HdWu",
      youtube: "https://www.youtube.com/playlist?list=PLV7B5F6F7C7E1A1EU",
      appleMusic: "https://music.apple.com/in/album/vande-mataram/1440827490",
      wikipedia: "https://en.wikipedia.org/wiki/Vande_Mataram_(album)",
      awards: ["Screen Award for Best Non-Film Album"],
      leadActors: [],
      lyricists: ["Mehboob"],
      singers: ["A. R. Rahman", "Sukhwinder Singh"],
      label: "Sony Music India"
    },
    {
      id: "janaganamana2000",
      title: "Jana Gana Mana (2000)",
      url: "https://open.spotify.com/album/3QyQn2ATqNnSxPbbGr3HdWu",
      youtube: "https://www.youtube.com/playlist?list=PLV7B5F6F7C7E1A1EV",
      appleMusic: "https://music.apple.com/in/album/jana-gana-mana/1440827491",
      wikipedia: "https://en.wikipedia.org/wiki/Jana_Gana_Mana_(album)",
      awards: [],
      leadActors: [],
      lyricists: ["Various"],
      singers: ["A. R. Rahman", "Various Artists"],
      label: "Sony Music India"
    },
    {
      id: "connections2008",
      title: "Connections (2008)",
      url: "https://open.spotify.com/album/3QyQn2ATqNnSxPbbGr3HdWu",
      youtube: "https://www.youtube.com/playlist?list=PLV7B5F6F7C7E1A1EW",
      appleMusic: "https://music.apple.com/in/album/connections/1440827492",
      wikipedia: "https://en.wikipedia.org/wiki/Connections_(A._R._Rahman_album)",
      awards: [],
      leadActors: [],
      lyricists: ["Various"],
      singers: ["A. R. Rahman", "Various Artists"],
      label: "Sony Music India"
    }
  ]
};

router.get('/', (req, res) => {
  res.render('discography', { albums });
});

module.exports = router; 
module.exports.albums = albums;