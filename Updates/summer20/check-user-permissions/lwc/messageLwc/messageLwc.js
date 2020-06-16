import { LightningElement, track, wire } from "lwc";
import messageDemo from "@salesforce/messageChannel/messageDemo__c";
import {
  MessageContext,
  publish,
  subscribe,
  unsubscribe,
  APPLICATION_SCOPE
} from "lightning/messageService";

import hasSendPermissionn from "@salesforce/customPermission/Send_Message";

export default class MessageLwc extends LightningElement {
  @track messages = [];

  @wire(MessageContext) msgContext;

  subscription = null;

  connectedCallback() {
    if (!this.subscription) {
      this.subscription = subscribe(
        this.msgContext,
        messageDemo,
        msg => {
          this.messageHandler(msg);
        },
        { scope: APPLICATION_SCOPE }
      );
    }
  }

  disconnectedCallback() {
    unsubscribe(this.subscription);
    this.subscription = null;
  }

  sendHandler() {
    const inputElement = this.template.querySelector("lightning-input");
    if (inputElement) {
      const msg = inputElement.value;
      this.messages.push({
        id: this.messages.length,
        value: msg,
        from: "LWC"
      });
      //publish message
      const messagePayload = {
        message: msg,
        from: "LWC"
      };

      publish(this.msgContext, messageDemo, messagePayload);

      inputElement.value = "";
    }
  }

  messageHandler(msgPayload) {
    //something with message
    if (msgPayload && msgPayload.from !== "LWC") {
      this.messages.push({
        id: this.messages.length,
        value: msgPayload.message,
        from: msgPayload.from
      });
    }
  }

  get disableSendButton() {
    return !hasSendPermissionn;
  }
}
