/* eslint-disable no-unused-expressions */
import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import { CirlePlacer } from '../../src/components';
import CircleRenderer from '../../src/components/CircleRenderer';

const adapter = new Adapter();
Enzyme.configure({ adapter });

const degToRad = deg => (deg * Math.PI) / 180;

describe.only('<CircleRenderer /> Component', () => {
  const numChildren = 4;
  let wrapperProps = {
    alpha: 10,
    rotate: 'none',
    startAngle: 0,
    radiusX: 100,
    radiusY: 100,
    padding: '50px 50px'
  };
  let wrapper;
  let children;

  beforeEach('Create component', () => {
    const childArr = Array(numChildren).fill(<p />);
    wrapper = shallow(
      <CircleRenderer {...wrapperProps}>{childArr}</CircleRenderer>
    );
    children = wrapper.find('.circleContainer > p');
  });

  it('renders all children given to it', () => {
    expect(children.length).to.equal(numChildren);
  });

  describe('Circle Styling', () => {
    let rotate1 = [];
    let translate = [];
    let rotate2 = [];

    beforeEach('Extract info from transform', () => {
      rotate1 = [];
      translate = [];
      rotate2 = [];
      children.forEach(child => {
        const regexp = /rotate\(([-\d]+)deg\)\s+translate\((\d+\.?\d*)px\)\s+rotate\(([-\d]+)deg\)/gm;
        const { transform } = child.prop('style');

        const match = regexp.exec(transform);
        if (match !== null) {
          const r1 = Number(match[1]);
          const trans = Number(match[2]);
          const r2 = Number(match[3]);

          rotate1.push(r1);
          translate.push(trans);
          rotate2.push(r2);
        } else {
          rotate1.push(NaN);
          translate.push(NaN);
          rotate2.push(NaN);
        }
      });
    });

    it('places a valid transform on all children', () => {
      for (let i = 0; i < rotate1.length; i++) {
        expect(rotate1[i]).to.not.be.NaN;
        expect(translate[i]).to.not.be.NaN;
        expect(rotate2[i]).to.not.be.NaN;
      }
    });

    it('rotates the child to the correct angle for translation', () => {
      rotate1.forEach((r1, i) =>
        expect(r1).to.equal(wrapperProps.startAngle + wrapperProps.alpha * i)
      );
    });

    it('translate the child to the correct distance', () => {
      translate.forEach((t, i) => {
        const theta = rotate1[i];
        const transX = Math.cos(degToRad(theta)) / wrapperProps.radiusX;
        const transY = Math.sin(degToRad(theta)) / wrapperProps.radiusY;
        const translation = Math.sqrt(1 / (transX ** 2 + transY ** 2));
        expect(t).to.equal(translation);
      });
    });

    it('rotates the child back to normal if `rotate` is set to `none`', () => {
      for (let i = 0; i < rotate2.length; i++) {
        expect(rotate2[i]).to.equal(-rotate1[i]);
      }
    });

    describe("rotate='tangent'", () => {
      const oldProps = wrapperProps;
      before('override wrapperProps', () => {
        wrapperProps = { ...wrapperProps, rotate: 'tangent' };
      });
      after('restore wrapperProps', () => {
        wrapperProps = oldProps;
      });

      it('leaves items rotated', () => {
        rotate2.forEach(r2 => {
          expect(r2).to.equal(wrapperProps.startAngle);
        });
      });
    });
  });
});
