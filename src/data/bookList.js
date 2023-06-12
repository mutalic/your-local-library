let bookList = [
  {
    id: 0,
    title: "Animal Farm",
    author: "George Orwell",
    image:
      "https://m.media-amazon.com/images/I/51-IWZeA-qL._SX312_BO1,204,203,200_.jpg",
    publisher: "Penguin Classics",
    lender: {
      name: "Thomas Lunsford",
      location: "Fayetteville, AR",
      recommendation:
        "This book is about a man who lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab modi ipsa doloribus expedita culpa. Fugit eius praesentium veniam nisi. lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab modi ipsa doloribus expedita culpa. Fugit eius praesentium veniam nisi.",
    },
    availability: true,
    deposit: 0,
  },
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image:
      "https://m.media-amazon.com/images/I/41NssxNlPlS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    publisher: "The Original 1925 Edition",
    lender: {
      name: "Jason Hwang",
      location: "Springdale, AR",
      recommendation:
        "This book is about a man who lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab modi ipsa doloribus expedita culpa. Fugit eius praesentium veniam nisi. lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab modi ipsa doloribus expedita culpa. Fugit eius praesentium veniam nisi.",
    },
    availability: false,
    deposit: 7,
  },
  {
    id: 2,
    title: "Great Expectations",
    author: "Charles Dickens",
    image:
      "https://m.media-amazon.com/images/I/51i0v6yD7aL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    publisher: "Penguin Clothbound Classics",
    lender: {
      name: "Emily Davis",
      location: "Tonitown, AR",
      recommendation:
        "This book is about a man who lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab modi ipsa doloribus expedita culpa. Fugit eius praesentium veniam nisi. lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab modi ipsa doloribus expedita culpa. Fugit eius praesentium veniam nisi.",
    },
    availability: true,
    deposit: 4,
  },
  {
    id: 3,
    title: "Frankenstein",
    author: "Mary Shelly",
    image:
      "https://m.media-amazon.com/images/I/41U8yWrDwZL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    publisher: "Penguin Clothbound Classics",
    lender: {
      name: "Zack White",
      location: "Fayetteville, AR",
      recommendation:
        "This book is about a man who lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab modi ipsa doloribus expedita culpa. Fugit eius praesentium veniam nisi. lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab modi ipsa doloribus expedita culpa. Fugit eius praesentium veniam nisi.",
    },
    availability: true,
    deposit: 10,
  },
  {
    id: 4,
    title: "Wuthering Heights",
    author: "Emily Bronte",
    image:
      "https://m.media-amazon.com/images/I/51xUzDnJeAL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    publisher: "Independantly Published",
    lender: {
      name: "Zoe Reif",
      location: "Rogers, AR",
      recommendation:
        "This book is about a man who lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab modi ipsa doloribus expedita culpa. Fugit eius praesentium veniam nisi. lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab modi ipsa doloribus expedita culpa. Fugit eius praesentium veniam nisi.",
    },
    availability: true,
    deposit: 0,
  },
  {
    id: 5,
    title: "Moby Dick",
    author: "Herman Melville",
    image:
      "https://m.media-amazon.com/images/I/41NG9esW3CL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    publisher: "Macmillan Collector's Library",
    lender: {
      name: "Patrick Graham",
      location: "Rogers, AR",
      recommendation:
        "This book is about a man who lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab modi ipsa doloribus expedita culpa. Fugit eius praesentium veniam nisi. lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab modi ipsa doloribus expedita culpa. Fugit eius praesentium veniam nisi.",
    },
    availability: false,
    deposit: 20,
  },
  {
    id: 6,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image:
      "https://m.media-amazon.com/images/I/413V3sIKSJL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    publisher: "Houghton Mifflin Harcourt",
    lender: {
      name: "Aidan Brennan",
      location: "Fayetteville, AR",
      recommendation:
        "This book is about a man who lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab modi ipsa doloribus expedita culpa. Fugit eius praesentium veniam nisi. lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab modi ipsa doloribus expedita culpa. Fugit eius praesentium veniam nisi.",
    },
    availability: false,
    deposit: 0,
  },
  {
    id: 7,
    title: "The Grapes of Wrath",
    author: "John Steinbeck",
    image:
      "https://m.media-amazon.com/images/I/51QyaWppYJL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    publisher: "Viking",
    lender: {
      name: "Jason Hwang",
      location: "Springdale, AR",
      recommendation:
        "This book is about a man who lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab modi ipsa doloribus expedita culpa. Fugit eius praesentium veniam nisi. lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab modi ipsa doloribus expedita culpa. Fugit eius praesentium veniam nisi.",
    },
    availability: true,
    deposit: 30,
  },
  {
    id: 8,
    title: "Song of Solomon",
    author: "Toni Morrison",
    image:
      "https://m.media-amazon.com/images/I/414zTKD+0UL._SY344_BO1,204,203,200_.jpg",
    publisher: "Vintage",
    lender: {
      name: "Jason Hwang",
      location: "Springdale, AR",
      recommendation:
        "This book is about a man who lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab modi ipsa doloribus expedita culpa. Fugit eius praesentium veniam nisi. lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab modi ipsa doloribus expedita culpa. Fugit eius praesentium veniam nisi.",
    },
    availability: false,
    deposit: 13,
  },
  {
    id: 9,
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    image:
      "https://m.media-amazon.com/images/I/41oWDDRb2cL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    publisher: "Simon & Schuster",
    lender: {
      name: "Kath Reese",
      location: "Fayetteville, AR",
      recommendation:
        "This book is about a man who lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab modi ipsa doloribus expedita culpa. Fugit eius praesentium veniam nisi. lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab modi ipsa doloribus expedita culpa. Fugit eius praesentium veniam nisi.",
    },
    availability: true,
    deposit: 21,
  },
  {
    id: 10,
    title: "Animal Farm 2",
    author: "George Orwell",
    image:
      "https://m.media-amazon.com/images/I/51-IWZeA-qL._SX312_BO1,204,203,200_.jpg",
    publisher: "Penguin Classics",
    lender: {
      name: "Thomas Lunsford",
      location: "Fayetteville, AR",
      recommendation:
        "This book is about a man who lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab modi ipsa doloribus expedita culpa. Fugit eius praesentium veniam nisi. lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab modi ipsa doloribus expedita culpa. Fugit eius praesentium veniam nisi.",
    },
    availability: true,
    deposit: 0,
  },
  {
    id: 11,
    title: "The Great Gatsby 2",
    author: "F. Scott Fitzgerald",
    image:
      "https://m.media-amazon.com/images/I/41NssxNlPlS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    publisher: "The Original 1925 Edition",
    lender: {
      name: "Jason Hwang",
      location: "Springdale, AR",
      recommendation:
        "This book is about a man who lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab modi ipsa doloribus expedita culpa. Fugit eius praesentium veniam nisi. lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab modi ipsa doloribus expedita culpa. Fugit eius praesentium veniam nisi.",
    },
    availability: false,
    deposit: 7,
  },
  {
    id: 12,
    title: "Great Expectations 2",
    author: "Charles Dickens",
    image:
      "https://m.media-amazon.com/images/I/51i0v6yD7aL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    publisher: "Penguin Clothbound Classics",
    lender: {
      name: "Emily Davis",
      location: "Tonitown, AR",
      recommendation:
        "This book is about a man who lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab modi ipsa doloribus expedita culpa. Fugit eius praesentium veniam nisi. lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab modi ipsa doloribus expedita culpa. Fugit eius praesentium veniam nisi.",
    },
    availability: true,
    deposit: 4,
  },
  {
    id: 13,
    title: "Frankenstein 2",
    author: "Mary Shelly",
    image:
      "https://m.media-amazon.com/images/I/41U8yWrDwZL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    publisher: "Penguin Clothbound Classics",
    lender: {
      name: "Zack White",
      location: "Fayetteville, AR",
      recommendation:
        "This book is about a man who lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab modi ipsa doloribus expedita culpa. Fugit eius praesentium veniam nisi. lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab modi ipsa doloribus expedita culpa. Fugit eius praesentium veniam nisi.",
    },
    availability: true,
    deposit: 10,
  },
  {
    id: 14,
    title: "Wuthering Heights 2",
    author: "Emily Bronte",
    image:
      "https://m.media-amazon.com/images/I/51xUzDnJeAL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    publisher: "Independantly Published",
    lender: {
      name: "Zoe Reif",
      location: "Rogers, AR",
      recommendation:
        "This book is about a man who lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab modi ipsa doloribus expedita culpa. Fugit eius praesentium veniam nisi. lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab modi ipsa doloribus expedita culpa. Fugit eius praesentium veniam nisi.",
    },
    availability: true,
    deposit: 0,
  },
  {
    id: 15,
    title: "Moby Dick 2",
    author: "Herman Melville",
    image:
      "https://m.media-amazon.com/images/I/41NG9esW3CL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    publisher: "Macmillan Collector's Library",
    lender: {
      name: "Patrick Graham",
      location: "Rogers, AR",
      recommendation:
        "This book is about a man who lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab modi ipsa doloribus expedita culpa. Fugit eius praesentium veniam nisi. lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab modi ipsa doloribus expedita culpa. Fugit eius praesentium veniam nisi.",
    },
    availability: false,
    deposit: 20,
  },
  {
    id: 16,
    title: "The Hobbit 2",
    author: "J.R.R. Tolkien",
    image:
      "https://m.media-amazon.com/images/I/413V3sIKSJL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    publisher: "Houghton Mifflin Harcourt",
    lender: {
      name: "Aidan Brennan",
      location: "Fayetteville, AR",
      recommendation:
        "This book is about a man who lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab modi ipsa doloribus expedita culpa. Fugit eius praesentium veniam nisi. lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab modi ipsa doloribus expedita culpa. Fugit eius praesentium veniam nisi.",
    },
    availability: false,
    deposit: 0,
  },
  {
    id: 17,
    title: "The Grapes of Wrath 2",
    author: "John Steinbeck",
    image:
      "https://m.media-amazon.com/images/I/51QyaWppYJL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    publisher: "Viking",
    lender: {
      name: "Jason Hwang",
      location: "Springdale, AR",
      recommendation:
        "This book is about a man who lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab modi ipsa doloribus expedita culpa. Fugit eius praesentium veniam nisi. lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab modi ipsa doloribus expedita culpa. Fugit eius praesentium veniam nisi.",
    },
    availability: true,
    deposit: 30,
  },
  {
    id: 18,
    title: "Song of Solomon 2",
    author: "Toni Morrison",
    image:
      "https://m.media-amazon.com/images/I/414zTKD+0UL._SY344_BO1,204,203,200_.jpg",
    publisher: "Vintage",
    lender: {
      name: "Jason Hwang",
      location: "Springdale, AR",
      recommendation:
        "This book is about a man who lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab modi ipsa doloribus expedita culpa. Fugit eius praesentium veniam nisi. lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab modi ipsa doloribus expedita culpa. Fugit eius praesentium veniam nisi.",
    },
    availability: false,
    deposit: 13,
  },
  {
    id: 19,
    title: "Fahrenheit 451 2",
    author: "Ray Bradbury",
    image:
      "https://m.media-amazon.com/images/I/41oWDDRb2cL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    publisher: "Simon & Schuster",
    lender: {
      name: "Kath Reese",
      location: "Fayetteville, AR",
      recommendation:
        "This book is about a man who lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab modi ipsa doloribus expedita culpa. Fugit eius praesentium veniam nisi. lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab modi ipsa doloribus expedita culpa. Fugit eius praesentium veniam nisi.",
    },
    availability: true,
    deposit: 21,
  },
];

export default bookList;
