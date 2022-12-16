import React from "react";
import renderer from 'react-test-renderer';
import AvalabilityListItem from '../components-info/AvalabilityListItem';
import { useState as useStateMock } from "react";

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
  }))
  
  describe(`Rendering AvalabilityListItem selec = false `, () => {
      const setState = jest.fn()
  
      beforeEach(() => {
        useStateMock.mockImplementation(init => [init, setState])
      })


  
      let itemX = {
        INFO: ""
      };
      let selecX = {
        selec: false
      };


      test('should render AvalabilityListItem', function () {

          let tree = renderer.create(<AvalabilityListItem t={key => key} item={itemX} selec={selecX}/>);
          expect(tree.toJSON()).toMatchSnapshot();
      });
  
      it('AvalabilityListItem state', () => {
        
        let tree = renderer.create(
          <AvalabilityListItem t={key => key} item={itemX} selec={selecX} />
        )
        expect(setState).toHaveBeenCalledTimes(0)
        expect(tree).toBeTruthy()
       
      })
  })



  describe(`Rendering AvalabilityListItem selec = true `, () => {
    const setState = jest.fn()

    beforeEach(() => {
      useStateMock.mockImplementation(init => [init, setState])
    })



    let itemX = {
      INFO: ""
    };
    let selecX = {
      selec: true
    };


    test('should render AvalabilityListItem', function () {

        let tree = renderer.create(<AvalabilityListItem t={key => key} item={itemX} selec={selecX}/>);
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('AvalabilityListItem state', () => {
      
      let tree = renderer.create(
        <AvalabilityListItem t={key => key} item={itemX} selec={selecX} />
      )
      expect(setState).toHaveBeenCalledTimes(0)
      expect(tree).toBeTruthy()
     
    })
})
