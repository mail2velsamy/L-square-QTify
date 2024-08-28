import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardComponent from '../Card/CardComponent';
import styles from './Section.module.css';

const Section = () => {
    const [albums, setAlbums] = useState([]);
    const [collapsed, setCollapsed] = useState(false);

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

    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className={styles.section}>
            <div className={styles.header}>
                <h2>Top Albums</h2>
                <button onClick={toggleCollapse} className={styles.collapseButton}>
                    {collapsed ? 'Expand' : 'Collapse'}
                </button>
            </div>
            <div className={`${styles.grid} ${collapsed ? styles.collapsed : ''}`}>
                {albums.map((album) => (
                    <CardComponent key={album.id} album={album} />
                ))}
            </div>
        </div>
    );
};

export default Section;
