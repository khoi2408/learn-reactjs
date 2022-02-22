import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeatures.propTypes = {
    
};

function AlbumFeatures(props) {
    const albumList = [
        {
            id: 1,
            name: 'Throwback POP ROCK',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/f/b/8/5/fb85bb9e696563eb256abf971f2bbe7f.jpg',
        },
        {
            id: 2,
            name: 'HOT 100 độ XONE',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/d/5/8/2/d582da278c89465c1cc26bcc421a2914.jpg',
        },
        {
            id: 3,
            name: 'ASIA TUNE - RISING',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/b/2/2/a/b22a2e1bb18f47cb8117b3a31a14437e.jpg',
        },
        {
            id: 4,
            name: 'FILM OST - ANIMATION',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/b/f/2/6/bf264c919e774ee7bb6c3989722cc9ef.jpg',
        },
    ];
    return (
        <div>
            <h2>XONE's CORNER</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeatures;