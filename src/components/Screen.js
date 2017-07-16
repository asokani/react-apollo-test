import React, { Component } from 'react';
import { gql, graphql} from 'react-apollo';

import TextInput from './TextInput';

class Screen extends Component {
    constructor(props) {
        super(props);
        this.state = {saveAll: false};
    }

    componentWillReceiveProps(newProps) {
        if (!newProps.data.loading) {
            this.setState({parameters: newProps.data.Screen.parameters});
        }
    }

    render() {
        if (this.props.data.loading) {
            return (
                <div style={{marginTop: 20}} className="alert alert-info" role="alert">...loading</div>
            )
        }

        let parameters = this.props.data.Screen.parameters.map((nameValue) => (
            <TextInput saveAll={this.state.saveAll} key={nameValue.id} id={nameValue.id} name={nameValue.name} value={nameValue.value} />
        ));

        return (
            <div>
                <h3>Screen1</h3>
                <form>
                    {parameters}
                    <button onClick={(e) => {e.preventDefault();this.setState({saveAll: !this.state.saveAll})}} type="submit" className="btn btn-default">Save</button>
                </form>
            </div>
        );
    }
}

const FeedQuery = gql`query Screen($id: ID!) {
      Screen(id:$id)  {
        parameters {
          id
          name
          value
        }
      } 
    }`

const ScreenWithData = graphql(FeedQuery, {
    options: (props) => {
        return {
            variables: { id: props.screenId },
            fetchPolicy: 'network-only'
        }
    }
})(Screen)


export default ScreenWithData;
