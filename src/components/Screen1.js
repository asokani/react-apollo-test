import React, { Component } from 'react';
import { gql, graphql} from 'react-apollo'

class Screen1 extends Component {
    render() {
        if (this.props.data.loading) {
            return (
                <div>...</div>
            )
        }

        let parameters = this.props.data.Screen.parameters.map((nameValue) => (
            <div className="form-group" key={nameValue.id}>
                <label htmlFor={nameValue.id}>{nameValue.name}</label>
                <input type="text" className="form-control" id={nameValue.id} placeholder={nameValue.name} value={nameValue.value} />
            </div>
        ));

        return (
            <div>
                <h3>Screen1</h3>
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

const Screen1WithData = graphql(FeedQuery, {
    options: {
        fetchPolicy: 'network-only'
    },
})(Screen1)

export default Screen1WithData;
