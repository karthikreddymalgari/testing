
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
export default class Calender extends React.Component {
    constructor() {
        super(...arguments);
        this.scheduleData = [{
                Id: 3,
                Subject: 'Testing',
                StartTime: new Date(2018, 1, 11, 9, 0),
                EndTime: new Date(2018, 1, 11, 10, 0),
                IsAllDay: false
            }, {
                Id: 4,
                Subject: 'Vacation',
                StartTime: new Date(2018, 1, 13, 9, 0),
                EndTime: new Date(2018, 1, 13, 10, 0),
                IsAllDay: false
            }];
    }
    onAddClick() {
        let Data = [{
                Id: 1,
                Subject: 'Conference',
                StartTime: new Date(2018, 1, 12, 9, 0),
                EndTime: new Date(2018, 1, 12, 10, 0),
                IsAllDay: false
            }, {
                Id: 2,
                Subject: 'Meeting',
                StartTime: new Date(2018, 1, 15, 10, 0),
                EndTime: new Date(2018, 1, 15, 11, 30),
                IsAllDay: false
            }];
        this.scheduleObj.addEvent(Data);
        this.buttonObj.element.setAttribute('disabled', 'true');
    }
    render() {
        return (<div>
        <ButtonComponent id='add' title='Add' ref={t => this.buttonObj = t} onClick={this.onAddClick.bind(this)}>Add</ButtonComponent>
        <ScheduleComponent ref={t => this.scheduleObj = t} width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={{ dataSource: this.scheduleData }}>
            <ViewsDirective>
                <ViewDirective option='Day'/>
                <ViewDirective option='Week'/>
                <ViewDirective option='WorkWeek'/>
                <ViewDirective option='Month'/>
            </ViewsDirective>
            <Inject services={[Day, Week, WorkWeek, Month]}/>
        </ScheduleComponent>
    </div>);
    }
}
;
// ReactDOM.render(<App />, document.getElementById('schedule'));