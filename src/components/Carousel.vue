<!-- <template>
  <div class="carousel">
    <slot :currentSlide="currentSlide" />

    <!-- Navigation -->
<div v-if="navEnabled" class="navigate">
      <div class="toggle-page left">
        <i @click="prevSlide" class="fas fa-chevron-left"></i>
      </div>
<div class="toggle-page right">
        <i @click="nextSlide" class="fas fa-chevron-right"></i>
      </div>
    </div>

    <!-- Pagination -->
<div v-if="pagintationEnabled" class="pagination">
      <span @click="goToSlide(index)" v-for="(slide, index) in getSlideCount" :key="index"
        :class="{ active: index + 1 === currentSlide }">
      </span>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  props: ["startAutoPlay", "timeout", "navigation", "pagination"],
  setup(props) {
    const currentSlide = ref(1);
    const getSlideCount = ref(null);
    const autoPlayEnabled = ref(
      props.startAutoPlay === undefined ? true : props.startAutoPlay
    );
    const timeoutDuration = ref(props.timeout === undefined ? 5000 : props.timeout);
    const pagintationEnabled = ref(
      props.pagination === undefined ? true : props.pagination
    );
    const navEnabled = ref(props.navigation === undefined ? true : props.navigation);

    // next slide
    const nextSlide = () => {
      if (currentSlide.value === getSlideCount.value) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value += 1;
    };

    // prev slide
    const prevSlide = () => {
      if (currentSlide.value === 1) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value -= 1;
    };

    const goToSlide = (index) => {
      currentSlide.value = index + 1;
    };

    // autoplay
    const autoPlay = () => {
      setInterval(() => {
        nextSlide();
      }, timeoutDuration.value);
    };

    if (autoPlayEnabled.value) {
      autoPlay();
    }

    onMounted(() => {
      getSlideCount.value = document.querySelectorAll(".slide").length;
    });

    return {
      currentSlide,
      nextSlide,
      prevSlide,
      getSlideCount,
      goToSlide,
      pagintationEnabled,
      navEnabled,
    };
  },
};
</script> -->