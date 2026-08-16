import { useEffect, useState } from "react";
import { FiPlus, FiX, FiCheck } from "react-icons/fi";
import { useLanguage } from "../../i18n";

import {
  Overlay,
  Modal,
  ModalHeader,
  Title,
  CloseButton,
  Description,
  ColorsList,
  ColorRow,
  ColorPicker,
  ColorInput,
  HexInput,
  PercentageWrapper,
  PercentageInput,
  PercentageSymbol,
  RemoveButton,
  AddColorButton,
  Presets,
  PresetButton,
  PresetSwatches,
  PresetSwatch,
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

const THEME_PRESETS = [
  { name: "default", colors: DEFAULT_COLORS },
  { name: "Sunset", colors: [{ id: 1, color: "#FFD6A5", percentage: 55 }, { id: 2, color: "#FF9E80", percentage: 45 }] },
  { name: "Ocean", colors: [{ id: 1, color: "#BDE0FE", percentage: 60 }, { id: 2, color: "#CDB4DB", percentage: 40 }] },
  { name: "Nature", colors: [{ id: 1, color: "#D8F3DC", percentage: 65 }, { id: 2, color: "#B7E4C7", percentage: 35 }] },
];

export default function ThemeCustomizer({
  isOpen,
  onClose,
  onApply,
}) {
  const { t } = useLanguage();
  const [colors, setColors] = useState(
    DEFAULT_COLORS
  );

  const [isDefaultSelected, setIsDefaultSelected] =
    useState(true);

  useEffect(() => {
    if (!isOpen) return;

    const savedTheme =
      localStorage.getItem("weatherTheme");

    if (!savedTheme) {
      setColors(DEFAULT_COLORS);
      setIsDefaultSelected(true);
      return;
    }

    try {
      const parsedTheme = JSON.parse(
        savedTheme
      );

      if (
        Array.isArray(parsedTheme) &&
        parsedTheme.length > 0 &&
        parsedTheme.length <= MAX_COLORS
      ) {
        setColors(parsedTheme);
        setIsDefaultSelected(false);
      } else {
        setColors(DEFAULT_COLORS);
        setIsDefaultSelected(true);
      }
    } catch {
      setColors(DEFAULT_COLORS);
      setIsDefaultSelected(true);
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const totalPercentage = colors.reduce(
    (total, item) =>
      total + Number(item.percentage || 0),
    0
  );

  const isValidHex = (value) => {
    return /^#[0-9A-Fa-f]{6}$/.test(value);
  };

  const handleColorPickerChange = (
    id,
    value
  ) => {
    setIsDefaultSelected(false);

    setColors((prevColors) =>
      prevColors.map((item) =>
        item.id === id
          ? {
              ...item,
              color: value.toUpperCase(),
            }
          : item
      )
    );
  };

  const handleHexChange = (
    id,
    value
  ) => {
    setIsDefaultSelected(false);

    let formattedValue = value;

    if (
      formattedValue.length > 0 &&
      !formattedValue.startsWith("#")
    ) {
      formattedValue =
        "#" + formattedValue;
    }

    formattedValue =
      formattedValue
        .replace(/[^#0-9A-Fa-f]/g, "")
        .slice(0, 7);

    setColors((prevColors) =>
      prevColors.map((item) =>
        item.id === id
          ? {
              ...item,
              color:
                formattedValue.toUpperCase(),
            }
          : item
      )
    );
  };

  const handlePercentageChange = (
    id,
    value
  ) => {
    setIsDefaultSelected(false);

    if (value === "") {
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

    const percentage = Math.max(
      0,
      Math.min(100, Number(value))
    );

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

    setIsDefaultSelected(false);

    setColors((prevColors) => [
      ...prevColors,
      {
        id: Date.now(),
        color: "#FFB36C",
        percentage: 0,
      },
    ]);
  };

  const handleRemoveColor = (id) => {
    if (colors.length === 1) {
      return;
    }

    setIsDefaultSelected(false);

    setColors((prevColors) =>
      prevColors.filter(
        (item) => item.id !== id
      )
    );
  };

  const handlePreset = (preset) => {
    setIsDefaultSelected(false);

    setColors(preset.colors.map((item, index) => ({ ...item, id: Date.now() + index })));
  };

  const handleReset = () => {
    setColors(DEFAULT_COLORS);
    setIsDefaultSelected(true);

    localStorage.removeItem(
      "weatherTheme"
    );

    if (onApply) {
      onApply(null);
    }
  };

  const handleApply = () => {
    if (isDefaultSelected) {
      localStorage.removeItem("weatherTheme");
      onApply?.(null);
      onClose();
      return;
    }

    const allColorsValid = colors.every(
      (item) => isValidHex(item.color)
    );

    if (
      totalPercentage !== 100 ||
      !allColorsValid
    ) {
      return;
    }

    const normalizedColors =
      colors.map((item) => ({
        ...item,
        color: item.color.toUpperCase(),
        percentage: Number(
          item.percentage
        ),
      }));

    localStorage.setItem(
      "weatherTheme",
      JSON.stringify(
        normalizedColors
      )
    );

    if (onApply) {
      onApply(normalizedColors);
    }

    onClose();
  };

  return (
    <Overlay onMouseDown={onClose}>
      <Modal
        onMouseDown={(event) =>
          event.stopPropagation()
        }
      >
        <ModalHeader>
          <Title>
            {t("customizeTitle")}
          </Title>

          <CloseButton
            type="button"
            onClick={onClose}
            aria-label="Close"
          >
            <FiX size={20} />
          </CloseButton>
        </ModalHeader>

        <Description>
          {t("customizeDescription")}
        </Description>

        <Presets aria-label="Theme presets">
          {THEME_PRESETS.map((preset) => (
            <PresetButton
              key={preset.name}
              type="button"
              onClick={() =>
                preset.name === "default"
                  ? handleReset()
                  : handlePreset(preset)
              }
            >
              <PresetSwatches>
                {preset.colors.map((item) => <PresetSwatch key={item.color} $color={item.color} />)}
              </PresetSwatches>
              {preset.name === "default" ? t("default") : preset.name}
            </PresetButton>
          ))}
        </Presets>

        <ColorsList>
          {colors.map((item, index) => (
            <ColorRow key={item.id}>
              <ColorPicker>
                <ColorInput
                  type="color"
                  value={
                    isValidHex(item.color)
                      ? item.color
                      : "#ffffff"
                  }
                  onChange={(event) =>
                    handleColorPickerChange(
                      item.id,
                      event.target.value
                    )
                  }
                  aria-label={`Color ${
                    index + 1
                  }`}
                />
              </ColorPicker>

              <HexInput
                type="text"
                value={item.color}
                onChange={(event) =>
                  handleHexChange(
                    item.id,
                    event.target.value
                  )
                }
                maxLength={7}
                placeholder="#FFFFFF"
                aria-label={`HEX color ${
                  index + 1
                }`}
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
                  aria-label={`Percentage ${
                    index + 1
                  }`}
                />

                <PercentageSymbol>
                  %
                </PercentageSymbol>
              </PercentageWrapper>

              {colors.length > 1 && (
                <RemoveButton
                  type="button"
                  onClick={() =>
                    handleRemoveColor(
                      item.id
                    )
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
            {t("addColor")}
          </AddColorButton>
        )}

        <Footer>
          <Total>
            {t("total")}
            <TotalValue
              $valid={
                totalPercentage === 100 &&
                colors.every((item) =>
                  isValidHex(item.color)
                )
              }
            >
              {totalPercentage}%
            </TotalValue>
          </Total>

          <div>
            <ResetButton
              type="button"
              onClick={handleReset}
            >
              {t("reset")}
            </ResetButton>

            <ApplyButton
              type="button"
              onClick={handleApply}
              disabled={
                totalPercentage !== 100 ||
                !colors.every((item) =>
                  isValidHex(item.color)
                )
              }
            >
              <FiCheck size={17} />
              {t("apply")}
            </ApplyButton>
          </div>
        </Footer>
      </Modal>
    </Overlay>
  );
}
/88888888888888/