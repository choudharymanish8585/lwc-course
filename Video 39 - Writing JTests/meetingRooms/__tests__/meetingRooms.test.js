import {createElement} from 'lwc';
import MeetingRooms from 'c/meetingRooms';


describe( 'c-meetingRooms', () => {

    afterEach( () => {
        while(document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    })

    it('count number of meeting room component', () =>{
        const meetingRooms = createElement('c-meetingRooms', {is:MeetingRooms} );

        document.body.appendChild(meetingRooms);

        const allMeetingRoomComponent = meetingRooms.shadowRoot.querySelectorAll('c-meeting-room');

        expect(allMeetingRoomComponent.length).toBe(7);
    });

    it('check the title of lightning-card', () =>{
        const meetingRooms = createElement('c-meetingRooms', {is:MeetingRooms} );

        document.body.appendChild(meetingRooms);

        const lightningCardComponent = meetingRooms.shadowRoot.querySelector('lightning-card');

        expect(lightningCardComponent.getAttribute("title")).toBe('Meeting Rooms');
    });

});