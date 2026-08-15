import { useEffect, useState } from "react";
import { FiPlus, FiX, FiCheck } from "react-icons/fi";

import {
  Overlay,
  Modal,
  ModalHeader,
  Title,
  CloseButton,
  Description,
  ColorsList,
  ColorRow,
  ColorPreview,
  ColorInput,
  PercentageWrapper,
  PercentageInput,
  PercentageSymbol,
  RemoveButton,
  AddColorButton,
  Footer,
  Total,
  TotalValue,
  ResetButton,
  ApplyButton,
} from "./ThemeCustomizer.styled";

const MAX_COLORS = 4;

const DEFAULT_COLORS = [
  {
    id: 1,
    color: "#ffffff",
    percentage: 100,
  },
];

export default function ThemeCustomizer({
  isOpen,
  onClose,
  onApply,
}) {
  const [colors, setColors] = useState(DEFAULT_COLORS);

  useEffect(() => {
    if (!isOpen) return;

    const savedTheme = localStorage.getItem("weatherTheme");

    if (!savedTheme) {
      setColors(DEFAULT_COLORS);
      return;
    }

    try {
      const parsedTheme = JSON.parse(savedTheme);

      if (
        Array.isArray(parsedTheme) &&
        parsedTheme.length > 0 &&
        parsedTheme.length <= MAX_COLORS
      ) {
        setColors(parsedTheme);
      } else {
        setColors(DEFAULT_COLORS);
      }
    } catch {
      setColors(DEFAULT_COLORS);
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const totalPercentage = colors.reduce(
    (total, item) => total + Number(item.percentage || 0),
    0
  );

  const handleColorChange = (id, value) => {
    setColors((prevColors) =>
      prevColors.map((item) =>
        item.id === id
          ? {
              ...item,
              color: value,
            }
          : item
      )
    );
  };

  const handlePercentageChange = (id, value) => {
    let percentage = value;

    if (percentage === "") {
      setColors((prevColors) =>
        prevColors.map((item) =>
          item.id === id
            ? {
                ...item,
                percentage: "",
              }
            : item
        )
      );

      return;
    }

    percentage = Math.max(0, Math.min(100, Number(percentage)));

    setColors((prevColors) =>
      prevColors.map((item) =>
        item.id === id
          ? {
              ...item,
              percentage,
            }
          : item
      )
    );
  };

  const handleAddColor = () => {
    if (colors.length >= MAX_COLORS) {
      return;
    }

    setColors((prevColors) => [
      ...prevColors,
      {
        id: Date.now(),
        color: "#ffb36c",
        percentage: 0,
      },
    ]);
  };

  const handleRemoveColor = (id) => {
    if (colors.length === 1) {
      return;
    }

    setColors((prevColors) =>
      prevColors.filter((item) => item.id !== id)
    );
  };

  const handleReset = () => {
    setColors(DEFAULT_COLORS);

    localStorage.removeItem("weatherTheme");

    if (onApply) {
      onApply(DEFAULT_COLORS);
    }
  };

  const handleApply = () => {
    if (totalPercentage !== 100) {
      return;
    }

    const normalizedColors = colors.map((item) => ({
      ...item,
      percentage: Number(item.percentage),
    }));

    localStorage.setItem(
      "weatherTheme",
      JSON.stringify(normalizedColors)
    );

    if (onApply) {
      onApply(normalizedColors);
    }

    onClose();
  };

  return (
    <Overlay onMouseDown={onClose}>
      <Modal onMouseDown={(event) => event.stopPropagation()}>
        <ModalHeader>
          <Title>Customize background</Title>

          <CloseButton
            type="button"
            onClick={onClose}
            aria-label="Close"
          >
            <FiX size={20} />
          </CloseButton>
        </ModalHeader>

        <Description>
          Choose up to 4 colors and set their percentage on
          the background.
        </Description>

        <ColorsList>
          {colors.map((item, index) => (
            <ColorRow key={item.id}>
              <ColorPreview
                style={{
                  background: item.color,
                }}
              />

              <ColorInput
                type="color"
                value={item.color}
                onChange={(event) =>
                  handleColorChange(
                    item.id,
                    event.target.value
                  )
                }
                aria-label={`Color ${index + 1}`}
              />

              <PercentageWrapper>
                <PercentageInput
                  type="number"
                  min="0"
                  max="100"
                  value={item.percentage}
                  onChange={(event) =>
                    handlePercentageChange(
                      item.id,
                      event.target.value
                    )
                  }
                  aria-label={`Percentage ${index + 1}`}
                />

                <PercentageSymbol>
                  %
                </PercentageSymbol>
              </PercentageWrapper>

              {colors.length > 1 && (
                <RemoveButton
                  type="button"
                  onClick={() =>
                    handleRemoveColor(item.id)
                  }
                  aria-label="Remove color"
                >
                  <FiX size={17} />
                </RemoveButton>
              )}
            </ColorRow>
          ))}
        </ColorsList>

        {colors.length < MAX_COLORS && (
          <AddColorButton
            type="button"
            onClick={handleAddColor}
          >
            <FiPlus size={18} />
            Add color
          </AddColorButton>
        )}

        <Footer>
          <Total>
            Total:
            <TotalValue
              $valid={totalPercentage === 100}
            >
              {totalPercentage}%
            </TotalValue>
          </Total>

          <div>
            <ResetButton
              type="button"
              onClick={handleReset}
            >
              Reset
            </ResetButton>

            <ApplyButton
              type="button"
              onClick={handleApply}
              disabled={totalPercentage !== 100}
            >
              <FiCheck size={17} />
              Apply
            </ApplyButton>
          </div>
        </Footer>
      </Modal>
    </Overlay>
  );
}