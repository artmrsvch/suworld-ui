import React from 'react';
import { InputState } from 'react-input-mask';
import { AntInputMask } from './InputMask';

interface InputStateEnteredString extends InputState {
  enteredString?: string;
}

interface BeforeMaskedStateChangeStates {
  previousState?: InputState;
  currentState?: InputState;
  nextState: InputStateEnteredString;
}

export const PhoneInput: React.FC = (props) => {
  const validatorPhone = (state: BeforeMaskedStateChangeStates): InputState => {
    if (state?.nextState?.enteredString) {
      const result = state.nextState.enteredString;
      if (state.nextState?.enteredString[0] === '8') {
        return {
          value: result.replace('8', '+7'),
          selection: { start: 12, end: 12 },
        };
      }
      if (state.nextState?.enteredString[0] === '+') {
        return {
          value: result,
          selection: { start: 12, end: 12 },
        };
      }
    }

    return state.nextState;
  };

  return (
    <AntInputMask
      mask="+7 (999) 999-99-99"
      placeholder="+7 (___) ___-__-__"
      beforeMaskedStateChange={validatorPhone}
      {...props}
    />
  );
};
