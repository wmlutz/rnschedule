import React, {Component} from 'react';
import moment from 'moment';

const AppContext = React.createContext(moment());

class ContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(),
      isDatePickerVisible: true,
      hour_size: props.hour_size || 50,
      setDate: (value) => {
        this.setState({date: moment(value)})
      },
      toggleDatePicker: () => {
        this.setState({isDatePickerVisible: !this.state.isDatePickerVisible})
      }
    }
  }

  _setDate(value) {

  }
  render() {
    return <AppContext.Provider value={this.state}>
      {this.props.children}
    </AppContext.Provider>
  }
}

export {ContextProvider, AppContext}
