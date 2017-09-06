import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './style.css';
import { makeFieldDisplayName } from '../../lib/searchHelpers';

const JOIN_CHAR = ', ';

class DetailList extends Component {
  render() {
    let d = this.props.data;
    let nodes = this.props.fields.map( (field) => {
      let valueNode;
      let value = d[field];
      if (Array.isArray(value)) {
        value = value.join(JOIN_CHAR);
      }
      if (field === 'species') {
        valueNode = <span><i dangerouslySetInnerHTML={{ __html: value }} /></span>;
      } else {
        valueNode = <span dangerouslySetInnerHTML={{ __html: value }} />;
      }
      return (
        <div className={style.detailLineContainer} key={`srField.${field}`}>
          <span className={style.detailLabel}><strong>{makeFieldDisplayName(field)}:</strong> </span>
          {valueNode}
        </div>
      );
    });
    return (
      <div className={style.detailContainer}>
        {nodes}
      </div>
    );
  }
}

DetailList.propTypes = {
  data: PropTypes.object,
  fields: PropTypes.array
};

export default DetailList;
