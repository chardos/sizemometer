import React from 'react';
import debounce from 'lodash.debounce';
import get from 'lodash.get';

class GetPanelWidth extends React.Component {
  constructor() {
    super();
    this.state = {
      width: 0,
    };
    this.debouncedUpdate = debounce(this.updateWidth.bind(this), 200);
  }

  componentDidMount() {
    window.addEventListener('resize', this.debouncedUpdate);
    this.updateWidth();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debouncedUpdate);
  }

  updateWidth() {
    const card = document.querySelector('.card');
    const panelWidth = get(card, 'clientWidth', 500);
    this.setState({ width: panelWidth });
  }

  render() {
    const { width } = this.state;
    const { children } = this.props;
    return children(width);
  }
}

export default GetPanelWidth;
