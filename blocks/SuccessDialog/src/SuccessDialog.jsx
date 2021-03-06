'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dialog } from '@icedesign/base';
import './SuccessDialog.scss';

import CreateFuncDialog from './CreateFuncDialog';

class SuccessDialog extends Component {
  static displayName = 'SuccessDialog';

  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible
    };
  }

  render() {
    return (
      <Dialog
        className="success-dialog" style={styles.successDialog}
        style={styles.dialog}
        autoFocus={false}
        footer={false}
        title="认证申请已提交"
        {...this.props}
        visible={this.state.visible}
      >
        <div style={styles.dialogContent}>
          <img
            style={styles.icon}
            src="//img.alicdn.com/tfs/TB1GOHLXyqAXuNjy1XdXXaYcVXa-52-52.png"
            srcSet="//img.alicdn.com/tfs/TB1h_K_b4rI8KJjy0FpXXb5hVXa-104-104.png"
          />
          <p style={styles.text}>我们将在5-7个工作日内完成审核，请耐心等待</p>
        </div>
      </Dialog>
    );
  }
}

const styles = {"dialog":{"width":"640px"},"dialogContent":{"height":"200px","display":"flex","flexDirection":"column","alignItems":"center"},"icon":{"width":"52px","height":"52px","marginTop":"46px","marginBottom":"10px"},"text":{"fontSize":"16px;"},"successDialog":{}}

export default CreateFuncDialog(SuccessDialog);
