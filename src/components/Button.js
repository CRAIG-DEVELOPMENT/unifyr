import React from "react";
import {
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

const Button = ({
  title,
  onPress,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  fullWidth = false,
  style = {},
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return [styles.primaryButton, styles.primaryText];
      case "secondary":
        return [styles.secondaryButton, styles.secondaryText];
      case "outline":
        return [styles.outlineButton, styles.outlineText];
      default:
        return [styles.primaryButton, styles.primaryText];
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case "sm":
        return styles.smallButton;
      case "md":
        return styles.mediumButton;
      case "lg":
        return styles.largeButton;
      default:
        return styles.mediumButton;
    }
  };

  const buttonStyles = [
    styles.button,
    ...getVariantStyles(),
    getSizeStyles(),
    fullWidth ? styles.fullWidth : styles.autoWidth,
    disabled ? styles.disabled : styles.enabled,
    style,
  ];

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={buttonStyles}
    >
      {loading && (
        <ActivityIndicator
          size="small"
          color={variant === "primary" ? "#FFFFFF" : "#0a153d"}
          style={styles.loadingIcon}
        />
      )}
      <Text style={getVariantStyles()[1]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  primaryButton: {
    backgroundColor: "#0a153d",
  },
  secondaryButton: {
    backgroundColor: "#F7FAFC",
  },
  outlineButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#0a153d",
  },
  primaryText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  secondaryText: {
    color: "#0a153d",
    fontWeight: "bold",
  },
  outlineText: {
    color: "#0a153d",
    fontWeight: "bold",
  },
  smallButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  mediumButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  largeButton: {
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  fullWidth: {
    width: "100%",
  },
  autoWidth: {
    width: "auto",
  },
  disabled: {
    opacity: 0.5,
  },
  enabled: {
    opacity: 1,
  },
  loadingIcon: {
    marginRight: 8,
  },
});

export default Button;
