import React from 'react';
import { Paper, CardHeader, CardMedia, CardContent, Typography, CardActions } from "@mui/material";
import CustomAvatar from '../CustomAvatar/index';
import CustomActionIcon from '../CustomActionIcon/index';

import { Post } from '../../Models/post';

interface Props{
    post: Post;
    handlePostClick: any;
}

const PostCard = ({ post, handlePostClick }: Props) => {
    return (
        <div onClick={() => handlePostClick(post._id)}>
            <Paper elevation={0} sx={{ marginX: 24}}>
                <CardHeader avatar={<CustomAvatar profileName={post.profile.name} />} title={post.title} />
                {post.image ?
                    <CardMedia component='img' image={post.description} alt={post.title} />
                    :
                    <CardContent>
                        <Typography variant='body2' color='text.secondary'>
                            {post.description}
                        </Typography>
                    </CardContent>
                }
                <CardActions>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            justifyContent: "start"
                        }} >
                            
                        <CustomActionIcon commentCount={999} likeCount={999} likes={['']} postId={post._id}/>
                    </div>
                </CardActions>
            </Paper>
        </div >
    )
}

export default PostCard;