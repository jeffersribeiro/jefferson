import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
import Image from '../../atoms/image';
import Text, { textAlign } from '../../atoms/text';
import Link, { linkType } from '../../atoms/link';
import { fontSize, colors } from '../../../common/_variables.css';

const Rate = ({ rate, author, authorPhoto, link, linkText }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.rate}>
        <Text
          align={textAlign.CENTER}
          size={fontSize.title2}
          color={colors.PRIMARY}
        >
          {`"${rate}"`}
        </Text>
      </div>
      <div>
        <Image className={classes.photo} src={authorPhoto} />
      </div>
      <div className={classes.author}>
        <Text align={textAlign.CENTER} size={fontSize.subtitle1}>
          {author}
        </Text>
      </div>
      <div className={classes.text}>
        <Text align={textAlign.CENTER} size={fontSize.subtitle1}>
          Owner of
          <Link href={link} type={linkType.NAVIGATE}>
            {linkText}
          </Link>
        </Text>
      </div>
    </div>
  );
};

Rate.defaultProps = {
  linkText: '',
  rate: '',
  author: '',
  authorPhoto: '',
  link: '',
};

Rate.propTypes = {
  rate: PropTypes.string,
  linkText: PropTypes.string,
  author: PropTypes.string,
  authorPhoto: PropTypes.string,
  link: PropTypes.string,
};

export default Rate;
