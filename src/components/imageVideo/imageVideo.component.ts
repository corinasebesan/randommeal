module app.imageVideo {
  interface IImageVideoController {
    modal: HTMLDivElement;
    video: HTMLIFrameElement;
    loadVideoModal(): void;
    closeVideoModal(): void;
  }
  class ImageVideoController implements IImageVideoController {
    modal: HTMLDivElement;
    video: HTMLIFrameElement;
    constructor() {
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

  angular.module("mealViewer").component("imageVideo", {
    templateUrl: "./components/imageVideo/imageVideo.tpl.html",
    controller: ImageVideoController,
    bindings: {
      imageSrc: "=",
      videoSrc: "="
    }
  });
}
