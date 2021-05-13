export const basic = ({
  tag = 'div',
  attrs,
  props = '',
  children,
}: {
  tag?: string;
  attrs?: string;
  props?: string;
  children?: string;
}): string =>
  `
  const StyledComponent = styled.${tag}${attrs ? `.attrs(${attrs})` : ''}\`\`;
  const func = () => ${
    children
      ? `<StyledComponent ${props}>${children}</StyledComponent>`
      : `<StyledComponent ${props} />`
  };
`;

export const extend = ({
  tag = 'div',
  attrs,
  extendedAttrs,
  props = '',
  children,
}: {
  tag?: string;
  attrs?: string;
  extendedAttrs?: string;
  props?: string;
  children?: string;
}): string =>
  `
  const StyledComponent = styled.${tag}${attrs ? `.attrs(${attrs})` : ''}\`\`;
  const ExtendedComponent = styled(StyledComponent)${
    extendedAttrs ? `.attrs(${extendedAttrs})` : ''
  }\`\`;
  const func = () => ${
    children
      ? `<><ExtendedComponent ${props}>${children}</ExtendedComponent></>`
      : `<><ExtendedComponent ${props ?? ''} /></>`
  };
`;
