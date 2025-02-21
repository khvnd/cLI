<template>
    <div>
    <ProjectArtBanner />
    <ProjectArticle :id="id"/>
</div>
</template>

<script>
import ProjectArtBanner from '@/components/ProjectArtBanner.vue';
import ProjectArticle from '@/components/ProjectArticle.vue';


export default {
      name: 'ProjectArticPage',
      components: {
       ProjectArtBanner,
       ProjectArticle
      },
      props: {
        id: {
      type:[String, Number],
      required: true
    }
  }
    }
</script>