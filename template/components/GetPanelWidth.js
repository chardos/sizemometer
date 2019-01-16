import React from 'react';
import debounce from 'lodash.debounce';

class GetPanelWidth extends React.Component {
  constructor() {
    super()
    this.state = {
      width: 0
    }
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
    const panelWidth = document.querySelector('.card').clientWidth;
    console.log('panelWidth', panelWidth);
    this.setState({ width: panelWidth });
  }

  render() {
    return this.props.children(this.state.width)
  }
}

export default GetPanelWidth;




// /**
//  * PageWidth - function as a child component that calls children with
//  * the current page width, and makes debounced updates when resized.
//  */
// class PageWidth extends Component {
//   static propTypes = {
//     children: PropTypes.func.isRequired
//   };

//   constructor(props) {
//     super(props);

//     this.state = {
//       width: window.innerWidth
//     };

//     this.debouncedUpdate = debounce(this.updateWidth.bind(this), 200);
//   }

//   componentDidMount() {
//     window.addEventListener('resize', this.debouncedUpdate);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('resize', this.debouncedUpdate);
//   }

//   updateWidth() {
//     this.setState({ width: window.innerWidth });
//   }

//   render() {
//     return this.props.children(this.state.width);
//   }
// }

