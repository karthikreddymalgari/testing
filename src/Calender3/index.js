import ReminderCalendar from "../../node_modules/react-reminder-calendar/dist"
import React from 'react'

const data = [
    {
        title: "TODAY, NOV 4",
        items: [
            {
                title: "Dinner with Richard",
                subTitle: "Richards House",
                icon: "fa fa-map-pin",
                startTime: "12:00",
                endTime: "13:00",
                isAllDay: false,
                allDayTitle: "All Day",
                separatorColor: "#26bdc6",
                style: {},
                infoViewComponent: null,
                rightViewComponent: null
            },
            {
                title: "Online meeting",
                subTitle: "Zoom",
                icon: "",
                startTime: "18:00",
                endTime: "19:30",
                isAllDay: false,
                allDayTitle: "All Day",
                separatorColor: "#a326c6",
                style: {},
                infoViewComponent: <div style={{fontSize: 12}}><small><b>Zoom Link</b>  <kbd>https://zoom.us/udyt4RE</kbd></small></div>,
                rightViewComponent: null
            }
        ],
        rightButton: {
            title: "+",
            show: true,
            props: {
                className: "",
                style: {backgroundColor: '#ccc', border: 'none', width: 22, height: 22}
            }
        }
    },
    {
        title: "TOMORROW, NOV 5",
        items: [
            {
                title: "Join the Summit",
                subTitle: "City Center",
                icon: "fa fa-map-pin",
                startTime: "10:00",
                endTime: "13:00",
                isAllDay: true,
                allDayTitle: "All Day",
                separatorColor: "#69c626",
                style: {},
                infoViewComponent: null,
                rightViewComponent: null
            },
            {
                title: "Enroll the online course",
                subTitle: "Udemy",
                icon: "",
                startTime: "18:00",
                endTime: "19:30",
                isAllDay: false,
                allDayTitle: "All Day",
                separatorColor: "#e5245a",
                style: {},
                infoViewComponent: null,
                rightViewComponent: null
            }
        ],
        rightButton: {
            title: "+",
            show: true,
            props: {
                className: "",
                style: {backgroundColor: '#ccc', border: 'none', width: 22, height: 22}
            }
        }
    }
]

export default class Cale extends React.Component {

    handleItemClick = (dateSection, item, index) => {
        console.log()
        console.log(item)
    }

    handleRightButtonClick = (dateSection, index) => {
        
    }
    
    render(){
        return(
            <ReminderCalendar
                shadow
                dateSections={data}
                onItemClick={this.handleItemClick}
                onDateSectionRightButtonClick={this.handleRightButtonClick}
            />
        )
    }
}