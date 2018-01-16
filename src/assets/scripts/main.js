/*!
 *
 *  Web Starter Kit
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
/* eslint-env browser */
(function() {
  'use strict';
  $('.carousel').carousel();
  // Your custom JavaScript goes here
  /*
  * Slider JS
  * */
  var number = 0;
  $('.image-list').on('click',function (event) {
       number = parseInt($(event.target).attr("number"));
      $(".image-justify").eq(0).attr('src','assets/images/'+setImage(number))
  })
  $('.prev-button').on('click',function () {
    number--;
      number < 0 ? number = 4 : false ;
    $(".image-justify").eq(0).attr('src','assets/images/'+setImage(number))
  })
  $('.next-button').on('click',function () {
    number++;
    number > 4 ? number = 0 : false ;
    $(".image-justify").eq(0).attr('src','assets/images/'+setImage(number))
  })
  function setImage(index) {
    var image;
    switch(index) {
      case 0 : image="detail_img_02.jpg"; break;
      case 1 : image="detail_img_03.jpg"; break;
      case 2 : image="detail_img_04.jpg"; break;
      case 3 : image="detail_img_05.jpg"; break;
      case 4 : image="detail_img_06.jpg"; break;
    }
    return image;
  }
})();
(function() {
  var itemList = '.list-item';
  var pageList = '.pagination';
  var pageItem = '<li class="page-item number"><a class="page-link bg-light text-muted" href="javascript:void(0);" data-page="@page">@page</a></li>';
  var limit = 20;
  var current = 1;
  var items = $(itemList).children();
  var pages = Math.ceil(items.length/limit);
  var goTo = function (index) {
    if (index > 0 && index <= pages) {
      current = index;
      index --;
      $(itemList).children().hide();
      $(pageList).find('[aria-label="Previous"]').attr('data-page', current - 1);
      $(pageList).find('[aria-label="Next"]').attr('data-page', current + 1);
      $(pageList).find('[data-page="' + current + '"]').parents('.number.page-item').addClass('active').siblings().removeClass('active');
      var i = 20 * index;
      while (i < 20 * (index + 1)) {
        $(itemList).children().eq(i).show();
        i++;
      }
    }
  };
  var init = function () {
    $(pageList).find('[aria-label="First"]').attr('data-page', current);
    $(pageList).find('[aria-label="Last"]').attr('data-page', pages);
    for (var i = 1; i <= pages; i++) {
      var page = pageItem.replace(/@page/g, i);
      $(pageList).find('li:nth-last-of-type(2)').before(page);
    };
    $(pageList).children().each(function() {
      var $this = $(this).find('.page-link');
      $this.click(function() {
        goTo(parseInt($this.attr('data-page')));
      });
    });
    goTo(current);
  }
  init();
})();
