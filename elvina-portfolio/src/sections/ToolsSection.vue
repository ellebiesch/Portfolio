<template>
    <section class="h-auto">
        <div class=" mt-[100px] flex flex-row items-center justify-evenly flex-wrap gap-y-7 font-gellix bg-[#fafafa] md:py-20">
            <div class="title flex flex-col flex-wrap justify-center items-center">
                <h1 class="font-extrabold text-[40px]">Tools</h1>
                <p class="label lg:w-[250px] lg:text-left text-black/80 lg:text-xl xs:text-center">My digital sidekicks that make me look like a genius (most of the time)</p>
            </div>
            <div class="wrapper h-auto md:w-[744px]">
                <div class=" grid grid-cols-5 gap-6">
                  <div class="img-wrapper min-h-full">
                    <img v-lazy="figmaImg" class="sm:w-[56px] sm:h-[74px] xs:h-[33px] xs:w-auto" alt="figma logo">
                  </div>
                  <div class="img-wrapper min-h-full">
                    <img v-lazy="adobeXdImg" class="sm:w-[74px] sm:h-[74px] xs:h-[33px] xs:w-[auto]" alt="adobeXD logo">
                  </div>
                  <div class="img-wrapper min-h-full">
                    <img v-lazy="lottieFilesImg" class="sm:w-[74px] sm:h-[74px] xs:h-[33px] xs:w-[auto]" alt="lottiefiles logo">
                  </div>
                  <div class="img-wrapper min-h-full">
                    <img v-lazy="midjourneyImg" class="sm:w-[74px] sm:h-[74px] xs:h-[33px] xs:w-[auto]" alt="midjourney logo">
                  </div>
                  <div class="img-wrapper min-h-full">
                    <img v-lazy="jiraImg" class="sm:w-[74px] sm:h-[74px] xs:h-[33px] xs:w-[auto]" alt="jira logo">
                  </div>
                  <div class="img-wrapper min-h-full">
                    <img v-lazy="confluenceImg" class="sm:w-[74px] sm:h-[74px] xs:h-[33px] xs:w-[auto]" alt="atlassian confluence logo">
                  </div>
                  <div class="img-wrapper min-h-full">
                    <img v-lazy="trelloImg" class="sm:w-[74px] sm:h-[74px] xs:h-[33px] xs:w-[auto]" alt="trello logo">
                  </div>
                  <div class="img-wrapper min-h-full">
                    <img v-lazy="mondayImg" class="sm:w-[74px] sm:h-[74px] xs:h-[33px] xs:w-[auto]" alt="monday.com logo">
                  </div>
                  <div class="img-wrapper min-h-full">
                    <img v-lazy="adobeIllustratorImg" class="sm:w-[74px] sm:h-[74px] xs:h-[33px] xs:w-[auto]" alt="adobe illustrator logo">
                  </div>
                  <div class="img-wrapper min-h-full">
                    <img v-lazy="miroImg" class="sm:w-[74px] sm:h-[74px] xs:h-[33px] xs:w-[auto]" alt="miro logo">
                  </div>


                </div>
            </div>
            
        </div>
    </section>
  </template>
  
<script>
export default {

    //composition api for images
  setup(){
    const figmaImg = new URL('../assets/figma-logo.png', import.meta.url).href
    const adobeXdImg = new URL('../assets/adobe-xd-logo.png', import.meta.url).href
    const lottieFilesImg = new URL('../assets/lottiefiles-logo.png', import.meta.url).href
    const midjourneyImg = new URL('../assets/midjourney-logo.png', import.meta.url).href
    const jiraImg = new URL('../assets/Jira-logo.png', import.meta.url).href
    const confluenceImg = new URL('../assets/confluence-logo.png', import.meta.url).href
    const trelloImg = new URL('../assets/trello-logo.png', import.meta.url).href
    const mondayImg = new URL('../assets/monday-logo.png', import.meta.url).href
    const adobeIllustratorImg = new URL('../assets/adobe-illustrator-logo.png', import.meta.url).href
    const miroImg = new URL('../assets/miro-logo.png', import.meta.url).href
    return {figmaImg, adobeXdImg, lottieFilesImg, midjourneyImg, jiraImg, confluenceImg, trelloImg, mondayImg, adobeIllustratorImg, miroImg};
  }
}
</script>
  
  <style scope></style>
  