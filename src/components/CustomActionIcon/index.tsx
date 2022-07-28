import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import server from '../../api/server';
import CustomFavoriteIcon from '../CustomfavoriteIcon';
import CustomChatBubbleIcon from '../CustomChatBubbleIcon';


interface Props {
    commentCount: number;
    likeCount: number;
    likes: string[];
    postId: string;
}

const CustomActionIcon = ({ commentCount, likeCount, likes, postId }: Props) => {
    const token = localStorage.getItem('acessToken');
    const profile = localStorage.get('profile') as string;
    const [liked, setLiked] = useState(false)

    useEffect(() => {
        if (likes.includes(profile)) {
            setLiked(true)
        }
    }, [profile, likes]);

    const handleLike = async () => {
        try {
            if (!liked) {
                await server.post(`/post/${postId}/like`, null, {
                    headers: {
                        authorization: `Bearer ${token}`,
                    }
                });
                setLiked(true);
            } else {
                await server.post(`/post/${postId}/unlike`, null, {
                    headers: {
                        authorization: `Bearer ${token}`,
                    }
                });

                setLiked(false);
            }

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <CustomChatBubbleIcon commentCount={commentCount} />
            <CustomFavoriteIcon handleLike={handleLike} likeCount={likeCount} liked={liked} />
        </div >

    )
}

export default CustomActionIcon;
