import { observable, action, computed, useStrict, toJS } from 'mobx';
import axios from 'axios';

useStrict(true);

class TeamsStore {
    // Values marked as 'observable' can be watched by 'observers'
    @observable teams = [];

    // In strict mode, only actions can modify mobx state 
    @action setTeams = (teams) => { this.teams = [...teams]; };

    @action addTeam = (team) => { this.teams.push(team); };

    // An example that's a little more complex
    @action getTeams() {
    //Managing Async tasks like ajax calls with Mobx actions
        if(this.teams.length > 0){
            return;
        }
        
        this.setTeams([
            {name:'SAST',users:'fadi@workflow.com',status:'Admin'},
            {name:'OSA',users:'aws@print.com',status:'Admin'},
            {name:'Platform',users:'rasha@x.com',status:'Reviewer'}
        ]);
    }
}

const store = new TeamsStore();

export default store;
export { TeamsStore };