import React from 'react';

import Text from '../../components/atoms/text';
import Divider from '../../components/atoms/divider';

import Step from '../../components/organisms/step';
import Footer from '../../components/organisms/footer';

import useStyles from './styles';

const content = [
  {
    stepTitle: 'STEP 1 - GETTING STARTED',
    steps: [
      {
        icon: 'library_books',
        title: 'Brief',
        description:
          'To get a clear picture of what you need I start every project by receiving an initial brief of what you want. Having this gives me enough context to properly provide you with a proposal and ultimately tailor my services to your project goals.',
      },
      {
        icon: 'chat',
        title: 'Initial Chat',
        description:
          "The next step is to have a quick 15-minute call so we can properly introduce ourselves and make sure we're both on the same page. This is the perfect time to let me know anything I might need to be aware of during the project.",
      },
    ],
  },
  {
    stepTitle: 'STEP 2 - DESIGN',
    steps: [
      {
        icon: 'window',
        title: 'Wireframes',
        direction: 'row-reverse',
        description:
          'Having a good set of wireframes is the bedrock of any successful website project. This is where we hammer down the layout and general functionality while always making sure the user is the primary focus.',
      },
      {
        icon: 'brush',
        title: 'Designs',
        direction: 'row-reverse',
        description:
          "This is where I apply the paint to your website. I'll take the concepts we've agreed on in the wireframes to make them look usable, modern and clean.",
      },
    ],
  },
  {
    stepTitle: 'STEP 3 - DEVELOPMENT & LAUNCH',
    steps: [
      {
        icon: 'code',
        title: 'Code',
        description:
          "When the coding begins there will generally be less communication from me as this is quite an involved process that doesn't require much feedback. This is where I take the visuals of your website and make them into something real that people can interact with.",
      },
      {
        icon: 'school',
        title: 'Training',
        description:
          "After the website has been coded but before it goes live I like to provide in-depth training. Going forward your website will be easily updatable by yourself so I'll take you through everything over the phone and even provide screencasts for you to keep.",
      },
      {
        icon: 'flash_on',
        title: 'Launch',
        description:
          "When it's time to launch the new site I'll take care of everything. All you'll need to do is get that Tweet ready about your shiny new website!",
      },
    ],
  },
];

const Process = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {content.map((content, iContent) => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          key={iContent}
        >
          <Text size="20px">{content.stepTitle}</Text>
          <Divider />
          {content.steps.map((step, iStep) => (
            <Step key={iStep} {...step} />
          ))}
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default Process;
