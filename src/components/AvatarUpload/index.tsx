import React, { ChangeEvent, useState } from 'react';
import { MdInsertPhoto } from 'react-icons/md';

import { Container } from './styles';

interface IAvatarUploadProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const AvatarUpload: React.FC<IAvatarUploadProps> = ({
  label,
  error,
  ...rest
}) => {
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

  const uploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    const data = new FormData();

    if (e.target.files) {
      const file = e.target.files[0];
      data.append('file', file);

      const fileReader = new FileReader();

      fileReader.onloadend = () => {
        setPreview(fileReader.result);
      };

      fileReader.readAsDataURL(file as Blob);
    }
  };

  return (
    <Container>
      <label htmlFor="avatar">
        {preview ? (
          <img src={preview.toString()} alt="Avatar do Entregador" />
        ) : (
          <>
            <div>
              <MdInsertPhoto size={44} color="gray" />
              <strong>Adicionar foto</strong>
            </div>
          </>
        )}
        <input
          type="file"
          id="avatar"
          accept="image/*"
          onChange={uploadImage}
          {...rest}
        />
      </label>
    </Container>
  );
};

export default AvatarUpload;
