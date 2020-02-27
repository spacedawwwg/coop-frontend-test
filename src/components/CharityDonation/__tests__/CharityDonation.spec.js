import { shallowMount } from '@vue/test-utils';
import axios from 'axios';
import donationDataFixture from '../__fixtures__/donation-data.fixture';
import CharityDonation from '../CharityDonation.vue';

const MockAdapter = require('axios-mock-adapter');
const mock = new MockAdapter(axios);
const defaultProps = {
  title: 'test title',
  charity: 'test charity'
};

const shallowMountComponent = options =>
  shallowMount(CharityDonation, {
    propsData: defaultProps,
    ...options
  });

describe('CharityDonation', () => {
  afterAll(() => {
    mock.restore();
  });

  beforeEach(() => {
    mock.reset();
    mock
      .onGet('https://coop-mock-test-api.herokuapp.com/')
      .reply(200, donationDataFixture);
  });

  test('gets donation data', async () => {
    const wrapper = shallowMountComponent();
    expect(wrapper.vm.target).toEqual(0);
    expect(wrapper.vm.raised).toEqual(0);
    await wrapper.vm.getData();
    expect(wrapper.vm.target).toEqual(donationDataFixture.target);
    expect(wrapper.vm.raised).toEqual(donationDataFixture.raised);
  });

  it('calls getData on mount', () => {
    const getData = jest.fn();
    const wrapper = shallowMountComponent({
      methods: {
        getData
      }
    });
    expect(wrapper.vm.$el).toBeTruthy();
    expect(getData).toBeCalled();
  });

  test('calculates progress percentage', async () => {
    const wrapper = shallowMountComponent();
    expect(wrapper.vm.progress).toEqual('0%');
    await wrapper.vm.getData();
    expect(wrapper.vm.progress).toEqual('50%');
  });

  test('renders title', () => {
    const wrapper = shallowMountComponent();
    expect(wrapper.vm.$refs.title.textContent).toContain(defaultProps.title);
  });

  test('renders charity', () => {
    const wrapper = shallowMountComponent();
    expect(wrapper.vm.$refs.charity.textContent).toContain(
      defaultProps.charity
    );
  });

  test('renders target', async () => {
    const wrapper = shallowMountComponent();
    await wrapper.vm.getData();
    expect(wrapper.vm.$refs.target.textContent).toContain(
      donationDataFixture.target
    );
  });

  test('renders raised', async () => {
    const wrapper = shallowMountComponent();
    await wrapper.vm.getData();
    expect(wrapper.vm.$refs.raised.textContent).toContain(
      donationDataFixture.raised
    );
  });
});
