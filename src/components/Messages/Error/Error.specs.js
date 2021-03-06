import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Error from './';

const { describe, it } = global;

describe('Error', () => {
  const field = {
    message: 'This is the error message'
  };
  let wrapper;

  describe('test elements', () => {
    beforeEach((done) => {
      wrapper = mount(<Error message={field.message} onDismiss={field.onDismiss} />);
      done();
    });

    it('should show error message', () => {
      expect(wrapper.find('.alert').text()).to.contain(field.message);
    });
  });

  describe('test function', () => {
    it('should call onDismiss if alert is closed', () => {
      const onDismiss = sinon.spy();
      wrapper = mount(<Error message={field.message} onDismiss={onDismiss} />);

      wrapper.find('button.close').first().simulate('click');
      expect(onDismiss.calledOnce).to.equal(true);
    });
  });

  describe('test show attr', () => {
    it('should not show anything', () => {
      wrapper = mount(<Error message={field.message} show={false} />);
      expect(wrapper.find('.alert')).to.have.length(0);
    });

    it('should show alert', () => {
      wrapper = mount(<Error message={field.message} show={true} />);
      expect(wrapper.find('.alert')).to.have.length(1);
    });
  });
});
