export interface IMessageProps {
  type?: 'success' | 'info' | 'error';
  title: string;
  description: string;
}

export const messagesToast: IMessageProps[] = [
  {
    type: 'success',
    title: 'Sucesso!',
    description: 'Cadastro realizado com sucesso!',
  },
  {
    type: 'success',
    title: 'Sucesso!',
    description: 'Cadastro realizado com sucesso!',
  },
  {
    type: 'success',
    title: 'Sucesso!',
    description: 'Cadastro realizado com sucesso!',
  },
  {
    type: 'error',
    title: 'Sucesso!',
    description: 'Cadastro realizado com sucesso!',
  },
  {
    type: 'success',
    title: 'Sucesso!',
    description: 'Cadastro realizado com sucesso!',
  },
  {
    type: 'info',
    title: 'Sucesso!',
    description: 'Cadastro realizado com sucesso!',
  },
];
