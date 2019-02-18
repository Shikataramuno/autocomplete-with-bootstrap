export default class OptionItem {
  value: string = '';
  text: string = '';

  constructor(
    value: string,
    text: string,
  ) {
    this.value = value;
    this.text = text;
  }
}
