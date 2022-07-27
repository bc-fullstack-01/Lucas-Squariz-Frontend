import React, { useEffect, useState } from 'react';
import { Typography, IconButton } from "@mui/material";
import { ChatBubbleOutline as ChatBubbleOutlineIcon, FavoriteBorder as FavoriteBorderIcon, Favorite as FavoriteIcon } from '@mui/icons-material';
import server from '../../api/server';
import CustomFavoriteIcon from '../CustomfavoriteIcon';

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
                server.post(`/post/${postId}/like`, null, {
                    headers: {
                        authorization: `Bearer ${token}`,
                    }
                });
                setLiked(true);
            } else {
                setLiked(false);
            }

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <IconButton>
                <ChatBubbleOutlineIcon fontSize='small' />
            </IconButton>
            <Typography variant="caption" color="text.secondary">
                {commentCount}
            </Typography>
                <CustomFavoriteIcon handleLike={handleLike} likeCount={likeCount} liked={liked} />
            
        </div >

    )
}

export default CustomActionIcon;
