<template>
  <section class="video">
    <div class="container">
      <h2 class="visually_hidden">Видео про ЖК LoftHouse</h2>

      <a href="https://www.youtube.com/watch?v=bhJNL9JUsnY" data-youtubeLightbox class="video__link">
        <img src="@/assets/video/play.svg" alt="" class="video__icon">
        <img src="@/assets/video/video_img.jpg" alt="" class="video__img">
      </a>
    </div>
  </section>
</template>

<script>
import youtubeLightbox from "@/libs/youtubeLightbox/youtubeLightbox";

export default {
  name: "SectionVideo",
  mixins: [youtubeLightbox],
}
</script>

<style lang="scss" scoped>
.video {
  text-align: center;
  position: relative;

  &::after {
    @include decoration("IV");
    line-height: 1.5;
    top: 0;
    left: calc(50% + 555px);
    transform: translateX(-50%);
  }
}

.video__link {
  position: relative;
  display: inline-block;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(36, 43, 51, 0.8);
    transition: background-color .2s ease-in;
  }

  &:hover::before {
    background-color: rgba(36, 43, 51, 0.7);
  }

  &:hover .video__icon {
    transform: translate(-50%, -50%) scale(1.2);
    filter: saturate(1.4);
  }
}

.video__icon {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all .2s ease-in;

  @include mediaTablet {
    width: 80px;
    height: 80px;
  }
}
</style>