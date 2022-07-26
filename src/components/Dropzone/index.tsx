import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import ImageIcon from '@mui/icons-material/Image'

interface Props {
    onFileUploaded: (file: File) => void;
}

function Dropzone({ onFileUploaded }: Props) {
    const [selectedFileUrl, setSelectedFileUrl] = useState<string>('')
    
    const onDrop = useCallback((acceptedFiles: any[]) => {
        const file = acceptedFiles[0];
        
        const fileUrl = URL.createObjectURL(file);
        
        setSelectedFileUrl(fileUrl);
    },[onFileUploaded])

    const { getRootProps, getInputProps } = useDropzone({ onDrop, });
    
    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />

            {selectedFileUrl ? (
                <img src={selectedFileUrl} alt='Point thumbnail' />
            ) : (
                <p>
                    <ImageIcon />
                </p>
            )};

        </div>
    );
}

export default Dropzone;