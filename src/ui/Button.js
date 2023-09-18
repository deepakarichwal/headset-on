import { css, styled } from "styled-components";

const sizes = {
  small: css`
    padding: 6px 10px;
    border-radius: 5px;
  `,

  medium: css`
    padding: 10px 25px;
    border-radius: 7px;
  `,

  large: css`
    padding: 13px 35px;
    border-radius: 10px;
    font-size: 0.9rem;
  `,

  full: css`
    width: 100%;
    padding: 10px 35px;
    border-radius: 10px;
    font-size: 0.8rem;
    text-align: center;
  `,
};

const variations = {
  primary: css`
    background-color: var(--color-brand-500);

    &:hover {
      background-color: var(--color-brand-600);
    }
  `,

  success: css`
    background-color: var(--color-success-500);

    &:hover {
      background-color: var(--color-success-600);
    }
  `,

  danger: css`
    background-color: var(--color-danger-500);

    &:hover {
      background-color: var(--color-danger-600);
    }
  `,

  warning: css`
    background-color: var(--color-warning-500);

    &:hover {
      background-color: var(--color-warning-600);
    }
  `,
};

const Button = styled.button`
  width: fit-content;
  border: none;
  color: var(--color-grey-200);
  font-weight: 600;
  /* text-transform: uppercase; */
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: ease-in 0.1s;

  &:hover {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: var(--color-grey-500);

    &:hover {
      background-color: var(--color-grey-500);
    }
  }

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  size: "small",
  variation: "primary",
};

export default Button;
