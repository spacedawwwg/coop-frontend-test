<template>
  <section class="coop-c-charity-donation" :class="{ 'is-loading': loading }">
    <div class="coop-c-charity-donation__content">
      <header class="coop-c-charity-donation__header">
        <h3 class="coop-c-charity-donation__title" ref="title">
          {{ title }}
        </h3>
        <p class="coop-c-charity-donation__charity" ref="charity">
          {{ charity }}
        </p>
      </header>
      <p class="coop-c-charity-donation__progress">
        <span
          class="coop-c-charity-donation__progress__bar"
          :style="{ width: progress }"
        >
          <span class="coop-u-visuallyhidden">
            Donation progress: {{ progress }}
          </span>
        </span>
      </p>
      <div class="coop-c-charity-donation__raised">
        <h4>
          Raised so far
        </h4>
        <p ref="raised">
          &pound;<ICountUp :endVal="raised" v-bind="countUp" />
        </p>
      </div>
      <div class="coop-c-charity-donation__target">
        <h4>
          Target
        </h4>
        <p ref="target">
          &pound;<ICountUp :endVal="target" v-bind="countUp" />
        </p>
      </div>
      <form class="coop-c-charity-donation__donate">
        <label class="coop-c-charity-donation__donate__label" for="donation">
          Donate to this project
        </label>
        <div class="coop-c-charity-donation__donate__group">
          <div class="coop-c-charity-donation__donate__input-container">
            <span
              class="coop-c-charity-donation__donate__currency"
              aria-label="Currency: GPB"
            >
              &pound;
            </span>
            <input
              class="coop-c-charity-donation__donate__input"
              type="text"
              name="donation"
              id="donation"
              min="0"
              pattern="[0-9]*"
              inputmode="numeric"
              autocomplete="off"
              ref="donation"
              v-model="donation"
              @keydown="isNumber($event)"
            />
          </div>
          <button
            type="submit"
            class="coop-c-charity-donation__donate__btn coop-btn"
          >
            Donate
          </button>
        </div>
      </form>
    </div>
    <p class="coop-c-charity-donation__footer">
      <a href="#" class="coop-c-charity-donation__footer__link">
        Learn more about causes local to you
      </a>
    </p>
  </section>
</template>

<script src="./CharityDonation.js"></script>

<style src="./CharityDonation.css"></style>
