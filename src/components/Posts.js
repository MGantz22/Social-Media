import React from "react";
import FriendStatus from './FriendStatus';


const mainPostListFriendStatus = [
    {
        name: "Denzel Denton",
        img: {
            src: "https://www.pauldowman.com/static/da996659cfa1d45c55d944445970e02b/1c72d/pair-programming.jpg",
            alt: "Denzel",
            width: "50px",
        },
        desc: "A little comic relief for everyone today, enjoy!",
        time: 2

    },
    {
        name: "Phil McProns",
        img: {
            src: "https://6448316.fs1.hubspotusercontent-na1.net/hubfs/6448316/what-computer-programming-jobs-offer-remote-work-jpg.jpeg",
            alt: "ProgrammerPhil",
            width: "50px",
        },
    desc: "My wifes view 90% of the time. #ProgrammerLife.",
    time: 5

    },
{
    name: "Max Hutchen",
        img: {
        src: "https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=675%2Cq=85%2Cwidth=1200/wp-content/uploads/clean-out-your-computer-day-1.jpg",
            alt: "Max",
                width: "50px",
    },
    desc: "I just love a little Spring Cleaning!",
        time: 10
}
];

function Posts() {
    return (
        <React.Fragment>
            <hr />
            {mainPostListFriendStatus.map((friendStatus, index) => (
                <FriendStatus name={friendStatus.name}
                    img={friendStatus.img}
                    time={friendStatus.time}
                    desc={friendStatus.desc}
                    key={index} />
            ))}
        </React.Fragment>
    );
}

export default Posts;