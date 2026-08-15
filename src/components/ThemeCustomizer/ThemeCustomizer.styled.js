import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2000;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 24px;

  background: rgba(17, 17, 17, 0.45);
  backdrop-filter: blur(8px);

  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

export const Modal = styled.div`
  width: 100%;
  max-width: 500px;

  padding: 28px;

  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 24px;

  background: rgba(255, 255, 255, 0.96);

  box-shadow:
    0 25px 70px rgba(0, 0, 0, 0.18),
    0 8px 25px rgba(0, 0, 0, 0.08);

  box-sizing: border-box;

  animation: modalOpen 0.25s ease;

  @keyframes modalOpen {
    from {
      opacity: 0;
      transform: translateY(12px) scale(0.97);
    }

    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;
`;

export const Title = styled.h2`
  margin: 0;

  color: #111111;

  font-size: 22px;
  font-weight: 600;
  line-height: 1.2;
`;

export const CloseButton = styled.button`
  width: 38px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  border: none;
  border-radius: 50%;

  background: #f3f3f3;
  color: #555555;

  cursor: pointer;

  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #ffb36c;
    color: #111111;
    transform: rotate(90deg);
  }

  &:active {
    transform: rotate(90deg) scale(0.95);
  }
`;

export const Description = styled.p`
  margin: 10px 0 24px;

  color: #777777;

  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
`;

export const ColorsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ColorRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  width: 100%;
  min-height: 58px;

  padding: 8px 10px;

  border: 1px solid #eeeeee;
  border-radius: 14px;

  background: #fafafa;

  box-sizing: border-box;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;

  &:focus-within {
    border-color: #ffb36c;
    background: #ffffff;
    box-shadow: 0 0 0 3px rgba(255, 179, 108, 0.12);
  }
`;

export const ColorPicker = styled.div`
  position: relative;

  width: 42px;
  height: 42px;

  flex-shrink: 0;

  border-radius: 10px;

  overflow: hidden;

  cursor: pointer;
`;

export const ColorPreview = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 10px;

  border: 1px solid rgba(0, 0, 0, 0.08);

  box-sizing: border-box;
`;

export const ColorInput = styled.input`
  position: absolute;

  inset: 0;

  width: 100%;
  height: 100%;

  padding: 0;

  border: none;

  background: transparent;

  cursor: pointer;

  opacity: 0;

  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  &::-webkit-color-swatch {
    border: none;
  }

  &::-moz-color-swatch {
    border: none;
  }
`;

export const HexValue = styled.span`
  min-width: 72px;

  color: #666666;

  font-size: 12px;
  font-weight: 600;

  letter-spacing: 0.3px;
`;

export const PercentageWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  margin-left: auto;
`;

export const PercentageInput = styled.input`
  width: 82px;
  height: 40px;

  padding: 0 28px 0 12px;

  border: 1px solid #e6e6e6;
  border-radius: 10px;

  outline: none;

  background: #ffffff;
  color: #111111;

  font-size: 14px;
  font-weight: 500;

  box-sizing: border-box;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:focus {
    border-color: #ffb36c;
    box-shadow: 0 0 0 3px rgba(255, 179, 108, 0.12);
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    margin: 0;
    appearance: none;
  }

  &[type="number"] {
    appearance: textfield;
  }
`;

export const PercentageSymbol = styled.span`
  position: absolute;
  right: 11px;

  color: #888888;

  font-size: 13px;
  font-weight: 500;

  pointer-events: none;
`;

export const RemoveButton = styled.button`
  width: 36px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  border: none;
  border-radius: 10px;

  background: transparent;
  color: #999999;

  cursor: pointer;

  transition:
    background 0.2s ease,
    color 0.2s ease;

  &:hover {
    background: #ffe7e7;
    color: #e05252;
  }
`;

export const AddColorButton = styled.button`
  width: 100%;
  height: 46px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  margin-top: 14px;

  border: 1px dashed #d8d8d8;
  border-radius: 12px;

  background: #ffffff;
  color: #666666;

  font-size: 14px;
  font-weight: 500;

  cursor: pointer;

  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    border-color: #ffb36c;
    background: #fffaf5;
    color: #111111;
  }

  &:active {
    transform: scale(0.99);
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 16px;

  margin-top: 26px;
`;

export const Total = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;

  color: #777777;

  font-size: 14px;
  font-weight: 500;
`;

export const TotalValue = styled.span`
  color: ${({ $valid }) =>
    $valid ? "#4b9b67" : "#e05252"};

  font-weight: 600;
`;

export const ResetButton = styled.button`
  height: 42px;

  padding: 0 16px;

  margin-right: 8px;

  border: none;
  border-radius: 10px;

  background: #f3f3f3;
  color: #555555;

  font-size: 13px;
  font-weight: 500;

  cursor: pointer;

  transition:
    background 0.2s ease,
    color 0.2s ease;

  &:hover {
    background: #e9e9e9;
    color: #111111;
  }
`;

export const ApplyButton = styled.button`
  height: 42px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;

  padding: 0 18px;

  border: none;
  border-radius: 10px;

  background: #ffb36c;
  color: #111111;

  font-size: 13px;
  font-weight: 600;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease,
    opacity 0.2s ease;

  &:hover:not(:disabled) {
    background: #ffa451;
    transform: translateY(-1px);
    box-shadow: 0 5px 16px rgba(255, 179, 108, 0.3);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;