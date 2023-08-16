import {theme} from './style';

const color = theme.colors;

export const getQualityValueText = (aqi) => {
    if (aqi >= 0 && aqi <= 50) {
      return "Odličan";
    } else if (aqi >= 51 && aqi <= 100) {
      return "Dobar"
    } else if (aqi >= 101 && aqi <= 150) {
      return "Prihvatljiv"
        } else if (aqi >= 151 && aqi <= 200) {
          return "Zagadjen"
        } else if (aqi >= 201 && aqi <= 500) {
      return "Izuzetno zagadjen";
    } else {
      return "Invalid AQI value.";
    }
  }

  export const getIconByQualityValue = (aqi) => {
    if (aqi >= 0 && aqi <= 50) {
      return require("../assets/emoji/emojiOdlican.png");
    } else if (aqi >= 51 && aqi <= 100) {
      return require("../assets/emoji/emojiDobar.png")
    } else if (aqi >= 101 && aqi <= 150) {
      return require("../assets/emoji/emojiPrihvatljiv.png")
        } else if (aqi >= 151 && aqi <= 200) {
          return require("../assets/emoji/emojiZagadjen.png")
        } else if (aqi >= 201 && aqi <= 500) {
      return require("../assets/emoji/emojiIzuzetnoZagadjen.png")
    } else {
      return "Invalid AQI value.";
    }
  }


  export const getColorByQualityValue = (aqi) => {
    if (aqi >= 0 && aqi <= 50) {
      return color.green
    } else if (aqi >= 51 && aqi <= 100) {
      return color.yellow
    } else if (aqi >= 101 && aqi <= 150) {
      return color.orange
        } else if (aqi >= 151 && aqi <= 200) {
          return color.red
        } else if (aqi >= 201 && aqi <= 500) {
      return color.prple
    } else {
      return color.prple
    }
  }