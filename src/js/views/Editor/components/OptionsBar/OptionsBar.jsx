import React from 'react';
import classNames from 'classnames';
import { Select } from 'antd';
import { themes, fontSizes } from 'js/components/TextEditor/options';
import styles from './styles.scss';

const Option = Select.Option;
const cx = classNames.bind(styles);

export default class OptionsBar extends React.Component {

  handleChangeTheme = (theme) => {
    this.props.changeTextEditorTheme(theme);
  }

  handleChangeFontSize = (fontSize) => {
    this.props.changeFontSize(fontSize);
  }

  render() {
    const className = cx('bar');

    return (
      <div className={className}>
        <Select defaultValue="monokai" style={{ width: 120 }} onChange={this.handleChangeTheme}>
          {themes.map((theme, index) =>
            <Option key={index} value={theme}>{theme}</Option>
          )}
        </Select>
        <Select defaultValue="13px" style={{ width: 120 }} onChange={this.handleChangeFontSize}>
          {fontSizes.map((fontSize, index) =>
            <Option key={index} value={fontSize}>{fontSize}</Option>
          )}
        </Select>
      </div>
    );
  }
}

