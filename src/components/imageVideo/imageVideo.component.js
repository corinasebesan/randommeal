function ImageVideoController() {
  /**
   * It loads the modal that contains the video
   */
  this.loadVideoModal = function() {
    var modal = document.getElementById("myModal");
    var video = document.getElementById("videoIframe");

    modal.style.display = "flex";
  };

  /**
   * It closes the modal that contains the video
   */
  this.closeVideoModal = function() {
    var modal = document.getElementById("myModal");
    var video = document.getElementById("videoIframe");

    modal.style.display = "none";
    video.src = "";
  };
}

angular.module("mealViewer").component("imageVideo", {
  templateUrl: "./components/imageVideo/imageVideo.tpl.html",
  controller: ImageVideoController,
  bindings: {
    imageSrc: "=",
    videoSrc: "="
  }
});
