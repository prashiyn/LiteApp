/**
 *
 * Copyright 2018 iQIYI.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */


import { extend } from './util/util';

import QYInput from './webview/QYInput.vue';
import QYVideo from './webview/QYVideo.vue';
import QYSwiped from './webview/QYSwiped.vue';
import QYSwipedGroup from './webview/QYSwipedGroup.vue';
import QYListview from './webview/QYListView/listview.vue';
import QYListblock from './webview/QYListView/listblock.vue';
import QYScrollView from './webview/QYScrollView.vue';
import QYSwiper from './webview/QYSwiper.vue';
import QYSwiperItem from './webview/QYSwiperItem.vue';

import QYSwipedGroup_webview from './webview/QYSwipedGroup.webview';
import QYSwiper_webview from './webview/QYSwiper.webview';
import QYListview_webview from './webview/QYListview/listview.webview';

Vue.component('qy-swiped',QYSwiped);
Vue.component('qy-swipedgroup',QYSwipedGroup);
Vue.component('qy-listview',QYListview);
Vue.component('qy-listblock',QYListblock);
Vue.component('qy-input',QYInput);
Vue.component('qy-video',QYVideo);
Vue.component('qy-scrollview',QYScrollView);
Vue.component('qy-swiper',QYSwiper);
Vue.component('qy-swiper-item',QYSwiperItem);

window.__webview__ = window.__webview__ || {};
window.__webview__.component = {};

[QYSwipedGroup_webview,QYSwiper_webview,QYListview_webview].map(v=>{
  extend(window.__webview__.component,v);
})



