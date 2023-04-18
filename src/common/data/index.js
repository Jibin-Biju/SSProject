export const posts = [
    {
        _id: "611bca63d17e9d3440d7f8e2",
        author: { name: "John Doe", _id: "611bca63d17e9d3440d7f8e3", image: "https://dummyimage.com/200x200/000/fff" },
        Title: "Tips for Building a Successful Mobile App",
        Body: "<p>If you're thinking about developing a mobile app...</p>", tags: ["mobile development", "app development", "user experience"],
        Comments: [
            {
               
                text: "Great article! I learned a lot from your tips.",
                author: {
                    name: "Jane Smith",
                    _id: "611bca63d17e9d3440d7f8e4",
                    image: "https://dummyimage.com/200x200/000/fff"
                }
            },
            {
             
                text: "Thanks for sharing your expertise. I will definitely try out your tips.",
                author: {
                    name: "Bob Johnson",
                    _id: "611bca63d17e9d3440d7f8e5",
                    image: "https://dummyimage.com/200x200/000/fff"
                }
            }
        ],
        likes: 25
    },
    {
        _id: "611bca63d17e9d3440d7f8e6",
        author: {
            name: "Sarah Lee",
            _id: "611bca63d17e9d3440d7f8e7",
            image: "https://dummyimage.com/200x200/000/fff"
        },
        Title: "5 Effective Strategies for Boosting Your Productivity",
        Body: "<p>Do you struggle to stay focused and get things done...</p>",
        tags: ["productivity", "time management", "self-improvement"],
        Comments: [
            {
                
                text: "Great post! I found your tips very helpful.",
                author: {
                    name: "David Lee",
                    _id: "611bca63d17e9d3440d7f8e8",
                    image: "https://dummyimage.com/200x200/000/fff"
                }
            },
            {
                
                text: "Thanks for sharing your strategies. I will definitely try them out.",
                author: {
                    name: "Jennifer Lee",
                    _id: "611bca63d17e9d3440d7f8e9",
                    image: "https://dummyimage.com/200x200/000/fff"
                }
            }
        ],
        likes: 42
    },
    {
        _id: "611bca63d17e9d3440d7f8e2",
        author: { name: "John Doe", _id: "611bca63d17e9d3440d7f8e3", image: "https://dummyimage.com/200x200/000/fff" },
        Title: "Tips for Building a Successful Mobile App",
        Body: "<p>If you're thinking about developing a mobile app...</p>", tags: ["mobile development", "app development", "user experience"],
        Comments: [
            {
                
                Body: "Great article! I learned a lot from your tips.",
                author: {
                    name: "Jane Smith",
                    _id: "611bca63d17e9d3440d7f8e4",
                    image: "https://dummyimage.com/200x200/000/fff"
                }
            },
            {
                
                Body: "Thanks for sharing your expertise. I will definitely try out your tips.",
                author: {
                    name: "Bob Johnson",
                    _id: "611bca63d17e9d3440d7f8e5",
                    image: "https://dummyimage.com/200x200/000/fff"
                }
            }
        ],
        likes: 25
    },
    {
        _id: "611bca63d17e9d3440d7f8e6",
        author: {
            name: "Sarah Lee",
            _id: "611bca63d17e9d3440d7f8e7",
            image: "https://dummyimage.com/200x200/000/fff"
        },
        Title: "5 Effective Strategies for Boosting Your Productivity",
        Body: "<p>Do you struggle to stay focused and get things done...</p>",
        tags: ["productivity", "time management", "self-improvement"],
        Comments: [
            {
                
                Body: "Great post! I found your tips very helpful.",
                author: {
                    name: "David Lee",
                    _id: "611bca63d17e9d3440d7f8e8",
                    image: "https://dummyimage.com/200x200/000/fff"
                }
            },
            {
                
                text: "Thanks for sharing your strategies. I will definitely try them out.",
                author: {
                    name: "Jennifer Lee",
                    _id: "611bca63d17e9d3440d7f8e9",
                    image: "https://dummyimage.com/200x200/000/fff"
                }
            }
        ],
        likes: 42
    }
]


export const questiondetails = {
    _id: "611bca63d17e9d3440d7f8e6",
    author: {
        name: "Sarah Lee",
        _id: "611bca63d17e9d3440d7f8e7",
        image: "https://dummyimage.com/200x200/000/fff"
    },
    Title: "5 Effective Strategies for Boosting Your Productivity",
    Body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat, mauris id blandit viverra, enim elit varius mauris, vel fermentum turpis libero et diam. Nullam convallis diam sed velit feugiat, in hendrerit nulla hendrerit. Etiam vulputate felis a sollicitudin pellentesque. Sed tempor est sed odio malesuada, nec pharetra nisi mattis. Duis auctor euismod augue, id ultricies nulla vulputate vel. Donec scelerisque lectus sit amet enim vulputate tempus. Nam eget fermentum lacus. </p>",
    tags: ["productivity", "time management", "self-improvement"],
    Comments: [
        {
          
            Body: "Great post! I found your tips very helpful.",
            author: {
                name: "David Lee",
                _id: "611bca63d17e9d3440d7f8e8",
                image: "https://dummyimage.com/200x200/000/fff"
            }
        },
        {
            
            Body: "Thanks for sharing your strategies. I will definitely try them out.",
            author: {
                name: "Jennifer Lee",
                _id: "611bca63d17e9d3440d7f8e9",
                image: "https://dummyimage.com/200x200/000/fff"
            },
            reply: [
                {
                    
                    Body: "Thanks for sharing your strategies. I will definitely try them out.",
                    author: {
                        name: "Jennifer Lee",
                        _id: "611bca63d17e9d3440d7f8e9",
                        image: "https://dummyimage.com/200x200/000/fff"
                    }
                }
            ]
        }
    ],
    likes: 42
}