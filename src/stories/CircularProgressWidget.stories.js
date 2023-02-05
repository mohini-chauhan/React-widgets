import CircularProgressWidget from '../components/CircularProgressWidget/CircularProgressWidget';

export default {
  title: 'Widgets/CircularProgressWidget',
  component: 'CircularProgressWidget',
  parameters: {
    docs: {
      description: {
        component:
          'Circular progress widget can used for showing and modifing progress',
      },
    },
  },
  argTypes: {
    height: {
      description: 'Height of widget',
      type: { summary: 'string' },
      defaultValue: { summary: '200px' },
    },
    width: {
      description: 'Width of widget',
      type: { summary: 'string' },
      defaultValue: { summary: '200px' },
    },
    widgetBackGroundColor: {
      control: 'color',
      description: 'background color of the  widget',
      type: { summary: 'text' },
      defaultValue: { summary: '#315c6d' },
    },
    circularBarColor: {
      control: 'color',
      description: 'progress bar color on filling the progress',
      type: { summary: 'text' },
      defaultValue: { summary: 'white' },
    },

    sliderTopColor: {
      control: 'color',
      description: 'slider color ',
      type: { summary: 'string' },
      defaultValue: { summary: 'cyan' },
    },
    sliderBottomColor: {
      control: 'color',
      description: 'slider track color',
      type: { summary: 'string' },
      defaultValue: { summary: 'white' },
    },
    sliderMax: {
      description: 'Upper limit of slider',
      type: { summary: 'number' },
      defaultValue: { summary: 10 },
    },
    slideMin: {
      description: 'Lower limit of slider',
      type: { summary: 'number' },
      defaultValue: { summary: 0 },
    },
    sliderStep: {
      description: 'Step size of slider',
      type: { summary: 'number' },
      defaultValue: { summary: 1 },
    },
    onSliderChange: {
      description:
        'Callback function called every time slider is change. parameter: slider_value',
      type: { summary: 'callback function' },
      action: 'onChange',
      table: { category: 'Callback' },
      defaultValue: { summary: 'undefined' },
    },
  },
};

export const Template = (args) => <CircularProgressWidget {...args} />;
Template.args = {
  height: '200px',
  width: '200px',
  circularBarColor: 'white',
  widgetBackGroundColor: '#315c6d',
  sliderTopColor: 'cyan',
  sliderBottomColor: 'white',
  sliderMax: 10,
  slideMin: 0,
  sliderStep: 1,
  onSliderChange: (val) => {},
};

Template.story = {
  name: 'CircularProgressWidget',
};
