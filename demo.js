import '@okalit/demo-components';
import './src/liapf-multistep.js';

const demo = document.querySelector('#demo');

demo.setComponents([
  {
    name: 'LiapfMultistep',
    tag: 'liapf-multistep',
    description: 'A multi-step form component that allows users to navigate through different steps of a process.',
    import: () => import('./src/liapf-multistep.js'),
    props: [{ currentStep: { type: Number, value: 1 } }],
    slots: [
      { name: 'default', description: '<step-item-molecule title="Create Account with OAuth"></step-item-molecule>' },
    ],
    events: [],
    channels: [],
  },
]);
