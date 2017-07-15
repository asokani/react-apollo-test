import React, { Component } from 'react';
import { gql, graphql} from 'react-apollo'

class TextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }
    componentWillReceiveProps(newProps) {
        if (newProps.saveAll !== this.props.saveAll && this.state.value !== this.props.value) {
            this.props.mutate({
                variables: {
                    id: this.props.id,
                    value: this.state.value
                }
            })
        }
    }
    componentWillMount() {
        this.setState({
            value: this.props.value
        });
    }
    render() {
        let { id, name } = this.props;

        return (
            <div className="form-group" key={id}>
                <label htmlFor={id}>{name}</label>
                <input type="text" onChange={(event) => this.setState({value: event.target.value})} className="form-control" id={id} placeholder={name} value={this.state.value} />
            </div>
        )
    }
}

const MutateQuery = gql`
    mutation updateNameValue($id: ID!, $value:String!) {
	    updateNameValue(id:$id, value:$value) {
            id,
            value
        }
    }`;

const TextInputWithData = graphql(MutateQuery)(TextInput)

export default TextInputWithData;