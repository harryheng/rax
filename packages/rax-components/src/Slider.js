import {Component, createElement, PropTypes} from 'rax';
import {isWeex} from 'universal-env';
import View from './View';

class Slider extends Component {

  render() {
    if (isWeex) {
      return <slider {...this.props} />;
    } else {
      // TODO
    }
  }
}

const styles = {

};

export default Slider;
