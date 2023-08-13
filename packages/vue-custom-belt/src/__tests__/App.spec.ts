import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import FlagBelts from '../components/test//FlagBelts.vue';
import IBJJFBeltsAll from '../components/test/IBJJFBeltsAll.vue';
import IBJJFBeltsRotating from '../components/test/IBJJFBeltsRotating.vue';

describe('FlagBelts', () => {
  it('renders properly', async () => {
    const wrapper = mount(FlagBelts, {});
    expect(wrapper.html()).toMatchSnapshot();
  });
});

describe('IBJJFBeltsRotating', () => {
  it('renders properly', async () => {
    const wrapper = mount(IBJJFBeltsRotating, {});
    expect(wrapper.html()).toMatchSnapshot();
  });
});

describe('IBJJFBeltsAll', () => {
  it('renders properly', async () => {
    const wrapper = mount(IBJJFBeltsAll, {});
    expect(wrapper.html()).toMatchSnapshot();
  });
});
