import { css } from "styled-components";

export const DeviceSize = {
  mobile: 900,
  tablet: 992,
  laptop: 1324,
  desktop: 2024,
};
export default Object.keys(DeviceSize).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${DeviceSize[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
