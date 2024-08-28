import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Section from '../Section/Section';

const TopAlbum = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const response = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
                setAlbums(response.data);
            } catch (error) {
                console.error('Error fetching top albums:', error);
            }
        };

        fetchAlbums();
    }, []);

    return (
        <Section albums= {albums} title="Top Album"/>
    );

}

export default TopAlbum;