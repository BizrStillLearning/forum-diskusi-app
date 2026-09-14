import ThreadInput from './ThreadInput';

export default {
  title: 'ThreadInput',
  component: ThreadInput,
};

export const Default = {
  args: {
    addThread: (data) => console.log('Simulasi thread disubmit:', data),
  },
};