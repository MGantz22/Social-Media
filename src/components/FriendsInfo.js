import React from "react";
import NewFriend from './NewFriend';

const mainFriendsFriendsInfo = [
  {
    name: 'Albert E.',
    img: 'https://cdn.mos.cms.futurecdn.net/W2xQZxs7T2gUE2fMbUv4s6.jpg'
  },
  {
    name: 'Bill G.',
    img: 'https://ted-conferences-speaker-photos-production.s3.amazonaws.com/yoa4pm3vyerco6hqbhjxly3bf41d'
  },
  {
    name: 'Steve J.',
    img: 'https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F1s24tuU1dL9Vymh2Cjbb5w%2Fece71dc0300d0a5e8b8edef1ee1c96b4%2Fsteve-jobs.jpg?ixlib=gatsbySourceUrl-2.1.1&auto=format%2C%20compress&w=562&h=315&s=a81c03d8ec8196a11cd13b55f161ff3c'
  },
];

function FriendsInfo(){
  return (
    <React.Fragment>
      <hr/>
      {mainFriendsFriendsInfo.map((newFriend, index) => (
        <NewFriend name={newFriend.name}
          img={newFriend.img}
          key={index}/>
      ))}
    </React.Fragment>
  );
}

export default FriendsInfo;