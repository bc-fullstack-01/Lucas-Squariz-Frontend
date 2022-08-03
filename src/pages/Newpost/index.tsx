import { Container, Stack, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import server from '../../api/server';
import CustomAppBar from "../../components/CustomAppBar";
import Dropzone from '../../components/Dropzone';

const NewPost = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('acessToken');
    const [formData, setFormData] = useState({
        title: '',
        description: '',
    });

    const [selectedFile, setSelectedFile] = useState<File>();

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const { title, description } = formData;
        const data = new FormData();
        data.append("title", title);
        data.append("description", description);
        if (selectedFile) {
            data.append("file", selectedFile);
        }

        try {
            const response = await server.post("/posts", {
                headers: `Bearer ${token}`
            })
            console.log(response.data);
            navigate("/home");
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div>
            <CustomAppBar title='NewPost' />
            <Container sx={{ marginTop: 12 }} >
                <form onSubmit={handleSubmit}>
                    <Stack spacing={6}>
                        <TextField
                            variant='standard'
                            label='Título'
                            name='title'
                            value={formData.title}
                            onChange={handleInputChange}
                        />
                        {selectedFile ? null : (<TextField
                            variant='standard'
                            label='O que está acontecendo?'
                            name='description'
                            multiline
                            minRows={3}
                            value={formData.description}
                            onChange={handleInputChange}
                        />)}
                        <Dropzone onFileUploaded={() => { }} />
                        <Button variant="contained" type="submit"> Publicar </Button>
                    </Stack>
                </form>
            </Container>
            <h1 style={{ marginTop: '50px' }}>NewPost</h1>
        </div>
    )
}

export default NewPost;