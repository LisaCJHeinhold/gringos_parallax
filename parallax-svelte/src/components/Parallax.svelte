<script>
  import { onMount } from 'svelte';

  let scrollY = 0;

  // Update scrollY when the window is scrolled
  window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
  });

  let titleStyle = '';
  let sunStyle = '';

  // Update styles based on scrollY
  $: {
    titleStyle = `top: ${scrollY * 0.75}px`;
    sunStyle = `top: ${scrollY * 0.25}px`;
  }

  // Run onMount to initialize scrollY
  onMount(() => {
    scrollY = window.scrollY;
  });
</script>

<div class="parallax">
  <img id="sun" src="/images/desert-sun.svg" alt="desert sun" style={sunStyle}>
  <img id="back" src="/images/desert-back.svg" alt="desert landscape">
  <img id="back-mid" src="/images/desert-mid2.svg" alt="desert landscape">
  <img id="front-mid" src="/images/desert-mid1.svg" alt="desert landscape">
  <h1 id="title" style={titleStyle}>Gringos Mexican Restaurant</h1>
  <img id="front" src="/images/desert-front.svg" alt="desert landscape">
</div>

<style>

:root {
  --light-tan: #FBDEBF;
  --light-org: #F9C27B;
  --med-org: #F7AF5A;
  --peach: #F4955D;
  --orange: #F26A39;
  --burnt: #D05138;
  --dark-red: #903B37;
  --darkest: #581C17;
}
.parallax {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - (100vw*.05));
  background-image: linear-gradient(#F26A39, #F9C27B) ;
  background-size: 100vh;
  background-position: center center;
  background-attachment: fixed;
  /* overflow: hidden; */
  /* height: 100vh; */
}

.parallax img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  pointer-events: none;
}

#sun {
  /* position: absolute; */
  bottom: 0;
  width: 100%;
  pointer-events: none;
  transform: translateY(-150px);
}

#back, #back-mid, #front-mid, #front {
  /* position: absolute; */
  bottom: 0;
  width: 100%;
  pointer-events: none;
  transform: translateY(-50px);
}

#title {
  position: absolute;
  font-size: 4rem;
  color: white;
  text-shadow: 5px 5px 5px var(--darkest);
  max-width: 80%;
  text-align: center;
  pointer-events: none;
  top: 0;
  transform: translateY(250px);
  /* z-index: 10000; */
}

  @media (max-width:1195px) {
  .parallax {
    min-height: calc(100vh - (100vw * .05));
  }
  }
  @media (max-width:1190px) {
    .parallax {
      min-height: calc(100vh - (100vw * .09));
    }
  }
  @media (max-width:1140px) {
    .parallax {
      min-height: calc(100vh - (100vw * .30));
    }
  }
  @media (max-width:910px) {
    .parallax {
      min-height: calc(100vh - (100vw * .40));
    }
  }
  @media (max-width:830px) {
    .parallax {
      min-height: calc(100vh - (100vw * .53));
    }
  }
  @media (max-width:750px) {
    .parallax {
      min-height: calc(100vh - (100vw * .73));
    }
    #title {
      font-size: 2.5rem;
    }
  }
  @media (max-width:650px) {
    .parallax {
      min-height: calc(100vh - (100vw * .93));
    }
  }
  @media (max-width:575px) {
    .parallax {
      min-height: calc(100vh - (100vw * 1.10));
    }
  }
  @media (max-width:520px) {
    .parallax {
      min-height: calc(100vh - (100vw * 1.3));
    }
  }
  @media (max-width:470px) {
    .parallax {
      min-height: calc(100vh - (100vw * 1.5));
    }
  }
  @media (max-width:430px) {
    .parallax {
      min-height: calc(100vh - (100vw * 1.79));
    }
  }
  @media (min-width:1450px) {
    .parallax {
      min-height: calc(100vh + (100vw * .10));
    }
  }
</style>