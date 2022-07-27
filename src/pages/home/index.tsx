// @ts-ignore
import React, { useEffect, useState } from 'react';
import CustomAppBar from "../../components/CustomAppBar";

import server from '../../api/server';
import PostCard from '../../components/PostCard';
import { Divider } from '@mui/material';
import {Post} from '../../Models/post'

const Home = () => {
    const token = localStorage.getItem('acessToken');
    // @ts-ignore
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await server.get('/feed', {
                    headers: {
                        authorization: `Bearer ${token}`,
                    }
                });
                setPosts(response.data);
            }
            catch (err) {
                console.log(err);
            }
            getPosts();
        }
    }, [token]);
    return (
        <div>
            <CustomAppBar title='Home' />
            <h1 style={{ marginTop: '50px' }}>Feed</h1>
            <div style={{marginTop: '24px'}}>
                {posts.map((post: any) => {
                    return (
                        <div key={post._id}>
                            <PostCard post={post} />
                            <Divider />
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default Home;

function useState(arg0: string): [any, any] {
    throw new Error('Function not implemented.');
}
