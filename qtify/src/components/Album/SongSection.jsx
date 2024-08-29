import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Section from '../Section/Section';
import { Tabs, Tab } from '@mui/material';
import styles from './SongSection.module.css';

const SongSection = () => {
    const[songs,setSongs] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('all');
    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const response = await axios.get('https://qtify-backend-labs.crio.do/songs');
                setSongs(response.data);
            } catch (error) {
                console.error('Error fetching top albums:', error);
            }
        };

        
        fetchAlbums();
    }, []);

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await axios.get('https://qtify-backend-labs.crio.do/genres');

                const allGenres = [{ key: "all", label: "All" }, ...response.data.data];
                
                setGenres(allGenres);
                setSelectedGenre('all');
                console.log(`The genres are: ${JSON.stringify(allGenres)}`);
            } catch (error) {
                console.error('Error fetching genres:', error);
            }
        };
        fetchGenres();
    },[]);

    const handleGenreChange = (event, newValue) => {
        setSelectedGenre(newValue);
    };

    const filteredSongs =   selectedGenre === 'all' ? songs :
    songs.filter(song => song.genre.key === selectedGenre);


    return (
        
        <div className={styles.songSection}>
            <div className={styles.header}>
        <h4>Songs</h4>
        </div>
            <Tabs
                value={selectedGenre}
                onChange={handleGenreChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="genre tabs"
                className={styles.tabs}
            >
                {genres.map((genre) => (
                    <Tab 
                        key={genre.key} 
                        label={genre.label} 
                        value={genre.key} 
                        className={styles.tab}
                        sx={{
                            color: '#fff',
                            '&.Mui-selected': {
                                borderBottom: '2px solid #00FF00',
                            }
                        }}
                    />
                ))}
            </Tabs>
            <Section albums={filteredSongs} title="Songs" />
        </div>
    );

}

export default SongSection;