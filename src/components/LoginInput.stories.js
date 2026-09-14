import LoginInput from './LoginInput';

export default {
  title: 'LoginInput',
  component: LoginInput,
};

export const Default = {
  args: {
    login: (data) => console.log('Simulasi data login disubmit:', data),
  },
};
