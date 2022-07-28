// @ts-ignore
import React, { useEffect, useState } from 'react';
import CustomAppBar from "../../components/CustomAppBar";
import InfiniteScroll from 'react-infinite-scroll-component';

import server from '../../api/server';
import PostCard from '../../components/PostCard';
import { Divider } from '@mui/material';
import { Post } from '../../Models/post'

const Home = () => {
    const token = localStorage.getItem('acessToken');
    // @ts-ignore
    const [posts, setPosts] = useState<Post[]>([]);
    // @ts-ignore
    const [page, setpage] = useState<number>(0)

    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await server.get(`/feed?page=${page}`, {
                    headers: {
                        authorization: `Bearer ${token}`,
                    }
                });
                setPosts([...posts, ...response.data]);
            }
            catch (err) {
                console.log(err);
            }
            getPosts();
        }
    }, [token, page]);

    const loadMorePosts = () => {
        setpage(page + 1);
    }

    return (
        <div>
            <CustomAppBar title='Home' />
            <div style={{ marginTop: '24px' }}>
                <InfiniteScroll
                    dataLength={posts.length}
                    next={() => { }}
                    hasMore={true}
                    loader={<h4>...loading...</h4>}
                >
                    {posts &&
                        posts.map((post: any) => {
                            return (
                                <div key={post._id}>
                                    <PostCard post={post} />
                                    <Divider />
                                </div>
                            )
                        })}
                </InfiniteScroll>
            </div>
        </div>
    )
}

export default Home;

function useState(arg0: string): [any, any] {
    throw new Error('Function not implemented.');
}
