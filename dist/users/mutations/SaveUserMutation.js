import Relay from 'react-relay';
class SaveUserMutation extends Relay.Mutation {
    getMutation() {
        console.log('SaveUserMutation getMutation');
        return Relay.QL `
            mutation {saveUser}
        `;
    }
    getVariables() {
        return this.props.user;
    }
    getFatQuery() {
        return Relay.QL `
            fragment on SaveUserPayload{
                userEdge,
                viewer { userConnection }
            }
        `;
    }
    getConfigs() {
        return [{
                type: 'RANGE_ADD',
                parentName: 'viewer',
                parentID: this.props.viewer.id,
                connectionName: 'userConnection',
                edgeName: 'userEdge',
                rangeBehaviors: {
                    '': 'prepend'
                }
            }];
    }
}
export default SaveUserMutation;
//# sourceMappingURL=SaveUserMutation.js.map