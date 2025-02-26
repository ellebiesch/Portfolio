<template>
    <section class="h-auto">
        <div class=" mt-[100px] flex flex-row items-center justify-evenly flex-wrap font-gellix bg-[#fafafa] md:py-20">
            <div class="title">
                <h1 class="font-extrabold text-[40px] text-center">Tools</h1>
            </div>
            <div class="wrapper h-auto md:w-[744px]">
                <div class=" grid grid-cols-5 gap-y-7">
                  <div class="img-wrapper min-h-full">
                    <img v-lazy="figmaImg" class="w-[56px] h-[74px]" alt="figma logo">
                  </div>
                  <div class="img-wrapper min-h-full">
                    <img v-lazy="adobeXdImg" class="w-[74px] h-[74px]" alt="adobeXD logo">
                  </div>
                  <div class="img-wrapper min-h-full">
                    <img v-lazy="lottieFilesImg" class="w-[74px] h-[74px]" alt="lottiefiles logo">
                  </div>
                  <div class="img-wrapper min-h-full">
                    <img v-lazy="midjourneyImg" class="w-[74px] h-[74px]" alt="midjourney logo">
                  </div>
                  <div class="img-wrapper min-h-full">
                    <img v-lazy="jiraImg" class="w-[74px] h-[74px]" alt="jira logo">
                  </div>
                  <div class="img-wrapper min-h-full">
                    <img v-lazy="confluenceImg" class="w-[74px] h-[74px]" alt="atlassian confluence logo">
                  </div>
                  <div class="img-wrapper min-h-full">
                    <img v-lazy="trelloImg" class="w-[74px] h-[74px]" alt="trello logo">
                  </div>
                  <div class="img-wrapper min-h-full">
                    <img v-lazy="mondayImg" class="w-[74px] h-[74px]" alt="monday.com logo">
                  </div>
                  <div class="img-wrapper min-h-full">
                    <img v-lazy="adobeIllustratorImg" class="w-[74px] h-[74px]" alt="adobe illustrator logo">
                  </div>
                  <div class="img-wrapper min-h-full">
                    <img v-lazy="miroImg" class="w-[74px] h-[74px]" alt="miro logo">
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
  