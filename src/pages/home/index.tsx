import React, { useEffect, useState } from 'react';
import CustomAppBar from "../../components/CustomAppBar";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';

import server from '../../api/server';
import PostCard from '../../components/PostCard';
import { Divider } from '@mui/material';
import { Post } from '../../Models/post'

const Home = () => {
    const token = localStorage.getItem('acessToken');    
    const [posts, setPosts] = useState<Post[]>([]);    
    const [page, setpage] = useState<number>(0);
    const [hasMore, setHasMore]  = useState(true);

    useEffect(() => {
        
        const getPosts = async () => {
            try {
                const response = await server.get(`/feed?page=${page}`, {
                    headers: {
                        authorization: `Bearer ${token}`,
                    }
                });
                setHasMore(response.data.length > 0);
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
    };
    const navigate = useNavigate();
    const handlePostClick = (postId: string) => {
        navigate(`posts/${postId}`);
    };

    return (
        <div>
            <CustomAppBar title='Home' />
            <div style={{ marginTop: '24px' }}>
                <InfiniteScroll
                    dataLength={posts.length}
                    next={loadMorePosts}
                    hasMore={hasMore}
                    loader={<h4>...loading...</h4>}
                >
                    {posts &&
                        posts.map((post: any) => {
                            return (
                                <div key={post._id}>
                                    <PostCard post={post} handlePostClick={handlePostClick} />
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


