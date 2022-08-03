import React, { useEffect, useState } from 'react';
import { Paper, Stack, CardHeader, Divider, Typography, CardContent, Button } from '@mui/material';
import CustomAppBar from "../../components/CustomAppBar";
import server from '../../api/server';
import CustomAvatar from '../../components/CustomAvatar/index'
import { servicesVersion } from 'typescript';

interface Profile {
    _id: string;
    name: string;
    following: string[];
    followers: string[];
}

const Profiles = () => {
    const [profiles, setProfiles] = useState<Profile[]>();
    const token = localStorage.getItem('acessToken');
    const actualProfileId = localStorage.getItem('profile');

    useEffect(() => {
        const getProfiles = async () => {
            try {
                const response = await server.get("/profiles", {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setProfiles(response.data);
            }
            catch (err) {
                console.log(err);
            }
        }
        getProfiles();
    }, [token]);

    const handleFollow = async (id: string) => {
        try {
            await server.post(`/profiles/${id}/follow`, null, { 
                headers: { Authorization: `Bearer ${token}` } 
            });
            
            const newProfiles = profiles?.map((profile) => {
                if(profile._id === id){
                    return {
                        ...profile,
                        followers: [...profile.followers, id]
                    }
                } else if(profile._id === actualProfileId) {
                    return {
                        ...profile,
                        following: [...profile.following, actualProfileId]
                    }
                } else{
                    return profile;
                }                
            });
            setProfiles(newProfiles);
        } catch (err) {
            console.log(err);
        } 
    };

    

    return (
        <div>
            <CustomAppBar title='profiles' />
            <h1 style={{ marginTop: '50px' }}>Profiles</h1>
            <Stack
                direction='column'
                justifyContent='center'
                alignItems='strech'
                spacing={2}
            >

            </Stack>
            {profiles?.map((profile) => (
                <div key={profile._id}>
                    <Paper elevation={0}>
                        <CardHeader
                            avatar={<CustomAvatar profileName={profile.name} />}
                            title={profile.name}
                        />
                    </Paper>
                    <CardContent>
                        <Stack spacing={1}>
                            <Typography variant='body2' color='text.secondary'>
                                {profile.followers.length} Seguidores
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                                {profile.following.length} Seguindo
                            </Typography>
                            <div style={{ 
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                            }}>
                                <Button variant='contained' onClick={() => handleFollow(profile._id)}>Seguir</Button>
                            </div>
                        </Stack>
                    </CardContent>
                    <Divider />
                </div>
            ))};

        </div>
    )
}

export default Profiles;