import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Feed from '../Feed/Feed';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
import UserTreinos from './UserTreinos';
import UserPhotos from './UserPhotos';
import styles from './User.module.css';
import UserHeaderNav from './UserHeaderNav';

const User = () => {
  return (
    <section className={`${styles.user} container`}>
      <div className={styles.form}>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/fotos" element={<UserPhotos />} />
          <Route path="postar" element={<UserPhotoPost />} />
          <Route path="estatisticas" element={<UserStats />} />
          <Route path="treinos" element={<UserTreinos />} />
        </Routes>
      </div>
      <div className={styles.toolbar}>
        <UserHeaderNav />
      </div>
    </section>
  );
};

export default User;
