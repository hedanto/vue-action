import Layout from './layout.vue';
import ContentBox from './content-box.vue';
import ContentBoxBlock from './content-box-block.vue';
import ContentBoxTitle from './content-box-title.vue';
import ContentBoxToolbar from './content-box-toolbar.vue';
import ContentBoxCard from './content-box-card.vue';

Layout.install = function (Vue) {
  Vue.component(Layout.name, Layout);
  Vue.component(ContentBox.name, ContentBox);
  Vue.component(ContentBoxBlock.name, ContentBoxBlock);
  Vue.component(ContentBoxTitle.name, ContentBoxTitle);
  Vue.component(ContentBoxToolbar.name, ContentBoxToolbar);
  Vue.component(ContentBoxCard.name, ContentBoxCard);
};

export default {
  Layout,
  ContentBox,
  ContentBoxBlock,
  ContentBoxTitle,
  ContentBoxToolbar,
  ContentBoxCard
};
