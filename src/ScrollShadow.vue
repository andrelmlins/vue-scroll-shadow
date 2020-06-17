<template>
  <div :style="styleGeneral" aria-label="container-scroll">
    <div
      aria-label="subcontainer-scroll"
      ref="component"
      class="subcontainer"
      :style="styleSubcontainer"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import ResizeObserver from 'resize-observer-polyfill';

export default {
  name: 'ScrollShadow',
  data() {
    let styleGeneral = this.styleContainer;
    styleGeneral += `--scrollColor:${this.scrollColor};`;
    styleGeneral += `--shadow:${this.shadow};`;
    styleGeneral += `--scrollPadding:${this.scrollPadding};`;
    styleGeneral += `--scrollWidth:${this.scrollWidth};`;
    styleGeneral += `--scrollColorHover:${this.scrollColorHover}`;

    return {
      scroll: false,
      component: null,
      RO: null,
      styleGeneral
    };
  },
  props: {
    styleContainer: { type: String, default: '' },
    styleSubcontainer: { type: String, default: '' },
    scrollColor: { type: String, default: '#c5c5c5' },
    scrollPadding: { type: String, default: '0px' },
    scrollWidth: { type: String, default: '8px' },
    scrollColorHover: { type: String, default: '#a6a6a6' },
    shadow: {
      type: String,
      default:
        '0 2px 4px rgba(0, 0, 0, 0.2) inset, 0 -2px 4px rgba(0, 0, 0, 0.2) inset'
    },
    isShadow: { type: Boolean, default: false }
  },
  mounted() {
    const refComponent = this.$refs.component;

    const RO = new ResizeObserver(() => {
      if (refComponent.clientHeight < refComponent.scrollHeight) {
        scroll = true;
      } else {
        scroll = false;
      }
    });

    RO.observe(refComponent);
  }
};
</script>

<style scoped>
.containerScroll {
  box-shadow: var(--shadow);
}
.container {
  width: 100%;
  overflow-y: hidden;
  box-sizing: border-box;
  display: flex;
}
.subcontainer {
  padding-right: var(--scrollPadding);
  overflow-y: auto;
  flex: 1;
  scrollbar-color: var(--scrollColor);
  scrollbar-width: thin;
}
.subcontainer::-webkit-scrollbar {
  width: var(--scrollWidth);
  background: transparent;
}
.subcontainer::-webkit-scrollbar-track {
  background: 'transparent';
}
.subcontainer::-webkit-scrollbar-thumb {
  background: var(--scrollColor);
  border-radius: 5px;
  overflow: hidden;
}
.subcontainer::-webkit-scrollbar-thumb:hover {
  background: var(--scrollColorHover);
}
</style>
