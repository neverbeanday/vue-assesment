<template>
  <div class="home">
    <Banner/>
    <Login/>
    <div class="home__discover">
      <div class="home-discover-title">
        <img src="../../assets/images/icon-statistics.png" alt="">
        <span>DISCOVER</span>
        <p>BOOKED TOOL</p>
      </div>
      <div class="home-discover-content">
        <div class="home-discover-content-images">
          <img v-if="currentTab == 1" src="../../assets/images/backgroundImage-secondary.jpg" alt="a">
          <img v-if="currentTab == 2" src="../../assets/images/backgroundImage-primary.jpg" alt="b">
          <img v-if="currentTab == 3" src="../../assets/images/backgroundImage-secondary.jpg" alt="c">
          <img v-if="currentTab == 4" src="../../assets/images/backgroundImage-primary.jpg" alt="d">
        </div>
        <div class="home-discover-content-tabs">
          <button @click="selectTab(1)" :class="{ 'active' : currentTab == 1 }">Discover A</button>
          <button @click="selectTab(2)" :class="{ 'active' : currentTab == 2 }">Discover B</button>
          <button @click="selectTab(3)" :class="{ 'active' : currentTab == 3 }">Discover C</button>
          <button @click="selectTab(4)" :class="{ 'active' : currentTab == 4 }">Discover D</button>
        </div>
        <div class="home-discover-content-text">
          <div v-if="currentTab == 1" class="home-discover-content-text-list">
            <p>1..Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vero quo illum porro fugit magnam tempora facere tenetur? Voluptatem placeat vel nemo, possimus obcaecati minima pariatur officia dignissimos voluptate ullam!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vero quo illum porro fugit magnam tempora facere tenetur? Voluptatem placeat vel nemo, possimus obcaecati minima pariatur officia dignissimos voluptate ullam!
            </p>
          </div>
          <div v-if="currentTab == 2" class="home-discover-content-text-list">
            <p>2..Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vero quo illum porro fugit magnam tempora facere tenetur? Voluptatem placeat vel nemo, possimus obcaecati minima pariatur officia dignissimos voluptate ullam!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vero quo illum porro fugit magnam tempora facere tenetur? Voluptatem placeat vel nemo, possimus obcaecati minima pariatur officia dignissimos voluptate ullam!
            </p>
          </div>
          <div v-if="currentTab == 3" class="home-discover-content-text-list">
            <p>3..Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vero quo illum porro fugit magnam tempora facere tenetur? Voluptatem placeat vel nemo, possimus obcaecati minima pariatur officia dignissimos voluptate ullam!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vero quo illum porro fugit magnam tempora facere tenetur? Voluptatem placeat vel nemo, possimus obcaecati minima pariatur officia dignissimos voluptate ullam!
            </p>
          </div>
          <div v-if="currentTab == 4" class="home-discover-content-text-list">
            <p>4..Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vero quo illum porro fugit magnam tempora facere tenetur? Voluptatem placeat vel nemo, possimus obcaecati minima pariatur officia dignissimos voluptate ullam!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vero quo illum porro fugit magnam tempora facere tenetur? Voluptatem placeat vel nemo, possimus obcaecati minima pariatur officia dignissimos voluptate ullam!
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="home__feedback">
      <div class="home-feedback-title">
        <img src="../../assets/images/icon-report.png" alt="">
        <span>Get in touch</span>
        <p>Want to get in touch? We'd love to hear from you. Here's how you can reach us..</p>
      </div>
      <div class="home-feedback-form">
        <div class="home-feedback-form__search">
          <input type="text" placeholder="Search..."/>
        </div>
        <div class="home-feedback-form__content">
          <div class="home-feedback-form-content-maps">
            <Map/>
          </div>
          <div class="home-feedback-form-content-input">
            <div class="home-feedback-form-content-input__list">
              <p>Feedback</p>
              <div class="home-feedback-form-content-input-list-group">
                <input type="text" placeholder="First">
                <input type="text" placeholder="Last">
              </div>
              <input type="email" placeholder="Email">
              <textarea name="" id="" cols="50" rows="50" placeholder="Message"></textarea>
              <button>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Map from '@/components/Map.vue'
import Banner from '@/components/Banner.vue'
import Login from '@/components/Login.vue'

export default {
  name: 'Home',
  components: {
    Map,
    Banner,
    Login
  },
  props: {
    value: String
  },
  data: function() {
    return{
      currentTab: 1
    }
  },
  methods:{
    selectTab(selectedTab){
      this.currentTab = selectedTab
    }
  },
}
</script>

<style src="./style.scss" lang="scss" />