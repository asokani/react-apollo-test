import React, { Component } from 'react';
import { gql, graphql} from 'react-apollo';

import TextInput from './TextInput';

class Screen2 extends Component {
    constructor(props) {
        super(props);
        this.state = {saveAll: false};
    }

    componentWillReceiveProps(newProps) {
        if (!newProps.data.loading) {
            console.log(newProps.data)
            this.setState({parameters: newProps.data.Screen.parameters});
        }
    }

    render() {
        if (this.props.data.loading) {
            return (
                <div>...loading</div>
            )
        }

        let parameters = this.props.data.Screen.parameters.map((nameValue) => (
            <TextInput saveAll={this.state.saveAll} id={nameValue.id} name={nameValue.name} value={nameValue.value} />
        ));

        return (
            <div>
                <h3>Screen2</h3>
                <form>
                    {parameters}
                    <button onClick={(e) => {e.preventDefault();this.setState({saveAll: !this.state.saveAll})}} type="submit" className="btn btn-default">Save</button>
                </form>
            </div>
        );
    }
}

const FeedQuery = gql`query {
      Screen(id: "cj55f472bnbwj0184z06dmffu")  {
        parameters {
          id
          name
          value
        }
      } 
    }`

const Screen2WithData = graphql(FeedQuery, {
    options: {
        fetchPolicy: 'network-only'
    },
})(Screen2)


export default Screen2WithData;
