<template>
  <div class="parent-view">
    <label>自動補間サンプル</label>
    <autocomplete
      :option="option"
      :options="options"
      :onChangeEvent=false
      @input="optionSelected">
    </autocomplete>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Autocomplete from './Autocomplete.vue';
import OptionItem from '../models/OptionItem';

@Component({
  components: {
    Autocomplete,
  },
})
export default class ParentView extends Vue {
  name: string = 'ParentView';
  options: OptionItem[] = [];
  option: string = '';

  optionSelected(option: OptionItem): void {
    this.option = option.value;
  }
  created(): void {
    console.log('ParentView creates');
    this.options = [
      new OptionItem('aaaa', 'aaaa'),
      new OptionItem('aabb', 'aabb'),
      new OptionItem('bbaa', 'bbaa'),
      new OptionItem('cccc', 'cccc'),
      new OptionItem('dddd', 'dddd'),
    ];
  }
}
</script>

<style scoped>
.parent-view {
  width: 300px;
  margin-left: 20px;
  text-align: left;
}
</style>
