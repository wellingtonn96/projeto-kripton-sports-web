import React, { useEffect, useState } from 'react';
import { MdInsertPhoto } from 'react-icons/md';

import { Container } from './styles';

interface IInputImageUploadProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  file: FileList | undefined;
  previewServer?: string;
}

const InputImageUpload: React.FC<IInputImageUploadProps> = ({
  file,
  previewServer,
  ...rest
}) => {
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
      <label htmlFor="upload">
        {preview ? (
          <img src={preview.toString()} alt="default imagem" />
        ) : (
          <>
            {previewServer ? (
              <img
                src={`http://localhost:3333/files/${previewServer}`}
                alt="Imagem"
              />
            ) : (
              <div>
                <MdInsertPhoto size={44} color="gray" />
                <strong>Adicionar foto</strong>
              </div>
            )}
          </>
        )}
        <input type="file" id="upload" accept="image/*" {...rest} />
      </label>
    </Container>
  );
};

export default InputImageUpload;
