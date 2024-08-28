import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Section from '../Section/Section';

const NewAlbum = () => {
    const [newAlbums, setNewAlbums] = useState([]);

    useEffect(() => {
        const fetchNewAlbums = async () => {
            try {
                const response = await axios.get('https://qtify-backend-labs.crio.do/albums/new');
                setNewAlbums(response.data);
            } catch (error) {
                console.error('Error fetching top albums:', error);
            }
        };

        fetchNewAlbums();
    }, []);

    return (
        <Section albums= {newAlbums} title="New Album"/>
    );
}

export default NewAlbum;