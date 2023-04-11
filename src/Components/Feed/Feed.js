import React from 'react';
import FeedModal from './FeedModal.js';
import FeedPhotos from './FeedPhotos.js';

const Feed = () => {
  return (
    <div className=" container mainContainer">
      <FeedModal />
      <FeedPhotos />
    </div>
  );
};

export default Feed;
