import { LightningElement } from 'lwc';

export default class MeetingRooms extends LightningElement {

    meetingRoomsInfo = [
        {roomName:'A-01', roomCapacity:'12'},
        {roomName:'A-02', roomCapacity:'16'},
        {roomName:'A-03', roomCapacity:'12'},
        {roomName:'B-01', roomCapacity:'5'},
        {roomName:'B-02', roomCapacity:'8'},
        {roomName:'B-03', roomCapacity:'10'},
        {roomName:'C-01', roomCapacity:'20'}

    ];
}