import React, { Component } from 'react';
import { gql, graphql} from 'react-apollo'

class Screen2 extends Component {
    componentWillReceiveProps(newProps) {
        if (!newProps.data.loading) {
            console.log(newProps.data)
            this.setState({parameters: newProps.data.Screen.parameters});
        }
    }
    onChangeParam(id, value) {
        let params = this.state.parameters.map((nameValue) => {
            let newNameValue = {...nameValue}
            if (nameValue.id === id) {
                newNameValue.value = value;
            }
            return newNameValue;
        });
        this.setState({parameters: params})
    }
    render() {
        if (this.props.data.loading) {
            return (
                <div>...</div>
            )
        }

        let parameters = this.state.parameters.map((nameValue) => (
            <div className="form-group" key={nameValue.id}>
                <label htmlFor={nameValue.id}>{nameValue.name}</label>
                <input type="text" onChange={(event) => this.onChangeParam(nameValue.id, event.target.value)} className="form-control" id={nameValue.id} placeholder={nameValue.name} value={nameValue.value} />
            </div>
        ));

        return (
            <div>
                <h3>Screen2</h3>
                <form>
                    {parameters}
                    <button type="submit" className="btn btn-default">Save</button>
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
