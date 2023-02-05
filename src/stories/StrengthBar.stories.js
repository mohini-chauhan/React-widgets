import StrengthBar from '../components/StrengthBar/StrengthBar';

export default {
  title: 'Widgets/StrengthBar',
  component: 'StrengthBar',
  parameters: {
    docs: {
      description: {
        component:
          'Strength bar widget can used for showing and modifing any type of levels',
      },
    },
  },
  argTypes: {
    height: {
      description: 'Height of widget',
      type: { summary: 'string' },
      defaultValue: { summary: '250px' },
    },
    width: {
      description: 'Width of widget',
      type: { summary: 'string' },
      defaultValue: { summary: '220px' },
    },
    widgetBackGroundColor: {
      control: 'color',
      description: 'Widget background color',
      type: { summary: 'text' },
      defaultValue: { summary: '#315c6d' },
    },
    focusBarColor: {
      control: 'color',
      description: 'Active bar color',
      type: { summary: 'text' },
      defaultValue: { summary: 'white' },
    },

    BarColor: {
      control: 'color',
      description: 'Inactive bar color ',
      type: { summary: 'string' },
      defaultValue: { summary: '#819ca7' },
    },
    onBarChange: {
      description:
        'Callback function called every time bar is clicked. parameter: bar_value',
      type: { summary: 'callback function' },
      action: 'clicked',
      table: { category: 'Callback' },
      defaultValue: { summary: 'undefined' },
    },
  },
};

export const Template = (args) => <StrengthBar {...args} />;
Template.args = {
  height: '250px',
  width: '220px',
  focusBarColor: 'white',
  widgetBackGroundColor: '#315c6d',
  focusBarColor: 'white',
  BarColor: '#819ca7',
  onBarChange: (val) => {},
};

Template.story = {
  name: 'StrengthBar',
};
