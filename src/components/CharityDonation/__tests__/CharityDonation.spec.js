import { shallowMount } from '@vue/test-utils';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import donationDataFixture from '../__fixtures__/donation-data.fixture';
import CharityDonation from '../CharityDonation.vue';

const mock = new MockAdapter(axios);

const defaultProps = {
  title: 'test title',
  charity: 'test charity',
  countUp: {
    delay: 0,
    options: {
      duration: 0.001
    }
  }
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
    const { vm } = shallowMountComponent();
    expect(vm.target).toEqual(0);
    expect(vm.raised).toEqual(0);
    await vm.getData();
    expect(vm.target).toEqual(donationDataFixture.target);
    expect(vm.raised).toEqual(donationDataFixture.raised);
  });

  it('calls getData on mount', () => {
    const getData = jest.fn();
    const { vm } = shallowMountComponent({
      methods: {
        getData
      }
    });
    expect(vm.$el).toBeTruthy();
    expect(getData).toBeCalled();
  });

  test('calculates progress percentage', async () => {
    const { vm } = shallowMountComponent();
    expect(vm.progress).toEqual('0%');
    await vm.getData();
    expect(vm.progress).toEqual('50%');
  });

  test('renders title', () => {
    const { vm } = shallowMountComponent();
    expect(vm.$refs.title.textContent).toContain(defaultProps.title);
  });

  test('renders charity', () => {
    const { vm } = shallowMountComponent();
    expect(vm.$refs.charity.textContent).toContain(defaultProps.charity);
  });
});
