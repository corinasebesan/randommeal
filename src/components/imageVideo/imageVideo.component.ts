import app from "../../module";
import imageVideoTemplate from "./imageVideo.tpl.html";

interface IImageVideoController {
  modal: HTMLDivElement;
  video: HTMLIFrameElement;
  $postLink(): void;
  loadVideoModal(): void;
  closeVideoModal(): void;
}
class ImageVideoController implements IImageVideoController {
  modal: HTMLDivElement;
  video: HTMLIFrameElement;

  /**
   * These lookups were in the constructor, which runs before the component's
   * own template has been linked into the page, so both were always null and
   * opening the video threw. $postLink runs once the DOM exists.
   */
  $postLink(): void {
    this.modal = document.getElementById("myModal") as HTMLDivElement;
    this.video = document.getElementById("videoIframe") as HTMLIFrameElement;
  }
  /**
   * It loads the modal that contains the video
   */
  loadVideoModal(): void {
    this.modal.style.display = "flex";
  }

  /**
   * It closes the modal that contains the video
   */
  closeVideoModal(): void {
    this.modal.style.display = "none";
    this.video.src = "";
  }
}

app.component("imageVideo", {
  template: imageVideoTemplate,
  controller: ImageVideoController,
  bindings: {
    imageSrc: "=",
    videoSrc: "="
  }
});
