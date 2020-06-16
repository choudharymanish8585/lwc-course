import { LightningElement } from "lwc";

export default class UdemyVideosPipeline extends LightningElement {
  todoVideos = [
    {
      id: 0,
      title: "Lightning Message Service",
      done: true,
      description: "Explai LMS with Aura and LWC example"
    },
    {
      id: 1,
      title: "Explain CSS Modules",
      done: false,
      description: "Share CSS styles among components"
    },
    {
      id: 2,
      title: "Check user permissions in LWC",
      done: false,
      description:
        'Check user permissions in Lightning Web Component with new "userPermission" modules'
    },
    {
      id: 3,
      title: "Check if component is connected to DOM",
      done: false,
      description:
        "Check Whether a Lightning Web Component Is Connected to the DOM"
    }
  ];
}
