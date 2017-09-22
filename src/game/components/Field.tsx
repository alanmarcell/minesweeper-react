import { IFieldConfig, startBattle } from 'minesweeper-core';
import React from 'react';
// import Relay from 'react-relay';

import PositionComponent from './Position';

export default class Field extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = { position: {} };
    }

    setLimit = (e) => {
        const newLimit = Number(e.target.value);
        this.props.relay.setVariables({ limit: newLimit });
        console.log('newLimit', newLimit);
        console.log('relay', this.props.relay);
    }

    createField = (fieldArgs) => {

        const fieldConfig: IFieldConfig = {
            width: 3,
            height: 3,
            bombs: 3
        };
        const battle = startBattle(fieldConfig);
        const field = battle.field;
        this.setState({ field });
        console.log('field startBattle() field', field);

        // Relay.Store.commitUpdate(
        //     new SaveUserMutation({
        //         user,
        //         viewer: this.props.viewer
        //     }),
        //     {
        //         onFailure: transaction => {
        //             console.log('onFailure response', transaction);
        //         },
        //         onSuccess: response => {
        //             console.log('onSuccess response', response);
        //             console.log('user response', response.saveUser.userEdge.node);
        //             user = new User(response.saveUser.userEdge.node);
        //             this.setState({ user: user.isValid() ? {} : user });
        //         }
        //     }
        // );
    }

    render() {
        const content = this.props.viewer.fieldConnection.edges.map(edge => {
            return <PositionComponent key={edge.node.id} />;
        });

        console.log('rendering Field:', this.state.user);

        return (
            <section>
                <h1>FIELD</h1>
                <label htmlFor="pagination-limit">Showing</label>
                <select id="pagination-limit" onChange={this.setLimit}
                    defaultValue={this.props.relay.variables.limit}>
                    <option value="10">10</option>
                    <option value="20">20</option>
                </select>
                <ul>
                    {content}
                </ul>
            </section>);
    }

    // private getNewUser() {
    //     return new User({
    //         displayName: '',
    //         email: '',
    //         userName: ''
    //     });
    // }
}

// export default Relay.createContainer(Field, {
//     initialVariables: {
//         limit: 20
//     },
//     fragments: {
//         viewer: () => Relay.QL`
//         fragment on Viewer{
//             id,
//             userConnection(first: $limit){
//                 edges{
//                     node{
//                         id,
//                         ${Position.getFragment('user')},
//                         errors
//                     }
//                 }
//             }
//         }
//        `
//     }
// });
