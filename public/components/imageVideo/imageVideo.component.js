function ImageVideoController() {
    var ctrl = this;
    ctrl.$onInit = function () {
        console.log(ctrl.imageSrc + " " + ctrl.videoSrc);
    };
    /**
     * It loads the modal that contains the video
     */
    ctrl.loadVideoModal = function () {
        var modal = document.getElementById("myModal");
        var video = document.getElementById("videoIframe");
        modal.style.display = "flex";
    };
    /**
     * It closes the modal that contains the video
     */
    ctrl.closeVideoModal = function () {
        var modal = document.getElementById("myModal");
        var video = document.getElementById("videoIframe");
        modal.style.display = "none";
        video.src = "";
    };
}
angular
    .module("mealViewer")
    .controller("ImageVideoController", ImageVideoController);
angular.module("mealViewer").component("imageVideo", {
    templateUrl: "./components/imageVideo/imageVideo.tpl.html",
    controller: "ImageVideoController",
    bindings: {
        imageSrc: "=",
        videoSrc: "="
    }
});
