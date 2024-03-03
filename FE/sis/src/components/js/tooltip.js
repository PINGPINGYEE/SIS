import { Tooltip } from 'bootstrap';

export const tooltip = {
  mounted(el) {
    new Tooltip(el); // 직접 인스턴스화하지만 변수에 할당하지 않음
  }
};
