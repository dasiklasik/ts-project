import {reducer} from "./UncontrolledAccordion";

test('reducer in uncontrolled accordion should change value', () => {
    const state = {
        open: false
    }

    const endState = reducer(state, {type: 'SET-OPEN',})

    expect(endState.open).toBe(true)
})