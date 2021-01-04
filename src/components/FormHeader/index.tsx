import React from 'react';
import { IconBaseProps } from 'react-icons/lib';

import { Container } from './style';

interface IPropsFormHeader {
  title: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const FormHeader: React.FC<IPropsFormHeader> = ({ title, icon: Icon }) => {
  return (
    <Container>
      {Icon && (
        <i>
          <Icon size={20} />
        </i>
      )}

      <h4>{title}</h4>
    </Container>
  );
};

export default FormHeader;
