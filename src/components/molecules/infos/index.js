import React from 'react';
import PropTypes from 'prop-types';

import Button, {
  buttonSize,
  buttonTheme,
  buttonType,
} from '../../atoms/button';
import Text from '../../atoms/text';
import Title from '../../atoms/title';
import Image from '../../atoms/image';
import Link, { linkType } from '../../atoms/link';
import Icon, { iconColor } from '../../atoms/icon';

import { colors, fontSize } from '../../../common/_variables.css';

import useStyles from './styles';

const Infos = ({
  btnText,
  skills,
  description,
  title,
  link,
  linkImage,
  direction,
}) => {
  const classes = useStyles({ direction });
  return (
    <>
      <div className={classes.root}>
        <div className={classes.imgContainer}>
          <Link href={link} type={linkType.NAVIGATE}>
            <Image src={linkImage} className={classes.img} />
          </Link>
        </div>
        <div>
          <div>
            <Link href={link} type={linkType.NAVIGATE}>
              <Title
                size={fontSize.title1}
                color={colors.SECONDARY}
                text={title}
              />
            </Link>
          </div>
          <div>
            <Text size={fontSize.subtitle1}>{description}</Text>
          </div>
          <div className={classes.skills}>
            {skills.map(({ icon, text }, index) => (
              <div className={classes.skill} key={index}>
                <Icon color={iconColor.SECONDARY} name={icon} />
                <Text color={colors.SECONDARY}>{text}</Text>
              </div>
            ))}
          </div>
          <div>
            <Button
              theme={buttonTheme.ROUNDED}
              type={buttonType.BUTTON}
              size={buttonSize.LARGE}
            >
              {btnText}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

Infos.propTypes = {
  linkImage: PropTypes.string,
  direction: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  skills: PropTypes.array,
  btnText: PropTypes.string,
};

export default Infos;
