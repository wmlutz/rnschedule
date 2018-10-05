import React, {Component} from 'react';
import { ScrollView, Dimensions } from 'react-native';

class SmartScroll extends Component {
  _nowHeight(){
    const {hour_size} = this.props;
    var midnight = new Date();
    midnight.setHours(0,0,0,0);
    var now = new Date();
    var hours = ((now-midnight)/3600000);
    return hours * hour_size;
  }

  componentDidMount() {
    const SCROLL_HT = 24 * this.props.hour_size;
    const SCREEN_HT = (Dimensions.get('window').height - 100);
    const OFFSET_HT = this._nowHeight() - (SCREEN_HT / 2);

    if ( OFFSET_HT > SCROLL_HT - SCREEN_HT) {
      this._scroller.scrollTo({x: 0, y: SCROLL_HT - SCREEN_HT});
    } else if (OFFSET_HT > 0) {
      this._scroller.scrollTo({x: 0, y: OFFSET_HT});
    }
  }

  render() {
    const SCROLL_HT = 24 * this.props.hour_size;
    return (
      <ScrollView style={{height: SCROLL_HT}} ref={(component) => {this._scroller = component}}>
        {this.props.children}
      </ScrollView>
    )
  }
}

export default SmartScroll
