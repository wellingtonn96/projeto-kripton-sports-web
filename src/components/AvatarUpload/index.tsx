import React, { useEffect, useState } from 'react';
import { MdInsertPhoto } from 'react-icons/md';

import { Container } from './styles';

interface IAvatarUploadProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  file: FileList | undefined;
}

const AvatarUpload: React.FC<IAvatarUploadProps> = ({ file, ...rest }) => {
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

  useEffect(() => {
    if (file) {
      const fileReader = new FileReader();

      fileReader.onloadend = () => setPreview(fileReader.result);

      const fileBlob: Blob = file[0];

      fileReader.readAsDataURL(fileBlob);
    }
  }, [file]);

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
        <input type="file" id="avatar" accept="image/*" {...rest} />
      </label>
    </Container>
  );
};

export default AvatarUpload;
